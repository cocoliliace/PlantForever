<template>
  <div>
    <div class="banner-container">
      <div class="title">MEET OUR TEAM</div>
    </div>
    <div class="text">
      We are currently looking for more executive members. Take a look at <router-link :to="{ name: 'JoinTeam' }">the open positions</router-link>!
    </div>
    <div class="profile-cards">
      <div v-for="person in teamData" class="card">
        <div class="name">{{ person.name }} — {{ person.title }}</div>
        <img :src="require(`@/assets/team/${ person.photo }.jpg`)" :alt="`${ person.name } profile picture`">
        <div v-for="paragraph in person.story" class="story">
          {{ paragraph }}
          <br />
        </div>
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
      { name: "description", content: "Meet the endeavours of PlantForever. We are a group of environmentalist who intend to inspire a movement empowering individuals to take action globally." },
      { name: "keywords", content: "PlantForever, organization, team, who, meet, founder, people, environmentalist, Marmik Patel, Ching Chang" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org/meet-our-team" }
    ]
  },
  data () {
    return {
      teamData: [
        {
          name: "Marmik Patel",
          title: "President",
          photo: "marmik",
          story: ["Marmik founded PlantForever in 2017 to develop urban forests through tree planting—an effort to mitigate the climate crisis. " +
            "He manages the organization, overseeing the executive team and providing a vision for PlantForever."]
        },
        {
          name: "Nathaniel Perumal",
          title: "VP of Operations (Edmonton)",
          photo: "nate",
          story: ["Nathaniel started off as a volunteer for PlantForever back in 2018 helping to plant trees across Edmonton. " +
            "Now at 21 years of age, this young environmentalist  continues  to make strides in his pursuit to help preserve the environment. " +
            "By managing the events he once helped with, Nathaniel is an integral part of the team. " +
            "He conducts all of the tree operations for PlantForever, coordinating with both homeowners and volunteers to achieve the goal of mitigating the climate crisis."]
        },
        {
          name: "Emeka Ozodurukwe",
          title: "VP of Operations (Saskatoon)",
          photo: "emeka",
          story: ["Emeka started volunteering for PlantForever in July 2022. " +
            "He has several years of management experience spanning different sectors. " +
            "Also, he is currently an MBA student at the Edwards School of Business, University of Saskatchewan. " +
            "Emeka is passionate about saving the planet and is excited to contribute to that effort through PlantForever."]
        },
        {
          name: "Kevin Ang",
          title: "VP of Finance",
          photo: "kevin",
          story: ["Kevin is an international student from Indonesia. " +
            "He is 18 years old and he's going to UofA Business school, majoring in finance. " +
            "He has had a passion in finance since he was in middle school. " +
            "He has chosen to join PlantForever because he wants to make an impact in the world, " +
            "especially with the climate crisis as lots of recent disasters have been caused by it."]
        },
        {
          name: "Parshva Shah",
          title: "Marketing Manager",
          photo: "parshva",
          story: ["Parshva Shah started volunteering for PlantForever during the summer of 2021 where he helped with tree transplantation. " +
            "He became interested in developing marketing strategies to help PlantForever's services reach more people. " +
            "He likes problem-solving and finding innovative solutions which makes the Head of Marketing the perfect position for him. " +
            "He develops different marketing strategies to connect homeowners with PlantForever products and services."]
        },
        {
          name: "Ching Chang",
          title: "Web Developer",
          photo: "ching",
          story: ["Ching joined PlantForever in 2019 to help develop urban forests. " +
            "With a passion for web developing, Ching modernized the ways that people can interact with, learn from, and contribute to PlantForever."]
        }
      ]
    }
  },
  mounted() {
    this.animateCards();
    window.addEventListener("resize", this.animateCards);
    window.addEventListener("scroll", this.animateCards);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.animateCards);
    window.removeEventListener("scroll", this.animateCards);
  },
  methods: {
    animateCards() {
      for (let index = 0; index < document.querySelectorAll(".card").length; index++) {
        if (window.innerHeight > document.querySelectorAll(".card")[index].getClientRects()[0].top) {
          document.querySelectorAll(".card")[index].classList.add("slide-up");
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
	display: table;
	font-family: sans-serif;
	font-size: 18px;
	margin: 15px auto 0;
	border-bottom: 2px $blue dotted;
}
.profile-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px 15px 35px 15px;
  .card {
    box-shadow: 0 1px 5px 0 rgba($green, 0.5);
    margin: 15px;
    width: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition-duration: 0.9s;
    opacity: 0;
    transform: translateY(100px);
    .name {
      margin: 12px;
      font-size: 22px;
      font-weight: 600;
      text-align: center;
    }
    img {
      border: 10px solid $green;
      border-radius: 50%;
      padding: 5px;
      width: 125px;
      height: 125px;
    }
    .story {
      margin: 15px;
      width: 90%;
      font-family: sans-serif;
      font-size: 17px;
    }
    &.slide-up {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}
</style>
