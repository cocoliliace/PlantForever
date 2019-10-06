<template>
  <div>
    <div class="carousel">
      <figure class="carousel-img">
        <img src="@/assets/carousel.webp" alt="marmik planting" />
      </figure>
      <div class="text-container">
        <div class="primary-text">We are PlantForever</div>
        <div class="secondary-text">Free tree planting</div>
        <div class="button-container">
          <router-link :to="{ name: 'Tree' }" class="primary-button">Accept A Tree</router-link>
          <router-link :to="{ name: 'Donate' }" class="secondary-button">Donate Funds</router-link>
        </div>
      </div>
    </div>
    <div class="about-us-images">
      <img src="@/assets/left.webp" alt="plantforever members" />
      <img src="@/assets/right.webp" alt="plantforever transplanting trees" />
      <div id="left" class="text-container">
        <div class="primary-text">WHAT IS PLANTFOREVER</div>
        <div class="secondary-text">
          PlantForever is a nonprofit organization that develops urban forests through
          house-to-house tree plantation in order to fight climate change.
        </div>
        <div class="button-container">
          <router-link :to="{ name: 'About' }" class="primary-button">Learn More</router-link>
          <router-link :to="{ name: 'Tree' }" class="secondary-button">Want A Tree?</router-link>
        </div>
      </div>
      <div id="right" class="text-container">
        <div class="primary-text">WHY DO WE PLANT TREES</div>
        <div class="secondary-text">
          PlantForever plants trees in order to combat the climate crisis and spread awareness.
        </div>
        <div class="button-container">
          <router-link :to="{ name: 'About' }" class="primary-button">Learn More</router-link>
          <router-link :to="{ name: 'Donate' }" class="secondary-button">Support Us</router-link>
        </div>
      </div>
    </div>
    <div id="ways-to-help" class="section">
      <div class="title">
        <img src="@/assets/icons/logo.webp" alt="PlantForever" class="title-logo" />
        <div class="title-text">
          <div>HOW YOU CAN</div>
          <div style="color: #00A849;">HELP US</div>
        </div>
      </div>
      <img class="image" src="@/assets/ways-to-help.webp" alt="how you can help PlantForever" />
      <div class="primary-text">There are various ways to support PlantForever and the environment:</div>
      <div class="button-container">
        <div :class="{ checked: checkedButton === 0 }" class="button" @click="checkedButton = 0">DONATE</div>
        <div :class="{ checked: checkedButton === 1 }" class="button" @click="checkedButton = 1">ACCEPT A TREE</div>
        <div :class="{ checked: checkedButton === 2 }" class="button" @click="checkedButton = 2">VOLUNTEER</div>
        <div :class="{ checked: checkedButton === 3 }" class="button" @click="checkedButton = 3">RAISE AWARENESS</div>
        <div :class="{ checked: checkedButton === 4 }" class="button" @click="checkedButton = 4">OTHERS</div>
      </div>
      <div class="secondary-text" style="display: table;">
        <div v-if="checkedButton === 0">
          A meaningful way to support PlantForever is by contributing funds or supplies. Donating a
          coffee’s worth of money significantly assists PlantForever in planting trees and spreading
          awareness about the climate crisis. As PlantForever is a nonprofit, 100% of all donations
          go towards the organization (staff nor volunteers get paid). If you would like to support
          us, click <router-link :to="{ name: 'Donate' }">here</router-link>.
        </div>
        <div v-else-if="checkedButton === 1">
          By <router-link :to="{ name: 'Tree' }">accepting a tree</router-link>, you contribute to
          developing urban forests and fighting the climate crisis!
        </div>
        <div v-else-if="checkedButton === 2">
          As a nonprofit, PlantForever relies fully on volunteers to operate. Volunteering could
          include planting trees, raising awareness, providing transportation, and/or assisting with
          other daily-tasks. If you would like to volunteer, click
          <router-link :to="{ name: 'Volunteer' }">here</router-link>.
        </div>
        <div v-else-if="checkedButton === 3">
          An outstanding way to create positive change is by raising awareness. Let family, friends,
          and colleagues know about what PlantForever is doing to combat climate change and how they
          can help PlantForever achieve their green goals.
        </div>
        <div v-else>
          Takes matters into your own hands by creating positive changes in your lifestyle.
          Understand how you can reduce your carbon footprint and inspire others to do the same.
        </div>
      </div>
    </div>
    <div id="map" class="section">
      <div class="title">
        <img src="@/assets/icons/logo.webp" alt="PlantForever" class="title-logo" />
        <div class="title-text">
          <div>WHERE WE HAVE</div>
          <div style="color: #00A849;">PLANTED</div>
        </div>
      </div>
      <div class="map-overlay" onclick="style.pointerEvents='none'" onmouseout="style.pointerEvents='auto'"></div>
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1IgqVX0wBEh2xW_VrB1QINeqhGNgE0pqT" frameborder="0"></iframe>
    </div>
    <div class="section">
      <div class="title">
        <img src="@/assets/icons/logo.webp" alt="PlantForever" class="title-logo" />
        <div class="title-text">
          <div>OUR</div>
          <div style="color: #00A849;">SUPPORTERS</div>
        </div>
      </div>
      <div class="sponsor-container">
        <a href="https://www.boosterjuice.com" target="_blank" rel="noopener noreferrer"><img class="sponsor-img" src="@/assets/supporters/booster-juice.webp" alt="booster juice" /></a>
        <a href="https://infokidz.ca" target="_blank" rel="noopener noreferrer"><img class="sponsor-img" src="@/assets/supporters/infokidz.webp" alt="infokidz" /></a>
        <a href="https://www.simply-health.ca" target="_blank" rel="noopener noreferrer"><img class="sponsor-img" src="@/assets/supporters/simply-health.webp" alt="simply health" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: "Home",
    meta: [
      { name: "description", content: "We are a nonprofit organization that develops urban forests through house-to-house tree plantation in order to combat climate crisis and spread awareness." },
      { name: "keywords", content: "PlantForever, Alberta, climate change, Edmonton, environment, free, global warming, organization, tree" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org" }
    ]
  },
  data() {
    return {
      checkedButton: 0
    };
  },
  mounted() {
    this.aboutUsAnimation();
    window.addEventListener("scroll", this.aboutUsAnimation);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.aboutUsAnimation);
  },
  methods: {
    aboutUsAnimation() {
      if (window.scrollY > 300) {
        document.querySelector("#left").classList.add("slided");
        document.querySelector("#right").classList.add("slided");
        window.removeEventListener("scroll", this.aboutUsAnimation);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

.carousel {
  position: relative;
  margin-bottom: 75px;
  .carousel-img {
    margin: 0;
    background-image: url("../assets/carousel.webp");
    background-size: contain;
    background-position: 0 63px;
    background-attachment: fixed;
    filter: brightness(80%);
    img {
      visibility: hidden;
      width: 100%;
      margin-top: -104px;
    }
  }
  .text-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-80%, -50%);
    .primary-text {
      color: white;
      font-size: 60px;
      font-weight: 700;
      text-shadow: 5px 5px 10px black;
    }
    .secondary-text {
      color: white;
      font-size: 50px;
      text-shadow: 5px 5px 10px black;
    }
    .button-container {
      display: flex;
      margin-top: 40px;
      width: 420px;
      justify-content: space-between;
      .primary-button, .secondary-button {
        padding: 20px 30px;
      }
    }
  }
}
.about-us-images {
  position: relative;
  height: 350px;
  overflow: hidden;
  margin-bottom: 90px;
  img {
    vertical-align: middle;
    transform: translateY(-15%);
    filter: brightness(50%);
    width: 50%;
    display: inline;
  }
  .text-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 540px;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.45, 0.85, 0.7, 1.1);
    &#left {
      transform: translate(-100vw, -50%);
      &.slided {
        transform: translate(-115%, -50%);
      }
      .secondary-button {
        background-position: 100% 100%;
        &:hover {
          background-position: 0% 100%;
        }
      }
    }
    &#right {
      transform: translate(100vw, -50%);
      &.slided {
        transform: translate(20%, -50%);
      }
    }
    .primary-text {
      color: white;
      font-size: 36px;
      font-weight: 700;
      text-shadow: 5px 5px 10px black;
    }
    .secondary-text {
      margin-top: 1em;
      font-family: Open Sans;
      color: white;
      font-size: 16px;
      text-shadow: 5px 5px 10px black;
    }
    .button-container {
      display: flex;
      margin-top: 25px;
      width: 80%;
      justify-content: space-between;
      .primary-button, .secondary-button {
        padding: 15px 20px;
      }
    }
  }
}
.section {
  .title {
    display: flex;
    .title-logo {
      width: 75px;
      height: 75px;
      margin-top: 5px;
      border: none;
      padding-right: 25px;
    }
    .title-text {
      padding-left: 25px;
      border-left: 2px #cccccc solid;
    }
  }
}
#ways-to-help {
  height: 460px;
  .image {
    width: 350px;
    border: 10px black solid;
    float: left;
    margin-right: 25px;
  }
  .button-container {
    margin: 35px 0px;
    text-align: center;
    .button {
      color: #222222;
      width: 200px;
      padding: 14px 0;
      text-align: center;
      margin-bottom: 5px;
      font-size: 14px;
      border: 2px #cccccc solid;
      border-radius: 5px;
      display: inline-block;
      margin-right: 15px;
      cursor: pointer;
      background-image: linear-gradient(to bottom, transparent 50%, $green 50%);
      background-size: 100% 200%;
      transition-duration: 0.5s;
      background-position: 100% 200%;
      &:hover {
        background-position: 100% 100%;
        color: white;
      }
      &.checked {
        border-color: $green;
        background-color: $green;
        color: white;
        cursor: default;
      }
    }
  }
}
.sponsor-container {
  display: flex;
  margin-bottom: 35px;
  a {
    display: flex;
    .sponsor-img {
      margin: auto;
      width: 85%;
    }
  }
}

.map-overlay {
  position: relative;
  width: 100%;
  height: 450px;
  top: 450px;
  margin-top: -450px;
  z-index: 1;
}
iframe {
  border: 6px $green ridge;
  border-radius: 4px;
  width: calc(100% - 12px);
  height: 450px;
}

@media (max-width: 1288px) {
  .carousel {
    .text-container {
      .primary-text {
        font-size: 50px;
      }
      .secondary-text {
        font-size: 40px;
      }
    }
  }
  .about-us-images {
    .text-container {
      &#left {
        &.slided {
          transform: translate(-105%, -50%);
        }
      }
      &#right {
        &.slided {
          transform: translate(10%, -50%);
        }
      }
    }
  }
}
@media (max-width: 1250px) {
  .section {
    width: 970px;
    img {
      width: 250px;
      margin-bottom: 50px;
    }
  }
  #ways-to-help {
    height: 460px;
  }
}
@media (max-width: 1150px) {
  .about-us-images {
    .text-container {
      width: 450px;
    }
  }
}
@media (max-width: 1074px) {
  .carousel {
    .text-container {
      width: 80vw;
      transform: translate(-50%, -50%);
    }
  }
}
@media (max-width: 1040px) {
  .about-us-images {
    height: 700px;
    img {
      width: 100%;
      height: 350px;
      transform: none;
    }
    .text-container {
      width: 90vw;
      &#left {
        top: 25%;
        transform: translate(-50%, -50%);
        &.slided {
          transform: translate(-50%, -50%);
        }
      }
      &#right {
        top: 70%;
        transform: translate(-50%, -50%);
        &.slided {
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .section {
    width: 780px;
    .button-container {
      margin: 35px 0px;
      .button {
        padding: 10px 15px;
      }
    }
  }
  #ways-to-help {
    height: 560px;
  }
}
@media (max-width: 905px) {
  .carousel {
    position: relative;
    margin-bottom: 75px;
    .carousel-img {
      img {
        visibility: hidden;
        width: 100%;
        margin-top: -30px;
      }
    }
  }
}
@media (max-width: 800px) {
  .section {
    width: 95vw;
  }
  #ways-to-help {
    height: auto;
    .image {
      float: none;
      position: relative;
      width: calc(100% - 20px);
      margin-right: 0;
    }
  }
  #sponsor-img {
    width: 100%;
  }
}
@media (max-width: 780px) {
  .carousel {
    .text-container {
      .primary-text {
        font-size: 45px;
      }
      .secondary-text {
        font-size: 35px;
      }
      .button-container {
        .primary-button, .secondary-button {
          padding: 15px 20px;
        }
      }
    }
  }
}
@media (max-width: 615px) {
  .carousel {
    .text-container {
      .primary-text {
        font-size: 30px;
      }
      .secondary-text {
        margin-top: 5px;
        font-size: 20px;
      }
      .button-container {
        margin-top: 25px;
        .primary-button, .secondary-button {
          padding: 15px 20px;
        }
      }
    }
  }
}
@media (max-width: 500px) {
  .carousel {
    .text-container {
      .primary-text {
        font-size: 26px;
      }
      .button-container {
        width: 90vw;
        margin-left: -5vw;
        .primary-button, .secondary-button {
          padding: 15px;
        }
      }
    }
  }
  .about-us-images {
    .text-container {
      .button-container {
        width: 100%;
      }
    }
  }
  .section {
    width: 90vw;
    .title {
      .title-logo {
        display: none;
      }
      .title-text {
        padding-left: 0;
        border-left: none;
      }
    }
  }
}
</style>