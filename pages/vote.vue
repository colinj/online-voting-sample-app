<template>
  <div class="containe">
    <h1 class="h1">Voting Directions</h1>
    <p>
      Based on your current holdings as of today, the total number of shares you can use in voting for each resolution
      is 46,000.
    </p>
    <p>
      Please select from one of the options below:
    </p>
    <label class="radio">
      <input type="radio" name="09K" value="A">
      I/We want to vote all of my/our shares.
    </label>
    <label class="radio">
      <input type="radio" name="09K" value="P">
      I/We want a specific number of my/our shares to be voted.
    </label>
    <h2 class="h4">Instructions</h2>
    <p>
      To direct your proxy how to vote please select either for or against, shown next to each resolution below.
    </p>
    <p>
      If you do not want to direct your proxy how to vote then select an open vote. This allows your proxy to cast your
      vote as they see fit.
    </p>
    <p>
      If you select abstain for a particular resolution, you are directing your proxy not to vote on that item on a show
      of hands or on a poll and that your shares are not to be counted in computing the required majority on a poll.
    </p>
    <div class="voting-card">
      <div class="flex-layout">
        <span class="flex-item">Informed Consent</span>
        <span class="flex-item">Resolution</span>
        <span class="flex-item">For</span>
        <span class="flex-item">Against</span>
        <span class="flex-item">Abstain</span>
        <span class="flex-item">Open</span>
      </div>
      <div class="flex-layout">
        <span class="flex-item"></span>
        <span class="flex-item">1. Resolution One</span>
        <vote-radio class="flex-item" name="r0" />
        <vote-radio class="flex-item" name="r0" />
        <vote-radio class="flex-item" name="r0" />
        <vote-radio class="flex-item" name="r0" />
      </div>
      <div class="flex-layout">
        <span class="flex-item"><input type="checkbox"></span>
        <span class="flex-item">2. Resoluion Two</span>
        <vote-radio class="flex-item" name="r1" />
        <vote-radio class="flex-item" name="r1" />
        <vote-radio class="flex-item" name="r1" />
        <vote-radio class="flex-item" name="r1" />
      </div>
      <div class="flex-layout">
        <span class="flex-item"><input type="checkbox"></span>
        <span class="flex-item">3. Resolution Three</span>
        <vote-radio class="flex-item" name="r2" />
        <vote-radio class="flex-item" name="r2" />
        <vote-radio class="flex-item" name="r2" />
        <vote-radio class="flex-item" name="r2" />
      </div>
      <div class="flex-layout">
        <span class="flex-item"></span>
        <span class="flex-item">4. Resoluion Four</span>
        <vote-radio class="flex-item" name="r3" />
        <vote-radio class="flex-item" name="r3" />
        <vote-radio class="flex-item" name="r3" />
        <vote-radio class="flex-item" name="r3" />
      </div>
    </div>

    <div class="p-6 flex justify-center">
      <a class="btn" href="">Cancel</a>
      <a class="btn" href="">Next</a>
    </div>
  </div>
</template>

<script>
import VoteRadio from '@/components/VoteRadio'

export default {
  components: {
    VoteRadio
  }
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

  .radio {
    display: block;
  }

  .voting-card {
    .flex-layout {
      display: flex;
      align-items: center;
      margin-bottom: 0rem;
      width: 100%;

      &:nth-child(odd) {
        @apply bg-blue-200;
      }

      &:nth-child(even) {
        @apply bg-white;
      }
    }
    .flex-item {
      flex-basis: 3.5rem;
      max-width: 3.5rem;
      padding: .5rem 1rem;
      text-align: center;
    }

    .flex-item:nth-child(2) {
      flex-grow: 1;
      max-width: none;
      text-align: left;
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

    +.btn {
      margin-left: 1.5rem;
    }
  }

</style>
