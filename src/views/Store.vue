<template>
  <div>
    <div class="banner-container">
      <div class="title">STORE</div>
    </div>
    <div class="card-container">
      <router-link :to="{ name: 'Shirt' }" class="card">
        <img src="@/assets/merch/shirt.webp" alt="white logo crewneck t-shirt" />
        <div class="title">WHITE LOGO CREWNECK T-SHIRT</div>
        <div class="price"><span style="text-decoration: line-through;">$25.00</span>   $20.00</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Store",
  metaInfo: {
    title: "Store",
    meta: [
      { name: "description", content: "" },
      { name: "keywords", content: "" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org/store" }
    ]
  }
}
</script>

<style lang="scss" scoped>
.card-container {
  margin: 25px 2.5vw 0 2.5vw;
  width: 95vw;
  display: flex;
  justify-content: space-around;
  .card {
    border-radius: 4px;
    text-align: center;
    width: 300px;
    height: 450px;
    box-shadow: inset -1px -1px 4px #666, 0px 4px 12px rgba(#666, 0.3);
    text-decoration: none;
    display: block;
    transition-duration: 0.4s;
    img {
      width: 100%;
    }
    .title {
      color: $blue;
      font-size: 22px;
      font-weight: 700;
      padding: 15px;
    }
    .price {
      color: #222222;
      font-weight: 700;
      font-size: 18px;
    }
    &:hover {
      box-shadow: inset -1px -1px 4px #666, 2px 6px 12px rgba(#666, 0.9);
      transform: translateY(-8px);
    }
  }
}
</style>