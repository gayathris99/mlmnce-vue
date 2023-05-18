<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-24">DEPOSIT BONDS</div>
    <div class="row align-center items-center justify-evenly q-mt-md q-gutter-md">
        <div class="column">
          <div class="row justify-end">
            <q-icon name="download" class="cursor-pointer" size="sm" @click="onDownload(0)"></q-icon>
            <q-icon name="share" class="cursor-pointer" size="sm"  @click="onShare(0)"></q-icon>
          </div>
          <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/depositbonds/Deposit-bonds.jpeg"  alt="">
        </div>
        <div class="column">
          <div class="row justify-end">
            <q-icon name="download" class="cursor-pointer" size="sm" @click="onDownload(1)"></q-icon>
            <q-icon name="share" class="cursor-pointer" size="sm" @click="onShare(1)"></q-icon>
          </div>
          <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/depositbonds/Ncte-Deposits.png"  alt="">
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
  width: 500px;
  height: 700px;
  border: 0.5px solid grey;
    @media only screen and (max-width: $breakpoint-xs-max) {
      width: 250px;
      height: 400px;
    }
}
a {
  text-decoration: none;
  color: $dark;
}
</style>
