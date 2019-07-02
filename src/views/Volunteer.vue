<template>
  <div class="body">
    <div class="banner-container">
      <img src="@/assets/banner.jpg" class="banner" />
      <div class="title">VOLUNTEER</div>
    </div>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfeYtT3jCo9aB2W3NHRCNHchi8-iKh_qtuyCzeqw_PV8FAFFQ/viewform?embedded=true" scrolling="no" frameborder="0">Loading...</iframe>
  </div>
</template>

<script>
export default {
  name: "Volunteer"
}
</script>

<style lang="scss" scoped>
.body {
  background-color: $green;
  iframe {
    margin-top: 25px;
    width: 100vw;
    height: 1550px;
  }
}
</style>