<template>
  <div class="contains-form">
    <div class="banner-container">
      <div class="title">JOIN OUR TEAM</div>
    </div>
    <div class="text-container">
      <div style="margin-top: 8px;">Want to join PlantForever's executive team? Here are the positions that we're looking for. If you’re interested or want to learn more, send us a message through <router-link :to="{ name: 'Contact' }">our contact form</router-link>.</div>
      <br />
      <div>Disclaimer: All positions at PlantForever are currently volunteer-based</div>
      <br />
      <div class="text">
        <div class="title">Executive Position: Vice President of Operation (Outside of Edmonton; <a href="https://bit.ly/37lvXzH" target="_blank" rel="noopener noreferrer">Visual poster</a>)</div>
        <hr />
        <ul>
          <li>Manages tree planting for a given city</li>
          <li>PlantForever has a VP Operations position for each city/urban area where one can expand tree planting. For example, <router-link :to="{ name: 'Team' }">Nathaniel</router-link> is our current VP Operations for Edmonton. This position is for those that reside outside of Edmonton and want to undertake a leadership position to expand PlantForever in their city</li>
        </ul>

        <br />

        <div class="title">Manager Position: Operations Manager Edmonton (<a href="https://bit.ly/3G4AOlr" target="_blank" rel="noopener noreferrer">Visual poster</a>)</div>
        <hr />
        <ul>
          <li>Leads tree-planting events during the planting season (late spring, summer, early fall)</li>
          <li>Collaborates with and works under the Vice President of Operations Edmonton</li>
          <li>Does on-the-ground work and manages volunteers</li>
        </ul>

        <br />

        <div class="title">Manager Position: Social Media</div>
        <hr />
        <ul>
          <li>Oversees PlantForever’s social media accounts</li>
          <li>Develops content for the organization</li>
          <li>Works with Operations and Marketing to engage homeowners in tree planting through social media</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JoinTeam",
  metaInfo: {
    title: "Join Our Team",
    meta: [
      { name: "description", content: "Want to join PlantForever's executive team? Here are the positions that we are looking for. Apply or learn more through our contact form." },
      { name: "keywords", content: "Plantforever, Edmonton, Alberta, climate change, environment, career, free, global warming, organization, tree" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org/join-our-team" }
    ]
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
