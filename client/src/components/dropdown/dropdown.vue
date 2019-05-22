<template>
  <div class="q-pa-md">
    <q-btn-dropdown color="white" text-color="black" icon="menu">
      <q-list>
        <q-item clickable v-close-popup>
          <q-item-section>
            <router-link tag="q-item-label" to="/product/new/add">Add Product</router-link>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Order History</q-item-label>
          </q-item-section>
        </q-item>
        
      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script>
import {
  QBtnDropdown
  } from 'quasar';
export default {
    components : {
      QBtnDropdown
    },
    methods: {
      onItemClick () {
        console.log('Clicked on an Item')
      }
    }
}
</script>
