import api from '@/api'

export const state = () => ({
  meeting: {},
})

export const mutations = {
  UPDATE_MEETING: (state, meeting) => { state.meeting = meeting },
}

export const actions = {
  async getMeeting ({ commit }, id) {
    const response = await api.meetings.get(id)
    commit('UPDATE_MEETING', response.data)
  }
}

export const getters = {
  getResolutions (state) {
    return state.meeting.resolutions
  }
}
