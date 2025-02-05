import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.filter('localize', localizeFilter)
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)
Vue.directive('tooltip', tooltipDirective)


// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAXVF9rNjRJMefpT07uEbgoqUBUFfqsIks",
    authDomain: "vue-practice-24bb1.firebaseapp.com",
    databaseURL: "https://vue-practice-24bb1.firebaseio.com",
    projectId: "vue-practice-24bb1",
    storageBucket: "vue-practice-24bb1.appspot.com",
    messagingSenderId: "296287024817",
    appId: "1:296287024817:web:929dcbe6eb7baee9299490",
    measurementId: "G-1WXHFWQF3Y"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig)

  let app

  firebase.auth().onAuthStateChanged(()=> {
    if (!app) {app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
    }
  })



