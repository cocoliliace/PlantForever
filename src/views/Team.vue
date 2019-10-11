<template>
  <div>
    <div class="banner-container">
      <div class="title">MEET OUR TEAM</div>
    </div>
    <div class="profile-cards">
      <div v-for="person in teamData" class="card">
        <div class="name">{{ person.name }} — {{ person.title }}</div>
        <img :src="`${ person.pic }`" :alt="`${ person.name } profile picture`">
        <div class="story">{{ person.story }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  metaInfo: {
    title: "Meet Our Team",
    meta: [
      // { name: "description", content: "" },
      { name: "keywords", content: "PlantForever, organization, team, who, meet, funder, people, environmentalist, Marmik Patel, Ching Chang" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org/meet-our-team" }
    ]
  },
  data () {
    return {
      teamData: [
        {name: "Marmik Patel", title: "Founding President", pic: "@/assets/head_shot_2019_profile.jpg", story: "Marmik founded PlantForever in 2017 to create change. After learning about the limited time we have until the climate crisis poses irreversible global changes, Marmik took the initiative and began planting trees. Since then, Marmik has transformed a mere idea into a fully functioning organization; he assembled a team, launched city-wide tree planting initiatives, created local partnerships, and organized platforms to spread awareness. Marmik is proud of his city’s urban forest but knows it can expand. Now 17, Marmik aims to develop PlantForever internationally, spreading awareness and encouraging vast tree-canopy expansion in urban areas. He intends to inspire a movement empowering individuals to take action globally"},
        {name: "Pedro Almeida", title: "VP of Human Resources", pic: "@/assets/head_shot_2019_profile.jpg", story: "Pedro, now 17 is looking forward to his final year before post-secondary school where he will focus on his schooling as well as assisting the executive team to expand PlantForever as far as possible, by advancing communication between members as well as with people outside of the organization. He assisted the team in large events as well as messages to organizations that has aided PlantForever for his time here."},
        {name: "Nebelung Meow", title: "VP of environmental ethics", pic: "@/assets/Nebelung.jpg", story: "Totes adorbs"},
        {name: "Ching Chang", title: "VP of IT", pic: "../assets/head_shot_2019_profile.jpg", story: "As a 17 years old environmentalist, Ching joined PlantForever with the incentive of combating climate change and urban deforestation. With a passion for web developing, Ching is looking forward to not only maximize the ways that people can reach out to PlantForever from everywhere in the world, but to also make the process as simple as possible"},
        {name: "Fatima Shamas", title: "VP of social media", pic: "./assets/head_shot_2019_profile.jpg", story: "Fatima joined PlantForever in 2018 as a volunteer, but later became part of the team in hopes of spreading awareness through social media. Her goal remains the same: to educate and inform people about climate change and help them to make changes within their lifestyle to combat it"},
        {name: "Vanshaj Upadhyay", title: "VP of Merchandise", pic: "/assets/head_shot_2019_profile.jpg", story: "At 16 years old, Vanshaj joined the PF team almost at the very beginning, when things were first starting to fall in place. He enjoys working at PF because he is interested in environmental matters and taking care of the planet. Vanshaj’s goal at PlantForever is to battle pollution and climate change through the plantation of trees. Vanshaj is dedicated to the PlantForever mission"},
        {name: "Eric Li", title: "Photographer", pic: "../assets/head_shot_2019_profile.jpg", story: "Eric initially joined PlantForever as a volunteer, helping the team with small photoshop tasks. Having a hobby in taking pictures, he officially joined the PF team in mid 2019 as the official photographer. He now works with all team members, taking photos during planting events"},
      ]
    }
  }
}
</script>

<style media="screen" lang="sass">
.profile-cards
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: space-around
  .card
    background-color: white
    box-shadow: 0 1px 3px 0 rgba(0, 168, 73, 0.5)
    margin: 15px
    width: 787px
    display: flex
    flex-direction: column
    align-items: center
    .name
      margin: 12px
      font-size: 25px
      font-weight: 600
    img
      border: 10px solid $green
      border-radius: 50%
      padding: 5px
      width: 7vw
      height: 7vw
    .story
      margin: 15px
      width: 90%
      font-family: sans-serif
      font-size: 17px
</style>
