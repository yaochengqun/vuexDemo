import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './vuex/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:1
  },
  mutations,
  // mutations:{
  //   mutationAdd(state,n=0){
  //     state.count += n
  //   },
  //   mutationReduce(state,n=0){
  //     state.count -= n
  //   }
  // },
  actions:{
    actionsAdd(context,n=0){
      console.log(context)
      context.commit('mutationAdd',n);
    },
    actionsReduce({commit},n=0){
      commit('mutationReduce',n)
    }
  },
  getters:{
    getterCount(state){
      return state.count + 10
    }
  }
})