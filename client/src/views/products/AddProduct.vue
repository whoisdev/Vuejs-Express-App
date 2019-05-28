<template>
    <div class="centre--align">
        <navigation>
            <dropdown></dropdown>
        </navigation>
            <h1 class="text-h4 h4">Enter Product details</h1>
        <div class="container">
            <q-form
                @submit="onSubmit"
                class="q-gutter-md"
            >
                <q-input
                    filled
                    v-model="formValue.productTitle"
                    label="Product Title"
                    lazy-rules
                    :rules="[ val => val && val.length > 0 || 'Please type something']"
                />
                <q-input
                    filled
                    v-model="formValue.productPrice"
                    label="Product Price"
                    lazy-rules
                />
                <q-select
                    filled
                    v-model="formValue.size"
                    multiple
                    :options="options"
                    label="Size"
                />
                <div class="q-pa-md q-gutter-sm">
                    <q-editor v-model="formValue.editor" min-height="5rem" />
                    <q-card flat bordered>
                        <q-card-section>
                        <pre style="white-space: pre-line" v-html="formValue.editor"></pre>
                        </q-card-section>
                    </q-card>
                </div>
                <q-input
                    @input="val => { formValue.images = val }"
                    multiple
                    filled
                    type="file"
                    hint="Select Multiple Files at once"
                    :rules="[ formValue.images.length <= 0 || 'Please Enter at least one image']"
                />
                <q-toggle v-model="formValue.visible" @click="formValue.visible = !formValue.visible" label="Visible" />
                <q-toggle v-model="formValue.featured" @click="formValue.featured = !formValue.featured" label="Featured" />
                <div>
                    <q-btn label="Submit" type="submit" color="primary"/>
                </div>
            </q-form>
        </div>
    </div>
</template>

<script>
import navigation from '../../components/navigation/shared/navigation';
import dropdown from '../../components/dropdown/dropdown';
import ProductForm from '../../components/product-form/ProductForm';
import _ from 'lodash';
import {
    QEditor,
    QToggle,
    QImg
    } from 'quasar';
export default {
    data () {
        return {
            options : ['XS','S','M','L','XL','XLL','None'],
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
        ProductForm,
        QEditor,
        QToggle,
        QImg
    },
    methods:{
        onSubmit(product){
            let formData = new FormData();
            formData.append('productTitle', this.formValue.productTitle);
            formData.append('productPrice', this.formValue.productPrice);
            formData.append('productDescription', this.formValue.editor);
            formData.append('productVisible', this.formValue.visible);
            formData.append('productSize', this.formValue.size);
            formData.append('productFeatured', this.formValue.featured);
            _.forEach(this.formValue.images, file => {
                formData.append('files', file);
            });

            let baseURI = '/api/product/new/add';
            this.$http.post(baseURI, formData);
        }
    }
}
</script>

<style>

</style>
