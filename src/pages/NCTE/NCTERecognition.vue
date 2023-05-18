<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-24">NCTE RECOGNITION</div>
      <div class="row align-center items-center q-mt-md q-gutter-md" :class="isMobile ? 'justify-center' : 'justify-start'">
        <div v-for="(file, key) in files" :key="key">
          <div class="column">
            <div class="row justify-end">
              <q-icon name="download" class="cursor-pointer" size="sm" @click="onDownload(0)"></q-icon>
              <q-icon name="share" class="cursor-pointer" size="sm"  @click="onShare(file.fileLink)"></q-icon>
            </div>
            <img :src="file.image"  alt="">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NCTERecognition',
  data () {
    return {
      files: [
        {
          image: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/recognition/NCTE-Recognition.png',
          fileLink: 'https://drive.google.com/file/d/1_GgOBDDNevGIHsedBDsq4Y_5Mj9TnhED/view'
        },
        {
          image: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/recognition/NCTE-AOS00330-B-Ed.jpg',
          fileLink: 'https://drive.google.com/file/d/1Wjuganaa8A4431dBUHB2uAbxkCvlHn6P/view'
        },
        {
          image: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/recognition/New-NCTE-Recognition.jpg',
          fileLink: 'https://drive.google.com/file/d/1EtqExIftNNPlyy_KzZIV09FXuo9TNf6d/view'
        }
      ]
    }
  },
  methods: {
    onShare (link) {
      window.open(link, '_blank')
    }
  },
  computed: {
    isMobile () {
      return this.$q.screen.lt.sm
    },
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 500px;
  height: 700px;
  border: 0.5px solid grey;
    @media only screen and (max-width: $breakpoint-xs-max) {
      width: 250px;
      height: 400px;
    }
}
</style>
