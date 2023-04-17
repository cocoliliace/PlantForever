<template>
  <div class="contains-form">
    <div v-if="showPopup" class="popup">
      <div class="popup-box">
        <h3>
          Due to the large amount of registrations this year,
          we are no longer accepting volunteers this season.
          Thank you for your interest!
        </h3>
        <div class="buttons">
          <div id="dismiss-button" class="button secondary-button" @click="showPopup = false">Okay!</div>
        </div>
      </div>
      <div class="overlay" @click="showPopup = false"></div>
    </div>

    <div class="banner-container">
      <div class="title">VOLUNTEER</div>
    </div>

    <div v-if="thankYouMessage" id="thank-you-message">
      <p>We've received your submission and will contact you back shortly</p>
      <p>Thank you for helping the environment!</p>
      <div id="dismiss-button" @click="thankYouMessage = false">OK</div>
    </div>

    <div class="text-container">
      <div class="text">
        Anyone is able to volunteer their time for PlantForever. You could volunteer by planting
        trees, advertising, and/or by helping facilitate the organization. As this is a nonprofit,
        volunteers are the main pillars keeping this organization alive.
      </div>
      <div class="text">
        Most activities do not require skill or materials to bring. For tree planting,
        transportation will be provided to the planting locations.
      </div>
      <div class="text">
        Please read our <router-link :to="{ name: 'Covid' }">Covid Volunteer Guidlines</router-link> before volunteering.
      </div>
      <div class="text">
				Want to do more than basic volunteering? Consider <router-link :to="{ name: 'JoinTeam' }">joining our team</router-link>!
      </div>
    </div>
    <form id="volunteer-form" @submit.prevent="submit">
      <div style="color: red;">* Required</div>
      <div class="row">
        <input v-model="name" type="text" name="name" placeholder="Name" required /><span class="star" style="transform: translateX(-1em);">*</span>
        <input v-model="email" type="text" name="email" placeholder="Email" required /><span class="star" style="transform: translateX(-1em);">*</span>
        <input v-model="phone" type="text" name="phone" placeholder="Phone" />
      </div>
      <div>
        Age: <input id="age" v-model="age" name="age" autocomplete="off" required /><span class="star">*</span>
      </div>

      <label>
        City:
        <select name="city" required>
          <option value="" selected disabled>Select</option>
          <option value="Edmonton">Edmonton</option>
          <option value="Saskatoon">Saskatoon</option>
        </select>
        <span class="star">*</span>
      </label>

      <label class="text">Do you have a preferred task in mind?</label>
      <div class="checkbox-container">
        <label><input v-model="preferredList[0]" class="checkbox" type="checkbox" /><span class="checkmark"></span>Tree planting</label>
        <label><input v-model="preferredList[1]" class="checkbox" type="checkbox" /><span class="checkmark"></span>Advertising (ex. handing out brochures)</label>
        <label><input v-model="preferredList[2]" class="checkbox" type="checkbox" /><span class="checkmark"></span>Providing Transportation (ex. delivering trees)</label>
        <label><input v-model="preferredList[3]" class="checkbox" type="checkbox" /><span class="checkmark"></span>Other: <input v-if="preferredList[3]" id="other-option" v-model="otherOption" placeholder="Please specify" /></label>
        <input v-model="preferredList" type="hidden" name="preferred_task" />
      </div>
      <label class="text">What gardening materials/tools can you bring?</label>
      <input v-model="materials" class="short-answer" type="text" name="materials" placeholder="Materials" autocomplete="off" />
      <label class="text">When are you available to volunteer? <span class="star">*</span></label>
      <input v-model="availability" class="short-answer" type="text" name="availability" placeholder="e.g. In the summer" autocomplete="off" required />
      <label class="text">Any questions or comments? (Any medical concerns?)</label>
      <input v-model="comments" class="short-answer" type="text" name="comments" placeholder="Comments" autocomplete="off" />
      <div class="checkbox-container">
        <label><input class="checkbox" type="checkbox" required /><span class="checkmark radio"></span>I have read and will follow the <router-link :to="{ name: 'Covid' }">Covid Volunteer Guidelines</router-link>. <span class="star" style="transform: translateX(-1em);">*</span></label>
      </div>
      <button id="submit-form" class="primary-button" type="submit" :disabled="close">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Volunteer",
  metaInfo: {
    title: "Volunteer Registration",
    meta: [
      { name: "description", content: "We rely heavily on volunteers's contribution to operate. Volunteering could include planting, organizing trees, advertising, and providing transportation." },
      { name: "keywords", content: "PlantForever, organization, volunteer, experience, climate change, global warming, environment, community, work, help" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org/volunteer-registration" }
    ]
  },
  data() {
    return {
      email: "",
      name: "",
      phone: "",
      age: "",
      city: "",
      taskList: ["Planting", "Advertising", "Transporting", "Other"],
      otherOption: "",
      preferredList: [false, false, false, false],
      preferredTask: "",
      availability: "",
      materials: "",
      comments: "",
      thankYouMessage: false,
      showPopup: false,
      closed: false,
    };
  },
  mounted() {
    document.querySelector("body").addEventListener("keyup", this.hidePopup);
    if (this.closed) {
      document.querySelectorAll("input").forEach(el => {
        el.disabled = true;
        el.style.cursor = "not-allowed";
      });
      document.querySelectorAll("span.checkmark").forEach(el => {
        el.disabled = true;
        el.style.cursor = "not-allowed";
      });
      document.querySelector("#submit-form").style.cursor = "not-allowed";
    }
  },
  beforeDestroy() {
    document.querySelector("body").removeEventListener("keyup", this.hidePopup);
  },
  methods: {
    submit() {
      if (this.age > 3 && this. age < 99) {
        this.taskList[3] = this.otherOption;
        for (let taskIndex = 0; taskIndex < 4; taskIndex++) {
          if (this.preferredList[taskIndex]) {
            this.preferredTask += `${ this.taskList[taskIndex] }/`;
          }
        }
        this.preferredTask = this.preferredTask.slice(0, -1);
        axios.get("https://script.google.com/macros/s/AKfycbz7JuFzZmx2ftVNWFPKoFNnJZAnglTFp-VYV6X8ZlCIvVvOT3XIIfEdIX-Q_OJjdJzY/exec", {
          params: {
            email: this.email,
            name: this.name,
            phone: this.phone,
            age: this.age,
            city: this.city,
            preferred_task: this.preferredTask,
            availability: this.availability,
            materials: this.materials,
            comments: this.comments
          }
        }).then(() => {
          this.email = this.name = this.phone = this.age = this.preferredTask = this.otherOption = this.availability = this.materials = this.comments = this.city = "";
          this.preferredList = [false, false, false, false];
          this.thankYouMessage = true;
        });
      } else {
        alert("Please enter a valid age");
        document.querySelector("#volunteer-form").scrollIntoView({behavior: "smooth"});
        document.querySelector("#age").focus();
      }
    },
    hidePopup(event) {
      if (event.key === "Escape") {
        this.showPopup = false;
        document.querySelector("body").removeEventListener("keyup", this.hidePopup);
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.text-container {
  background: white;
  border: 5px $blue double;
  border-radius: 5px;
  width: calc(80vw - 30px);
  padding: 0 15px;
  margin: 25px 10vw 0 10vw;
}
.text {
  font-size: 16px;
  margin: 15px 5px;
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
  input {
    padding: 10px;
    font-size: 16px;
    border: 2px #CCCCCC solid;
    outline-width: 0px;
    outline: none;
    transition-duration: 0.3s;
    border-radius: 5px;
    margin-bottom: 15px;
    &#age {
      border: none;
      border-bottom: 2px #CCCCCC solid;
      width: 31px;
      &:focus {
        border-bottom: 2px $green solid;
      }
    }
    &.amount, &#other-option {
      font-size: 16px;
      padding: 0px 0px 3px 5px;
      margin-bottom: -5px;
      border: none;
      border-bottom: 2px #CCCCCC solid;
      border-radius: 2px;
      &:focus {
        border-bottom: 2px $green solid;
      }
    }
    &.amount {
      width: 15px;
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
    .checkmark, .radio {
      position: absolute;
      margin-left: -40px;
      height: 18px;
      width: 18px;
      background-color: #eeeeee;
      border-radius: 5px;
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
    .radio {
      border-radius: 50%;
      box-shadow: inset 0 0 1px $blue;
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
.primary-button {
  border: none;
  width: 120px;
  height: 50px;
  margin: 25px 0px 5px calc(50% - 60px);
  cursor: pointer;
}
</style>
