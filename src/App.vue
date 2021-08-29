<template>
  <div id="app">
    <div v-if="showPopup" class="popup">
      <div class="popup-box">
        <h3>Tree registration now open!</h3>
        <div class="buttons">
          <router-link :to="{ name: 'GetTree' }" class="primary-button" @click.native="showPopup = false">Register now!</router-link>
          <div id="dismiss-button" class="button secondary-button" @click="showPopup = false">Dismiss</div>
        </div>
      </div>
      <div class="overlay" @click="showPopup = false"></div>
    </div>

    <header>
      <router-link :to="{ name: 'Home' }">
        <picture>
          <source srcset="@/assets/plantforever.webp" type="image/webp" />
          <source srcset="@/assets/plantforever.jpg" type="image/jpeg" />
          <img src="@/assets/plantforever.jpg" alt="PlantForever" />
        </picture>
      </router-link>
      <div v-if="showNav" id="nav" @click="hideNav">
        <div id="logo-overlay"></div>
        <router-link id="logo-container" :to="{ name: 'Home' }">
          <picture>
            <source srcset="@/assets/icons/logo.webp" type="image/webp" />
            <source srcset="@/assets/icons/logo.jpg" type="image/jpeg" />
            <img id="logo" class="hide" src="@/assets/icons/logo.jpg" alt="PlantForever" />
          </picture>
        </router-link>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <a v-if="hasDropdown" :class="{ 'router-link-exact-active': childIsActive(['/about-us', '/meet-our-team', '/in-the-news']) }">
          <div>About Us</div>
          <div class="dropdown">
            <router-link :to="{ name: 'About' }">What We Do</router-link>
            <router-link :to="{ name: 'InTheNews' }">In the news</router-link>
            <router-link :to="{ name: 'Team' }">Meet Our Team</router-link>
          </div>
        </a>
        <router-link v-if="!hasDropdown" :to="{ name: 'About' }">What We Do</router-link>
        <router-link v-if="!hasDropdown" :to="{ name: 'InTheNews' }">In the news</router-link>
        <router-link v-if="!hasDropdown" :to="{ name: 'Team' }">Meet Our Team</router-link>
        <router-link :to="{ name: 'GetTree' }" :class="{ 'router-link-exact-active': childIsActive(['/accept-a-tree/in-backyard', '/accept-a-tree/in-pots']) }">Accept A Tree</router-link>
        <router-link :to="{ name: 'Volunteer' }">Volunteer</router-link>
        <!-- <router-link :to="{ name: 'Store' }">Store</router-link> -->
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
        <router-link :to="{ name: 'Donate' }">Donate</router-link>
      </div>
      <div v-if="showNav" id="hide-nav" @click="hideNav"></div>
      <img v-if="!showNav" id="nav-activator" src="@/assets/icons/nav.svg" alt="button" @click="showNav = true" />
    </header>

    <main>
      <transition name="fade" mode="out-in" @enter="enter" @afterEnter="afterEnter" @beforeLeave="beforeLeave">
        <router-view />
      </transition>
    </main>

    <footer>
      <div class="column">
        <a href="mailto:plantforever.org@gmail.com" target="_blank" rel="noopener noreferrer">plantforever.org@gmail.com</a>
        <div class="social-media-container">
          <span><a href="https://www.instagram.com/plantforeverorg" target="_blank" rel="noopener noreferrer"><img src="@/assets/icons/instagram.svg" alt="instagram" /></a></span> |
          <span><a href="https://www.facebook.com/PlantForever" target="_blank" rel="noopener noreferrer"><img src="@/assets/icons/facebook.svg" alt="facebook" /></a></span> |
          <span><a href="https://twitter.com/PlantForeverorg" target="_blank" rel="noopener noreferrer"><img src="@/assets/icons/twitter.svg" alt="twitter" /></a></span> |
          <span><a href="https://ca.linkedin.com/company/plantforever" target="_blank" rel="noopener noreferrer"><img src="@/assets/icons/linkedin.svg" alt="linkedin" /></a></span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import ogImage from "./assets/plantforever.jpg";

export default {
  name: "App",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s – PlantForever | Edmonton Nonprofit",
    meta: [
      { property: "og:image", content: `https://www.plantforever.org${ ogImage }` }
    ]
  },
  data() {
    return {
      showNav: true,
      hasDropdown: true,
      previousHeight: 0,
      showPopup: true
    };
  },
  mounted() {
    window.addEventListener("resize", this.hideNav);
    window.addEventListener("scroll", this.scrollEffect);
    this.hideNav();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollEffect);
  },
  methods: {
    enter(element) {
      const { height } = getComputedStyle(element);
      element.style.height = this.previousHeight;
      setTimeout(() => element.style.height = height);
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
    beforeLeave(element) {
      this.previousHeight = getComputedStyle(element).height;
    },
    scrollEffect() {
      if (window.scrollY >= 90 && window.innerWidth > 905) {
        document.querySelector("#logo-overlay").classList.add("hide");
        document.querySelector("#logo").classList.remove("hide");
      } else if (window.innerWidth > 905) {
        document.querySelector("#logo-overlay").classList.remove("hide");
        document.querySelector("#logo").classList.add("hide");
      }
    },
    hideNav() {
      this.showNav = window.innerWidth > 905;
      this.hasDropdown = window.innerWidth > 905;
    },
    childIsActive(input) {
      return input.some((path) => {
        return this.$route.path.indexOf(path) === 0;
      });
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

.fade-enter-active, .fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
::selection {
  background-color: $green;
  color: white;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  .popup-box {
    text-align: center;
    font-size: 28px;
    position: fixed;
    background-color: #ddd7dd;
    width: 540px;
    padding: 0 30px 30px 30px;
    border: 3px solid $blue;
    border-radius: 8px;
    top: 35%;
    left: calc(50% - (600px + 6px)/ 2);
    .buttons {
      width: 450px;
      display: flex;
      margin: auto;
      justify-content: space-around;
      * {
        padding: 5px 8px;
        cursor: pointer;
      }
      #dismiss-button {
        color: $blue;
        border-color: $blue;
        background-image: linear-gradient(to bottom, transparent 50%, white 50%);
        background-size: 100% 200%;
        background-position: 100% 200%;
        &:hover {
          background-position: 100% 100%;
        }
      }
    }
  }
  .overlay {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
  }
}
header {
  background-color: white;
  padding: 20px 10vw 5px 10vw;
  margin-bottom: 20px;
  position: sticky;
  top: -80px;
  z-index: 3;
  img {
    height: 60px;
  }
  #logo-overlay {
    width: 50px;
    height: 50px;
    margin-right: -50px;
    position: relative;
    z-index: 4;
    float: left;
    display: block;
    &.hide {
      display: none;
    }
  }
  #logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    float: left;
    opacity: 100;
    transition-duration: 1s;
    &.hide {
      opacity: 0;
      transition-duration: 0s;
    }
  }
  #nav {
    overflow: hidden;
    a:not(#logo-container) {
      border: none;
      cursor: pointer;
      outline-width: 0px;
      float: left;
      padding: 15px 30px;
      text-decoration: none;
      color: black;
      font-size: 20px;
      font-family: Montserrat;
      transition-duration: 0s;
      user-select: none;
      .dropdown {
        display: none;
        position: absolute;
        background-color: white;
        min-width: 150px;
        margin: 15px 0 0 -30px;
        a {
          float: none;
          display: block;
        }
      }
      &:hover, &.router-link-exact-active {
        transition-duration: 0.3s;
        background-color: $green;
        color: white;
      }
      &:hover {
        .dropdown {
          display: block;
        }
      }
    }
  }
}
#nav-activator {
  top: 10px;
  right: 10px;
  opacity: 0.4;
  position: fixed;
  cursor: pointer;
  z-index: 2;
  width: 50px;
  height: 50px;
  &:hover {
    opacity: 0.9;
  }
}
#hide-nav {
  display: none;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  position: fixed;
}
footer {
  background-color: #2B2B2B;
  height: 50px;
  padding: 20px 20vw 40px 20vw;
  .column {
    float: right;
    color: #ABABAB;
    .social-media-container {
      text-align: right;
      cursor: default;
      margin-top: 15px;
      a {
        padding: 7px 10px;
        transition-duration: 0.2s;
        cursor: pointer;
        border-radius: 5px;
        &:hover {
          background-color: $green;
        }
      }
    }
    a {
      color: #ABABAB;
      text-decoration: none;
      transition-duration: 1s;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

body {
  margin: 0px;
  font-family: Montserrat;
}
a {
  color: $green;
  text-decoration: none;
  text-shadow: 0px 0px 1px #cccccc;
  &:hover {
    text-decoration: underline;
  }
}
.banner-container {
  position: relative;
  text-align: center;
  overflow: hidden;
  height: 320px;
  background-size: cover;
  background-position: center 60px;
  background-repeat: repeat;
  background-attachment: fixed;
  background-image: url("assets/banner.jpg");
  .title {
    width: 100vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    font-size: 70px;
    text-transform: uppercase;
    color: white;
    text-shadow: 5px 5px 5px black;
  }
}
.section {
  margin: auto;
  margin-top: 25px;
  width: 1200px;
  .title-text {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 25px;
  }
  .primary-text {
    font-size: 24px;
    color: #222222;
    margin-bottom: 10px;
  }
  .secondary-text {
    font-size: 16px;
    color: #666666;
    font-family: Open Sans;
    margin-bottom: 20px;
  }
}
.primary-button, .secondary-button {
  outline-width: 0px;
  color: white;
  font-size: 18px;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    text-decoration: none;
  }
}
.primary-button {
  background-color: $green;
  border: 2px $green solid;
  transition-duration: 0.3s;
  &:hover {
    filter: brightness(80%);
  }
}
.secondary-button {
  border: 2px white solid;
  background-image: linear-gradient(to left, transparent 50%, $green 50%);
  background-size: 200% 100%;
  transition-duration: 0.5s;
  background-position: 100% 100%;
  &:hover {
    background-position: 200% 100%;
  }
}

.contains-form {
  background-image: url("assets/background.jpg");
  background-size: contain;
  background-attachment: fixed;
  padding-bottom: 60px;
  .text-container {
    background: white;
    border: 5px $blue double;
    border-radius: 5px;
    width: calc(80vw - 30px);
    padding: 0 15px;
    margin: 25px 10vw 0 10vw;
  }
  .text {
    font-size: 18px;
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
      font-size: 24px;
      border: 2px #CCCCCC solid;
      outline-width: 0px;
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
    font-size: 30px;
    color: white;
    background-color: $green;
    border: 4px $blue solid;
    border-radius: 100px;
    padding: 40px;
    width: 60vw;
    left: 50vw;
    transform: translate(-50%, calc(-50% - 100px));
    z-index: 3;
    #dismiss-button {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 5px);
      background-color: #a0a0a0;
      padding: 20px 50px;
      border: 4px $blue solid;
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
}

@media (max-width: 1205px) {
  header #nav a:not(#logo-container) {
    padding: 15px;
  }
}
@media (max-width: 980px) {
  header #nav a:not(#logo-container) {
    padding: 15px 10px;
  }
}
@media (max-width: 905px) {
  header {
    text-align: center;
    padding: 0;
    top: 0;
    img:not(#nav-activator) {
      padding-top: 5px;
      height: 60px;
    }
    #nav {
      width: 100vw;
      a:not(#logo-container) {
        width: 100%;
        &.router-link-exact-active {
          background-color: white;
          color: black;
        }
        &:hover {
          background-color: $green;
          color: white;
        }
      }
      img {
        display: none;
      }
    }
  }
  #hide-nav {
    display: block;
  }
  .banner-container {
    height: 250px;
    background-size: contain;
  }
}
@media (max-width: 615px) {
  .popup .popup-box {
    font-size: 22px;
    width: 300px;
    left: calc(50% - (300px + 6px)/ 2);
    .buttons {
      width: 200px;
      flex-direction: column;
      #dismiss-button {
        margin-top: 25px;
      }
    }
  }
}
@media (max-width: 320px) {
  header img {
    width: 100vw;
  }
}
</style>
