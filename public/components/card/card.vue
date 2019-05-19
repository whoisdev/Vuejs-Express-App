<template>
    <div class="col-12 col-md-4 col-sm-4 content__featured">
        <q-card class="my-card q-mr-sm q-mb-sm">
        <img src="https://cdn.quasar-framework.org/img/mountains.jpg">
        <q-card-actions align="around">
            <q-btn flat round color="teal" icon="add_shopping_cart" />
            <q-btn flat round color="primary" label="view" />
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
    }
}
</script>
