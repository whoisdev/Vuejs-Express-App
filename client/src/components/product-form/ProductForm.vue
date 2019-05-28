<template>
    <q-form
        @submit="onSubmit"
        class="q-gutter-md"
    >
        <q-input
            filled
            v-model="product.mutableProductTitle"
            label="Product Title"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
        />


        <q-input
            filled
            v-model="product.mutableProductPrice"
            label="Product Price"
            lazy-rules
        />
        <q-select
            filled
            v-model="product.mutableSize"
            multiple
            :options="options"
            label="Size"
        />
        <div class="q-pa-md q-gutter-sm">
            <q-editor v-model="product.mutableEditor" min-height="5rem" />
            <q-card flat bordered>
                <q-card-section>
                <pre style="white-space: pre-line" v-html="product.mutableEditor"></pre>
                </q-card-section>
            </q-card>
        </div>
        <q-input
            @input="val => { product.mutableImages = val }"
            multiple
            filled
            type="file"
            hint="Select Multiple Files at once"
            :rules="[ product.mutableImages.length <= 0 || 'Please Enter at least one image']"
        />
        <q-toggle v-model="product.mutableVisible" @click="product.mutableVisible = !product.mutableVisible" label="Visible" />
        <q-toggle v-model="product.mutableFeatured" @click="product.mutableFeatured = !product.mutableFeatured" label="Featured" />

        <div>
            <q-btn label="Submit" type="submit" color="primary"/>
        </div>
    </q-form>
</template>

<script>
import { 
    QEditor, 
    QToggle 
} from 'quasar';
export default {
    components : {
        QEditor, 
        QToggle 
    },
    props : {
        productTitle : {
            type : String,
            required : true
        },
        productPrice : {
            type : String,
            required : true
        },
        editor : {
            type : String,
            required : true
        },
        images : {
            type : Array,
            required : true
        },
        visible : {
            type : Boolean,
            required : true
        },
        featured : {
            type : Boolean,
            required : true
        }
    },
    created (){
        const vm = this.productTitle;
        console.log(vm);
    },
    data () {
        return {
            multiple : null,
            options : ['XS','S','M','L','XL','XXL'],
            product : {
                mutableProductTitle: this.productTitle,
                mutableProductPrice: this.productPrice,
                mutableEditor : this.editor,
                mutableImages : this.images,
                mutableVisible : this.visible,
                mutableSize : [],
                mutableFeatured : this.featured
            }
        }
    },
    methods : {
        onSubmit(){
            this.$emit('form-submitted', this.product)
        }
    }
}
</script>

