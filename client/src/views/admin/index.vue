<template>
<div>
   <!-- Navigation on the Admin Page -->
   <navigation>
      <dropdown/>
      <!-- Drop down on navigation -->
   </navigation>
   <!-- Navigation ends           -->
   <!-- Content on the admin page -->
   <div class="container">
      <div class="row">
         <!-- Cards on admin page -->
         <template v-for="(product,index) in productData">
            <card 
               :key="index"
               :id = "product.productId"
               :image="product.uploads[0]"
               >
               <!-- Card component -->
               <q-btn flat round color="teal" icon="add_shopping_cart" />
               <q-btn flat round color="primary" label="View" 
                  :to="getProductLink(product.productId)" />
               <q-btn flat round color="primary" icon="edit" 
                  :to="getEditLink(product.productId)"/>
            </card>
            <!-- End of Card component   -->
         </template>
         <!-- End of Admin page cards -->
      </div>
   </div>
   <!-- Content on the admin page ends -->
</div>
</template>

<script>

/**
 * Importing Card, Navigation, Dropdown component
 */
import navigation from '../../components/navigation/shared/navigation';
import card from '../../components/card/card';
import dropdown from '../../components/dropdown/dropdown';


export default {
    name : 'Admin-Index',
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
    /**
     * Sends AJAX to load all the products
     * @param void
     * @returns void
     */
    mounted(){
        let baseURI = '/api/products/'
        this.$http.get(baseURI)
        .then((result) => {
            this.productData = result.data;
        })
    },
    methods : {
        /**
         * Gets the link to view product
         * @param String id
         * @returns String link to the product
         */
        getProductLink (id) {
            return `/product/${id}`;
        },
        /**
         * Gets the link to edit a product
         * @param String id
         * @returns String link to the edit product page
         */
        getEditLink (id){
            return `admin/product/edit/${id}`;
        }
    }
}
</script>
