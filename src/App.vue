<template>
  <div id="app">
    <header>
      <router-link :to="{ name: 'Home' }"><img src="@/assets/logo.jpg" /></router-link>
      <div id="nav">
        <div id="logo-overlay"></div>
        <router-link id="logo-container" :to="{ name: 'Home' }"><img id="logo" src="@/assets/logo.png" /></router-link>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'About' }">About Us</router-link>
        <router-link :to="{ name: 'Store' }">Get A Tree</router-link>
        <router-link :to="{ name: 'Volunteer' }">Volunteer</router-link>
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
        <router-link :to="{ name: 'Donate' }">Donate</router-link>
      </div>
    </header>

    <transition name="fade" mode="out-in" @enter="enter" @afterEnter="afterEnter" @beforeLeave="beforeLeave">
      <router-view />
    </transition>

    <footer>
      <a href="mailto:plantforever.org@gmail.com">plantforever.org@gmail.com</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      previousHeight: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollEffect);
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
      if (window.scrollY >= 90) {
        document.querySelector("#logo-overlay").style.display = "none";
        document.querySelector("#logo").style.transitionDuration = "1s";
        document.querySelector("#logo").style.opacity = 100;
      } else {
        document.querySelector("#logo-overlay").style.display = "block";
        document.querySelector("#logo").style.transitionDuration = "0s";
        document.querySelector("#logo").style.opacity = 0;
      }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

body {
  margin: 0px;
  font-family: Montserrat;
}
.banner-container {
  position: relative;
  text-align: center;
  .banner {
    width: 100vw;
    filter: brightness(67%);
    user-select: none;
  }
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 700;
    font-size: 70px;
    color: white;
    text-shadow: 5px 5px 5px black;
  }
}
.primary-button, .secondary-button {
  color: white;
  font-size: 18px;
  text-decoration: none;
  padding: 20px 30px;
  border-radius: 5px;
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
  background-image: linear-gradient(to right, transparent 50%, $green 50%);
  background-size: 200% 100%;
  transition-duration: 0.5s;
  &:hover {
    background-position: 100% 100%;
  }
}
.fade-enter-active, .fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}

header {
  background-color: white;
  padding: 20px 10vw 5px 10vw;
  margin-bottom: 20px;
  position: sticky;
  top: -80px;
  z-index: 5;
  img {
    height: 60px;
  }
  #logo-overlay {
    width: 50px;
    height: 50px;
    margin-right: -50px;
    position: relative;
    z-index: 6;
    float: left;
  }
  #logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    opacity: 0;
    float: left;
  }
  #nav {
    overflow: hidden;
    a:not(#logo-container) {
      float: left;
      padding: 15px 40px;
      text-decoration: none;
      color: black;
      font-size: 20px;
      transition-duration: 0s;
      &:hover, &.router-link-exact-active {
        transition-duration: 0.3s;
        background-color: $green;
        color: white;
      }
    }
  }
}
footer {
  background-color: #2B2B2B;
  height: 50px;
  padding: 20px 20vw;
  a {
    float: right;
    color: #ABABAB;
    text-decoration: none;
    transition-duration: 1s;
    &:hover {
      text-decoration: underline;
    }
  }
}

.section {
  margin: 0vw 10vw 25px 10vw;
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
    color: #666666;
    font-family: Open Sans;
    margin-bottom: 20px;
  }
}
</style>