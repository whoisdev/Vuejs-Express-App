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
          <q-carousel-slide :key="index+image" :name="index" :img-src="encodeURI($BASE_URL + '/' + image )" />
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
    }
}
</script>

<style>

</style>
