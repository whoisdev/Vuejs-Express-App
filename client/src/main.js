import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$http = axios
import './styles/quasar.styl'
import 'quasar/dist/quasar.ie.polyfills'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import router from './router';

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
import { strict } from 'assert';

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

Vue.config.productionTip = false

new Vue({
  router : router,
  render: h => h(App)
}).$mount('#app')
