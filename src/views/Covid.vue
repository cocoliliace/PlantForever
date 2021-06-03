<template>
  <div class="contains-form">
    <div class="banner-container">
      <div class="title">COVID POLICIES</div>
    </div>
    <div class="text-container">
      <div style="margin-top: 8px;">PlantForever's Covid-19 Policy is in accordance with <a href="https://www.alberta.ca/enhanced-public-health-measures.aspx" target="_blank" rel="noopener noreferrer">Alberta Health Service public measure and guidelines</a>.</div>
      <div style="text-align: right;">Updated June 2<sup>nd</sup></div>
      <div v-if="volunteer" class="text">
        <div class="title">Volunteer Guidelines & Responsibilities</div>
        <hr />
        <ul>
          <li>If a volunteer has any <a href="https://www.alberta.ca/covid-19-testing-in-alberta.aspx" target="_blank" rel="noopener noreferrer">Covid-19 symptoms</a>, is in the process of self-isolation, or has been in contact with someone with Covid-19 recently, they <u>must not</u> attend any events</li>
          <li>Ensure no physical contact, including handshakes</li>
          <li>Remain 2m apart at all times
            <ul>
              <li>During planting or any event, keep separation (e.g. one person planting one tree)</li>
            </ul>
          </li>
          <li>Wear a mask at all times (during the entirety of the event(s))</li>
          <li>Use hand sanitizer as required</li>
          <li>Transportation
            <ul>
              <li>Use separate vehicles among volunteers</li>
              <li>If carpooling is necessary, limit to two people per vehicle, sanitize surfaces, and sit as far apart as possible</li>
            </ul>
          </li>
          <li>Wear gloves when handling equipment</li>
          <li>Bring own equipment if possible (e.g., shovel)</li>
          <li>Do not share gloves; volunteers must bring their own gloves</li>
          <li>Also read our <a style="cursor: pointer;" @click="volunteer = false">Homeowner/Patron Guidelines & Responsibilities</a> (optional)</li>
        </ul>
        <div>*PlantForever will be limiting the total number of attendees to 10 and under</div>
      </div>
      <div v-if="!volunteer" class="text">
        <div class="title">Homeowner/Patron Guidelines & Responsibilities</div>
        <hr />
        <ul>
          <li>If a homeowner/patron has any <a href="https://www.alberta.ca/covid-19-testing-in-alberta.aspx" target="_blank" rel="noopener noreferrer">Covid-19 symptoms</a>, is in the process of self-isolation, or has been in contact with someone with Covid-19 recently, they must inform PlantForever and cancel any interaction with volunteers</li>
          <li>Ensure that during direct planting, the homeowner(s) are comfortable with volunteers going on their property (yard)</li>
          <li>Ensure no physical contact, including handshakes</li>
          <li>Remain 2m apart at all times
            <ul>
              <li>Remain at least 2m apart during all conversations</li>
            </ul>
          </li>
          <li>Wear mask during any and all conversations and interactions with volunteers
            <ul>
              <li>Masks are compulsory for the entirety of interaction or planting event</li>
            </ul>
          </li>
          <li>Use hand sanitizer as required</li>
          <li>When transferring trees, meet up in a public place (e.g., parking lot)</li>
          <li>Also read our <a style="cursor: pointer;" @click="volunteer = true">Volunteer Guidelines & Responsibilities</a> (optional)</li>
        </ul>
        <div>*PlantForever will be limiting the total number of attendees to 10 and under</div>
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
