import Vue from 'vue'
import Vuex from 'vuex'
import meeting from './meeting'
import voter from './voter'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default () => {
  return new Vuex.Store({
    modules: {
      meeting,
      voter,
    },
    strict: debug,
  })
}
