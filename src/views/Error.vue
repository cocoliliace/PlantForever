<template>
  <div style="text-align: center;">
    <h1>Page Not Found</h1>
    <h3>The link that you entered never existed or doesn't work anymore</h3>
    <h3>Click <router-link :to="{ name: 'Home'}">here</router-link> to get redirected</h3>
  </div>
</template>

<script>
export default {
  name: "Error",
  metaInfo: {
    title: "Page Not Found",
    titleTemplate: null
  }
}
</script>