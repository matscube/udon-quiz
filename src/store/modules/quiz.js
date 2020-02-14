// import Const from 'const/index'
// import Util from 'utils/index'
// import axios from 'axios'

// const REFRESH_TIME = 500

const state = {
  userAnswer: Object,
}

const getters = {
  // queryParams (state, getters, rootState) {
  //   let q = rootState.route.query
  //   return {
  //     keyword: q.keyword || '',
  //     smtpage: parseInt(q.smtpage) || 1,
  //     gender_refine: parseInt(q.gender_refine) || Const.genderNotSpecified,
  //     state_list: Util.parseJSON(q.state_list) || [],
  //     age: parseInt(q.age) || Const.ageAny,
  //     phase_list: Util.parseJSON(q.phase_list) || [],
  //     source_list: Util.parseJSON(q.source_list) || [],
  //   }
  // },
}

const mutations = {
  resetAnswer (state) {
    state.userAnswer = {}
  },
  setAnswer (state, payload) {
    state.userAnswer[payload.id] = payload.value
  },
  // switchDataLoadedOff (state) {
  //   state.stateLoaded = false
  //   state.trialLoaded = false
  // },
}

const actions = {
  // refreshWithSameData ({commit}) {
  //   commit('switchDataLoadedOff')
  //   setTimeout(() => {
  //     commit('switchDataLoadedOn')
  //   }, REFRESH_TIME)
  // },
  // async loadTrials ({commit}, payload) {
  //   commit('trialWillLoaded')
  //   await axios.get(Const.api.trialList, {
  //     params: SearchUrl.getEncodedParams(payload.params),
  //   })
  //   .then(function(response) {
  //     if (Const.debug.apiConnection) {
  //       console.info('loadTrials Response:')
  //       console.info(response)
  //     }
  //     commit('processTrialData', { response: response })
  //     commit('trialLoadFinished')
  //   })
  // },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
