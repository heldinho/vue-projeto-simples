<template>
  <div>
    <input v-model="localEmail" type="text" name="email" id="email" />
    <br />
    <input v-model="localPassword" type="password" name="pass" id="pass" />
  </div>
</template>

<script>
export default {
  name: 'EmailPass',
  props: {
    email: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      localEmail: '',
      localPassword: ''
    }
  },
  created() {
    this.localEmail = this.email
    this.localPassword = this.password
  },
  watch: {
    localEmail(newValue) {
      this.$emit('update:email', newValue)
    },
    localPassword(newValue) {
      this.$emit('update:password', newValue)
    }
  }
}
</script>

<style scoped></style>
