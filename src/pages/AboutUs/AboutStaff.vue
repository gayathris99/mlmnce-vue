<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-24">STAFF</div>
    <div class="column justify-center align-center items-center q-mt-md hero-image">
      <img src="https://i.ibb.co/nk8C5Cf/Staff-Group-Photo.jpg" alt="MLMNCE">
    </div>
    <small class="text-center q-mt-sm column justify-center align-center items-center">MES M.L.M.N B.Ed College Teaching Staff</small>
    <div class="q-mt-xl fw-600 fs-24" style="color:#303a57">TEACHING FACULTY</div>
    <div class="team-members row items-start  align-center  q-gutter-y-xl q-gutter-x-xs wrap q-mb-md q-mt-sm" :class="isDesktop ? 'justify-start' : 'justify-center'">
      <div class="col-md-2 col-sm-4 col-xs-5 align-center  justify-start" v-for="(teacher, key) in teachingStaff" :key="key">
        <img :src="teacher.image" alt="MLMNCE">
        <div class="fs-14 fw-500">{{teacher.name}}</div>
        <div class="fs-12 fw-500 q-my-xs">{{teacher.role}}</div>
        <div class="fs-12 fw-500">{{teacher.education}}</div>
      </div>
    </div>
    <div class="q-mt-xl fw-600 fs-24" style="color:#303a57">NON TEACHING STAFF</div>
    <div class="team-members row items-start  align-center  q-gutter-y-xl q-gutter-x-xs wrap q-mb-md q-mt-sm" :class="isDesktop ? 'justify-start' : 'justify-center'">
      <div class="col-md-2 col-sm-4 col-xs-5 align-center  justify-start" v-for="(nonTeacher, key) in nonTeachingStaff" :key="key">
        <img :src="nonTeacher.image" alt="MLMNCE">
        <div class="fs-14 fw-500">{{nonTeacher.name}}</div>
        <div class="fs-12 fw-500 q-my-xs">{{nonTeacher.role}}</div>
        <div class="fs-12 fw-500">{{nonTeacher.education}}</div>
      </div>
    </div>
    <div class="q-mt-xl fw-600 fs-24" style="color:#303a57">OFFICE SUPPORTING STAFF</div>
    <div class="team-members row items-start  align-center  q-gutter-y-xl q-gutter-x-xs wrap q-mb-md q-mt-sm" :class="isDesktop ? 'justify-start' : 'justify-center'">
      <div class="col-md-2 col-sm-4 col-xs-5 align-center  justify-start" v-for="(office, key) in officeStaff" :key="key">
        <img :src="office.image" alt="MLMNCE">
        <div class="fs-14 fw-500">{{office.name}}</div>
        <div class="fs-12 fw-500 q-my-xs">{{office.role}}</div>
        <div class="fs-12 fw-500" v-if="office.education">{{office.education}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutStaff',
  data () {
    return {
      teachingStaff: [
        { name: 'Dr. Ganesh G. M', role: 'Principal', education: 'M.A, (Kan)M.Ed, Ph.D., SLET., PGDHE., PGDC.', image: 'https://i.ibb.co/Y4gMBmg/Ganesh.jpg'},
        { name: 'Prof. Krishnamurthy', role: 'Associate Professor', education: 'B.Sc, M.Ed', image: 'https://i.ibb.co/r29nYQC/Krishnamurthy.jpg'},
        { name: 'Dr. Vijayalakshmi Desai’', role: 'Assistant Professor', education: 'B.Sc., M.A., M.Ed., M.Phil. Ph.D.', image: 'https://i.ibb.co/NytK7HR/Vijayalakshmi.jpg'},
        { name: 'Dr. Dandinkar Suryakanth N’', role: 'Assistant Professor', education: 'M.A, M.Ed, UGC-NET., Ph.D.', image: 'https://i.ibb.co/5LBCNq3/Suryakanth.jpg'},
        { name: 'Rudrappa N. Talawar', role: 'Assistant Professor', education: 'M.A., M.Ed., M.Phil., PGDE.', image: 'https://i.ibb.co/LnZHTwB/Talwar.jpg'},
        { name: 'Shi. B.E.Beliyappa’', role: 'P.E Director', education: 'M.A, MP.Ed', image: 'https://i.ibb.co/SJ64GhV/Beliyappa.jpg'},
        { name: 'Smt.Satyavathi', role: 'Librarian', education: 'M.Ed , M.L.I.Sc', image: 'https://i.ibb.co/f0xF4jx/Satyavathi.jpg'},
        { name: 'Smt.Madhuri E', role: 'Lecturer', education: 'Msc, M.Ed', image: 'https://i.ibb.co/6wLd6Mb/Whats-App-Image-2022-01-19-at-8-53-41-PM.jpg'}
      ],
      nonTeachingStaff: [
        { name: 'Sri A.M Manjappa Shetty', role: 'Accountant', education: 'B.Com', image: 'https://i.ibb.co/mrnGLYx/Manjappa-shetty.jpg'},
        { name: 'Sri Vikhas V Deshpande', role: 'F.D.A', education: 'M.Com', image: 'https://i.ibb.co/jftXG8W/Vikas.jpg'},
        { name: 'Smt. Anitha', role: 'S.D.A', education: 'B.A, B.Ed.', image: 'https://i.ibb.co/NTq6FsF/Anitha.jpg'},
        { name: 'Smt. Suma C.E', role: 'Hostel Warden', education: 'M.A, B.Ed.', image: 'https://i.ibb.co/rk99pZg/Suma.jpg'},
      ],
      officeStaff: [
        { name: 'Sri M.S Veerappa', role: 'Attender', education: 'SSLC', image: 'https://i.ibb.co/xMFT9HZ/veerappa.jpg'},
        { name: 'Sri H.M Harishchandra', role: 'Attender', education: 'SSLC', image: 'https://i.ibb.co/RhQJ0B7/Harishchandra.jpg'},
        { name: 'Sri Shivaia', role: 'Watchman', education: '', image: 'https://i.ibb.co/2y8S64j/Shivayya.png'},
        { name: 'Bhagyamma', role: 'Peon', education: '', image: 'https://i.ibb.co/Ld2M96Q/Bagyamma.jpg'},
        { name: 'Sri Prasanna', role: 'Janitor', education: '', image: 'https://i.ibb.co/m8V64R8/Prasanna.jpg'},
      ],
    }
  },
  computed: {
    isDesktop () {
      return this.$q.screen.gt.md
    },
    isTablet () {
      return this.$q.screen.gt.sm && this.$q.screen.lt.md
    },
  }
}
</script>

<style lang="scss" scoped>
.hero-image{
     width: 100%;
  // height: 500px;
  // border: 0.5px solid grey;
    @media only screen and (max-width: $breakpoint-sm-max) {
      // width: 250px;
      width: 100%;
      //  height: 200px;
    }
    @media only screen and (max-width: $breakpoint-xs-max) {
      // width: 250px;
      width: 100%;
      // height: 200px;
    }
}
.hero-image {
  img {
  max-width: 100%;
  height: auto;
  border: 0.5px solid grey;
    @media only screen and (max-width: $breakpoint-sm-max) {
      width: 100%;
      height: auto;
    }
    @media only screen and (max-width: $breakpoint-xs-max) {
      height: auto;
    }
  }
}
.team-members {
  img {
    width: 120px;
    height: 120px;
  }
}
</style>
