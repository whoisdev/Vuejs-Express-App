<template>
    <div class="centre--align">
        <navigation>
            <dropdown></dropdown>
        </navigation>
            <h1 class="text-h4 h4">Enter Product details</h1>
        <div class="container">
            <ProductForm 
                :productTitle="formValue.productTitle"
                :productPrice="formValue.productPrice"
                :editor="formValue.editor"
                :images="formValue.images"
                :visible="formValue.visible"
                :size="formValue.size"
                :featured="formValue.featured"
                @form-submitted="onSubmit"
            ></ProductForm>
        </div>
    </div>
</template>

<script>
import navigation from '../../components/navigation/shared/navigation';
import dropdown from '../../components/dropdown/dropdown';
import ProductForm from '../../components/product-form/ProductForm';
import _ from 'lodash';

export default {
    data () {
        return {
            formValue : {
                productTitle : '',
                productPrice : '',
                multiple: null,
                editor: 'Enter Product Description Here',
                images : [],
                visible : true,
                size : [],
                featured : false
            }
        }
    },
    components : {
        navigation,
        dropdown,
        ProductForm
    },
    methods:{
        onSubmit(product){
            let formData = new FormData();
            formData.append('productTitle', product.mutableProductTitle);
            formData.append('productPrice', product.mutableProductPrice);
            formData.append('productDescription', product.mutableEditor);
            formData.append('productVisible', product.mutableVisible);
            formData.append('productSize', product.mutableSize);
            formData.append('productFeatured', product.mutableFeatured);
            _.forEach(product.mutableImages, file => {
                formData.append('files', file);
            })
            let baseURI = 'http://localhost:3000/api/product/new/add';
            this.$http.post(baseURI, formData);
        }
    }
}
</script>

<style>

</style>
