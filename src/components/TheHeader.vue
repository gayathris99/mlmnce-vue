<template>
<div >
  <div class="row items-center align-center no-wrap q-pa-md" :class="isDesktop ? '' : 'justify-start'">
    <div class="row-items row  items-center no-wrap col-md-9 col-sm-8 cursor-pointer">
      <div v-if="isMobile">
        <q-icon name="menu" size="sm" class="cursor-pointer q-pr-sm" @click="toggleDrawer"/>
      </div>
      <img src="~assets/Logo.svg" alt="MESMLMNCE LOGO" :width="isMobile ? 40: 75" @click="this.$router.push({name: 'home'})">

      <div class="q-px-md" @click="this.$router.push({name: 'home'})">
        <small class="fw-700">
          Malnad Education Society &#174;
        </small>
        <div class=" fw-500" :class="!isMobile ? 'fs-18' : 'fs-12'">
          M.L Manjaiah Setty Narasimha Setty
        </div>
        <div class="fw-500" :class="!isMobile ? 'fs-20' : 'fs-14'">College of Teacher Education</div>
      </div>


    </div>
    <div class=" q-pt-sm col-md-3 col-sm-4" v-if="!isMobile">
      <a href="mailto:prinicipalmesmlmnce@gmail.com" class="row q-gutter-xs q-pb-sm items-center">
        <q-icon name="email"/>
        <small>prinicipalmesmlmnce@gmail.com</small>
      </a>
      <a href="tel:+91-08262-295960" class="row q-gutter-xs q-pb-sm items-center">
        <q-icon name="call"/>
        <small>+91-08262-295960</small>
      </a>
      <a href="https://goo.gl/maps/41iegDYGQsigrzKz8" target="__blank" class="row q-gutter-xs  q-pb-sm items-center">
        <q-icon name="location_on"/>
        <small>'Chaitanya Bharati' <br/> Jyotinagara Chikkamagaluru 02</small>
      </a>
    </div>
  </div>
  <marquee behavior="smooth" direction="" bgcolor="#ffcdd2" class="q-pa-sm">
     M.L Manjaiah Setty Narasimha Setty College of Education
  </marquee>
  <div class="row items-center align-center justify-evenly fw-600 menu no-wrap header-component" v-if="!isMobile">
    <div class="cursor-pointer nav-item" @click="this.$router.push({name: 'home'})" :class="this.$route.name === 'home' ? 'bordered-class' : ''">HOME</div>
    <div class="cursor-pointer nav-item" @click="this.$router.push({name: 'about'})" :class="this.$route.fullPath.includes('about') ? 'bordered-class' : ''">ABOUT US</div>
    <div class="cursor-pointer nav-item" @click="this.$router.push({name: 'library'})" :class="this.$route.fullPath.includes('academia') ? 'bordered-class' : ''">ACADEMIA</div>
    <div class="cursor-pointer nav-item">NAAC</div>
    <div class="cursor-pointer nav-item">NCTE</div>
    <div class="cursor-pointer nav-item">ACTIVITIES</div>
    <div class="cursor-pointer nav-item">DOWNLOADS</div>
    <div class="cursor-pointer nav-item">GALLERY</div>
  </div>
  <q-drawer
  v-if="isMobile"
  v-model="isDrawer"
  show-if-above
  :width="300"
  :breakpoint="700"
  class="q-pa-md"
  >
  <div class="column align-center justify-center">
    <small class="fw-700 text-center">
      Malnad Education Society &#174;
    </small>
    <div class="text-center fw-600"> M.L Manjaiah Setty Narasimha Setty College of Teacher Education</div>
    <div class="fs-16 text-center">MLMN College of Education</div>
    <div class="bordered-class q-my-sm"></div>
    <div class="cursor-pointer q-my-sm fw-500 q-pl-sm fs-16" @click="goTo('home')">HOME</div>
    <div class="cursor-pointer q-my-sm fw-500 q-pl-sm fs-16">
      <q-expansion-item
      label="ABOUT US"
      header-class="text-dark"
      group="somegroup"
      dense
      >
        <div class="q-py-sm cursor-pointer fs-12" @click="goTo('about')">ABOUT MLMNCE</div>
        <div class="q-py-sm cursor-pointer fs-12"  @click="goTo('management')">Management</div>
        <div class="q-py-sm cursor-pointer fs-12" @click="goTo('infra')">Staff</div>
        <div class="q-py-sm cursor-pointer fs-12" @click="goTo('toppers')">Toppers</div>
        <div class="q-py-sm cursor-pointer fs-12" @click="goTo('infra')">Infrastructure</div>
      </q-expansion-item>
    </div>
    <div class="cursor-pointer q-my-sm fw-500 q-pl-sm fs-16">
    <q-expansion-item
      label="ACADEMIA"
      header-class="text-dark"
      group="somegroup"
      dense
      >
        <div class="q-py-sm cursor-pointer fs-12" @click="goTo('library')">Library</div>
        <div class="q-py-sm cursor-pointer fs-12" @click="goTo('affiliation-order')">Affiliation Order</div>
        <div class="q-py-sm cursor-pointer fs-12 " @click="goTo('student-community')">Student Community</div>
        <!-- <div class="q-py-sm cursor-pointer fs-12" @click="goTo('admissions')">Admissions</div> -->
        <!-- <div class="q-py-sm cursor-pointer fs-12" @click="goTo('course-structure')">Course Structure</div> -->
        <div class="q-py-sm cursor-pointer fs-12" @click="goTo('syllabus')">Syllabus</div>
      </q-expansion-item>
    </div>
    <div class="cursor-pointer q-my-sm fw-500 q-pl-sm fs-16">
      <q-expansion-item
      label="NAAC"
      header-class="text-dark"
      group="somegroup"
      dense
      >
        <div class="q-py-sm cursor-pointer fs-12">NAAC Certificate</div>
        <div class="q-py-sm cursor-pointer fs-12">Annual Academic Plan</div>
        <div class="q-py-sm cursor-pointer fs-12">IQAC Reports</div>
        <div class="q-py-sm cursor-pointer fs-12">IQAC Compositions</div>
        <div class="q-py-sm cursor-pointer fs-12">AQAR</div>
        <div class="q-py-sm cursor-pointer fs-12">Best Practices</div>
        <div class="q-py-sm cursor-pointer fs-12">Student Satisfaction Survey</div>
        <div class="q-py-sm cursor-pointer fs-12">Others</div>
      </q-expansion-item>
    </div>
    <div class="cursor-pointer q-my-sm fw-500 q-pl-sm fs-16">
    <q-expansion-item
      label="NCTE"
      header-class="text-dark"
      group="somegroup"
      dense
      >
        <div class="q-py-sm cursor-pointer fs-12">NCTE - Recognition</div>
        <div class="q-py-sm cursor-pointer fs-12">NCTE Affidavit</div>
        <div class="q-py-sm cursor-pointer fs-12">Deposit Bonds</div>
        <div class="q-py-sm cursor-pointer fs-12">Audit Reports</div>
        <div class="q-py-sm cursor-pointer fs-12">Mandatory Disclosure</div>
      </q-expansion-item>
    </div>
    <div class="cursor-pointer q-my-sm fw-500 q-pl-sm fs-16">
    <q-expansion-item
      label="ACTIVITIES"
      header-class="text-dark"
      group="somegroup"
      dense
      >
        <div class="q-py-sm cursor-pointer fs-12">Facebook</div>
        <div class="q-py-sm cursor-pointer fs-12">Youtube</div>
      </q-expansion-item>
    </div>
    <div class="cursor-pointer q-my-sm fw-500 q-pl-sm fs-16">DOWNLOADS</div>
    <div class="cursor-pointer q-my-sm fw-500 q-pl-sm fs-16">GALLERY</div>
    <div class="q-pt-lg">
      <a href="mailto:prinicipalmesmlmnce@gmail.com" class="row q-gutter-xs q-pb-sm items-center">
        <q-icon name="email"/>
        <small>prinicipalmesmlmnce@gmail.com</small>
      </a>
      <a href="tel:+91-08262-295960" class="row q-gutter-xs q-pb-sm items-center">
        <q-icon name="call"/>
        <small>+91-08262-295960</small>
      </a>
      <a href="https://goo.gl/maps/41iegDYGQsigrzKz8" target="__blank" class="row q-gutter-xs  q-pb-sm items-center">
        <q-icon name="location_on"/>
        <small>'Chaitanya Bharati' <br/> Jyotinagara Chikkamagaluru 02</small>
      </a>
    </div>
  </div>
  </q-drawer>
</div>

</template>

<script>
export default {
  name: "TheHeader",
  data () {
    return {
      isDrawer: false
    }
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
    }
  },
  methods: {
    toggleDrawer () {
      this.isDrawer = !this.isDrawer
    },
    goTo(route) {
      this.isDrawer = false
      this.$router.push({
        name: route
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.header-component {
  position: sticky;
  top: 0;
  background: white;
}
a {
  text-decoration: none;
  color: #152141
}
.nav-item {
  border-top: 3px solid transparent;
}
.nav-item:hover {
  border-top: 3px solid #cf050d
}
.bordered-class {
  border-top: 3px solid #cf050d;
}
:deep(.q-item) {
  padding: 0px !important;
}
:deep(.q-item__section) {
  justify-content: initial;
}
</style>
