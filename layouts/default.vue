<template>
  <div>
    <header class="section section--min">
      <div class="container py-4">
        <h1 class="h1">Online Voting</h1>
      </div>
    </header>
    <div class="section section--min bg-blue-300">
      <div class="container py-4 flex justify-between">
        <span>Company Name</span>
        <span>Annual General Meeting</span>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="flex-layout">
          <main class="flex-item">
            <nuxt />
          </main>
          <aside class="flex-item">
            <meeting-details />
          </aside>
        </div>
      </div>
    </div>
    <div class="section section--min bg-blue-300">
      <div class="container py-4 flex justify-between">
        <span>
          © MyCompany Pty Ltd | ABN 123 123 123 |
          <a href="">Terms of Use</a> |
          <a href="">Privacy Policy</a>
        </span>
        <span>Contact Us</span>
      </div>
    </div>
  </div>
</template>

<script>
import MeetingDetails from '@/components/MeetingDetails'

export default {
  components: {
    MeetingDetails
  }
}
</script>
<style lang="scss" scoped>
aside {
  flex-basis: 100%;

  @screen md {
    flex-basis: 30%;
    max-width: 30%;
  }
}
</style>
