<template>
<div class="col-12 col-md-4 col-sm-4 card">
   <q-card class="my-card q-mr-sm q-mb-sm">
      <!-- Image on the card -->
      <img :src="$BASE_URL + '/' + image">
      <!----------------------->
      <!-- Action on the Card -->
      <q-card-actions align="around">
         <slot>
            <!-- Buttons on the card -->
         </slot>
      </q-card-actions> 
      <!-- Card Actions ends -->
   </q-card>
</div>
</template>

<style scoped>
img{
    min-height: 40vh !important;
    max-height: 40vh !important
}
</style>

<script>

/**
 * Importing Card and CardActions from Quasar
 */
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
    }
}
</script>
