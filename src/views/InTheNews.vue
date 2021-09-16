<template>
  <div>
    <div class="banner-container">
      <div class="title">In the news</div>
    </div>
    <div class="content-container">
      <div class="intro">
        In the past few years, PlantForever has had the pleasant opportunity to speak to some wonderful news organizations about their tree planting initiatives. You can view them below.
      </div>
      <hr />
      <div class="cards-container">
        <div class="card">
            <a class="title" href="https://www.cbc.ca/listen/live-radio/1-52-radio-active" target="_blank">CBC Interview 2020</a>
            <div class="description">Our president Marmik was interviewed on behalf of PlantForever on Edmonton CBC radio in 2020<br /></div>
            <a href="https://www.cbc.ca/listen/live-radio/1-52-radio-active" target="_blank"><img src="@/assets/in-the-news/cbc.jpg" /></a>
            <audio controls>
                <source src="@/assets/in-the-news/audio/cbc_interview.mp3" type="audio/mpeg">
                Your browser does not support the audio element
            </audio>
        </div>
        <div class="card">
            <a class="title" href="https://thegatewayonline.ca/2021/09/plantforever-develops-urban-forests-one-tree-at-a-time-the-gateway/" target="_blank">TheGateway News Article 2021</a>
            <div class="description">The University of Alberta's newspaper spotlighted PlantForever after interviewing team members Marmik and Nathaniel</div>
            <a href="https://thegatewayonline.ca/2021/09/plantforever-develops-urban-forests-one-tree-at-a-time-the-gateway/" target="_blank"><img src="@/assets/in-the-news/gateway.jpg" /></a>
            <div class="spacer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InTheNews",
  metaInfo: {
    title: "In the News",
    meta: [
      { name: "description", content: "In the past few years, PlantForever has had the pleasant opportunity to speak to some wonderful news organizations about their tree planting initiatives." },
      { name: "keywords", content: "cbc, news, journal, article, interview, testimonial, edmonton, organization, plantforever, initiatives" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org/in-the-news" }
    ]
  }
}
</script>

<style lang="scss" scoped>
.content-container {
    width: 80vw;
    margin: 25px 10vw 45px;
    .intro {
        font-size: 18px;
        text-align: center;
    }
    hr {
        border-color: $blue;
        max-width: 350px;
        margin-top: 25px;
        margin-bottom: 30px;
    }
    .cards-container {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        .card {
            width: 450px;
            background: #F1F3F4;
            text-align: center;
            border-radius: 5px;
            padding: 15px 20px;
            margin: 5px;
            .title {
                color: $green;
                font-size: 22px;
                font-weight: 700;
                margin-bottom: 10px;
                cursor: pointer;
            }
            .description {
                min-height: 57px;
                margin-bottom: 10px;
            }
            img {
                width: 100%;
                height: 210px;
                object-fit: cover;
                margin-bottom: 10px;
                border-radius: 2px;
            }
            .spacer {
                height: 35px;
            }
        }
     }
}
</style>
