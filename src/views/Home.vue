<template>
  <div>
    <div class="carousel">
      <div class="slide">
        <img src="@/assets/image2.jpg" class="carousel-img" />
        <div class="text-container">
          <div class="primary-text">We are PlantForever</div>
          <div class="secondary-text">Free tree planting</div>
          <div class="button-container">
            <router-link :to="{ name: 'GetATree' }" class="primary-button">Get A Tree</router-link>
            <router-link :to="{ name: 'Donate' }" class="secondary-button">Donate Funds</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="about-us-images">
      <img src="@/assets/6.jpg" />
      <img src="@/assets/5.jpg" />
      <div id="left" class="text-container">
        <div class="primary-text">WHAT IS PLANTFOREVER</div>
        <div class="secondary-text">
          PlantForever is a nonprofit organization that develops urban forests through
          house-to-house tree plantation in order to fight climate change.
        </div>
        <div class="button-container">
          <router-link :to="{ name: 'About' }" class="primary-button">Learn More</router-link>
          <router-link :to="{ name: 'GetATree' }" class="secondary-button">Want A Tree?</router-link>
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
      <div class="title" style="width: 420px;">
        <img src="@/assets/icons/logo.jpg" alt="PlantForever" class="title-logo" />
        <div class="title-text">
          <div>HOW YOU CAN</div>
          <div style="color: #00A849;">HELP US</div>
        </div>
      </div>
      <img class="image" src="@/assets/ways-to-help.jpg" />
      <div class="primary-text">There are various ways to support PlantForever and the environment:</div>
      <div class="button-container">
        <div :class="{ checked: checkedButton === 1 }" class="button" @click="checkedButton = 1">DONATE</div>
        <div :class="{ checked: checkedButton === 2 }" class="button" @click="checkedButton = 2">ACCEPT A TREE</div>
        <div :class="{ checked: checkedButton === 3 }" class="button" @click="checkedButton = 3">VOLUNTEER</div>
        <div :class="{ checked: checkedButton === 4 }" class="button" @click="checkedButton = 4">RAISE AWARENESS</div>
      </div>
      <div class="secondary-text" style="display: table;">
        <div v-if="checkedButton === 1">
          One of the largest ways to contribute to PlantForever is donating money or supplies.
          Relocating a coffee’s worth of money aids us to become more capable and efficient at
          planting trees and spreading awareness.
        </div>
        <div v-else-if="checkedButton === 2">
          By having us plant a tree on your property, and you nurture it as it grows, you are
          promoting our goal and organization. Moreover, you are clearly helping the environment as
          the tree absorbs thousands of pounds of carbon dioxide in its lifetime.
        </div>
        <div v-else-if="checkedButton === 3">
          As a nonprofit, we rely heavily on volunteers contributing their effort and time to
          operate. Volunteering could include planting and/or organizing trees, advertising,
          providing transportation, developing content for our social media/website, and helping
          with specific department-based needs like marketing or human resources.
        </div>
        <div v-else>
          If finance or commitment is an issue, telling others about PlantForever is a very simple
          and fast way to help us grow. You can contribute by informing family, friends, colleagues,
          and neighbours about the organization and what we do to donate to the community.
        </div>
      </div>
    </div>
    <div id="map" class="section">
      <div class="title" style="width: 470px;">
        <img src="@/assets/icons/logo.jpg" alt="PlantForever" class="title-logo" />
        <div class="title-text">
          <div>WHERE WE HAVE</div>
          <div style="color: #00A849;">PLANTED</div>
        </div>
        <!-- <div class="title-text" style="padding-left: 0px; border-left: none;">WHERE WE HAVE PLANTED</div> -->
      </div>
      <div class="map-overlay" onclick="style.pointerEvents='none'" onmouseout="style.pointerEvents='auto'"></div>
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1IgqVX0wBEh2xW_VrB1QINeqhGNgE0pqT" frameborder="0"></iframe>
    </div>
    <div class="section">
      <div class="title" style="width: 390px;">
        <img src="@/assets/icons/logo.jpg" alt="PlantForever" class="title-logo" />
        <div class="title-text">
          <div>OUR</div>
          <div style="color: #00A849;">SUPPORTERS</div>
        </div>
      </div>
      <div class="sponsor-container">
        <a href="https://www.boosterjuice.com" target="_blank"><img class="sponsor-img" src="@/assets/supporters/booster-juice.jpg" alt="booster juice" /></a>
        <a href="https://infokidz.ca" target="_blank"><img class="sponsor-img" src="@/assets/supporters/infokidz.jpg" alt="infokidz" /></a>
        <a href="https://www.simply-health.ca" target="_blank"><img class="sponsor-img" src="@/assets/supporters/simply-health.jpg" alt="simply health" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      checkedButton: 1
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
  .slide {
    .carousel-img {
      width: 100vw;
      filter: brightness(80%);
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
        width: 60%;
        justify-content: space-between;
        .primary-button, .secondary-button {
          padding: 20px 30px;
        }
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
    justify-content: space-between;
    .title-logo {
      width: 75px;
      height: 75px;
      margin-top: 5px;
      border: none;
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
  justify-content: space-between;
  a {
    width: 45%;
    display: flex;
    .sponsor-img {
      vertical-align: middle;
      width: 100%;
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
    .slide {
      .text-container {
        .primary-text {
          font-size: 50px;
        }
        .secondary-text {
          font-size: 40px;
        }
        .button-container {
          width: 80%;
        }
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
    .slide {
      .text-container {
        width: 80vw;
        transform: translate(-50%, -50%);
        .button-container {
          width: 60%;
        }
      }
    }
  }
}
@media (max-width: 1040px) {
  .carousel {
    .slide {
      .text-container {
        .button-container {
          width: 90%;
        }
      }
    }
  }
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
@media (max-width: 800px) {
  .section {
    width: 95vw;
    &#map {
      .title {
        width: 95vw;
      }
    }
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
    .slide {
      .text-container {
        .primary-text {
          font-size: 45px;
        }
        .secondary-text {
          font-size: 35px;
        }
        .button-container {
          width: 90%;
          .primary-button, .secondary-button {
            padding: 15px 20px;
          }
        }
      }
    }
  }
}
@media (max-width: 615px) {
  .carousel {
    .slide {
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
          width: 90%;
          .primary-button, .secondary-button {
            padding: 15px 20px;
          }
        }
      }
    }
  }
}
</style>