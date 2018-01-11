<template>
  <div>
      <h1>Let's Learn Vuex</h1>
      <h2>{{getCount}}</h2>
      <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'learnvuex',
    computed: {
        // count: function () {
        //     return this.$store.getters.getCount
        // }
        ...mapGetters([
            'getCount'
        ])
    },
    methods: {
        handleClick (){
            this.$store.dispatch('doIncrement')
        }
    }
  
}
</script>


<style>

</style>
