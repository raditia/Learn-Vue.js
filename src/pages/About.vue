<template>
  <div>
      <h2>Type in your name:</h2>
      <input type="text" v-model="dataA">
      <!-- <h2><a href="http://github.com/raditia" target="_blank">{{ msg }}</a></h2> -->
      <!-- <h1>Data: {{ dataA }}</h1> -->
      <h1 v-if="dataB !=''">Hello,  {{ dataB }}!</h1>
  </div>

</template>

<script>
export default {
  name: 'About',
  data () {
      return {
        msg: '@raditia',
        dataA: ''
        }
    },
    computed: {
        dataB: function() {
            // return this.msg + this.dataA
            return this.dataA
        }
    },
    watch: {

        dataB: function(value) {

            console.log('Hey! I am new value: ' + value)
        }
    }
  
}
</script>

<style>

</style>


