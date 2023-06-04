<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-30 font-roboto">OTHERS</div>
    <div class="row align-center items-center justify-start q-mt-md q-gutter-md">
      <div v-for="(file, key) in files" :key="key">
        <router-link :to="{ name: 'files', params: { fileName: file.fileName },}" target="_blank">
        <div class="col-2  column items-center ">
          <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/helper-images/PdfLogo.png" alt="">
          <div class="fs-12 q-mt-md doc-title text-center">{{file.name}}</div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OthersComponent',
  data () {
    return {
      files: [
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/others/Self+Declaration.pdf', name: 'Self Declaration', fileName: 'Self-Declaration'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/others/undertaking.pdf', name: 'Undertaking', fileName: 'Undertaking'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 75px;
  height: 75px;
}
a {
  text-decoration: none;
  color: $dark;
}
.doc-title {
  max-width: 100px;
}
</style>
