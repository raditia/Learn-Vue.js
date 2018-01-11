<<template>
  <ChildComponent>

  </ChildComponent>

</template>

<script>
import ChildComponent from '@/components/ChildComponent'
export default {
    name: 'BelajarProps',
    component: (ChildComponent),

    data () {
        return {
            dataParent: ''
        }
    },
    methods: {
        clickMe () {

        }
    }
  
}
</script>

<<style>

</style>

