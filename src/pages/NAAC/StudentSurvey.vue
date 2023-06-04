<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-30 font-roboto">STUDENT SATISFACTION SURVEY</div>
    <div class="row align-center items-center justify-start q-mt-md q-gutter-md">
      <div v-for="(survey, key) in surveys" :key="key">
        <router-link :to="{ name: 'files', params: { fileName: survey.fileName },}" target="_blank">
        <div class="col-2  column items-center ">
          <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/helper-images/PdfLogo.png" alt="">
          <div class="fs-12 q-mt-md doc-title text-center">{{survey.name}}</div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentSurvey',
  data () {
    return {
      surveys: [
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/studentsurvey/SSS++2016-17.pdf', name: 'SSS 2016-17', fileName: 'SSS-2016-17'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/studentsurvey/SSS++2017-18.pdf', name: 'SSS 2017-18', fileName: 'SSS-2017-18'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/studentsurvey/SSS++2018-19.pdf', name: 'SSS 2018-19', fileName: 'SSS-2018-19'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/studentsurvey/SSS+2019-20.pdf', name: 'SSS 2019-20', fileName: 'SSS-2019-20'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/studentsurvey/SSS+2020-21.pdf', name: 'SSS 2020-21', fileName: 'SSS-2020-21'},
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
