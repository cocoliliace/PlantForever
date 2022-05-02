<template>
  <div class="contains-form">
    <div class="banner-container">
      <div class="title">COVID POLICIES</div>
    </div>
    <div class="text-container">
      <div style="margin-top: 8px;">PlantForever's Covid-19 Policy is in accordance with <a href="https://www.alberta.ca/enhanced-public-health-measures.aspx" target="_blank" rel="noopener noreferrer">Alberta Health Service public measure and guidelines</a>.</div>
      <div style="text-align: right;">Updated May 1<sup>st</sup></div>
      <div v-if="volunteer" class="text">
        <div class="title">Volunteer Guidelines & Responsibilities</div>
        <hr />
        <ul>
          <li>If a volunteer has any
            <a href="https://www.alberta.ca/covid-19-testing-in-alberta.aspx" target="_blank" rel="noopener noreferrer">Covid-19 symptoms</a>,
            is in the process of self-isolation, or has been in contact with someone with Covid-19 recently,
            they <u>must not</u> attend any events.
          </li>
          <li>While masks are no longer mandatory, volunteers are advised to keep a mask with them during the entirety of the event(s).</li>
        </ul>
      </div>
      <div v-if="!volunteer" class="text">
        <div class="title">Homeowner/Patron Guidelines & Responsibilities</div>
        <hr />
        <ul>
          <li>If a homeowner/patron has any
            <a href="https://www.alberta.ca/covid-19-testing-in-alberta.aspx" target="_blank" rel="noopener noreferrer">Covid-19 symptoms</a>,
            is in the process of self-isolation, or has been in contact with someone with Covid-19 recently,
            they must inform PlantForever and cancel any interaction with volunteers.
          </li>
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
