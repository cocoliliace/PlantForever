<template>
  <div class="body">
    <div class="banner-container">
      <img src="@/assets/banner.jpg" class="banner" />
      <div class="title">VOLUNTEER</div>
    </div>
    <form ref="formElement" @submit.prevent="response">
      <input name="entry.505939357" />
      <input name="entry.1584156043" />
      <input type="checkbox" name="entry.2074560014_sentinel" />
      <input type="checkbox" name="entry.2074560014" />
      <input type="checkbox" name="entry.2074560014" />
      <input type="checkbox" name="entry.2074560014" />
      <input type="checkbox" name="entry.2074560014.other_option_response" />
      <input name="entry.2074560014" />
      <input name="entry.665761460" />
      <input name="entry.1110442469" />
      <input name="entry.276579149" />
      <input type="submit" />
    </form>
    <!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfeYtT3jCo9aB2W3NHRCNHchi8-iKh_qtuyCzeqw_PV8FAFFQ/viewform?embedded=true" scrolling="no" frameborder="0">Loading...</iframe> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Volunteer",
  methods: {
    response() {
      let vm = this;
      let formElement = vm.$refs.formElement;
      let formData = new FormData(formElement);
      let url = "https://docs.google.com/forms/d/e/1FAIpQLSfeYtT3jCo9aB2W3NHRCNHchi8-iKh_qtuyCzeqw_PV8FAFFQ/formResponse";
      axios.post(url, formData).then((response) => {
        console.log(response);
      })
    }
  }
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