<template>
  singin
    <form @submit.prevent = "Register">
      <input v-model="email" type="text" placeholder="email...">
      <input v-model="password" type="password" placeholder="password...">
      <input type="submit" value="register">
      <p>hsve an account <router-link to="/login">login here</router-link></p>
  </form>
</template>

<script>
  import {ref} from 'vue'
  import firebase from 'firebase'
  export default {
    setup() {
      const email = ref('')
      const password = ref('')
      const Register = () => {
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
          .then((user) => {
            alert(user)
          })
          .catch(err => {
            console.log(err.messsage)
          })
      }
      return { email, password, Register}
    }
  }
</script>

<style>

</style>