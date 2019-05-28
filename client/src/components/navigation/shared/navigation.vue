<template>
<!-- Shared Navigation -->
<div class="row navigation centre--align">
    <!-- Brand name on navigation -->
   <div class="col-12 col-md-2 col-sm-2 q-pa-md navigation__title">
      <router-link to="/" class="text-h6 h6"><strong>Lalita</strong> Sakhi</router-link>
   </div>
   <!-- Brand name ends -->
   <!-- Seearch Bar on Navigation -->
   <div class="col-8 col-md-5 col-sm-5 navigation__input">
      <q-input  v-on:keyup.enter="keyPressed()" v-model="searchQuery" dark color="white" bottom-slots label="Search Items"/>
   </div>
   <!-- Search bar ends -->
   <!-- Search Button  -->
   <div class="col-4 col-md-2 col-sm-2 q-pa-md search__button">
      <q-btn @click="keyPressed()" class="" style="background: #FF0080; color: white" label="Search" />
   </div>
   <!-- Search Button ends -->
   <!-- Dropdown on the navigation -->
   <div class="col-12 col-md-2 col-sm-2 navigation__dropdown">
      <slot>
      </slot>
   </div>
   <!-- Dropdown ends -->
</div>
<!-- Navigation ends -->
</template>

<style scoped>
.navigation{
    background: #f06595 !important;
    padding: 0 1rem;
}
</style>

<script>
export default {
    name : 'navigation',
    components : {
    },
    data (){
        return {
            searchQuery : ''
        }
    },
    methods : {
        /**
         * Triggers parent component search event
         * @param void
         * @returns void
         */
        keyPressed () {
             this.$emit('search-triggered', this.searchQuery)
        }
    }
}
</script>