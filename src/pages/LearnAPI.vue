<template>
  <div>
      Hey, I'm API!
      <button @click="callApi">Call API</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LearnAPI',
    data () {
        return {

        }
    },
    methods: {
        callApi: function () {
            const URL = 'https://ghibliapi.herokuapp.com/films'

            //call api
            axios.get(URL)
            .then(response => {
                console.log('Hi', response)
            })
            .catch(error => {
                console.log(error)
            })
            console.log('call api with ', axios)
        }
    }
  
}
</script>

<style>

</style>
