<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-30 font-roboto">AUDIT REPORTS</div>
    <div class="row align-center items-center justify-start q-mt-md q-gutter-md">
      <div v-for="(auditReport, key) in auditReports" :key="key">
        <a :href="auditReport.link" target="_blank">
        <div class="col-2  column items-center ">
          <img src="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/helper-images/PdfLogo.png" alt="">
          <div class="fs-12 q-mt-md doc-title text-center">{{auditReport.name}}</div>
        </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuditReports',
  data () {
    return {
      auditReports: [
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/auditreports/Audit+Report+2019-20.pdf', name: 'Audit Report 2019-20'},
        {link: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/auditreports/Audit+report+2020-21.pdf', name: 'Audit Report 2020-21'},
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
