<template>
  <div class="body">
    <div class="banner-container">
      <img src="@/assets/banner.jpg" class="banner" />
      <div class="title">VOLUNTEER</div>
    </div>
    <div v-if="thankYouMessage" id="thank-you-message">
      <div>Thank you for helping the environment!</div>
      <div>We will email you back for updates on volunteering opportunities!</div>
      <div id="dismiss-button" @click="thankYouMessage = false">OK</div>
    </div>
    <div class="section">
      <div class="text">
        Anyone, regardless of their age, gender, or skill level, is able to volunteer their time to
        the organization. You could volunteer by assisting in planting trees, advertising, and/or by
        helping facilitate the organization. As this is a nonprofit, volunteers are the main pillars
        keeping this organization alive.
      </div>
      <div class="text">
        Most activities do not require skill or materials to bring. For tree plantation,
        transportation will be provided to the planting locations.
      </div>
    </div>
    <form id="volunteer-form" @submit.prevent="submit">
      <div style="color: red;">* Required</div>
      <div class="row">
        <input v-model="name" type="text" name="name" placeholder="Name" required /><span class="star" style="transform: translateX(-1em);">*</span>
        <input v-model="email" type="text" name="email" placeholder="Email" required /><span class="star" style="transform: translateX(-1em);">*</span>
        <input v-model="phone" type="text" name="phone" placeholder="phone" />
      </div>
      <div class="text">Do you have a preferred task in mind?</div>
      <div class="checkbox-container">
        <label><input v-model="preferredList[0]" class="checkbox" type="checkbox" /><span class="checkmark"></span>Tree plantation</label>
        <label><input v-model="preferredList[1]" class="checkbox" type="checkbox" /><span class="checkmark"></span>Advertising (ex. handing out brochures)</label>
        <label><input v-model="preferredList[2]" class="checkbox" type="checkbox" /><span class="checkmark"></span>Providing Transportation (ex. delivering trees)</label>
        <label><input v-model="preferredList[3]" class="checkbox" type="checkbox" /><span class="checkmark"></span>Other: <input v-if="preferredList[3]" id="other-option" v-model="otherOption" placeholder="Please specify" /></label>
        <input v-model="preferredList" type="hidden" name="preferred_task" />
      </div>
      <div class="text">What gardening materials/tools can you bring?</div>
      <input v-model="materials" class="short-answer" type="text" name="materials" placeholder="Materials" autocomplete="off" />
      <div class="text">When are you available to volunteer? <span class="star">*</span></div>
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
  name: "Volunteer",
  data() {
    return {
      email: "",
      name: "",
      phone: "",
      taskList: ["Planting", "Advertising", "Transporting", "Other"],
      otherOption: "",
      preferredList: [false, false, false, false],
      preferredTask: "",
      availability: "",
      materials: "",
      comments: "",
      thankYouMessage: false
    };
  },
  methods: {
    submit() {
      this.taskList[3] = this.otherOption;
      for (let taskIndex = 0; taskIndex < 4; taskIndex++) {
        if (this.preferredList[taskIndex]) {
          this.preferredTask += `${ this.taskList[taskIndex] }/`;
        }
      }
      this.preferredTask = this.preferredTask.slice(0, -1);
      axios.get("https://script.google.com/macros/s/AKfycbztewbGWefJfM0yaQBOKHOhYgmuZgZ1DR8XhkyUHSkavoPCdm8/exec", {
        params: {
          email: this.email,
          name: this.name,
          phone: this.phone,
          preferred_task: this.preferredTask,
          availability: this.availability,
          materials: this.materials,
          comments: this.comments
        }
      });
      this.email = this.name = this.phone = this.preferredTask = this.otherOption = this.availability = this.materials = this.comments = "";
      this.preferredList = [false, false, false, false];
      this.thankYouMessage = true;
    }
  }
}
</script>

<style lang="scss" scoped>
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
    &#other-option {
      font-size: 16px;
      padding: 0px 0px 3px 5px;
      margin-bottom: -5px;
      border: none;
      border-bottom: 2px #CCCCCC solid;
      border-radius: 2px;
    }
    &:focus {
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