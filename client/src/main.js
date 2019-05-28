/**
 * Loading Vue, Axios and Quasar
 */
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import './styles/quasar.styl'
import 'quasar/dist/quasar.ie.polyfills'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'


/**
 * Loading Router and Config
 */
import router from './router';
import config from '../../config/config.json';

import {
  Quasar, 
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QSeparator,
  QChip,
  QInput,
  ClosePopup,
  QForm,
  QSelect,
  QCard,
  QCardSection
} from 'quasar'

/**
 * Add components, directives to Vue
 */
Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QSeparator,
    QChip,
    QInput,
    QForm,
    QSelect,
    QCard,
    QCardSection
  },
  directives: {
    ClosePopup
  },
  plugins: {
  }
 })

Vue.prototype.$http = axios
Vue.config.productionTip = false

/**
 * Global Variables
 */
const BASE_URL = config.base_url;

new Vue({
  router : router,
  render: h => h(App)
}).$mount('#app')