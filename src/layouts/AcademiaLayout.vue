<template>
  <q-layout>
    <the-header/>
    <q-page-container class="content">
      <div class="row align-center no-wrap">
        <div class="col-md-2 col-sm-3 q-py-md q-pl-md" v-if="!isMobile">
          <div class="fs-20 text-color-blue q-mt-md">ACADEMIA</div>
          <div class="column q-gutter-md q-mb-lg q-mt-sm">
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'library' ? 'text-highlight': ''" @click="this.$router.push({name: 'library'})">Library</div>
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'affiliation-order' ? 'text-highlight': ''" @click="this.$router.push({name: 'affiliation-order'})">Affiliation Order</div>
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'student-community' ? 'text-highlight': ''" @click="this.$router.push({name: 'student-community'})">Student Community</div>
            <!-- <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'admissions' ? 'text-highlight': ''" @click="this.$router.push({name: 'admissions'})">Admissions</div> -->
            <!-- <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'course-structure' ? 'text-highlight': ''" @click="this.$router.push({name: 'course-structure'})">Course Structure</div> -->
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'syllabus' ? 'text-highlight': ''" @click="this.$router.push({name: 'syllabus'})">Syllabus</div>
          </div>
          <div class="library-links q-my-md">
            <div style="color:#ff0302" class="q-mb-sm fs-20">E-LIBRARY LINKS</div>
            <div class="important-links column q-gutter-y-sm">
              <a href="https://ndl.iitkgp.ac.in/" class="q-py-xs fs-12 fw-500" target="__blank">National Digital Library</a>
              <a href="https://www.karnatakadigitalpubliclibrary.org/" class="q-py-xs fs-12 fw-500" target="__blank">Karnataka Digital Library</a>
              <a href="https://www.getepic.com/in/" class="q-py-xs fs-12 fw-500" target="__blank">Epic</a>
              <a href="https://openlibrary.org/" class="q-py-xs fs-12 fw-500" target="__blank">Open Library</a>
              <a href="http://en.childrenslibrary.org/" class="q-py-xs fs-12 fw-500" target="__blank">Children's Library</a>
              <a href="https://www.pagebypagebooks.com/" class="q-py-xs fs-12 fw-500" target="__blank">Page by Page</a>
              <a href="https://www.free-ebooks.net/" class="q-py-xs fs-12 fw-500" target="__blank">Free E-Books</a>
              <a href="https://manjunathtahir.blogspot.com/" class="q-py-xs fs-12 fw-500" target="__blank">Blogger</a>
            </div>
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
        <router-view class="col-md-10 col-sm-9 col-xs-12"/>
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
