<template>
  login
  <form @submit.prevent = "Login">
      <input v-model="email" type="text" placeholder="email...">
      <input v-model="password" type="password" placeholder="password...">
      <input type="submit" value="login">
      <p>need an account <router-link to="/register">register here</router-link></p>
  </form>
</template>

<script>
import {ref} from 'vue'
import firebase from 'firebase'
export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const Login = () => {
      firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then(data => console.log(data))
      .then(err => console.log(err.message))
    }
    return {email, password, Login}
  }
}
</script>

<style>

</style>