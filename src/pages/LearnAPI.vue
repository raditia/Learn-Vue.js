<template>
  <div>
      Hey, I'm API!
      <ul>
              <li v-for="film in films" :key="film.id">
                  {{film.title}} {{film.release_date}}
              </li>
      </ul>
      <button @click="callApi">Call API</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LearnAPI',
    data () {
        return {
            films: []
        }
    },
    methods: {
        callApi: function () {
            const URL = 'https://ghibliapi.herokuapp.com/films'

            //call api
            axios.get(URL)
            .then(response => {
                console.log('Hi', response)
                this.films = response.data
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
