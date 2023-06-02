<template>
  <div class="q-pa-lg">
    <div style="color:#303a57" class="fw-500 fs-30 font-roboto">LIBRARY</div>
    <div class="column justify-center align-center items-center q-mt-md hero-image">
      <img src="https://i.ibb.co/ysNqJVh/library-Main.jpg" alt="MLMNCE">
    </div>
    <div class="q-mt-lg row align-center items-center justify-center">
      <div class="stats column col-md-4 col-sm-4 col-xs-12 align-center items-center justify-center q-gutter-sm q-mt-md" v-for="(stat, key) in libraryStats" :key="key">
        <div class="count fs-20 text-center" style="color:#303a57">{{stat.count}}</div>
        <div>{{stat.title}}</div>
      </div>
    </div>
    <div class="font-montserrat">
      <div class="q-mt-lg fw-600 fs-18" style="color:#303a57">WELCOME TO OUR COLLEGE LIBRARY</div>
      <div class="q-mt-sm fs-14 fw-500 text-justify">
        Books are the source of knowledge, Libraries are sole of the institution. Without library, there is no academic quality in the College. This reflects the importance of the library at the Colleges. “The Libraries are essential partners in the creative exploration, intellectual growth and scholarly pursuits of the College.” We strategically add new spaces, resources and technology to our library system, ensuring it is the place on campus for inter-disciplinary teaching, research and learning — a place to exchange and create new ideas with innovative tools and resources. The primary function of our library is to implement, enrich and support the educational program.
      </div>
      <div class="q-mt-lg fw-600 fs-18" style="color:#303a57">OBJECTIVES</div>
      <div class="fs-14 fw-500 text-justify">1.  To promote Information Literacy and Digital Literacy across the curriculum.<br/>2.  Improve the library in collaboration with the staff to the benefit of the student teachers to make a strong, Positive Impressions on teaching.<br/>3.  Provide efficient access to a broad range of top-quality information resources.<br/>4.  Assisting in locating quality resources for instruction of students.<br/>5.  Encouraging staff and students in becoming effective users of ideas and Information.<br/>6.  To provide materials that will stimulate students' acquisition of factual knowledge, development of literary appreciation, aesthetic values and ethical standards.<br/>7.  To provide materials containing a wide range of views on issues so that students may develop the Practice of critical reading and thinking.<br/>8.  Gives book talks and provides literature enrichment activities.<br/>9.  Exhibits and displays new or current materials.<br/>10.  Maintenance of accurate and necessary records.</div>
      <div class="q-mt-lg fw-600 fs-18" style="color:#303a57">LIBRARY RULES</div>
      <div class="fs-14 fw-500 text-justify">
        1.  To promote Information Literacy and Digital Literacy across the curriculum.<br/>2.  Improve the library in collaboration with the staff to the benefit of the student teachers to make a strong, Positive Impressions on teaching.<br/>3.  Provide efficient access to a broad range of top-quality information resources.<br/>4.  Assisting in locating quality resources for instruction of students.<br/>5.  Encouraging staff and students in becoming effective users of ideas and Information.<br/>6.  To provide materials that will stimulate students' acquisition of factual knowledge, development of literary appreciation, aesthetic values and ethical standards.<br/>7.  To provide materials containing a wide range of views on issues so that students may develop the Practice of critical reading and thinking.<br/>8.  Gives book talks and provides literature enrichment activities.<br/>9.  Exhibits and displays new or current materials.<br/>10.  Maintenance of accurate and necessary records.
      </div>
      <div class="q-mt-lg fw-600 fs-18" style="color:#303a57">FACILITIES IN OUR LIBRARY</div>
      <div class="fs-14 fw-500 text-justify">1.  Circulation<br/>2.  Separate reading room with individual compartments.<br/>3.  Reference service<br/>4.  Photo Copying and Printing facility<br/>5.  Information Display and Notification<br/>6.  Wi-Fi, LAN connection<br/>7.  Library Automation (Easy Lib Software)<br/>8.  Internet browsing<br/>9.  New Arrivals Display<br/>10. OPAC (Online Public Access Catalogue)<br/>11.  Book Bank Facility<br/>12. Collection of Previous years Question Papers<br/>13. N-List ( INFLIBNET)<br/>14. Memorandum of Understanding (MOU) with others Libraries to Access more information<br/>15. News Paper Clipping Services</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AcademiaLibrary',
  data () {
    return {
      libraryStats: [
        {count: 14451, title: 'Collection of Books'},
        {count: 23, title: 'Collection of Journals'},
        {count: 13, title: 'Educational Journals'},
        {count: 3, title: 'Daily Newspapers'},
        {count: 7, title: 'Magazines & Periodicals'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-image {
  img {
  width: 90%;
  max-height: 400px;
  @media only screen and (max-width: $breakpoint-sm-max) and (min-width: $breakpoint-sm-min) {
    width: 100%;
    height: 175px;
  }
}
}

.count {
    width: 130px;
    line-height: 120px;
    border-radius: 50%;
    text-align: center;
    font-size: 32px;
    border: 2px solid #303a57;
}
</style>
