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
            <div class="title">CBC Interview 2020</div>
            <div class="description">Our president Marmik was interviewed on behalf of PlantForever on Edmonton CBC news in 2020</div>
            <img src="@/assets/in-the-news/cbc.jpg" />
            <audio controls>
                <source src="@/assets/in-the-news/audio/cbc_interview.mp3" type="audio/mpeg">
                Your browser does not support the audio element
            </audio>
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
                margin-bottom: 10px;
            }
            img {
                width: 100%;
                margin-bottom: 10px;
                border-radius: 2px;
            }
        }
     }
}
</style>
