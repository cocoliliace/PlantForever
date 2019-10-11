<template>
  <div>
    <div class="banner-container">
      <div class="title">DONATE</div>
    </div>
    <div class="text">
      PlantForever is registered as a nonprofit organization, but is not registered as a charitable
      organization with the CRA. We can accept donations, but can not issue official donation
      receipts for income tax purposes. Therefore, you can not receive any income tax credit for the
      donation(s) you have made.
    </div>
    <div class="text">
      <router-link :to="{ name: 'Contact' }">Send us a message</router-link> if you would like to
      donate supplies such as trees, shovels, soil, or other equipment.
    </div>
    <div class="text" style="margin-bottom: 35px;">
      For monetary donations, please continue
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="UMPE77Y2R9L46" />
        <input type="submit" value="here" />
      </form>.
    </div>
  </div>
</template>

<script>
export default {
  name: "Donate",
  metaInfo: {
    title: "Donate",
    meta: [
      { name: "description", content: "The largest ways to contribute to PlantForever is donating money or supplies. It aids us to become more capable at planting trees and spreading awareness." },
      { name: "keywords", content: "PlantForever, nonprofit, organization, donate, fund, help, money, world, globe, support" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org/donate" }
    ]
  }
}
</script>

<style lang="scss" scoped>
.text {
  width: 80vw;
  font-size: 18px;
  margin: 15px 10vw;
  form {
    display: inline;
    input {
      border: none;
      font-size: 18px;
      font-family: Montserrat;
      padding: 0;
      color: $orange;
      text-shadow: 0px 0px 1px #cccccc;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>