<template>
  <div class="section">
    <div class="container">
      <logo />
      <h1 class="title">
        online-voting
      </h1>
      <h2 class="subtitle">
        Online Voting
      </h2>
      <div class="links">
        <nuxt-link class="btn" to="/voter">Start</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">

</style>
