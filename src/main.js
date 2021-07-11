import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBRjn9OYH5NdQUpY7ghqx4yiOSXZeZlS3k",
    authDomain: "auth-ed17b.firebaseapp.com",
    projectId: "auth-ed17b",
    storageBucket: "auth-ed17b.appspot.com",
    messagingSenderId: "1049215848460",
    appId: "1:1049215848460:web:35a7c9edfbb4ca76e49e29"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')
