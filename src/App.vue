<template>
  <p>Counter: {{ trackCounter }}</p>
  <button @click="incrementCounter">Increment</button>
</template>

<script>
export default {
  methods: {
    incrementCounter() {
      // specify 'counterMod' namespace
      // before the action name
      this.$store.dispatch('counterMod/increment', 1)
    }
  },
  computed: {
    trackCounter() {
      // use getters as an array and specify
      // 'counterMod' namespace with a slash
      // before the getter method
      return this.$store.getters['counterMod/getCounter']
    }
  }
}
</script>
