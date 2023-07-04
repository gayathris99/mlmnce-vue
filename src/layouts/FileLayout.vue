<template>
  <div class="">
    <!-- <q-btn class="q-mx-md" flat @click="goBack">
      <q-icon left size="sm" name="arrow_back" />
      <label for="">BACK</label>
    </q-btn> -->
    <div class="embed column align-center items-center ">
      <iframe v-if="isDesktop" :src="`https://docs.google.com/viewer?url=${fileLinks[$route.params.fileName]}&embedded=true`" frameborder="0" width="800" height="1200"></iframe>
      <iframe v-if="isTablet" :src="`https://docs.google.com/viewer?url=${fileLinks[$route.params.fileName]}&embedded=true`" frameborder="0" width="600" height="1200"></iframe>
      <iframe v-if="isMobile" :src="`https://docs.google.com/viewer?url=${fileLinks[$route.params.fileName]}&embedded=true`" frameborder="0" width="300" height="1200"></iframe>
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
        'NCTE-Affidavits': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/affidavit/NCTE-Affidavit.pdf',

        'NAAC-Certificate': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/naac/Certificate/NAAC+Certificate.pdf',

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
        'Undertaking': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/others/undertaking.pdf',

        'NCTE-Recognition': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/recognition/NCTE+Recognition.pdf',
        'NCTE-AOS00330-B-Ed': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/recognition/NCTE+-+AOS00330++B.Ed.pdf',
        'New-NCTE-Recognition': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/recognition/APSO3474C.pdf',

        'Deposit-Bonds': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/depositbonds/Deposit-Bonds.pdf',
        'NCTE-Deposits': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/depositbonds/Ncte-Deposits.pdf',
        'Code-Of-Professional-Ethics': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/Code+of+Professional+Ethics/Code+of+Professional+Ethics.pdf',

        'Audit-Report-2019-20': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/auditreports/Audit+Report+2019-20.pdf',
        'Audit-Report-2020-21': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/auditreports/Audit+report+2020-21.pdf',

        'Mandatory-Disclosure': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/ncte/mandatorydisclosure/NCTE+Mandatory+Disclosure+formate.pdf',

        'Students-List-2019-20': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/academia/student-community/Students+List+2019-20.pdf',
        'Students-List-2020-21': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/academia/student-community/Students+List+-+2020-21.pdf',

        'BEd-2022-23': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/syllabus/B.Ed.%2C+Syllabus+2022-23.pdf',
        '2nd-Year-BEd-2022-23': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/syllabus/2+Year+B.Ed+Syllabus+(Final+Print).pdf',
        'PLO-and-CLO': 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/pdf/syllabus/PLO.pdf',

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
    }),
    isMobile () {
      return this.$q.screen.lt.sm
    },
    isTablet () {
      return this.$q.screen.gt.xs && this.$q.screen.lt.sm
    },
    isDesktop () {
      return this.$q.screen.gt.sm
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

