<template>
  <div>
    <dl>
      <h3 class="h4">Meeting Details</h3>
      <dt>Ballot Opening</dt>
      <dd>{{ formatDate(meeting.openingDateUTC) }}</dd>
      <dt>Ballot Closing</dt>
      <dd>{{ formatDate(meeting.closingDateUTC) }}</dd>
      <dt>Location</dt>
      <dd>
        <strong>{{ meeting.addressLine1 }}</strong><br>
        {{ meeting.addressLine2 }}<br>
        {{ meeting.addressLine3 }}<br>
        {{ meeting.city }} {{ meeting.state }} {{ meeting.postcode }}
      </dd>
    </dl>
    <dl>
      <h3 class="h4">Meeting Documents</h3>
      <dd>Notice of Meeting</dd>
      <dd>Annual Reports</dd>
    </dl>
  </div>
</template>

<script>
import format from 'date-fns/format'

export default {
  name: 'MeetingDetails',
  props: {
    meeting: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    formatDate (date) {
      return date ? format(new Date(date), 'EEEE, d MMMM yyyy hh:mm a') : ''
    }
  },
}
</script>

<style lang="scss" scoped>
h3 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  @apply py-2;
  @apply px-4;
  @apply bg-blue-600;
  @apply text-white;
}

dl {
  position: relative;
  padding: 2.5rem 1rem 1rem;
  border-width: 1px;
  @apply border-blue-600;
  @apply rounded-lg;
  overflow: hidden;

  ~ dl {
    @apply mt-6;
  }
}

dt {
  @apply mt-6;
  @apply font-semibold;
  @apply text-lg;
}

dd {
  @apply mt-4;
}
</style>
