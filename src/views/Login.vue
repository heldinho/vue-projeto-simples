<template>
  <div>
    {{ email }}
    <br />
    {{ password }}
    <br />
    <email-pass :email.sync="email" :password.sync="password" />
  </div>
</template>

<script>
import EmailPass from '@/components/EmailPass'
export default {
  name: 'Login',
  components: {
    EmailPass
  },
  data() {
    return {
      email: 'helder.passos@hfpsis.io',
      password: ''
    }
  },
  methods: {}
}
</script>

<style scoped></style>
