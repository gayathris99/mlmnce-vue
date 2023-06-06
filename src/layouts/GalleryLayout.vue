<template>
  <q-layout view="lHh lpr lFf">
    <q-header>
      <the-header/>
    </q-header>
    <q-page-container>
       <div class="q-pa-lg">
        <div style="color:#303a57" class="fw-500 fs-30 font-roboto q-mb-md">GALLERY</div>
        <div v-if="galleryData.length" class="row justify-start q-gutter-md align-center items-center no-wrap">
          <div v-for="(gallery, key) in galleryData" :key="key" >
            <div class="column cursor-pointer" @click="onShowCarousel(gallery)">
              <div class="container">
                <img :src="gallery.image" alt="">
                <div class="bottom-right q-py-sm q-px-md">{{gallery.count}}</div>
              </div>
              <div style="color:#303a57" class="fs-18">{{gallery.album}}</div>
              <div style="color:grey" class="fs-12">{{gallery.eventDate}}</div>
            </div>
          </div>
        </div>
       </div>
    </q-page-container>
    <q-dialog v-model="showCarousel" full-width full-height>
        <q-carousel
          animated
          v-model="slide"
          arrows
          control-color="black"
          control-type="push"
          infinite
        >
          <template v-for="(carousel, key) in carouselData" :key="key">
            <q-carousel-slide :name="key+1" :img-src="carousel.image">
              <div class="absolute-bottom custom-caption">
              <div class="text-subtitle1">{{carousel.description}}</div>
            </div>
            </q-carousel-slide>
          </template>
        </q-carousel>
    </q-dialog>
    <the-footer class="footer"/>
  </q-layout>
</template>

<script>
import axios from 'axios'
import TheHeader from 'src/components/TheHeader.vue'
import TheFooter from 'src/components/TheFooter.vue'

export default {
  name: 'AcademiaLayout',
  components: {
    TheHeader,
    TheFooter
  },
  data () {
    return {
      galleryData: [],
      showCarousel: false,
      slide: 1,
      carouselData: []
    }
  },
  computed: {
    isMobile () {
      return this.$q.screen.lt.sm
    },
    isTablet () {
      return this.$q.screen.gt.sm && this.$q.screen.lt.md
    },
    isDesktop () {
      return this.$q.screen.gt.md
    }
  },
  methods: {
    async getGalleryDetails () {
      const { data } = await axios.get('https://platform.foxgloveteam.com/collegewebsite/gallary-details')
      this.galleryData = data
    },
    async onShowCarousel (gallery) {
      const { data } = await axios.get(`https://platform.foxgloveteam.com/collegewebsite/gallary-details/${gallery.album}`)
      this.carouselData = data
      this.showCarousel = true
    }
  },
  mounted () {
    this.getGalleryDetails()
  }
}
</script>

<style lang="scss" scoped>
.text-color-blue {
  color: #152141;
}
a {
  text-decoration: none;
  color: $dark;
}
.content {
  min-height: calc(100vh - 70px);
}
.footer {
  height: 50px;
}
.q-page-container {
.container {
  position: relative;
  img {
    width: 200px;
    height: 150px;
  }
}
}
.bottom-right {
  position: absolute;
  bottom: 6px;
  right: 0px;
  background-color: #303a57;
  color: white;
}

.q-carousel {
  .q-carousel__slide {
    display: row;
    justify-items: center;
    // width: 100px;
    // height: 200px;
    border: 20px solid white;
  }
}
.custom-caption {
  text-align: center;
  padding: 20px 0px;
  background-color: white;
}
.q-dialog {
  position: relative;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
