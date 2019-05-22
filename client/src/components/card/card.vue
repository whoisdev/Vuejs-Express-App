<template>
    <div class="col-12 col-md-4 col-sm-4 card">
        <q-card class="my-card q-mr-sm q-mb-sm">
        <img :src="getImage()">
        <q-card-actions align="around">
            <q-btn flat round color="teal" icon="add_shopping_cart" />
            <q-btn flat round color="primary" label="View" :to="getLinkId()" />
        </q-card-actions>
        </q-card>
    </div>
</template>
<script>
import {
    QCard,
    QCardActions
} from 'quasar';
export default {
    name : 'card',
    components : {
        QCard,
        QCardActions
    },
    props : {
        id : Number,
        image : String
    },
    methods : {
        getLinkId () {
            return `/product/${this.id}`;
        },
        getImage () {
            if(this.image){
                return require(`../../../../server/uploads/${this.image}`);
            }
        }
    }
}
</script>

<style scoped>
img{
    min-height: 40vh !important;
    max-height: 40vh !important
}
</style>
