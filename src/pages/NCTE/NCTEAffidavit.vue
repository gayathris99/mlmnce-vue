<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-24">NCTE AFFIDAVITS</div>
    <div class="row align-center items-center justify-evenly q-mt-md q-gutter-md">
        <div class="column">
          <div class="row justify-end">
            <q-icon name="download" class="cursor-pointer" size="sm" @click="onDownload"></q-icon>
            <q-icon name="share" class="cursor-pointer" size="sm"  @click="onShare"></q-icon>
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
    onDownload (index) {
      // const url = window.URL.createObjectURL(new Blob([this.links[index]]))
      // const link = document.createElement('a')
      // link.href = url
      // link.setAttribute('download', 'Deposit Bonds')
      // document.body.appendChild(link)
      // link.click()
      const fileUrl = this.links[index]
      const link = document.createElement('a');
link.href = fileUrl
link.download = "test.txt";
link.click();
    //   fetch(fileUrl, {
    //   method: 'GET'
    //   }).then(resp => resp.blob())
    // .then(blob => {
    //     const url = window.URL.createObjectURL(blob);
    //     const a = document.createElement('a');
    //     a.style.display = 'none';
    //     a.href = url;
    //     a.download = "name"; // the filename you want
    //     document.body.appendChild(a);
    //     a.click();
    //     window.URL.revokeObjectURL(url);
    // })
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 950px;
  height: 700px;
  border: 0.5px solid grey;
    @media only screen and (max-width: $breakpoint-sm-max) {
      width: 500px;
      height: 400px;
    }
    @media only screen and (max-width: $breakpoint-xs-max) {
      width: 300px;
      height: 400px;
    }
}
a {
  text-decoration: none;
  color: $dark;
}
</style>
