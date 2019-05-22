<template>
    <div>
        <navigation @search-triggered="searchProducts">
            <q-btn class="q-pa-md shadow-0" text-color="white" icon="shopping_cart"></q-btn>
        </navigation>
        <div class="container">
            <div class="row">
                <template v-for="(product,index) in productData">
                <card 
                :key="index"
                :id = "product.productId"
                :image="product.uploads[0]"
                />
                </template>
            </div>
        </div>
    </div>
</template>
<style scoped>
</style>

<script>
import card from '../../components/card/card';
import navigation from '../../components/navigation/shared/navigation';
export default {
    name : 'products',
    components : {
        card,
        navigation
    },
    mounted(){
        if(this.$route.query.query){
            this.searchProducts(this.$route.query.query)
        } else{
            let baseURI = '/api/products/'
            this.$http.get(baseURI)
            .then((result) => {
                this.productData = result.data;
            })
        }
    },
    data () {
        return {
            productData : []
        }
    },
    methods : {
        searchProducts (searchQuery) {
            let baseURI = `/api/products/${searchQuery}`;
            this.$http.get(baseURI)
            .then((result) => {
                this.productData = result.data;
            })
            this.$router.push(`?query=${searchQuery}`);
        }
    }
}
</script>