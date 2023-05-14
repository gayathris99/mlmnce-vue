<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-24">NCTE RECOGNITION</div>
    <!-- <q-btn label="download" @click="downloadItem"></q-btn> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      // pdfLink: require("../../assets/NAACCertificate.pdf")
    }
  },
  methods: {
    downloadItem () {
    //   axios({
    //     url: this.pdfLink, // File URL Goes Here
    //     method: 'GET',
    //     responseType: 'blob',
    // }).then((res) => {
    //                  var FILE = window.URL.createObjectURL(new Blob([res.data]));

    //                  var docUrl = document.createElement('x');
    //                  docUrl.href = FILE;
    //                  docUrl.setAttribute('download', 'file.pdf');
    //                  document.body.appendChild(docUrl);
    //                  docUrl.click();
    //             });
      var FILE = window.URL.createObjectURL(new Blob([this.pdfLink]));

      var docUrl = document.createElement('x');
      docUrl.href = FILE;
      docUrl.setAttribute('download', 'file.pdf');
      document.body.appendChild(docUrl);
      docUrl.click();
  }
}
}
</script>
