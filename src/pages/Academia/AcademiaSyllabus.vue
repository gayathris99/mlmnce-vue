<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-30 font-roboto">SYLLABUS</div>
    <!-- <div class="row align-center items-center justify-start q-mt-md q-gutter-md">
      <a href="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/syllabus/B.Ed.%2C+Syllabus+2022-23.pdf" target="_blank">
        <div class="col-4 column items-center ">
          <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/helper-images/PdfLogo.png" alt="">
          <div class="fs-12 q-mt-md">B.Ed 2022-23</div>
        </div>
      </a>
      <a href="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/syllabus/2+Year+B.Ed+Syllabus+(Final+Print).pdf" target="_blank">
        <div class="col-4 column items-center">
          <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/helper-images/PdfLogo.png" alt="">
          <div class="fs-12 q-mt-md">2nd Year B.Ed 2022-23</div>
        </div>
      </a>
    </div> -->
    <div class="row align-center items-center justify-start q-mt-md q-gutter-md">
    <div v-for="(syllabus, key) in sylabbi" :key="key">
      <router-link :to="{ name: 'files', params: { fileName: syllabus.fileName },}" target="_blank">
      <div class="col-2  column items-center ">
        <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/helper-images/PdfLogo.png" alt="">
        <div class="fs-12 q-mt-md doc-title text-center">{{syllabus.name}}</div>
      </div>
      </router-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcademiaSyllabus',
  data () {
    return {
      sylabbi: [
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/syllabus/B.Ed.%2C+Syllabus+2022-23.pdf', name: 'B.Ed 2022-23', fileName: 'BEd-2022-23'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/syllabus/2+Year+B.Ed+Syllabus+(Final+Print).pdf', name: 'B.Ed Second Year 2022-23', fileName: '2nd-Year-BEd-2022-23'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/syllabus/PLO.pdf', name: 'PLO and CLO', fileName: 'PLO-and-CLO'}
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
