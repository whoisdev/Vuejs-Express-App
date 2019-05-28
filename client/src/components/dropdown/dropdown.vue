<template>
<div class="q-pa-md">
  <!-- Dropdown -->
   <q-btn-dropdown color="white" text-color="black" icon="menu">
     <!-- List on the dropdown -->
      <q-list>
        <!-- Items on the dropdown -->
         <q-item clickable v-close-popup>
            <q-item-section>
               <router-link tag="q-item-label" to="/admin/product/add">Add Product</router-link>
            </q-item-section>
         </q-item>
         <q-item clickable v-close-popup>
            <q-item-section>
               <q-item-label>Order History</q-item-label>
            </q-item-section>
         </q-item>
         <!-- Items ends on the dropdown -->
      </q-list>
      <!-- List ends on the dropdown -->
   </q-btn-dropdown>
   <!-- Dropdown ends -->
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
