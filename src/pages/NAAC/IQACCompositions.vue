<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-24">IQAC COMPOSITIONS</div>
    <div class="row align-center items-center justify-start q-mt-md q-gutter-md">
      <div v-for="(composition, key) in compositions" :key="key">
        <a :href="composition.link" target="_blank">
        <div class="col-2  column items-center ">
          <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/helper-images/PdfLogo.png" alt="">
          <div class="fs-12 q-mt-md">{{composition.name}}</div>
        </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IQACCompositions',
  data () {
    return {
      compositions: [
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqaccomposition/IQAC+Compositin+2016-17.pdf', name: 'IQAC Composition 2016-17'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqaccomposition/IQAC+Compositin+2017-18.pdf', name: 'IQAC Composition 2017-18'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqaccomposition/IQAC+Compositin+2018-19.pdf', name: 'IQAC Composition 2018-19'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqaccomposition/IQAC+Compositin+2019-20.pdf', name: 'IQAC Composition 2019-20'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqaccomposition/IQAC+Compositin+2020-21.pdf', name: 'IQAC Composition 2020-21'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqaccomposition/IQAC+Compositin+2021-22.pdf', name: 'IQAC Composition 2021-22'},
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
</style>
