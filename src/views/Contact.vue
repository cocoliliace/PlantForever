<template>
  <div>
    <div class="banner-container">
      <img src="@/assets/banner.jpg" class="banner" />
      <div class="title">CONTACT US</div>
    </div>
    <form id="gform" method="post" action="https://script.google.com/macros/s/AKfycbz5mc2RObBEVrrM7NBTNz08Xf80UAJNFoR0JYkSa4Tiw_m5-_U/exec">
      <div class="text">Please feel free to contact us</div>
      <div class="input-container">
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
  name: "Contact"
}
</script>

<style lang="scss" scoped>
form {
  width: 80vw;
  margin: 25px 10vw;
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
  .input-container {
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
    margin: 25px 0px 5px calc(100% - 120px);
    cursor: pointer;
  }
}
</style>