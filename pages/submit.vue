<template>
  <div>
    <h1 class="h1">Summary</h1>
    <h2 class="h4">Confirm Vote</h2>
    <p>
      Please make sure that the information you have entered is correct. If you need to make changes use the previous menu option below.
    </p>

    <div>
      <div class="flex-layout">
        <span class="flex-item">Proxy:</span>
        <span class="flex-item">Chair of the meeting</span>
      </div>
      <div class="flex-layout">
        <span class="flex-item">Voting direction:</span>
        <span class="flex-item">All shares</span>
      </div>
    </div>

    <p>
      Your voting instructions for your proxy:
    </p>

    <div>
      <div class="flex-layout">
        <span class="flex-item">1. Resolution One</span>
        <span class="flex-item">FOR</span>
      </div>
      <div class="flex-layout">
        <span class="flex-item">2. Resolution Two</span>
        <span class="flex-item">AGAINST</span>
      </div>
      <div class="flex-layout">
        <span class="flex-item">3. Resolution Three</span>
        <span class="flex-item">OPEN</span>
      </div>
      <div class="flex-layout">
        <span class="flex-item">4. Resolution Four</span>
        <span class="flex-item">ABSTAIN</span>
      </div>
    </div>

    <h2 class="h4">Submit Vote</h2>

    <p>
      Click the submit button when you are satisfied that all entered information is correct.
    </p>
    <p>
      Upon clicking the submit button you will be taken to the Confirmation page.
    </p>

    <div class="p-6 flex justify-center">
      <nuxt-link class="btn" to="/vote">Previous</nuxt-link>
      <nuxt-link class="btn" to="/confirmation">Submit</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
