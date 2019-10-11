<template>
  <div>
    <div class="banner-container">
      <div class="title">ACCEPT A TREE</div>
    </div>
    <div class="text-container">
      <div class="text">
        If you live in the Edmonton area and are looking for young trees to plant on your property,
        PlantForever is here to help!
      </div>
      <div class="text">
        Plantation of up to one tree is free, while each extra tree requires a minimum donation of $10 to allow us to keep planting.
      </div>
      <div class="text">
        The trees are 2 to 4 feet in size
      </div>
    </div>
    <div class="button-container">
      <router-link class="primary-button" :to="{ name: 'TreePlanted' }">We Plant at Your Home</router-link>
      <router-link class="primary-button" :to="{ name: 'TreeInPots' }">We Give You Trees to Plant Yourself</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tree",
  metaInfo: {
    title: "Accept A Tree",
    meta: [
      { name: "description", content: "Get a free tree of your choice planted in your property and nurture it as it grows. Help the environment as the tree absorbs thousands of pounds of CO2." },
      { name: "keywords", content: "PlantForever, free, tree, plant, organization, backyard, black cherry, colorado spruce, red maple, schubert chokecherry" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org/accept-a-tree" }
    ]
  },
}
</script>

<style lang="scss" scoped>
.text-container {
  margin: 25px 10vw 0 10vw;
  .text {
    font-size: 18px;
    margin: 15px 5px;
  }
}
.button-container {
  margin: 25px 10vw 0 10vw;
  display: flex;
  justify-content: space-around;
  margin-bottom: 35px;
  .primary-button {
    font-size: 30px;
    width: 25%;
    text-align: center;
    vertical-align: middle;
    padding: 15px;
  }
}

@media (max-width: 1370px) {
  .button-container .primary-button {
    font-size: 30px;
    width: 30%;
    padding: 15px;
  }
}
@media (max-width: 1142px) {
  .button-container .primary-button {
    font-size: 26px;
    width: 30%;
    padding: 15px;
  }
}
@media (max-width: 1142px) {
  .button-container .primary-button {
    font-size: 26px;
    width: 35%;
    padding: 15px;
  }
}
@media (max-width: 848px) {
  .button-container .primary-button {
    font-size: 22px;
    width: 35%;
    padding: 15px;
  }
}
@media (max-width: 718px) {
  .button-container .primary-button {
    font-size: 18px;
    width: 35%;
    padding: 10px;
  }
}
</style>