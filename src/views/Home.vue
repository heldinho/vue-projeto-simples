<template>
  <div class="home">
    <app-contador />
    <app-form />
    <app-grid />
    <app-modal />
    <login />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/views/Login'
export default {
  name: 'Home',
  components: {
    Login
  },
  async mounted() {
    await this.$nextTick()
    console.log('Teste nextTick')
  }
}
</script>
