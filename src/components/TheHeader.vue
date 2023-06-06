<template>
<div >
  <div class="row items-center align-center no-wrap q-pa-md" :class="isMobile ? 'justify-start' : 'justify-around'">
    <div class="row-items row  items-center no-wrap  cursor-pointer">
      <div v-if="isMobile">
        <q-icon name="menu" size="sm" class="cursor-pointer q-pr-sm" @click="toggleDrawer"/>
      </div>
      <img src="~assets/Logo.svg" alt="MESMLMNCE LOGO" :width="isMobile ? 40: 75" @click="this.$router.push({name: 'home'})">

      <div class="q-px-md font-roboto" @click="this.$router.push({name: 'home'})">
        <div class="fs-13 fw-400">
          Malnad Education Society &#174;
        </div>
        <div class="fw-400" :class="!isMobile ? 'fs-20' : 'fs-13'">
          M.L Manjaiah Setty Narasimha Setty
        </div>
        <div class="fw-400" :class="!isMobile ? 'fs-28' : 'fs-14'">College of Teacher Education</div>
      </div>


    </div>
    <div class=" q-pt-sm " v-if="!isMobile">
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
  <div class="marquee-content font-roboto fs-15" v-if="notificationData.length">
    <marquee behavior="smooth" direction="" bgcolor="#ffcdd2" class="q-pa-sm" onmouseover="this.stop()" onmouseout="this.start()">
      <div class="row no-wrap">
        &nbsp;
      <div v-for="(notification, i) in notificationData" :key="i">
        <div v-if="notification.notificationEntity === 'PLAIN_ALERT'">&nbsp;{{notification.content}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div v-if="notification.notificationEntity === 'OPEN_LINK'">&nbsp;{{notification.content}} - <a :href="notification.link" target="_blank">Know More</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div v-if="notification.notificationEntity === 'ATTACHMENT_DOWNLOAD'">&nbsp;{{notification.content}} - <a :href="notification.documentViewLink" target="_blank">Click here to download</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      </div>
      </div>
    </marquee>
  </div>
  <div class="bordered-class-top" v-if="!isMobile"></div>
  <div class="row items-center align-center justify-evenly fw-600 menu no-wrap header-component font-roboto q-pb-sm" v-if="!isMobile">
    <div class="cursor-pointer nav-item" @click="this.$router.push({name: 'home'})" :class="this.$route.name === 'home' ? 'bordered-class' : ''">HOME</div>
    <div class="cursor-pointer nav-item" @click="this.$router.push({name: 'about'})" :class="this.$route.fullPath.includes('about') ? 'bordered-class' : ''">ABOUT US</div>
    <div class="cursor-pointer nav-item" @click="this.$router.push({name: 'library'})" :class="this.$route.fullPath.includes('academia') ? 'bordered-class' : ''">ACADEMIA</div>
    <div class="cursor-pointer nav-item" @click="this.$router.push({name: 'naac-certificate'})" :class="this.$route.fullPath.includes('naac') ? 'bordered-class' : ''">NAAC</div>
    <div class="cursor-pointer nav-item" @click="this.$router.push({name: 'ncte-recognition'})" :class="this.$route.fullPath.includes('ncte') ? 'bordered-class' : ''">NCTE</div>
    <div class="cursor-pointer nav-item" @click="this.$router.push({name: 'facebook'})" :class="this.$route.fullPath.includes('activities') ? 'bordered-class' : ''">ACTIVITIES</div>
    <div class="cursor-pointer nav-item" @click="this.$router.push({name: 'downloads'})" :class="this.$route.fullPath.includes('downloads') ? 'bordered-class' : ''" >DOWNLOADS</div>
    <div class="cursor-pointer nav-item" @click="this.$router.push({name: 'gallery'})" :class="this.$route.fullPath.includes('gallery') ? 'bordered-class' : ''">GALLERY</div>
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
        <div class="q-py-sm cursor-pointer fs-13" @click="goTo('about')">ABOUT MLMNCE</div>
        <div class="q-py-sm cursor-pointer fs-13"  @click="goTo('management')">Management</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="goTo('infra')">Staff</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="goTo('toppers')">Toppers</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="goTo('infra')">Infrastructure</div>
      </q-expansion-item>
    </div>
    <div class="cursor-pointer q-my-sm fw-500 q-pl-sm fs-16">
    <q-expansion-item
      label="ACADEMIA"
      header-class="text-dark"
      group="somegroup"
      dense
      >
        <div class="q-py-sm cursor-pointer fs-13" @click="goTo('library')">Library</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="goTo('affiliation-order')">Affiliation Order</div>
        <div class="q-py-sm cursor-pointer fs-13 " @click="goTo('student-community')">Student Community</div>
        <!-- <div class="q-py-sm cursor-pointer fs-13" @click="goTo('admissions')">Admissions</div> -->
        <!-- <div class="q-py-sm cursor-pointer fs-13" @click="goTo('course-structure')">Course Structure</div> -->
        <div class="q-py-sm cursor-pointer fs-13" @click="goTo('syllabus')">Syllabus</div>
      </q-expansion-item>
    </div>
    <div class="cursor-pointer q-my-sm fw-500 q-pl-sm fs-16">
      <q-expansion-item
      label="NAAC"
      header-class="text-dark"
      group="somegroup"
      dense
      >
        <div class="q-py-sm cursor-pointer fs-13" @click="goTo('naac-certificate')">NAAC Certificate</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="goTo('academic-plan')">Annual Academic Plan</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="goTo('iqac-reports')">IQAC Reports</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="goTo('iqac-compositions')">IQAC Compositions</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="goTo('aqar')">AQAR</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="goTo('best-practices')">Best Practices</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="goTo('student-survey')">Student Satisfaction Survey</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="goTo('others')">Others</div>
      </q-expansion-item>
    </div>
    <div class="cursor-pointer q-my-sm fw-500 q-pl-sm fs-16">
    <q-expansion-item
      label="NCTE"
      header-class="text-dark"
      group="somegroup"
      dense
      >
        <div class="q-py-sm cursor-pointer fs-13" @click="this.$router.push({name: 'ncte-recognition'})">NCTE - Recognition</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="this.$router.push({name: 'ncte-affidavit'})">NCTE Affidavit</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="this.$router.push({name: 'deposit-bonds'})">Deposit Bonds</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="this.$router.push({name: 'audit-reports'})">Audit Reports</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="this.$router.push({name: 'mandatory-disclosure'})">Mandatory Disclosure</div>
      </q-expansion-item>
    </div>
    <div class="cursor-pointer q-my-sm fw-500 q-pl-sm fs-16">
    <q-expansion-item
      label="ACTIVITIES"
      header-class="text-dark"
      group="somegroup"
      dense
      >
        <div class="q-py-sm cursor-pointer fs-13" @click="this.$router.push({name: 'facebook'})">Facebook</div>
        <div class="q-py-sm cursor-pointer fs-13" @click="this.$router.push({name: 'youtube'})">Youtube</div>
      </q-expansion-item>
    </div>
    <div class="cursor-pointer q-my-sm fw-500 q-pl-sm fs-16"  @click="this.$router.push({name: 'downloads'})">DOWNLOADS</div>
    <div class="cursor-pointer q-my-sm fw-500 q-pl-sm fs-16" @click="this.$router.push({name: 'gallery'})">GALLERY</div>
    <div class="cursor-pointer q-my-sm fw-500 q-pl-sm fs-16">
    <q-expansion-item
      label="IMPORTANT LINKS"
      header-class="text-red"
      class="important-links"
      group="somegroup"
      dense
      >
        <div class="q-my-sm">
          <a href="https://ncte.gov.in/Website/index.aspx/" class="q-my-sm fs-13" target="__blank">NCTE</a>
        </div>
        <div class="q-my-sm">
         <a href="http://www.naac.gov.in/index.php/en/" class="q-my-sm fs-13" target="__blank">NAAC</a>
        </div>
        <div class="q-my-sm">
          <a href="https://www.dsert.kar.nic.in/" class="q-my-sm fs-13" target="__blank">DSERT</a>
        </div>
        <div class="q-my-sm">
         <a href="https://dce.karnataka.gov.in/english" class="q-my-sm fs-13" target="__blank">Collegiate Education</a>
        </div>
        <div class="q-my-sm">
          <a href="http://www.kuvempu.ac.in/kan/index.php" class="q-my-sm fs-13" target="__blank">Kuvempu University</a>
        </div>
        <div class="q-my-sm">
          <a href="https://www.schooleducation.kar.nic.in/index.html" class="q-my-sm fs-13" target="__blank">Dept. of Public Instructions</a>
        </div>

      </q-expansion-item>
    </div>
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
import axios from 'axios'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: "TheHeader",
  data () {
    return {
      isDrawer: false,
      notificationData: []
    }
  },
  computed: {
    ...mapGetters({
      getNotification: 'college/getNotification'
    }),
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
    ...mapMutations({
      setNotificationData: 'college/setNotificationData'
    }),
    toggleDrawer () {
      this.isDrawer = !this.isDrawer
    },
    goTo(route) {
      this.isDrawer = false
      this.$router.push({
        name: route
      })
    },
    async getNotifications () {
      const { data } = await axios.get('https://platform.foxgloveteam.com/collegewebsite/notifications')
      this.notificationData = data
      this.setNotificationData(data)
    },
  },
  mounted () {
    if (!this.getNotification.length) {
      this.getNotifications()
    } else {
      this.notificationData = this.getNotification
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
.bordered-class-top {
  border-top: 0.5px solid #b6c8d8;
}
:deep(.q-item) {
  padding: 0px !important;
}
:deep(.q-item__section) {
  justify-content: initial;
}
marquee {

  a {
    text-decoration: underline;
    color: #152141;
    font-weight: 500;
  }
}
.header-component {
  color: #47536e;
}

.important-links {
  a {
    color: #151F7C;
  }
}
</style>
