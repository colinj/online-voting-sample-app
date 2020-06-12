<template>
  <div>
    <h1 class="h1">Confirmation</h1>
    <p>
      Thank you for voting. Your proxy vote has been submitted.
    </p>
    <p>
      This is your proxy voting reference number: <strong>123457890</strong>.<br>
      You must quote this reference number if you have any issues or queries.
    </p>
    <p>
      We recommend that you print this page for your records.
    </p>

    <div>
      <div class="flex-layout">
        <span class="flex-item">Company</span>
        <span class="flex-item">Austral Bean Company</span>
      </div>
      <div class="flex-layout">
        <span class="flex-item">Meeting</span>
        <span class="flex-item">Annual General Meeting</span>
      </div>
      <div class="flex-layout">
        <span class="flex-item">Time</span>
        <span class="flex-item">Tuesday, 12 October 2021 10:00 AM (Sydney time)</span>
      </div>
      <div class="flex-layout">
        <span class="flex-item">Meeting Location</span>
        <span class="flex-item">
          Sheraton on the Park<br>
          The Macquarie Room<br>
          Level 5, 161 Elizabeth St<br>
          Sydney NSW 2000
        </span>
      </div>
      <div class="flex-layout">
        <span class="flex-item">Selected proxy</span>
        <span class="flex-item">Chair of the meeting</span>
      </div>
      <div class="flex-layout">
        <span class="flex-item">Voting direction</span>
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

    <div class="p-6 flex justify-center">
      <a class="btn" href="">Close</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footnote {
  &::before {
    content: "*";
    position: absolute;
    left: 0;
  }
}

.btn {
  display: inline-block;
  min-width: 10rem;
  @apply py-2;
  @apply px-8;
  @apply bg-blue-500;
  @apply rounded-md;
  text-align: center;

  + .btn {
    margin-left: 1.5rem;
  }
}
</style>
