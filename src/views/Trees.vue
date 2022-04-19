<template>
  <div class="contains-form">
    <div class="banner-container">
      <div class="title">TREE INFORMATION</div>
    </div>

    <div class="text-container">
      <table>
        <tr>
          <th></th>
          <th>Red Maple</th>
          <th>Black Cherry</th>
          <th>Schubert Chokecherry</th>
          <th>Colorado Spruce</th>
        </tr>
        <tr>
          <td>Height (mature) (ft)</td>
          <td>40~60</td>
          <td>20~30</td>
          <td>20~30</td>
          <td>50~75</td>
        </tr>
        <tr>
          <td>Spread (mature) (ft)</td>
          <td>40</td>
          <td>
            <div>20~24</div>
            <div>80~100 (60 y/o)</div>
          </td>
          <td>15~20</td>
          <td>10~20</td>
        </tr>
        <tr>
          <td>Size (currents) (ft)</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Clearance from Ground (ft)</td>
          <td></td>
          <td></td>
          <td>4</td>
          <td></td>
        </tr>
        <tr>
          <td>Hardiness zone</td>
          <td>
            <div>3~9</div>
            <div>3b</div>
          </td>
          <td>2~8</td>
          <td>2a</td>
          <td>2~7</td>
        </tr>
        <tr>
          <td>Coniferous/deciduou</td>
          <td>Deciduous</td>
          <td>Deciduous</td>
          <td>Deciduous</td>
          <td>Coniferous</td>
        </tr>
        <tr>
          <td>Native-ness</td>
          <td>East Canada</td>
          <td>East Canada</td>
          <td>Native</td>
          <td>Native</td>
        </tr>
        <tr>
          <td>Root Expansion</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Watering</td>
          <td>
            <div>1 + 5 gallons per inch of tree diameter 4.5 ft above the ground</div>
            <div>Water Weekly</div>
          </td>
          <td></td>
          <td>Dry to medium</td>
          <td></td>
        </tr>
        <tr>
          <td>Pests</td>
          <td>Aphids and scales</td>
          <td>Black cherry aphid</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Disease</td>
          <td></td>
          <td></td>
          <td>
            <div>X-disease</div>
            <div>Black Knot</div>
            <div>Stem decay</div>
            <div>Shothole</div>
            <div>Valse Canker</div>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>Animal Consideration</td>
          <td></td>
          <td></td>
          <td>Attract birds</td>
          <td></td>
        </tr>
        <tr>
          <td>Stake/Cage use</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Edibility</td>
          <td>
            <div>Sap is edible</div>
            <div>Leaves are toxic to horses</div>
          </td>
          <td>Not edible raw, but can be made into jam, jelly, or wine</td>
          <td>
            <div>Editble but very acidic</div>
            <div>Tastes better as jam</div>
          </td>
          <td>Young leaves taste good but mature leaves can poke through your stomach</td>
        </tr>
        <tr>
          <td>Flower</td>
          <td><img src="@/assets/trees/flowers/red-maple.png" /></td>
          <td><img src="@/assets/trees/flowers/black-cherry.png" /></td>
          <td><img src="@/assets/trees/flowers/schubert-chokecherry.png" /></td>
          <td rowspan="2">No flower :(</td>
        </tr>
        <tr>
          <td>Blossom Time</td>
          <td>March~April</td>
          <td>May~July
          Mar~Apr in SW</td>
          <td>April~May</td>
        </tr>
        <tr>
          <td>Fruit Type</td>
          <td><img src="@/assets/trees/fruits/red-maple.png" /></td>
          <td><img src="@/assets/trees/fruits/black-cherry.png" /></td>
          <td><img src="@/assets/trees/fruits/schubert-chokecherry.png" /></td>
          <td><img src="@/assets/trees/fruits/colorado-spruce.png" /></td>
        </tr>
        <tr>
          <td>Fruiting Season</td>
          <td></td>
          <td>June~October</td>
          <td>September~October</td>
          <td></td>
        </tr>
        <tr>
          <td>Leaf</td>
          <td><img src="@/assets/trees/leaves/red-maple.png" /></td>
          <td><img src="@/assets/trees/leaves/black-cherry.png" /></td>
          <td><img src="@/assets/trees/leaves/schubert-chokecherry.png" /></td>
          <td><img src="@/assets/trees/leaves/colorado-spruce.png" /></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trees",
  metaInfo: {
    title: "Tree Information",
    meta: [
      { name: "description", content: "" },
      { name: "keywords", content: "PlantForever, free, tree, plant, organization, backyard, black cherry, colorado spruce, red maple, schubert chokecherry" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org/tree-information" }
    ]
  }
}
</script>

<style scoped lang="scss">
.text-container {
  padding: 0;
}
table {
  margin: auto;
  padding: 0;
  position: relative;
  border-spacing: 0;
  tr {
    font-family: Montserrat;
    font-size: 19px;
    text-align: center;
    th {
      margin: 0;
      border: 1px $blue solid;
      border-top: 2px $blue solid;
      border-bottom: 4px $blue solid;
      background: white;
      position: sticky;
      top: 63px;
    }
    td {
      border: 1px $blue solid;
      margin: 0;
      background: white;
      padding: 9px 6px;
      &:has(img) {
        padding: 0;
      }
      img {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>