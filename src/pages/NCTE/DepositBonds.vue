<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-24">DEPOSIT BONDS</div>
    <a href="https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/depositbonds/Deposit-bonds.jpeg" download >check</a>
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
      ]
    }
  },
  methods: {
    onShare(index) {
      // this.$router.go(this.links[index])
      window.open(this.links[index], '_blank');
    },
    onDownload (index) {
      // const url = window.URL.createObjectURL(new Blob([this.links[index]]))
      // const link = document.createElement('a')
      // link.href = url
      // link.setAttribute('download', 'Deposit Bonds')
      // document.body.appendChild(link)
      // link.click()
      const fileUrl = this.links[index]
//       const link = document.createElement('a');
// link.href = fileUrl
// link.download = "test.txt";
// link.click();
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
    this.downloadFiles(fileUrl, 'abc')
    },
    downloadFiles(fileURL, fileName) {
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        var filename = fileURL.substring(fileURL.lastIndexOf('/')+1);
        save.download = fileName || filename;
	       if ( navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
				document.location = save.href;
// window event not working here
			}else{
		        var evt = new MouseEvent('click', {
		            'view': window,
		            'bubbles': true,
		            'cancelable': false
		        });
		        save.dispatchEvent(evt);
		        (window.URL || window.webkitURL).revokeObjectURL(save.href);
			}
    }

    // for IE < 11
    else if ( !! window.ActiveXObject && document.execCommand)     {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
    }
}
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 500px;
  height: 700px;
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
