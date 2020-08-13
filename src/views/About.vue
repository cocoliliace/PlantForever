<template>
  <div>
    <div class="banner-container">
      <div class="title">WHAT WE DO</div>
    </div>
    <div class="section">
      <div class="columns">
        <picture>
          <source srcset="@/assets/about-us.webp" type="image/webp" />
          <source srcset="@/assets/about-us.jpg" type="image/jpeg" />
          <img src="@/assets/about-us.jpg" alt="PlantForever" />
        </picture>
        <div class="paragraph">
          <div class="title-text">WHAT WE DO</div>
          <div class="secondary-text">
            PlantForever advocates for developing urban forests and spreading awareness about the
            critical climate crisis. As a result, PlantForever plants trees in urban environments,
            usually homes and business locations.
          </div>
          <div class="secondary-text">
            Patrons first <router-link :to="{ name: 'GetTree' }">register for a tree</router-link>.
            Once a date is selected, volunteers go the desired planting location to plant trees,
            consisting of choosing an area, digging, planting, and filling the space with
            patron-provided soil and water. Currently, PlantForever plants in Edmonton, but plans to
            expand to other cities!
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="title-text">WHY PLANTFOREVER PLANTS TREES</div>
      <div class="columns">
        <div class="column">
          <div class="primary-text">Climate Change</div>
          <div class="secondary-text">
            Climate change is the shift in global climate patterns, especially prominent in the last
            century as a result of human activity.
          </div>
          <div class="secondary-text">
            A significant aspect of climate change is global warming. Global warming occurs when
            fossil fuels are burned, emitting harmful gases, primarily CO2, into the atmosphere.
            These greenhouse gases trap heat from escaping into space and contribute to the warming
            of our planet. The United Nations states that “quantities of greenhouse gases in the
            atmosphere have risen to record levels not seen in three million
            years”<sup>[<a href="https://www.un.org/en/sections/issues-depth/climate-change/index.html" target="_blank" rel="noopener noreferrer">1</a>]</sup>.
            Since the late 19th century, the earth’s average surface temperature has risen about
            0.9°C!<sup>[<a href="https://climate.nasa.gov/evidence" target="_blank" rel="noopener noreferrer">2</a>]</sup>
          </div>
          <div class="secondary-text">
            Greater global temperatures have detrimental effects on our planet; ocean acidification,
            ice cap depletion, and biodiversity reduction are few of the adverse impacts. Immediate
            action must take place to prevent additional repercussions.
          </div>
          <div class="secondary-text">
            The Paris Agreement signed in 2016 aims to keep global temperature rise this century
            below 2°C, in regards to levels in the pre-industrial
            era.<sup>[<a href="https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement" target="_blank" rel="noopener noreferrer">3</a>]</sup>
            However, reports conducted by the Intergovernmental Panel on Climate Change (IPCC) in
            2018 found that many irreversible effects of climate change appear after a rise of only
            1.5°C.<sup>[<a href="https://unfccc.int/process-and-meetings/the-paris-agreement/the-paris-agreement" target="_blank" rel="noopener noreferrer">4</a>]</sup>
          </div>
          <div class="secondary-text">
            To keep levels below a 1.5°C rise, PlantForever takes a step forward as a leader for the
            billions of people and creatures impacted by climate change.
          </div>
        </div>
        <div class="column">
          <div class="primary-text">Spread Awareness</div>
          <div class="secondary-text">
            The primary reason PlantForever plants in cities is to raise awareness.
          </div>
          <div class="secondary-text">
            With an increase in urbanization, there is a more substantial disconnect between people
            and nature; the average person is trapped in their offices and homes and forgets that
            the environment exists. As a result, people are considering the impacts of climate
            change to a lesser extent.
          </div>
          <div class="secondary-text">
            PlantForever strives to eliminate this divide and raise awareness of the consequences of
            climate change. When PlantForever plants trees throughout the city, people take time to
            fathom their impact on the planet and understand what they can do to help. Additionally,
            through social media, PlantForever aims to encourage people to take a leadership role
            and contribute. PlantForever recognizes that the best way to create change is to
            educate.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  metaInfo: {
    title: "About Us",
    meta: [
      { name: "description", content: "PlantForever advocates for developing urban forests and spreading awareness about the critical climate crisis. PlantForever plants trees in urban environments." },
      { name: "keywords", content: "PlantForever, about, what is, why, environment, initiative, organization, climate change, global warming, spread awareness" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org/about-us" }
    ]
  }
}
</script>

<style lang="scss" scoped>
.section {
  margin-top: 75px;
  .columns {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    img {
      float: left;
      width: 500px;
      padding: 9px;
      border: 1px #cccccc solid;
      box-shadow: 2px 2px 5px #cccccc;
    }
    .paragraph {
      width: 50%;
    }
    .column {
      width: 45%;
    }
  }
  .secondary-text {
    font-size: 19px;
  }
}

@media (max-width: 1250px) {
  .section {
    width: 90%;
    .columns {
      img {
        width: 45%;
      }
    }
  }
}
@media (max-width: 915px) {
  .section {
    width: 90%;
    margin-top: 45px;
    .columns {
      flex-direction: column;
      margin-bottom: 0;
      img {
        display: none;
      }
      .paragraph {
        width: 100%;
      }
      .column {
        width: 100%;
        margin-bottom: 35px;
      }
    }
  }
}
@media (max-width: 414px) {
  .title-text {
    font-size: 28px;
  }
}
</style>