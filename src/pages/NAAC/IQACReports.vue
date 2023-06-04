<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-30 font-roboto">IQAC REPORTS</div>
    <div class="row align-center items-center justify-start q-mt-md q-gutter-md">
      <div v-for="(report, key) in reports" :key="key">
        <router-link :to="{ name: 'files', params: { fileName: report.fileName },}" target="_blank">
        <div class="col-2  column items-center ">
          <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/helper-images/PdfLogo.png" alt="">
          <div class="fs-12 q-mt-md doc-title text-center">{{report.name}}</div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IQACReports',
  data () {
    return {
      reports: [
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqacreports/IQAC+Report+2016-17.pdf', name: 'IQAC Report 2016-17', fileName: 'IQAC-Report-2016-17'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqacreports/IQAC+Report+2017-18.pdf', name: 'IQAC Report 2017-18', fileName: 'IQAC-Report-2017-18'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqacreports/IQAC+Report+2018-19.pdf', name: 'IQAC Report 2018-19', fileName: 'IQAC-Report-2018-19'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqacreports/IQAC+Report+2019-20.pdf', name: 'IQAC Report 2019-20', fileName: 'IQAC-Report-2019-20'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqacreports/IQAC+Report+2020-21.pdf', name: 'IQAC Report 2020-21', fileName: 'IQAC-Report-2020-21'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqacreports/IQAC+Report+2021-22.pdf', name: 'IQAC Report 2021-22', fileName: 'IQAC-Report-2021-22'},
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
