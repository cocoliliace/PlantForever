<template>
  <div>
    <div class="banner-container">
      <img src="@/assets/banner.jpg" class="banner" />
      <div class="title">MAKE A DONATION</div>
    </div>
    <div>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="UMPE77Y2R9L46" />
        <input class="primary-button" type="submit" alt="Donate with PayPal button" value="Donate" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Donate"
}
</script>

<style lang="scss" scoped>
.primary-button {
  font-size: 24px;
  border: none;
  width: 120px;
  height: 50px;
  cursor: pointer;
}
</style>