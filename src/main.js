import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import * as firebase from "firebase";

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)
Vue.config.productionTip = false;

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCom18-KQlRySlCXb7rIHmeG519D93y4WM",
    authDomain: "dmemo-68833.firebaseapp.com",
    databaseURL: "https://dmemo-68833.firebaseio.com",
    projectId: "dmemo-68833",
    storageBucket: "dmemo-68833.appspot.com",
    messagingSenderId: "626812106144",
    appId: "1:626812106144:web:529447d9ca229524"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
  });

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
