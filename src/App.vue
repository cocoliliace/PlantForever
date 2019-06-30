<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About Us</router-link>
      <router-link :to="{ name: 'TreeRegistration' }">Tree Registration</router-link>
      <router-link :to="{ name: 'Volunteer' }">Volunteer</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
      <router-link :to="{ name: 'Donate' }">Donate</router-link>
    </div>

    <router-view/>

    <footer>

    </footer>
  </div>
</template>

<style lang="scss">
body {
  margin: 0px;
}
#nav {
  a {
    padding: 10px 30px;
    text-decoration: none;
    color: black;
    font-size: 25px;
    &:hover {
      background-color: green;
    }
  }
}
</style>