<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-24">BEST PRACTICES</div>
    <div class="row align-center items-center justify-start q-mt-md q-gutter-md">
      <div v-for="(bestPractice, key) in bestPractices" :key="key">
        <a :href="bestPractice.link" target="_blank">
        <div class="col-2  column items-center ">
          <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/helper-images/PdfLogo.png" alt="">
          <div class="fs-12 q-mt-md doc-title text-center">{{bestPractice.name}}</div>
        </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BestPractices',
  data () {
    return {
      bestPractices: [
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/bestpractices/Best+Practice+2017-18.pdf', name: 'Best Practice 2017-18'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/bestpractices/Best+Practice+2018-19.pdf', name: 'Best Practice 2018-19'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/bestpractices/Best+Practice+2019-20.pdf', name: 'Best Practice 2019-20'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/bestpractices/Best+Practice+2020-21.pdf', name: 'Best Practice 2020-21'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/bestpractices/Best+Practice+2021-22.pdf', name: 'Best Practice 2021-22'},
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
