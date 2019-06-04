<template>
    <div>
        <navigation>
            <q-btn class="q-pa-md shadow-0" text-color="white" icon="shopping_cart"></q-btn>
        </navigation>
        <div class="container">
            <div class="row product__detail">
                <Slideshow
                    class="detail__slideshow"
                    :images="productData.uploads"
                />
                <div class="col-12 col-md-5 col-sm-5 centre--align detail__content">
                    <h3 class="text-h4 h4 detail__header">{{ productData.productTitle }}</h3>
                    <div class="detail__buttons">
                        <q-btn class="width--max" icon="shopping_basket" style="background: #f06595; color: white" label="Buy Now" />
                        <q-btn class="width--max margin-top--sm" icon="add_shopping_cart" color="primary" label="Add to Cart" />
                    </div>
                    <div class="detail__size margin-top--sm">
                        <q-separator/>
                        <span class="text-weight-regular">SIZE</span>
                        <template v-for="size in getProductSize()">
                            <q-chip :key="size" class="text-uppercase" color="teal" text-color="white">
                                {{size}}
                            </q-chip>
                        </template>
                    </div>
                </div>
                <div class="col-12">
                    <q-separator/>
                    <div class="text-body1" :v-html="productData.productDescription">
                        {{productData.productDescription}}
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
import Slideshow from '../../components/slideshow/Slideshow';
import navigation from '../../components/navigation/shared/navigation';

export default {
    name : 'Product-Details',
    components : {
        Slideshow,
        navigation
    },data () {
        return {
            productData : []
        }
    },
    mounted() {
        let baseURI = `${this.$BASE_URL}/api/product/${this.$route.params.id}`;
        this.$http.get(baseURI)
        .then((result) => {
            this.productData = result.data;
        })
    },
    methods : {
        getProductSize(){
            if(this.productData.productSize!=undefined){
                return this.productData.productSize.split(',');
            }
        }
    }
}
</script>
