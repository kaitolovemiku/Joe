import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import * as firebase from "firebase";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSession from 'vue-session'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)
Vue.config.productionTip = false;
Vue.use(VueSession)

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBhUVY9GJKhk6RAOAbsPHHr1Oti_z2roWU",
    authDomain: "senior-store-bba07.firebaseapp.com",
    databaseURL: "https://senior-store-bba07.firebaseio.com",
    projectId: "senior-store-bba07",
    storageBucket: "senior-store-bba07.appspot.com",
    messagingSenderId: "161582892653",
    appId: "1:161582892653:web:733e526783f30c5a34e164"
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
