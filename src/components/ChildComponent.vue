<template>
  <div class="child-component">
      <h1>Hi! I'm child component</h1>

      
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
      someProps: {
          type:String,
          default: ''
      }
  },
  data () {
      return {
          msg: 'Welcome to lalala'
      }
  },
  methods: {
      handleClick () {
          this.$emit('clickMe', 'I pass param ya')
      }
  }
}
</script>

<style>

</style>


