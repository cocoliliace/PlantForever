<template>
  <div>
    <div class="banner-container">
      <div class="title">CONTACT US</div>
    </div>
    <form id="gform" method="post" action="https://script.google.com/macros/s/AKfycbz5mc2RObBEVrrM7NBTNz08Xf80UAJNFoR0JYkSa4Tiw_m5-_U/exec">
      <div class="text">Please feel free to contact us.</div>
      <div class="row">
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Subject" autocomplete="off" />
      </div>
      <textarea type="text" name="message" placeholder="Message" autocomplete="off" required />
      <input class="primary-button" type="submit" value="Send" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  metaInfo: {
    title: "Contact Us",
    meta: [
      { name: "description", content: "Get in contact with the official team of PlantForever to ask questions and get help in regards of anything. Expect a quick response from us within 24 hours." },
      { name: "keywords", content: "PlantForever, organization, contact, get help, support, review, rate, bad, what is, talk to" }
    ],
    link: [
      { rel: "canonical", href: "https://www.plantforever.org/contact-us" }
    ]
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 80vw;
  margin: 25px 10vw 60px 10vw;
  .text {
    font-size: 22px;
  }
  input, textarea {
    font-size: 24px;
    border: 2px #CCCCCC solid;
    transition-duration: 0.3s;
    border-radius: 5px;
    outline-width: 0px;
    &:focus {
      border: 2px $green solid;
    }
  }
  .row {
    display: flex;
    justify-content: space-between;
    margin: 25px 0px;
    input {
      width: 28%;
      padding: 10px;
    }
  }
  textarea {
    resize: none;
    width: calc(80vw - 24px);
    height: 250px;
    padding: 10px;
  }
  .primary-button {
    border: none;
    width: 120px;
    height: 50px;
    margin: 25px 0px 5px calc(50% - 60px);
    cursor: pointer;
    appearance: none;
  }
}

@media (max-width: 780px) {
  form {
    .row {
      justify-content: center;
      flex-direction: column;
      margin-bottom: 15px;
      input {
        width: calc(100% - 24px);
        margin-bottom: 10px;
      }
    }
  }
}
</style>
