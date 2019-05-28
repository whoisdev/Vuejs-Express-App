<template>
<div class="centre--align">
    <navigation>
        <dropdown></dropdown>
    </navigation>
        <h1 class="text-h4 h4">Enter Product details</h1>
    <div class="container">
        {{formValue}}
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

export default {
    mounted (){
        let baseURI = `/api/product/${this.$route.params.id}`
        this.$http.get(baseURI)
        .then((result) => {
            this.formValue.productTitle = result.data.productTitle;
            this.formValue.productPrice = result.data.productPrice;
            this.formValue.editor = result.data.productDescription;
            this.formValue.images = result.data.uploads;
            this.formValue.visible = result.data.visible;
            this.formValue.size = result.data.productSize;
            this.formValue.featured = result.data.featured;
        })
    },
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
    methods : {
        onSubmit(){

        }
    }
}
</script>

<style>

</style>
