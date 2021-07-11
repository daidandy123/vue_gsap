<template>
  Home
  <h1>welcome, Hi {{name}} </h1>
  <button @click="Logout">logout</button>
</template>

<script>
import {ref, onBeforeMount} from 'vue'
import firebase from 'firebase'

export default {
  setup() {
    const user = firebase.auth().currentUser
    const name = ref('')
    onBeforeMount(() => {
      if(user) {
        name.value = user.email.split('@')[0]
      }
    })
  const Logout = () => {
    firebase.auth().signOut().then(() => console.log('signout'))
  }
    return {Logout, name}
  }
}
</script>

<style>

</style>
