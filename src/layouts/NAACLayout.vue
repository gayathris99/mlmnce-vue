<template>
  <q-layout view="lHh lpr lFf">
    <q-header>
      <the-header/>
    </q-header>
    <q-page-container class="content">
      <div class="row align-center no-wrap">
        <div class="col-md-2 col-sm-3 q-py-md q-pl-md" v-if="!isMobile">
          <div class="fs-20 text-color-blue q-mt-md">NAAC</div>
          <div class="column q-gutter-md q-mb-lg q-mt-sm">
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'naac-certificate' ? 'text-highlight': ''" @click="this.$router.push({name: 'naac-certificate'})">NAAC Certificate</div>
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'academic-plan' ? 'text-highlight': ''" @click="this.$router.push({name: 'academic-plan'})">Annual Academic Plan</div>
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'iqac-reports' ? 'text-highlight': ''" @click="this.$router.push({name: 'iqac-reports'})">IQAC Reports</div>
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'iqac-compositions' ? 'text-highlight': ''" @click="this.$router.push({name: 'iqac-compositions'})">IQAC Compositions</div>
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'aqar' ? 'text-highlight': ''" @click="this.$router.push({name: 'aqar'})">AQAR</div>
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'best-practices' ? 'text-highlight': ''" @click="this.$router.push({name: 'best-practices'})">Best Practices</div>
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'student-survey' ? 'text-highlight': ''" @click="this.$router.push({name: 'student-survey'})">Student Satisfaction Survey</div>
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'others' ? 'text-highlight': ''" @click="this.$router.push({name: 'others'})">Others</div>
          </div>
          <div class="important-links">
            <div style="color:#ff0302" class="q-mb-sm fs-20">IMPORTANT LINKS</div>
            <div class="important-links column q-gutter-y-sm">
              <a href="https://ncte.gov.in/Website/index.aspx/" class="q-py-xs fs-14 fw-500" target="__blank">NCTE</a>
              <a href="http://www.naac.gov.in/index.php/en/" class="q-py-xs fs-14 fw-500" target="__blank">NAAC</a>
              <a href="https://www.dsert.kar.nic.in/" class="q-py-xs fs-14 fw-500" target="__blank">DSERT</a>
              <a href="https://dce.karnataka.gov.in/english" class="q-py-xs fs-14 fw-500" target="__blank">Collegiate Education</a>
              <a href="http://www.kuvempu.ac.in/kan/index.php" class="q-py-xs fs-14 fw-500" target="__blank">Kuvempu University</a>
              <a href="https://www.schooleducation.kar.nic.in/index.html" class="q-py-xs fs-14 fw-500" target="__blank">Dept. of Public Instructions</a>
            </div>
          </div>
        </div>
        <q-separator vertical color="#b6c8d8" v-if="!isMobile" class="q-ml-sm q-my-md"/>
        <q-scroll-area class="col-md-10 col-sm-9 col-xs-12" style="height: 100vh">
            <router-view />
        </q-scroll-area>
      </div>
    </q-page-container>
    <the-footer class="footer"/>
  </q-layout>
</template>

<script>
import TheHeader from 'src/components/TheHeader.vue'
import TheFooter from 'src/components/TheFooter.vue'

export default {
  name: 'AcademiaLayout',
  components: {
    TheHeader,
    TheFooter
  },
  computed: {
    isMobile () {
      return this.$q.screen.lt.sm
    },
    isTablet () {
      return this.$q.screen.gt.sm && this.$q.screen.lt.md
    },
    isDesktop () {
      return this.$q.screen.gt.md
    },
    getRouteName () {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
.text-color-blue {
  color: #152141;
}
a {
  text-decoration: none;
  color: $dark;
}
.content {
  min-height: calc(100vh - 70px);
}
.footer {
  height: 50px;
}
</style>
