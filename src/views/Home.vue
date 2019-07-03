<template>
  <div>
    <div class="carousel">
      <div id="slide-one" class="slide">
        <img :src="require(`@/assets/${ slideOnePhoto }.jpg`)" class="carousel-img" />
        <div class="text-container">
          <div class="primary-text">We are PlantForever</div>
          <div class="secondary-text">Free planting in Edmonton area</div>
          <div class="button-container">
            <router-link :to="{ name: 'GetATree' }" class="primary-button">Get A Tree</router-link>
            <a href="https://bit.ly/2Yw2AAO" target="_blank" class="secondary-button">Donate Funds</a>
          </div>
        </div>
      </div>
      <div id="slide-two" class="slide">
        <img :src="require(`@/assets/${ slideTwoPhoto }.jpg`)" class="carousel-img" />
        <div class="text-container">
          <div class="primary-text">Free doggos</div>
          <div class="secondary-text">Exclusive offer, get a doggo for free, with the purchase of a tree</div>
          <div class="secondary-text">Spicy</div>
          <div class="button-container">
            <router-link :to="{ name: 'Store' }" class="primary-button">Get A Tree</router-link>
            <router-link :to="{ name: 'Donate' }" class="secondary-button">Donate Funds</router-link>
          </div>
        </div>
      </div>
      <div class="arrow-container">
        <img src="@/assets/arrow.svg" style="transform: rotateY(180deg);" @click="userRotates(false)" />
        <img src="@/assets/arrow.svg" @click="userRotates(true)" />
      </div>
    </div>
    <div class="about-us-images">
      <img src="@/assets/3.jpg" />
      <img src="@/assets/4.jpg" />
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
          <a href="https://bit.ly/2Yw2AAO" target="_blank" class="secondary-button">Donate</a>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="title" style="width: 616px;">
        <div class="title-text" style="padding-left: 0px; border-left: none;">WHERE WE HAVE PLANTED</div>
      </div>
      <div class="map-overlay" onclick="style.pointerEvents='none'" onmouseout="style.pointerEvents='auto'"></div>
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1IgqVX0wBEh2xW_VrB1QINeqhGNgE0pqT" frameborder="0"></iframe>
    </div>
    <div class="section" style="height: 370px;">
      <div class="title">
        <img src="@/assets/logo.png" class="title-logo" />
        <div class="title-text">
          <div>HOW YOU CAN</div>
          <div style="color: #00A849;">HELP US</div>
        </div>
      </div>
      <img src="@/assets/download.jpg" />
      <div class="primary-text">There are many ways that you can help and support PlantForever and the environment:</div>
      <div id="ways-to-help-buttons" class="button-container">
        <div :class="{ checked: checkedButton === 1 }" class="button" @click="checkedButton = 1">DONATE</div>
        <div :class="{ checked: checkedButton === 2 }" class="button" @click="checkedButton = 2">ACCEPT A TREE</div>
        <div :class="{ checked: checkedButton === 3 }" class="button" @click="checkedButton = 3">VOLUNTEER</div>
        <div :class="{ checked: checkedButton === 4 }" class="button" @click="checkedButton = 4">RAISE AWARENESS</div>
      </div>
      <div class="secondary-text">
        <div v-if="checkedButton === 1">
          One of the largest ways to contribute to PlantForever is donating money or supplies.
          Relocating a coffee’s worth of money aids us drastically as it allows us to become more
          capable and efficient at planting trees and spreading awareness.
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
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      currentPhoto: 1,
      slideOnePhoto: 1,
      slideTwoPhoto: 2,
      timerIntervalID: 0,
      userIntervalID: 0,
      checkedButton: 1
    };
  },
  mounted() {
    this.timerIntervalID = setInterval(this.rotateSlides(true), 3000);
  },
  methods: {
    userRotates(forward) {
      this.userIntervalID ? clearInterval(this.userIntervalID) : clearInterval(this.timerIntervalID);
      this.userIntervalID = setInterval(this.rotateSlides(forward).bind(this), 3000);
    },
    rotateSlides(forward) {
      if (forward) {
        // slide to the right
      } else {
        // slide to the left
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

.carousel {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  transition-duration: 0.5s;
  margin-bottom: 75px;
  #slide-two .text-container {
    transform: translate(calc(-80% + 100vw), -50%);
  }
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
        width: 55%;
        justify-content: space-between;
        .primary-button, .secondary-button {
          padding: 20px 30px;
        }
      }
    }
  }
  .arrow-container {
    position: absolute;
    display: flex;
    top: 50%;
    transform: translateY(-50%);
    justify-content: space-between;
    width: 100vw;
    img {
      width: 45px;
      padding: 15px;
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
    &#left {
      transform: translate(-115%, -50%);
      .secondary-button {
        background-position: 100% 100%;
        &:hover {
          background-position: 0% 100%;
        }
      }
    }
    &#right {
      transform: translate(20%, -50%);
    }
    .primary-text {
      color: white;
      font-size: 36px;
      font-weight: 700;
      text-shadow: 5px 5px 10px black;
    }
    .secondary-text {
      margin-top: 10px;
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
    width: 420px;
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
  img {
    width: 350px;
    border: 10px black solid;
    float: left;
    margin-right: 25px;
  }
  .button-container {
    margin: 35px 0px;
    .button {
      color: #222222;
      padding: 14px 30px;
      font-size: 14px;
      border: 2px #cccccc solid;
      border-radius: 5px;
      display: inline;
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

.map-overlay {
  position: relative;
  width: 80vw;
  height: 30vw;
  top: 30vw;
  margin-top: -30vw;
  z-index: 1;
}
iframe {
  width: 80vw;
  height: 30vw;
}
</style>