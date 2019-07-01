<template>
  <div>
    <div class="banner-container">
      <img src="@/assets/banner.jpg" class="banner" />
      <div class="title">CONTACT US</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      name: null,
      email: null,
      subject: null,
      message: null
    };
  }
}
</script>