<template>
  <q-layout view="lHh lpr lFf">
    <q-header>
      <the-header/>
    </q-header>
    <q-page-container class="content">
      <div class="row align-center no-wrap">
        <div class="col-md-2 col-sm-3 q-py-md q-pl-md" v-if="!isMobile">
          <div class="fs-24 text-color-blue q-mt-md">FOLDERS</div>
          <div class="column q-gutter-md q-mb-lg q-mt-sm" v-if="downloadDetails?.length">
            <div v-for="(downloadDetail,key) in downloadDetails" :key="key">
              <div class="fs-14 fw-500 cursor-pointer" :class="selectedFolder === downloadDetail?.album ? 'text-highlight' : ''" @click="selectFolder(downloadDetail)">{{downloadDetail?.album}}</div>
            </div>
          </div>
        </div>
        <q-separator vertical color="#b6c8d8" v-if="!isMobile" class="q-my-md"/>
       <q-scroll-area class="col-md-10 col-sm-9 col-xs-12" style="height: 100vh">
         <div class="q-pa-lg">
          <div v-if="isMobile">
            <q-select outlined  v-model="selectedFolder" map-options emit-value :options="options" />
          </div>
          <div v-else style="color:#303a57" class="fw-500 fs-24">{{selectedFolder}}</div>
          <div class="row align-center items-center justify-start q-mt-md q-gutter-md">
            <div v-for="(folder, key) in selectedFolderDetails" :key="key">
              <a :href="folder.file" target="_blank">
              <div class="col-2  column items-center">
                <img :src="getFileType(folder)" alt="">
                <div class="fs-12 q-mt-md doc-title text-center">{{folder.title}} &nbsp;</div>
              </div>
              </a>
            </div>
          </div>
        </div>
       </q-scroll-area>
      </div>
    </q-page-container>
    <the-footer class="footer"/>
  </q-layout>
</template>

<script>
import TheHeader from 'src/components/TheHeader.vue'
import TheFooter from 'src/components/TheFooter.vue'
import axios from 'axios'

export default {
  name: 'AcademiaLayout',
  components: {
    TheHeader,
    TheFooter
  },
  data () {
    return {
      downloadDetails: [],
      selectedFolderDetails: [],
      selectedFolder: '',
      imagesForFileType: {
        pdf: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/helper-images/PdfLogo.png',
        image: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/helper-images/ImageLogo.png',
        excel: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/helper-images/SheetLogo.png',
        file: 'https://portfolio-platform.s3.ap-south-1.amazonaws.com/media/public/mlmncecollege/helper-images/icons8-document-480.png'
      },
      options: []
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
    },
    getRouteName () {
      return this.$route.name
    },
  },
  watch: {
    selectedFolder: {
      immediate: true,
      deep: true,
      handler (newVal) {
        this.getSelectedFolderDetails(newVal)
      }
    }
  },
  methods: {
    async getDownloadDetails () {
      // https://6ce6-49-207-229-251.ngrok-free.app/collegewebsite/download-details
      // https://platform.foxgloveteam.com/collegewebsite/download-details
      const { data } = await axios.get('https://104c-49-207-219-140.ngrok-free.app/collegewebsite/download-details')
      this.downloadDetails = data
      this.selectedFolder = data[0]?.album
      this.getSelectedFolderDetails(data[0]?.album)
      data?.forEach(val => {
        this.options.push({
          label: val.album,
          value: val.album
        })
      })
    },
    selectFolder ({ album }) {
      this.selectedFolder = album
      // this.getSelectedFolderDetails(album)
    },
    async getSelectedFolderDetails (album) {
      this.selectedFolderDetails = []
      const { data } = await axios.get(`https://104c-49-207-219-140.ngrok-free.app/collegewebsite/download-details/${album}`)
      this.selectedFolderDetails = data
    },
    getFileType ({ file }) {
      const isImage = file.toLowerCase().includes('.jpg') || file.toLowerCase().includes('.png') || file.toLowerCase().includes('.jpeg')
      const isPdf = file.toLowerCase().includes('.pdf')
      const isExcel = file.toLowerCase().includes('.xlsx')
      if (isImage) return this.imagesForFileType.image
      else if (isPdf) return this.imagesForFileType.pdf
      else if (isExcel) return this.imagesForFileType.excel
      else return this.imagesForFileType.file
    }
  },
  mounted () {
    this.getDownloadDetails()
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
img {
  width: 75px;
  height: 75px;
}
a {
  text-decoration: none;
  color: $dark;
}
.doc-title {
  max-width: 100px;
}
</style>
