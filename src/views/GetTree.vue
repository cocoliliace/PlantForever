<template>
  <div class="form-container">
    <div v-if="showPopup" class="popup">
      <div class="popup-box">
        <h3>
          The 2022 planting season is over, but
          we have a new pre-order system to order trees for the upcoming 2023 planting season.
          All registrations submitted in Edmonton now will be considered as pre-orders.
        </h3>
        <div class="buttons">
          <div id="dismiss-button" class="button secondary-button" @click="showPopup = false">Okay!</div>
        </div>
      </div>
      <div class="overlay" @click="showPopup = false"></div>
    </div>
    <div class="banner-container">
      <div class="title">ACCEPT A TREE</div>
    </div>
    <div v-if="thankYouMessage" id="thank-you-message">
      <p>We've received your submission. Please expect a 2 week wait time.</p>
      <p>Thank you for helping the environment!</p>
      <div id="dismiss-button" @click="thankYouMessage = false">OK</div>
    </div>

    <section>
      <p>
        If you live in the Edmonton or Saskatoon area and are looking for young trees to plant on your property,
        PlantForever is here to help!
      </p>

      <p class="checkbox-container">Select your location:
        <label>
          <input v-model="location" class="checkbox" type="radio" value="Edmonton" disabled />
          <span class="checkmark radio"></span>
          Edmonton
        </label>
        <label>
          <input v-model="location" class="checkbox" type="radio" value="Saskatoon" />
          <span class="checkmark radio"></span>
          Saskatoon
        </label>
      </p>

      <p v-if="location" class="checkbox-container">Select an option:
        <label>
          <input v-model="method" class="checkbox" type="radio" value="plant" />
          <span class="checkmark radio"></span>
          We plant at your house
        </label>

        <label>
          <input v-model="method" class="checkbox" type="radio" value="pot" />
          <span class="checkmark radio"></span>
          We give you trees to plant yourself
        </label>
      </p>

      <div v-if="method">
        <p>The current wait time is about 2 weeks</p>
        <p v-if="method === 'plant'">
          The first tree is free.
          Each extra tree requires a minimum donation of $10 to keep us running.
          After the 5th tree, each tree requires a $15 minimum donation
          ($16 if the total order is more than 30 trees).
          We accept donations in the form of cash or <router-link :to="{ name: 'Donate' }">PayPal</router-link>.
        </p>
        <p v-if="method === 'pot'">
          We ask for a minimum donation of $10 per tree to keep us running
          ($9 if the total order is more than 30 trees).
          We take a deposit of an additional $5 per pot at the meeting, and return them when we get the pot back.
          We accept donations in the form of cash or <router-link :to="{ name: 'Donate' }">PayPal</router-link>.
        <p>
        <p v-if="method === 'plant'">Homeowners must provide potting soil.</p>
        <p>The trees are 0.5 to 3 feet in size.</p>
        <p>
          Please read our <router-link :to="{ name: 'Covid', params: { volunteer: false } }">Covid Policy</router-link>
          for homeowners (and feel free to visit our <router-link :to="{ name: 'Covid' }">volunteer guidelines</router-link>).
        </p>
        <p v-if="method === 'plant'">
          It is recommended that you visit
          <a href="http://albertaonecall.com" target="_blank" rel="noopener noreferrer">Call Before You Dig</a>
          to avoid utilities under your home and determine the areas where the planting is possible.
        </p>
      </div>
    </section>

    <form v-if="method" @submit.prevent="submit">
      <fieldset v-if="allowPreorder && location === 'Edmonton'" class="checkbox-container" style="padding: 10px 0;">
        <label style="text-align: center; font-size: 18px;">
          <input v-model="preorder" type="checkbox" class="checkbox" disabled>
          <span class="checkmark" style="border: 1px solid grey" disabled></span>
          This is a pre-order for 2023.
          <router-link :to="{ name: 'PreOrder' }">Learn more</router-link>
        </label>
      </fieldset>

      <div style="color: red;">* Required</div>
      <fieldset>
        <input v-model="name" type="text" name="name" placeholder="Name" required />
        <span class="star" style="transform: translateX(-1em);">*</span>

        <input v-model="email" type="text" name="email" placeholder="Email" required />
        <span class="star" style="transform: translateX(-1em);">*</span>

        <input v-model="phone" type="text" name="phone" placeholder="Phone" />
      </fieldset>

      <fieldset v-if="method === 'plant'">
        <input v-model="address" class="short-answer" type="text" name="address" placeholder="Address" required style="width: 96%;" />
        <span class="star">*</span>
      </fieldset>

      <label v-if="method === 'pot'">At what address will you plant your tree?</label>
      <fieldset v-if="method === 'pot'">
        <input v-model="plantingAddress" class="short-answer" type="text" name="plantingAddress" placeholder="Planting address" autocomplete="off" style="width: 96%;" required />
        <span class="star">*</span>
      </fieldset>

      <label>What type(s) of tree and how many would you like? <span class="star">*</span></label>
      <fieldset class="checkbox-container" required>
        <label v-for="(tree, i) in treeList" v-if="!disabled[i] || location === 'Edmonton'" :key="tree" :style="{ cursor: disabledCss[i] }">
          <input v-model="preferredList[i]" class="checkbox" type="checkbox" :disabled="disabled[i] && !preorder" :style="{ cursor: disabledCss[i] }" />
          <span class="checkmark" :style="{ cursor: disabledCss[i] }"></span>
          {{ tree }}
          <span v-if="preferredList[i]"> X <input v-model="amountList[i]" class="amount" /></span>
          <template v-if="disabled[i] && !preorder">(Out of stock)</template>
        </label>
        <input v-model="amountList" type="hidden" name="preferred_task" />
      </fieldset>

        <label v-if="method === 'plant'">Are you able to provide any supplies?
          <input v-model="materials" class="short-answer" type="text" name="materials" placeholder="e.g. shovel, gloves..." autocomplete="off" />
        </label>

        <label v-if="method === 'pot'">Around which area in {{ location }} can you meet up with us? <span class="star">*</span>
        <input v-model="meetingAddress" class="short-answer" type="text" name="meetingAddress" placeholder="Area" autocomplete="off" required />
      </label>

      <label>When do you want
        <template v-if="method === 'pot'">to meet up for</template>
        your tree<template v-if="numberOfTrees > 1">s</template>?
        (please give us a time at least a week from now for us to plan)
        <span class="star">*</span>
        <input v-model="availability" class="short-answer" type="text" name="availability" placeholder="e.g. In the last 2 weeks of May" autocomplete="off" required />
      </label>

      <label>Any questions or comments?
        <input v-model="comments" class="short-answer" type="text" name="comments" placeholder="Comments" autocomplete="off" />
      </label>

      <fieldset class="checkbox-container">
        <label>
          <input class="checkbox" type="checkbox" required /><span class="checkmark radio"></span>I have read and will follow the
          <router-link :to="{ name: 'Covid', params: { volunteer: false } }">Covid Homeowner/Patron Guidelines</router-link>.
          <span class="star" style="transform: translateX(-1em);">*</span>
        </label>
      </fieldset>

      <button id="submit-form" class="primary-button" type="submit">Submit</button>
    </form>
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
      { name: "keywords", content: "PlantForever, free, tree, plant, organization, backyard, colorado spruce, amur maple, schubert chokecherry, bur oak" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org/accept-a-tree" }
    ]
  },
  data() {
    return {
      method: null,
      location: null,
      email: "",
      name: "",
      phone: "",
      address: "",
      treeList: ["Amur Maple", "Colorado Spruce", "Red Oak", "Schubert Chokecherry"],
      disabledEdmonton: [false, true, false, true],
      disabledSaskatoon: [true, true, false, true],
      preferredList: [false, false, false, false],
      amountList: [0, 0, 0, 0],
      preferredTrees: "",
      meetingAddress: "",
      availability: "",
      plantingAddress: "",
      materials: "",
      comments: "",
      thankYouMessage: false,
      showPopup: false,
      preorder: false,
      allowPreorder: false,
    };
  },
  computed: {
    numberOfTrees() {
      let count = 0;
      for (let index in this.amountList) {
        count += parseInt(this.amountList[index]);
      }
      return count;
    },
    disabled() {
      if (this.location === "Saskatoon") {
        return this.disabledSaskatoon;
      }
      return this.disabledEdmonton;
    },
    disabledCss() {
      return this.disabled.map(d => d && !this.preorder ? "not-allowed" : "pointer");
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
    },
    preorder() {
      if (!this.preorder) {
        this.$set(this.preferredList, 0, false);
        this.$set(this.preferredList, 1, false);
      }
    },
    location() {
      //if (this.location === "Saskatoon") {
      //  this.preorder = false;
      //  this.method = "plant";
      //  this.$set(this.preferredList, 0, false);
      //  this.$set(this.preferredList, 1, false);
      //  this.$set(this.preferredList, 3, false);
      //} else {
      //  //this.preorder = true;
      //}
    },
  },
  methods: {
    submit() {
      if (!this.numberOfTrees) return alert("Please select at least one tree");
      if (this.numberOfTrees < 10 && this.preorder)
        return alert("For pre-orders, we ask that you order a minimum of 10 trees to help us plan ahead. " +
          "Thank you for understanding.");

      for (let treeIndex = 0; treeIndex < this.treeList.length; treeIndex++) {
        if (this.preferredList[treeIndex]) {
          this.preferredTrees += `${ this.treeList[treeIndex] }(${ this.amountList[treeIndex] })/`;
        }
      }
      this.preferredTrees = this.preferredTrees.slice(0, -1);

      let link = "https://script.google.com/macros/s/";
      let params;
      if (this.method === "plant") {
        link += this.location === "Saskatoon" ? "AKfycbylnm9RPsLQwl3LmmWhuIhDjjnZGyVnqMcWjT6bUvtz0WtO8MoyLzAK4pZq3FOGNExB/exec"
          : this.preorder ? "AKfycbxcghJ8vYc0EyjOc1aDsQpCJcV9idgr1GWfh7337jFwvZdN8bq-Ed1ZbOM0zpBJREU0CA/exec"
          : "AKfycbxPVPaPg3U05vj3lTha_oBfL5i8kBpuQa6IXSYJQmgXtDGgSiuFeGY-TfkLdihFL6vA/exec";
        console.log(link);
        params = {
          email: this.email,
          name: this.name,
          phone: this.phone,
          address: this.address,
          preferred_trees: this.preferredTrees,
          availability: this.availability,
          materials: this.materials,
          comments: this.comments
        };
      } else {
        link += this.location === "Saskatoon" ? "AKfycbztbb_tHIcj-8AEa2cTmmb8SBR_SvnuRzXij3gSjgENTZuXZOrfkcwBYCztTWszQRaH/exec"
          : this.preorder ? "AKfycbxE_d5M613F8hHA0bSaQdKXwnn6hl__yWcrtfBxHu2jHK9A6MrtB5mIKTN_Ink3JEa-/exec"
          : "AKfycbzTbg0JUpxgKe3FAYrwN3gfxIykUnMhW7FwnQtaRoq2zhlIEkdPWkd7dEKSoSqTXfNJdA/exec";
        params = {
          email: this.email,
          name: this.name,
          phone: this.phone,
          preferred_trees: this.preferredTrees,
          meeting_address: this.meetingAddress,
          availability: this.availability,
          planting_address: this.plantingAddress,
          comments: this.comments,
        };
      }

      axios.get(link, { params }).then(() => {
        this.email = this.name = this.phone = this.address = this.preferredTrees = this.meetingAddress = this.availability = this.materials = this.comments = "";
        this.preferredList = [false, false, false, false];
        this.amountList = [0, 0, 0, 0];
        this.thankYouMessage = true;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.form-container {
  background-image: url("../assets/background.png");
  background-size: cover;
  background-attachment: fixed;
  padding-bottom: 60px;
  section {
    background: white;
    border: 5px $blue double;
    border-radius: 5px;
    width: calc(80vw - 30px);
    padding: 0 15px;
    margin: 25px 10vw 0 10vw;
    p {
      font-size: 16px;
      margin: 15px 5px;
    }
  }
  form {
    background: white;
    border: 5px $blue double;
    padding: 15px;
    border-radius: 5px;
    margin: 25px 10vw 0 10vw;
    width: calc(80vw - 30px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    label {
      font-size: 16px;
    }
    input {
      padding: 10px;
      font-size: 16px;
      border: 2px #CCCCCC solid;
      outline-width: 0px;
      outline: none;
      transition-duration: 0.3s;
      border-radius: 5px;
      margin-bottom: 15px;
      &.amount {
        font-size: 16px;
        padding: 0px 0px 3px 5px;
        margin-bottom: -5px;
        width: 15px;
        border: none;
        border-bottom: 2px #CCCCCC solid;
        border-radius: 2px;
        &:focus {
          border-bottom: 2px $green solid;
        }
      }
      &:focus:not(.amount) {
        border: 2px $green solid;
      }
    }
    .checkbox-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 5px;
      label {
        padding-left: 47px;
        margin-bottom: 10px;
        font-size: 16px;
      }
      .checkbox {
        position: absolute;
        visibility: hidden;
        &:checked {
          + .checkmark {
            transition-duration: 0.5s;
            background-color: $green;
            &:after {
              display: block;
            }
          }
        }
      }
      .checkmark, .radio {
        position: absolute;
        margin-left: -40px;
        height: 18px;
        width: 18px;
        background-color: #eeeeee;
        border-radius: 5px;
        cursor: pointer;
        &[disabled] {
          cursor: not-allowed;
        }
        &:hover {
          filter: brightness(90%);
        }
        &:after {
          top: 5px;
          left: 5px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: white;
          content: "";
          position: absolute;
          display: none;
        }
      }
      .radio {
        border-radius: 50%;
        box-shadow: inset 0 0 1px $blue;
      }
    }
    fieldset {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 15px 0 0;
      border: none;
      padding: 0;
      input {
        width: 28%;
      }
    }
    .short-answer {
      width: calc(80vw - 24px - 30px);
    }
    .star {
      color: red;
      font-size: 18px;
    }
  }
  .primary-button {
    border: none;
    width: 120px;
    height: 50px;
    margin: 25px 0px 5px calc(50% - 60px);
    cursor: pointer;
  }
}
.checkbox-container {
  display: flex;
  flex-direction: row;
  label {
    padding-left: 35px;
  }
  .checkbox {
    position: absolute;
    visibility: hidden;
    &:checked {
      + .checkmark {
        transition-duration: 0.5s;
        background-color: $green;
        &:after {
          display: block;
        }
      }
    }
  }
  .checkmark, .radio {
    position: absolute;
    margin-left: -25px;
    height: 18px;
    width: 18px;
    background-color: #eee;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      filter: brightness(90%);
    }
    &:after {
      top: 5px;
      left: 5px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
      content: "";
      position: absolute;
      display: none;
    }
  }
  .radio {
    border-radius: 50%;
    box-shadow: inset 0 0 1px $blue;
  }
}

@media (max-width: 1000px) {
  .checkbox-container {
    flex-direction: column;
  }
}
</style>
