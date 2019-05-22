<template>
    <div class="row navigation centre--align">
        <div class="col-12 col-md-2 col-sm-2 q-pa-md navigation__title">
            <router-link to="/" class="text-h6 h6"><strong>Lalita</strong> Sakhi</router-link>
        </div>
        <div class="col-8 col-md-5 col-sm-5 navigation__input">
            <q-input  v-on:keyup.enter="keyPressed()" v-model="searchQuery" dark color="white" bottom-slots label="Search Items"/>
        </div>
        <div class="col-4 col-md-2 col-sm-2 q-pa-md search__button">
            <q-btn @click="keyPressed()" class="" style="background: #FF0080; color: white" label="Search" />
        </div>
        <div class="col-12 col-md-2 col-sm-2 navigation__dropdown">
            <slot>
                
            </slot>
        </div>
    </div>
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
        keyPressed () {
             this.$emit('search-triggered', this.searchQuery)
        }
    }
}
</script>