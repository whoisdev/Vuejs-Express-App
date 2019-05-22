<template>
  <div class="q-pa-md col-12 col-md-7 col-sm-7">
    <q-carousel
      swipeable
      animated
      arrows
      v-model="slide"
      thumbnails
      infinite
      class="shadow-4"
    >
      <template v-for="(image, index) in images" >
          <q-carousel-slide :key="index" :name="index" :img-src="getImage(image)" />
      </template>
    </q-carousel>
  </div>
</template>

<script>
import { 
    QCarousel, 
    QCarouselSlide
    } from 'quasar';
export default {
    name : 'Slideshow',
    components : {
        QCarousel, 
        QCarouselSlide
    },
    data (){
        return {
            slide: 1
        }
    },
    props : {
        images : Array
    },
    methods : {
        getImage (img) {
            return require(`../../../../server/uploads/${img}`);
        }
    }
}
</script>

<style>

</style>
