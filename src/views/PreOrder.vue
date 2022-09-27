<template>
  <div class="contains-form">
    <div class="banner-container">
      <div class="title">PRE-ORDER</div>
    </div>
    <div class="text-container">
      <div style="margin-top: 12px;">
        The PlantForever Pre-Order Program allows customers to order trees for the upcoming planting season.
        Currently, the pre-order program is only available in Edmonton. The tentative start of the upcoming planting season is May 2023.
      </div>

      <div class="text">
        <div class="title">50% Advance Policy</div>
        <hr />
        <p>
          In addition to the order, a 50% advance payment of the total order will be required to secure the selected trees.
          The remaining 50% of the total order will be paid when the tree planting/transfer occurs.
          If the customer cancels the order, then the 50% advancement will not be refunded.
          If PlantForever is unable to provide the requested trees, a full refund will be issued.
        </p>
      </div>

      <div class="text">
        <div class="title">Precautionary Tree Notice</div>
        <hr />
        <p>
          We cannot confirm this far in advance whether the trees you order will be available to us next season.
          This is all dependent on the tree providers and whether the trees are made available.
          We will do our best to accommodate the order if the selected trees aren’t available, including a full issued refund if required.
        </p>
      </div>

      <div class="text">
        <div class="title">Donation Requirements</div>
        <hr />
        <p>
          Same as regular orders. Please consult the
          <router-link :to="{ name: 'GetTree' }">tree registration form</router-link>
          to learn more.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreOrder",
  metaInfo: {
    title: "Pre-Order",
    meta: [
      { name: "description", content: "The PlantForever Pre-Order Program allows customers to order trees for the upcoming planting season." },
      { name: "keywords", content: "pre order, PlantForever, free, tree, plant, organization, backyard, colorado spruce, amur maple, schubert chokecherry" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org/pre-order" }
    ]
  },
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
  font-size: 19px;
}
.text {
  margin: 15px 5px;
  .title {
    text-align: center;
    font-weight: 700;
  }
}
</style>
