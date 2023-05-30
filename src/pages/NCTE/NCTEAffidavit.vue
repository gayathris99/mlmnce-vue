<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-24">NCTE AFFIDAVITS</div>
    <div class="row align-center items-center justify-start q-mt-md q-gutter-md">
        <div class="ncte-affidavit">
          <div class="row justify-end q-mb-sm q-gutter-x-xs">
            <q-icon name="download" class="cursor-pointer" size="sm" @click="onDownload"></q-icon>
            <q-icon name="open_in_new" class="cursor-pointer" size="sm"  @click="onShare"></q-icon>
          </div>
          <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/affidavit/NCTE-Affidavit.png"  alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuditReports',
  data () {
    return {
      links: ['https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/affidavit/NCTE-Affidavit.pdf']
    }
  },
  methods: {
    onShare() {
      window.open('https://drive.google.com/file/d/1EuMB5zNpIBV-8JvaSYNSXoGCTRM_l2eo/view', '_blank');
    },
    onDownload () {
      window.open('https://www.googleapis.com/drive/v3/files/1EuMB5zNpIBV-8JvaSYNSXoGCTRM_l2eo?alt=media&key=AIzaSyBBlQv6sK0y25G-P1D8DxoehG60kp7jHiE', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.ncte-affidavit {
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
  color: $dark;
}
</style>
