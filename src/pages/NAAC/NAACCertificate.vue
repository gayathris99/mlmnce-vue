<template>
  <div class="q-pa-md">
    <div style="color:#303a57" class="fw-500 fs-30 font-roboto q-mb-md">NAAC CERTIFICATE</div>
    <div class="ncte-certificate">
      <div class="row justify-end q-mb-sm q-gutter-x-sm">
        <q-icon name="download" class="cursor-pointer" size="sm" @click="onDownload"></q-icon>
        <router-link :to="{ name: 'files', params: { fileName: 'NAAC-Certificate' },}" target="_blank">
          <q-icon name="open_in_new" class="cursor-pointer" size="sm"  @click="onShare"></q-icon>
        </router-link>
      </div>
      <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/naac/Certificate/NAAC-Certification.png"  alt="">
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      setFileLink: 'college/setFileLink'
    }),
    onShare () {
      // this.$router.push({ name: 'files', params: { fileName: 'NAAC-Certificate' },})
    },
    onDownload () {
      window.open('https://www.googleapis.com/drive/v3/files/1zwcdRwsau9Bvc-3Fh6HwavhjS1f_c8oD?alt=media&key=AIzaSyBBlQv6sK0y25G-P1D8DxoehG60kp7jHiE', '_blank')
    }
   }
}
</script>

<style lang="scss" scoped>
.ncte-certificate {
   width: 75%;
  height: 700px;
  // border: 0.5px solid grey;
    @media only screen and (max-width: $breakpoint-sm-max) {
      // width: 250px;
      width: 100%;
    }
    @media only screen and (max-width: $breakpoint-xs-max) {
      // width: 250px;
      width: 100%;
      height: 400px;
    }
}
img {
  max-width: 100%;
  height: auto;
  border: 0.5px solid grey;
    @media only screen and (max-width: $breakpoint-sm-max) {
      width: 100%;
      height: auto;
    }
    @media only screen and (max-width: $breakpoint-xs-max) {
      height: auto;
    }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
