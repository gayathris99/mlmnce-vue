<template>
  <div class="">
    <!-- <q-btn class="q-mx-md" flat @click="goBack">
      <q-icon left size="sm" name="arrow_back" />
      <label for="">BACK</label>
    </q-btn> -->
    <div class="embed column align-center items-center ">
      <iframe :src="fileLinks[$route.params.fileName]"  allow="autoplay"></iframe>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FileLayout',
  mounted () {
    console.log(this.$route.params.fileName);
  },
  data () {
    return {
      fileLinks: {
        'NCTE-Affidavits': 'https://drive.google.com/file/d/1EuMB5zNpIBV-8JvaSYNSXoGCTRM_l2eo/preview',

        'NAAC-Certificate': 'https://drive.google.com/file/d/1zwcdRwsau9Bvc-3Fh6HwavhjS1f_c8oD/preview',

        'Academic-Plan-2016-17': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/naac/ACADEMIC+PLAN+2016-17.pdf',
        'Academic-Plan-2017-18': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/naac/ACADEMIC+PLAN+2017-18.pdf',
        'Academic-Plan-2018-19': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/naac/ACADEMIC+PLAN+2018-19.pdf',
        'Academic-Plan-2019-20': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/naac/ACADEMIC+PLAN+2019-20.pdf',
        'Academic-Plan-2020-21': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/naac/ACADEMIC+PLAN+2020-21.pdf',
        'Academic-Plan-2021-22': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/naac/ACADEMIC+PLAN+2021-22.pdf',

        'IQAC-Report-2016-17': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqacreports/IQAC+Report+2016-17.pdf',
        'IQAC-Report-2017-18': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqacreports/IQAC+Report+2017-18.pdf',
        'IQAC-Report-2018-19': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqacreports/IQAC+Report+2018-19.pdf',
        'IQAC-Report-2019-20': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqacreports/IQAC+Report+2019-20.pdf',
        'IQAC-Report-2020-21': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqacreports/IQAC+Report+2020-21.pdf',
        'IQAC-Report-2021-22': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqacreports/IQAC+Report+2021-22.pdf',

        'IQAC-Composition-2016-17': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqaccomposition/IQAC+Compositin+2016-17.pdf',
        'IQAC-Composition-2017-18': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqaccomposition/IQAC+Compositin+2017-18.pdf',
        'IQAC-Composition-2018-19': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqaccomposition/IQAC+Compositin+2018-19.pdf',
        'IQAC-Composition-2019-20': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqaccomposition/IQAC+Compositin+2019-20.pdf',
        'IQAC-Composition-2020-21': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqaccomposition/IQAC+Compositin+2020-21.pdf',
        'IQAC-Composition-2021-22': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/iqaccomposition/IQAC+Compositin+2021-22.pdf',

        'AQAR-2016-17': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/aqar/AQAR+2016.pdf',
        'AQAR-2017-18': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/aqar/AQAR+2017-18+Report.pdf',
        'AQAR-2018-19': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/aqar/AQAR+2018-19.pdf',
        'AQAR-2019-20': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/aqar/AQAR+2019-20.pdf',
        'AQAR-2020-21': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/aqar/AQAR+2020-21.pdf',
        'AQAR-2021-22': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/aqar/AQAR+2021-22.pdf',

        'Best-Practice-2017-18': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/bestpractices/Best+Practice+2017-18.pdf',
        'Best-Practice-2018-19': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/bestpractices/Best+Practice+2018-19.pdf',
        'Best-Practice-2019-20': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/bestpractices/Best+Practice+2019-20.pdf',
        'Best-Practice-2020-21': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/bestpractices/Best+Practice+2020-21.pdf',
        'Best-Practice-2021-22': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/bestpractices/Best+Practice+2021-22.pdf',

        'SSS-2016-17': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/studentsurvey/SSS++2016-17.pdf',
        'SSS-2017-18': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/studentsurvey/SSS++2017-18.pdf',
        'SSS-2018-19': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/studentsurvey/SSS++2018-19.pdf',
        'SSS-2019-20': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/studentsurvey/SSS+2019-20.pdf',
        'SSS-2020-21': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/studentsurvey/SSS+2020-21.pdf',

        'Self-Declaration': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/others/Self+Declaration.pdf',
        'Undertaking': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/others/undertaking.pdf'
      },
    }
  },
  props: {
    fileLink: {
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      getFileLink: 'college/getFileLink'
    })
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.embed {
  width: 100vw;
  height: 100vh;

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
