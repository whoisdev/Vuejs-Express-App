<template>
    <div>
        <navigation>
            <dropdown/>
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

<script>
import navigation from '../../components/navigation/shared/navigation';
import card from '../../components/card/card';
import dropdown from '../../components/dropdown/dropdown';
export default {
    components : {
        navigation,
        card,
        dropdown
    },
    data (){
        return {
            productData : []
        }
    },
    mounted(){
        let baseURI = '/api/products/'
        this.$http.get(baseURI)
        .then((result) => {
            this.productData = result.data;
        })
    }
}
</script>

<style>

</style>
