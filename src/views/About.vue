<template>
  <div>
    <div class="banner-container">
      <img src="@/assets/banner.jpg" class="banner" />
      <div class="title">ABOUT US</div>
    </div>
    <div class="section">
      <div class="columns">
        <img src="@/assets/blue-tree-2.jpg" />
        <div class="paragraph">
          <div class="title-text">WHAT WE DO</div>
          <div class="secondary-text">
            PlantForever strongly advocates for developing urban forests and spreading awareness about
            the critical climate crisis. As a result, PlantForever plant trees in urban environments,
            usually homes and business locations.
          </div>
          <div class="secondary-text">
            Patrons first register for a tree. Once a date is selected, volunteers go the desired
            planting location to plant which consists of selecting an area, digging, planting, and
            filling the space with patron-provided soil and water. Currently, PlantForever plants in
            Edmonton, but will be planning to expand to other cities!
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
            A large aspect of climate change is global warming. This occurs when man-made fossil
            fuels, such as carbon dioxide, are emitted into the atmosphere, resulting in the
            trapping of heat. The United Nations states that “quantities of greenhouse gases in the
            atmosphere have risen to record levels not seen in three million years.” Since the late
            19th century, the earth’s average surface temperature has risen about 0.9°C, as stated
            by Nasa.
          </div>
          <div class="secondary-text">
            As you might know, higher global temperatures have detrimental effects on our planet.
            Just a few are listed here: ocean acidification, the loss of our ice caps, rising sea
            levels, decrease in biodiversity, loss of forests, and negative effects on human health
            and economy. To prevent further irreversible bad impacts, right now actions must take
            place.
          </div>
          <div class="secondary-text">
            The Paris Agreement signed in 2016 aims to keep global temperature rise this century
            below 2°C, in regards to levels in the pre-industrial era. A reports conducted by the
            Intergovernmental Panel on Climate Change (IPCC) in 2018 found that many adverse effects
            of climate change appear after a rise about 1.5°C.
          </div>
          <div class="secondary-text">
            To keep levels below a 1.5°C rise, PlantForever takes a step forward to become a leader
            for the billions of people and creatures impacted by climate change.
          </div>
        </div>
        <div class="column">
          <div class="primary-text">Spread Awareness</div>
          <div class="secondary-text">
            The primary reason PlantForever plants in urban settings is to raise awareness.
          </div>
          <div class="secondary-text">
            With an increase in urbanization, there is a larger disconnect between people and
            nature; we tend to be trapped in our offices and homes and forget that the environment
            exists. As a result, people are observing and considering the impacts of climate change
            less and less.
          </div>
          <div class="secondary-text">
            PlantForever works to eliminate this divide and create understands of the repercussions
            of climate change. When we plant throughout the city and spread information, people take
            time to fathom their impact on the planet and understand what they can do to help. This
            also inspires people to take a leadership role and contribute. As we really are all in
            this together, PlantForever recognizes that the best way to create change is to educate.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="scss" scoped>
.section {
  margin-top: 75px;
  .columns {
    display: flex;
    justify-content: space-between;
    img {
      float: left;
      width: 500px;
      padding: 9px;
      border: 1px #cccccc solid;
      box-shadow: 2px 2px 5px #cccccc;
    }
    .paragraph {
      width: 570px
    }
    .column {
      width: 540px;
    }
  }
}
</style>