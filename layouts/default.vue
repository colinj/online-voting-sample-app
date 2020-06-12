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
    <main class="section">
      <div class="container">
        <div class="flex-layout">
          <div class="flex-item">
            <nuxt />
          </div>
          <aside class="flex-item">
            <meeting-details />
          </aside>
        </div>
      </div>
    </main>
    <footer class="section section--min bg-blue-300">
      <div class="container py-4 flex justify-between">
        <span>
          © MyCompany Pty Ltd | ABN 123 123 123 |
          <a href="">Terms of Use</a> |
          <a href="">Privacy Policy</a>
        </span>
        <span>Contact Us</span>
      </div>
    </footer>
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
main {
  min-height: calc(100vh - 12rem);
}

aside {
  flex-basis: 100%;

  @screen md {
    flex-basis: 30%;
    max-width: 30%;
  }
}
</style>
