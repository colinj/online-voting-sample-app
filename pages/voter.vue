<template>
  <div class="containe">
    <h1 class="h1">Details</h1>
    <p>
      Lodgement of a proxy appointment by a {{ meeting.holderDesc }} does not prevent that {{ meeting.holderDesc }} from attending the
      {{ meeting.description }}. Therefore, if after lodging the proxy appointment the {{ meeting.holderDesc }} decides to attend the
      {{ meeting.description }}, while the {{ meeting.holderDesc }} is present in the meeting the authority of the appointed proxy to
      speak and vote on the {{ meeting.holderDesc }}'s behalf, is suspended.
    </p>
    <p>
      Your name and address details below are as they appear on the register of {{ meeting.issuer }}.
    </p>
    <div class="py-6 pl-20">
      {{ voter.investorId }}
      <template v-for="line in voter.regoDetails">
        <br :key="line">{{ line }}
      </template>
    </div>
    <h2 class="h4">Acknowledgement</h2>
    <label class="checkbox">
      <input type="checkbox">
      By ticking this box I/we agree that I/we am/are the {{ meeting.holderDesc }}(s) named above.
    </label>
    <p class="footnote pl-4 relative">
      If lodged by an attorney or agent, the attorney or agent warrants they have lodged evidence of their authority
      with the registry. If lodged by a party to a securityholding in joint names or on behalf of a securityholding in
      the name of a corporate entity, the person lodging this proxy appointment warrants they have the authority to do
      so.
    </p>
    <div class="p-6 flex justify-center">
      <a class="btn" href="">Cancel</a>
      <nuxt-link class="btn" to="/proxy">Next</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('voter', ['voter']),
    ...mapState('meeting', ['meeting']),
  },
  methods: {
    ...mapActions('voter', ['getVoter']),
    ...mapActions('meeting', ['getMeeting']),
  },
  async created () {
    await Promise.all([
      this.getVoter(1),
      this.getMeeting(2482)
    ])
  }
}

</script>

<style lang="scss" scoped>

</style>
