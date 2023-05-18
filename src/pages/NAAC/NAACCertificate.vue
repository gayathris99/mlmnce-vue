<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-24 q-mb-md">NAAC CERTIFICATE</div>
    <div class="column">
      <div class="row justify-end">
        <q-icon name="download" class="cursor-pointer" size="sm" @click="onDownload"></q-icon>
        <q-icon name="share" class="cursor-pointer" size="sm"  @click="onShare"></q-icon>
      </div>
      <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/naac/Certificate/NAAC-Certification.png"  alt="">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onShare () {
      window.open('https://drive.google.com/file/d/1zwcdRwsau9Bvc-3Fh6HwavhjS1f_c8oD/view', '_blank')
    },
    onDownload () {
      window.open('https://www.googleapis.com/drive/v3/files/1zwcdRwsau9Bvc-3Fh6HwavhjS1f_c8oD?alt=media&key=AIzaSyBBlQv6sK0y25G-P1D8DxoehG60kp7jHiE', '_blank')
    }
   }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 700px;
  border: 0.5px solid grey;
    @media only screen and (max-width: $breakpoint-xs-max) {
      // width: 250px;
      height: 400px;
    }
}
</style>
