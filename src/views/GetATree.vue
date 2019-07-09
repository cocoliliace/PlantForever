<template>
  <div>
    <div class="banner-container">
      <div class="title">GET A TREE</div>
    </div>
    <div v-if="thankYouMessage" id="thank-you-message">
      <div>Thank you for helping the environment!</div>
      <div>We will email you back for updates!</div>
      <div id="dismiss-button" @click="thankYouMessage = false">OK</div>
    </div>
    <div class="text-container">
      <div class="text">
        If you live in the Edmonton area and are looking for young trees to plant on your property,
        PlantForever is here to help!
      </div>
      <div class="text">
      Plantation of up to one tree is free, while each extra tree requires a donation of $10
    </div>
    </div>
    <form id="volunteer-form" @submit.prevent="submit">
      <div style="color: red;">* Required</div>
      <div class="row">
        <input v-model="name" type="text" name="name" placeholder="Name" required /><span class="star" style="transform: translateX(-1em);">*</span>
        <input v-model="email" type="text" name="email" placeholder="Email" required /><span class="star" style="transform: translateX(-1em);">*</span>
        <input v-model="phone" type="text" name="phone" placeholder="Phone" />
      </div>
      <div class="row">
        <input v-model="address" class="short-answer" type="text" name="address" placeholder="Address" style="width: 75vw;" />
        <span class="star">*</span>
      </div>
      <div class="text">What type(s) of tree would you like? <span class="star">*</span></div>
      <div class="checkbox-container" required>
        <label><input v-model="preferredList[0]" class="checkbox" type="checkbox" /><span class="checkmark"></span>Black Cherry<input v-if="preferredList[0]" v-model="amountList[0]" class="amount" /></label>
        <label><input v-model="preferredList[1]" class="checkbox" type="checkbox" /><span class="checkmark"></span>Colorado Spruce<input v-if="preferredList[1]" v-model="amountList[1]" class="amount" /></label>
        <label><input v-model="preferredList[2]" class="checkbox" type="checkbox" /><span class="checkmark"></span>Norway Maple<input v-if="preferredList[2]" v-model="amountList[2]" class="amount" /></label>
        <label><input v-model="preferredList[3]" class="checkbox" type="checkbox" /><span class="checkmark"></span>Red Maple<input v-if="preferredList[3]" v-model="amountList[3]" class="amount" /></label>
        <label><input v-model="preferredList[4]" class="checkbox" type="checkbox" /><span class="checkmark"></span>Schubert Chokecherry<input v-if="preferredList[4]" v-model="amountList[4]" class="amount" /></label>
        <input v-model="amountList" type="hidden" name="preferred_task" />
      </div>
      <div class="text">Are you able to provide any supplies?</div>
      <input v-model="materials" class="short-answer" type="text" name="materials" placeholder="Materials" autocomplete="off" />
      <div class="text">When do you want your tree<span v-if="numberOfTrees > 1">s</span> to be planted? <span class="star">*</span></div>
      <input v-model="availability" class="short-answer" type="text" name="availability" placeholder="Availability" autocomplete="off" required />
      <div class="text">Any questions or comments?</div>
      <input v-model="comments" class="short-answer" type="text" name="comments" placeholder="Comments" autocomplete="off" />
      <button id="submit-form" class="primary-button" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GetATree",
  data() {
    return {
      email: "",
      name: "",
      address: "",
      phone: "",
      treeList: ["Black Cherry", "Colorado Spruce", "Norway Maplpe", "Red Maple", "Schubert Chokecherry"],
      preferredList: [false, false, false, false, false],
      amountList: [0, 0, 0, 0, 0],
      preferredTrees: "",
      availability: "",
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
        for (let treeIndex = 0; treeIndex < 5; treeIndex++) {
          if (this.preferredList[treeIndex]) {
            this.preferredTrees += `${ this.treeList[treeIndex] }(${ this.amountList[treeIndex] })/`;
          }
        }
        this.preferredTrees = this.preferredTrees.slice(0, -1);
        axios.get("https://script.google.com/macros/s/AKfycbw-rxgZ9cs601Y0u8CxnfjCLIR-p7DisgdkMhfn0Q8-L9Q7UpU/exec", {
          params: {
            email: this.email,
            name: this.name,
            address: this.address,
            phone: this.phone,
            preferred_trees: this.preferredTrees,
            availability: this.availability,
            materials: this.materials,
            comments: this.comments
          }
        });
        this.email = this.name = this.address = this.phone = this.preferredTrees = this.availability = this.materials = this.comments = "";
        this.preferredList = [false, false, false, false];
        this.amountList = [0, 0, 0, 0, 0];
        this.thankYouMessage = true;
      } else {
        alert("Please select at least one tree");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text-container {
  margin: 25px 10vw 0 10vw;
}
.text {
  font-size: 18px;
  margin: 15px 5px;
}
form {
  border: 5px $blue double;
  padding: 15px;
  border-radius: 5px;
  margin: 25px 10vw;
  width: calc(80vw - 30px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  input {
    padding: 10px;
    font-size: 24px;
    border: 2px #CCCCCC solid;
    outline-width: 0px;
    transition-duration: 0.3s;
    border-radius: 5px;
    margin-bottom: 15px;
    &.amount {
      font-size: 16px;
      padding: 0px 0px 3px 5px;
      margin-left: 10px;
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
    .checkmark {
      position: absolute;
      margin-left: -40px;
      height: 18px;
      width: 18px;
      background-color: #eeeeee;
      border-radius: 50%;
      box-shadow: inset 0 0 1px $blue;
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
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
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
#thank-you-message {
  position: fixed;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: white;
  background-color: $green;
  border: 10px $blue solid;
  border-radius: 100px;
  padding: 50px;
  width: 60vw;
  left: 50vw;
  transform: translate(-50%, calc(-50% - 100px));
  #dismiss-button {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 5px);
    background-color: #cccccc;
    padding: 20px 50px;
    border: 10px $blue solid;
    border-radius: 100px;
    cursor: pointer;
    &:hover {
      filter: brightness(90%);
    }
  }
}
.primary-button {
  border: none;
  width: 120px;
  height: 50px;
  margin: 25px 0px 5px calc(100% - 120px);
  cursor: pointer;
}
</style>