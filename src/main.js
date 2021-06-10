import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from '@/filters/date.filter';
import DatePicker from 'vue2-datepicker';
import 'materialize-css/dist/js/materialize.min';
// import 'vue-search-select/dist/VueSearchSelect.css'

export const eventEmitter = new Vue();

Vue.use(DatePicker);

Vue.config.productionTip = false;

Vue.filter('date', dateFilter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
