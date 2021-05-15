<template>
  <div class="contains-form">
    <div class="banner-container">
      <div class="title">ACCEPT A TREE</div>
    </div>
    <div v-if="thankYouMessage" id="thank-you-message">
      <div>Thank you for helping the environment!</div>
      <div>We will contact you back for updates!</div>
      <div id="dismiss-button" @click="thankYouMessage = false">OK</div>
    </div>
    <div>
      <div class="text-container">
        <div class="text">
          If you live in the Edmonton area and are looking for young trees to plant on your property,
          PlantForever is here to help!
        </div>
        <div class="text">
          Each tree requires a minimum donation of $10 to allow us to keep planting.
        </div>
        <div class="text">
          We take a deposit of an additional $5.00 per pot at the meeting, and return them when we get the pots back.
        </div>
        <div class="text">
          The trees are 0.5 to 3 feet in size
        </div>
        <div class="text">
          Please read our <router-link :to="{ name: 'Covid', params: { volunteer: false } }">Covid Policy</router-link> for homeowners (visit our <router-link :to="{ name: 'Covid' }">volunter guidelines</router-link>).
        </div>
      </div>
      <form id="volunteer-form" @submit.prevent="submit">
        <div style="color: red;">* Required</div>
        <div class="row">
          <input v-model="name" type="text" name="name" placeholder="Name" required /><span class="star" style="transform: translateX(-1em);">*</span>
          <input v-model="email" type="text" name="email" placeholder="Email" required /><span class="star" style="transform: translateX(-1em);">*</span>
          <input v-model="phone" type="text" name="phone" placeholder="Phone" />
        </div>
        <div class="text">What type(s) of tree and how many would you like? <span class="star">*</span></div>
        <div class="checkbox-container" required>
          <label><input v-model="preferredList[0]" class="checkbox" type="checkbox" disabled /><span class="checkmark" style="cursor: not-allowed;"></span>Black Cherry<span v-if="preferredList[0]"> X <input v-model="amountList[0]" class="amount" /></span> (unavailable for 2021 season)</label>
          <label><input v-model="preferredList[1]" class="checkbox" type="checkbox" /><span class="checkmark"></span>Colorado Spruce<span v-if="preferredList[1]"> X <input v-model="amountList[1]" class="amount" /></span></label>
          <label><input v-model="preferredList[2]" class="checkbox" type="checkbox" disabled /><span class="checkmark" style="cursor: not-allowed;"></span>Red Maple<span v-if="preferredList[2]"> X <input v-model="amountList[2]" class="amount" /></span> (unavailable for 2021 season)</label>
          <label><input v-model="preferredList[3]" class="checkbox" type="checkbox" /><span class="checkmark"></span>Schubert Chokecherry<span v-if="preferredList[3]"> X <input v-model="amountList[3]" class="amount" /></span></label>
          <input v-model="amountList" type="hidden" name="preferred_task" />
        </div>
        <div class="text">Around which area in Edmonton can you meet up with us? <span class="star">*</span></div>
        <input v-model="meetingAddress" class="short-answer" type="text" name="meetingAddress" placeholder="Area" autocomplete="off" required />
        <div class="text">When do you want to meet up for your tree<span v-if="numberOfTrees > 1">s</span>? <span class="star">*</span></div>
        <input v-model="availability" class="short-answer" type="text" name="availability" placeholder="e.g. In the last 2 weeks of May" autocomplete="off" required />
        <div class="text">At what address will you plant your tree? <span class="star">*</span></div>
        <input v-model="plantingAddress" class="short-answer" type="text" name="plantingAddress" placeholder="Planting address" autocomplete="off" required />
        <div class="text">Any questions or comments?</div>
        <input v-model="comments" class="short-answer" type="text" name="comments" placeholder="Comments" autocomplete="off" />
        <div class="checkbox-container">
          <label><input class="checkbox" type="checkbox" required /><span class="checkmark"></span>I have read and will follow the <router-link :to="{ name: 'Covid', params: { volunteer: false } }">Covid Homeowner/Patron Guidelines</router-link>. <span class="star" style="transform: translateX(-1em);">*</span></label>
        </div>
        <button id="submit-form" class="primary-button" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TreeInPots",
  metaInfo: {
    title: "Accept A Tree",
    meta: [
      { name: "description", content: "Get a free tree of your choice planted in your property and nurture it as it grows. Help the environment as the tree absorbs thousands of pounds of CO2." },
      { name: "keywords", content: "PlantForever, free, tree, plant, organization, backyard, black cherry, colorado spruce, red maple, schubert chokecherry" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org/accept-a-tree/in-pots" }
    ]
  },
  data() {
    return {
      email: "",
      name: "",
      phone: "",
      treeList: ["Black Cherry", "Colorado Spruce", "Red Maple", "Schubert Chokecherry"],
      preferredList: [false, false, false, false],
      amountList: [0, 0, 0, 0],
      preferredTrees: "",
      meetingAddress: "",
      availability: "",
      plantingAddress: "",
      materials: "",
      comments: "",
      thankYouMessage: false
    };
  },
  computed: {
    numberOfTrees() {
      let count = 0;
      for (let index in this.amountList) {
        count += parseInt(this.amountList[index]);
      }
      return count;
    }
  },
  watch: {
    preferredList() {
      for (let index in this.preferredList) {
        if (this.preferredList[index] && !this.amountList[index]) {
          this.$set(this.amountList, index, 1);
        } else if (!this.preferredList[index] && this.amountList[index]) {
          this.$set(this.amountList, index, 0);
        }
      }
    }
  },
  methods: {
    submit() {
      if (this.numberOfTrees > 0) {
        for (let treeIndex = 0; treeIndex < this.treeList.length; treeIndex++) {
          if (this.preferredList[treeIndex]) {
            this.preferredTrees += `${ this.treeList[treeIndex] }(${ this.amountList[treeIndex] })/`;
          }
        }
        this.preferredTrees = this.preferredTrees.slice(0, -1);
        axios.get("https://script.google.com/macros/s/AKfycbyzTMkR2RyjoT2Zunakny-UEspHqGgJLmQSeBu9ykB460EAESK7/exec", {
          params: {
            email: this.email,
            name: this.name,
            phone: this.phone,
            preferred_trees: this.preferredTrees,
            meeting_address: this.meetingAddress,
            availability: this.availability,
            planting_address: this.plantingAddress,
            comments: this.comments
          }
        });
        this.email = this.name = this.phone = this.preferredTrees = this.meetingAddress = this.plantingAddress = this.availability = this.materials = this.comments = "";
        this.preferredList = [false, false, false, false];
        this.amountList = [0, 0, 0, 0];
        this.thankYouMessage = true;
      } else {
        alert("Please select at least one tree");
      }
    }
  }
}
</script>
