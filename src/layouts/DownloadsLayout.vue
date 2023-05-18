<template>
  <q-layout>
    <the-header/>
    <q-page-container class="content">
      <div class="row align-center no-wrap">
        <div class="col-md-2 col-sm-3 q-py-md q-pl-md" v-if="!isMobile">
          <div class="fs-20 text-color-blue q-mt-md">FOLDERS</div>
          <div class="column q-gutter-md q-mb-lg q-mt-sm">
          </div>
        </div>
        <q-separator vertical color="#b6c8d8" v-if="!isMobile" class="q-ml-sm"/>
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
