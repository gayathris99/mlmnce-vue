<template>
  <div :class="isMobile ? 'q-pa-md' :  'q-pa-lg'">
    <div style="color:#303a57" class="fw-500 fs-24">DEPOSIT BONDS</div>
    <div class="row align-center items-center q-mt-md q-gutter-md" :class="isMobile ? 'justify-center' :  'justify-start'">
        <div v-for="(file, key) in links" :key="key">
          <div class="column">
            <div class="row justify-end q-mb-sm q-gutter-x-xs">
              <q-icon name="download" class="cursor-pointer" size="sm" @click="onDownload(key)"></q-icon>
              <q-icon name="open_in_new" class="cursor-pointer" size="sm"  @click="onShare(key)"></q-icon>
            </div>
            <img :src="file"  alt="">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuditReports',
  data () {
    return {
      links: [
        'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/depositbonds/Deposit-bonds.jpeg',
        'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/depositbonds/Ncte-Deposits.png'
      ],
      downloadLinks: [
        'https://www.googleapis.com/drive/v3/files/1ObyeDhMd_OIy4O5Fv7wTjgw-p7wbaKui?alt=media&key=AIzaSyBBlQv6sK0y25G-P1D8DxoehG60kp7jHiE',
        'https://www.googleapis.com/drive/v3/files/1fj2X7zDWUafP1WPJywWTYN2ME4U_20k8?alt=media&key=AIzaSyBBlQv6sK0y25G-P1D8DxoehG60kp7jHiE'
      ]
    }
  },
  computed: {
    isMobile () {
        return this.$q.screen.lt.sm
      }
  },
  methods: {
    onShare(index) {
      // this.$router.go(this.links[index])
      window.open(this.links[index], '_blank');
    },
    onDownload (index) {
      window.open(this.downloadLinks[index], '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  max-height: 600px;
  height: auto;
  border: 0.5px solid grey;
    @media only screen and (max-width: $breakpoint-sm-max) {
      // width: 250px;
      max-height: 300px;
      height: auto;
    }
    @media only screen and (max-width: $breakpoint-xs-max) {
      // width: 250px;
      // max-height: 400px;
      width: 100%;
      height: auto;
    }
}
a {
  text-decoration: none;
  color: $dark;
}
</style>
