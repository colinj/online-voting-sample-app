import api from '@/api'

export const state = () => ({
  voter: {},
})

export const mutations = {
  UPDATE_VOTER: (state, voter) => { state.voter = voter },
}

export const actions = {
  async getVoter ({ commit }, id) {
    const response = await api.voters.get(id)
    commit('UPDATE_VOTER', response.data)
  }
}
