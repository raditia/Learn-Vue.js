<template>
<div class="probs-and-event">
    <div>
        {{dataParent}}
    </div>
    <input type="text" v-model="dataParent">

    <!-- child component uses parent data -->
    <ChildComponent :someProps="dataParent" @clickMe="someMethod">

    </ChildComponent>
</div>

</template>

<script>
import ChildComponent from '@/components/ChildComponent'

export default {
    name: 'BelajarProps',
    component: (ChildComponent),
    data () {
        return {
            dataParent: 'I am parent'
        }
    },
    methods: {
        someMethod (param) {
            alert(param)
        }
    },
    watch: {
        dataParent: function () {
            console.log(this.dataParent)
        }
    }
  
}
</script>

<<style>

</style>

