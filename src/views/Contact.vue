<template>
  <div>
    <div class="banner-container">
      <img src="@/assets/banner.jpg" class="banner" />
      <div class="title">CONTACT US</div>
    </div>
    <form method="post" :action="`mailto:plantforever.org@gmail.com?subject=${ name }: ${ subject }&body=${ message }`">
      <div class="text">Please feel free to contact us</div>
      <div class="input-container">
        <input v-model="name" type="text" name="name" placeholder="Name" required />
        <input v-model="email" type="text" name="email" placeholder="Email" required />
        <input v-model="subject" type="text" placeholder="Subject" required />
      </div>
      <textarea v-model="message" type="text" placeholder="Message" required />
      <br />
      <input class="primary-button" type="submit" value="Send" />
    </form>
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
    outline: none;
    transition-duration: 0.3s;
    border-radius: 5px;
    &:focus {
      border: 2px $green solid;
    }
  }
  .input-container {
    display: flex;
    justify-content: space-between;
    margin: 25px 0px;
    input {
      width: 23vw;
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