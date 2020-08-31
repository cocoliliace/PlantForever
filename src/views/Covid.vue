<template>
  <div class="contains-form">
    <div class="banner-container">
      <div class="title">COVID POLICIES</div>
    </div>
    <div class="text-container">
      <div v-if="volunteer" class="text">
        <div class="title">Volunteer-to-Volunteer Contact Guidelines</div>
        <hr />
        <ul>
          <li>Ensure no physical contact, including handshakes</li>
          <li>Remain 2m apart when possible</li>
          <li class="indent">During planting or any event, attempt to keep separation (e.g. one person planting one tree)</li>
          <li>Wear mask during interactions</li>
          <li>Use hand sanitizer as required</li>
          <li>Transportation</li>
          <li class="indent">Use separate vehicles when possible</li>
          <li class="indent">Use only one vehicle for multiple volunteer when all volunteers are comfortable</li>
          <li>Wear gloves when handling equipment</li>
          <li>Do not share gloves; ask volunteers to bring own gloves if possible</li>
        </ul>
      </div>
      <div class="text">
        <div class="title">Volunteer-to-Homeowner/Other Patron Guidelines</div>
        <hr />
        <ul>
          <li>Ensure that during direct planting the homeowner(s) are comfortable with volunteers going on their property (yard)</li>
          <li>Ensure no physical contact, including handshakes</li>
          <li>Remain 2m apart when possible with all individuals</li>
          <li class="indent">Remain at least 2m apart during all conversation</li>
          <li>Wear mask during any and all conversations and interactions</li>
          <li class="indent">Masks compulsory for the entirety of interaction or planting event</li>
          <li>Use hand sanitizer as required</li>
          <li>When transferring trees, meet up in a public place (i.e. parking lot) rather than a home</li>
          <li>During planting, ensure that volunteers, homeowners, and any other people avoid direct contact</li>
          <li>Gloves are compulsory for the entirety of interaction or planting event</li>
          <li>Wear gloves when handling equipment</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Covid",
  metaInfo: {
    title: "Covid Policies",
    meta: [
      { name: "description", content: "Take a look at what PlantForever is doing to prevent COVID-19 from spreading while planting trees. Read the guidelines prior to your assigned volunteering time." },
      { name: "keywords", content: "covid, corona, update, organization, policy, guidelines, plantforever, tree, volunteer, edmonton" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org/about-us" }
    ]
  },
  props: {
    volunteer: {
      default: true,
      type: Boolean
    }
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
  font-size: 19px;
  margin: 15px 5px;
  .title {
    text-align: center;
    font-weight: 700;
  }
  .indent {
    margin-left: 25px;
  }
}
</style>