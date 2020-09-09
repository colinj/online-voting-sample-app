import axios from './http'

const buildApiUrl = baseUrl => (...args) => ['', baseUrl, ...args].join('/')

const apiMeetings = buildApiUrl('meetings')
const apiVoters = buildApiUrl('voters')

const meetings = {
  get: id => axios.get(apiMeetings(id))
}

const voters = {
  get: id => axios.get(apiVoters(id))
}

export default {
  meetings,
  voters
}
