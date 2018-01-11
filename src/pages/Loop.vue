<<template>
  <div>
      <ul>
          <router-link v-bind:to="item.url" v-for="item in menus"
          :class="{red:item.label == 'Home'}">
              <a>{{item.label}}</a> <br>
          </router-link>
        </ul>
              </div>
</template>

<script>
export default {
    name: "loop",
    data () {
        return {
            list: [1,2,3,4],
            menus: {
                home: {
                    url: '/',
                    label: 'Home'
                },
                about: {
                    url: '/about',
                    label: 'About'
                },
                learnapi: {
                    url: '/learn-api',
                    label: 'Learn API'
                },
                loop: {
                    url: '/loop',
                    label: 'Loop'
                }
            }
        }
    }
  
}
</script>

<style>
a.red {
    color: red;
}

</style>
