<template>
<div :class="!isMobile? 'q-pa-lg' : 'q-pa-md'">
  <div style="color:#303a57" class="fw-500 fs-30 font-roboto">ABOUT MLMNCE</div>
  <div class="row  align-center items-center q-mt-md hero-image">
    <img src="https://i.ibb.co/vPcMQRF/college-landscape-1-compressed-3.jpg" alt="MLMNCE">
  </div>
  <div class="font-montserrat">
    <div class="q-mt-lg fw-600 fs-18" style="color:#303a57">WHO WE ARE</div>
    <div class="fs-14 q-mt-sm fw-500 text-justify ">
      The Malnad Education Society started this college in the donor`s name M.L. Manjaiah Setty Narasimha Setty College of Teacher Education in the year 1981-82. The College is situated in the centre of a vast open space of scenic beauty surrounding it, which is away from the humdrum of the city. It encompasses a calm, serene creative education atmosphere. The very atmosphere of the College has an inherent quality of imprinting its mark on the youth who pursue B.Ed. course here.
      By considering the consistent performances of our college, the Karnataka State Government admitted into Grant-in-aid system from 01-01-1995. The Ministry of Human Resources Development, Government of India uplifted our college as College of Teacher Education (CTE), hence we have the responsibility to carryout both preservice and in-service teacher training programme.   The college is recognized by NCTE, UGC 2 (f) and 12 (b) act, Accredited ‘B’ Grade by NAAC and also got permanent affiliation by the Kuvempu University.
    </div>
    <div class="q-mt-lg fw-600 fs-18" style="color:#303a57">VISION</div>
    <div class="fs-14 q-mt-sm fw-500 text-justify ">
      To prepare competent, committed Creative and Compassionate teachers for future generation; to develop our institute as the centre of excellence; to sustain quality and standard of education.
    </div>
    <div class="q-mt-lg fw-600 fs-18" style="color:#303a57">MISSION</div>
    <div class="fs-14 q-mt-sm fw-500 text-justify ">
      Organising the programmes to strengthen the teacher trainees in Philosophical, Psychological, Educational and Scientific Knowledge towards the teaching profession; and also to work industriously for the improvement and progress of Education and Human resource advancement.
    </div>
    <div class="q-mt-lg fw-600 fs-18" style="color:#303a57">QUALITY POLICY</div>
    <div class="fs-14 q-mt-sm fw-500 text-justify ">
      To develop professionally committed teachers. We intended to inculcate in the student teachers the sense of Moral, Social, Cultural, Spiritual and Ethical Values; and to develop positive attitude towards teaching profession and achieving national development.
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "AboutMLMNCE",
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
}
</script>

<style lang="scss" scoped>
.hero-image {
  img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  object-position: center;
  @media only screen and (max-width: $breakpoint-sm-max) {
    width: 100%;
    height: 300px;
    object-fit: cover;
  object-position: center;
  }
}
}
</style>
