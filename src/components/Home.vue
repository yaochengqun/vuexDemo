<template>
  <div class="home">
    <HelloWorld :msg="$store.state.count"/>
    {{count}}
    <br>
    <!-- <input type="button" value="+" @click="addFn(1)">
    <input type="button" value="-" @click="minusFn(1)"> -->
    <input type="button" value="+" @click="mutationAdd(1)">
    <input type="button" value="-" @click="mutationReduce(1)">
    <br>
    <!-- <input type="button" value="异步+" @click="addFns(1)">
    <input type="button" value="异步-" @click="minusFns(1)"> -->
    <input type="button" value="异步+" @click="actionsAdd(1)">
    <input type="button" value="异步-" @click="actionsReduce(1)">
    <br>
    {{$store.getters.getterCount}}
    {{getterCount}}
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import {mapMutations,mapActions,mapState,mapGetters} from 'vuex'

export default {
  name: 'home',
  components:{
    HelloWorld
  },
  methods:{
    ...mapMutations([
      'mutationAdd',
      'mutationReduce'
    ]),
    // addFn(n){
    //   this.$store.commit('mutationAdd',n);
    // },
    // minusFn(n){
    //   this.$store.commit('mutationReduce',n);
    // },
    ...mapActions([
      'actionsAdd',
      'actionsReduce'
    ])
    // addFns(n){
    //   this.$store.dispatch('actionsAdd',n);
    // },
    // minusFns(n){
    //   this.$store.dispatch('actionsReduce',n);
    // }
  },
  computed:{
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'getterCount'
    ])
  }
}
</script>

<style>

</style>