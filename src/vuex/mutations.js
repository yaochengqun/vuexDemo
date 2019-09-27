export default {
  mutationAdd(state,n=0){
    state.count += n
  },
  mutationReduce(state,n=0){
    state.count -= n
  }
}