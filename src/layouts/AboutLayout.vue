<template>
  <q-layout view="lHh lpr lFf">
    <q-header>
      <the-header/>
    </q-header>
    <!-- <the-header/> -->
    <q-page-container class="content">
      <div class="row align-center no-wrap">
        <div class="col-md-2 col-sm-3 q-py-md q-pl-md" v-if="!isMobile">
          <div class="fs-24 text-color-blue q-mt-md"> ABOUT US</div>
          <div class="column q-gutter-md q-mb-lg q-mt-sm">
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'about' ? 'text-highlight': ''" @click="this.$router.push({name: 'about'})">About MLMNCE</div>
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'management' ? 'text-highlight': ''" @click="this.$router.push({name: 'management'})">Management</div>
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'staff' ? 'text-highlight': ''" @click="this.$router.push({name: 'staff'})">Staff</div>
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'toppers' ? 'text-highlight': ''" @click="this.$router.push({name: 'toppers'})">Toppers</div>
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'infra' ? 'text-highlight': ''" @click="this.$router.push({name: 'infra'})">Infrastructure</div>
            <div class="fs-14 fw-500 cursor-pointer" :class="getRouteName === 'organogram' ? 'text-highlight': ''" @click="this.$router.push({name: 'organogram'})">Organogram</div>
          </div>
          <div class="important-links">
            <div style="color:#ff0302" class="q-mb-sm fs-20">IMPORTANT LINKS</div>
            <div class="important-links column">
              <a href="https://ncte.gov.in/Website/index.aspx/" class="q-py-xs fs-14 fw-500" target="__blank">NCTE</a>
              <a href="http://www.naac.gov.in/index.php/en/" class="q-py-xs fs-14 fw-500" target="__blank">NAAC</a>
              <a href="https://www.dsert.kar.nic.in/" class="q-py-xs fs-14 fw-500" target="__blank">DSERT</a>
              <a href="https://dce.karnataka.gov.in/english" class="q-py-xs fs-14 fw-500" target="__blank">Collegiate Education</a>
              <a href="http://www.kuvempu.ac.in/kan/index.php" class="q-py-xs fs-14 fw-500" target="__blank">Kuvempu University</a>
              <a href="https://www.schooleducation.kar.nic.in/index.html" class="q-py-xs fs-14 fw-500" target="__blank">Dept. of Public Instructions</a>
            </div>
          </div>
        </div>
        <q-separator vertical color="#b6c8d8" v-if="!isMobile" class=" q-my-md"/>
        <!-- <router-view class="col-md-10 col-sm-9 col-xs-12"/> -->
        <q-scroll-area class="col-md-10 col-sm-9 col-xs-12" style="height: 100vh" v-if="!isMobile">
          <router-view />
        </q-scroll-area>
        <router-view v-else/>
      </div>
    </q-page-container>
    <the-footer class="footer"/>
  </q-layout>
</template>

<script>
import TheHeader from 'src/components/TheHeader.vue'
import TheFooter from 'src/components/TheFooter.vue'

export default {
  name: 'AboutLayout',
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
  color: inherit;
}
.content {
  min-height: calc(100vh - 70px);
}
.footer {
  height: 50px;
}
.important-links {
  color: #151F7C;
}
</style>
