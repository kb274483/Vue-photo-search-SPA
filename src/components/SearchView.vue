<script>
export default {
    props:{
        resdata:{
          type:[],
        },
        searchresult:{
          type:[],
        }
    },
    data () {
        return {
            renderData:[],
            modal1: false,
            modal5: false,
            scaleImgSrc : '',
            scaleImgName : '',
            scaleImgViews : '',
            scaleImgDownloads : '',
            scaleImgDate : '',
            exif : {
              aperture:'',
              exposure_time:'',
              focal_length :'',
              iso : '',
              make : '',
              model : '',
            }
        }
    },

    watch:{
        searchresult:function(data){
          this.renderData = data ;
          // console.log(this.renderData);
        },

        resdata:function(data){
          this.renderData = data;
        },
    },

    methods:{
      download(){
        alert(`Avoid copyright disputes. This function is for reference only`);
      },

      scaleImg(e){
        this.renderData.forEach(item => {
            if(e.target.src === item.urls.regular){
              this.scaleImgDownloads = item.downloads ;
              this.scaleImgSrc = item.urls.regular;
              this.scaleImgDate = item.created_at ;
              this.scaleImgName = item.user.name ;
              this.scaleImgViews = item.views ;
              this.exif.aperture = item.exif.aperture;
              this.exif.exposure_time = item.exif.exposure_time;
              this.exif.focal_length = item.exif.focal_length;
              this.exif.iso = item.exif.iso;
              this.exif.make = item.exif.make;
              this.exif.model = item.exif.model;
              this.modal1 = true ;
            }
        });
      },
    }
}
</script>

<template>
    <div class="searchResultContainer">
      <Row type="flex" justify="center">
        <Col :xs="10" :md="7" :lg="6" 
          v-for="item in renderData" :key="item.urls.regular" class="col">
          <img :src="item.urls.regular" alt="" class="img" @click="scaleImg">   
        </Col>
      </Row>
      <div class="scaleImgContainer">
        <Modal v-model="modal1" class="scaleImgBox" width="750"
          :title="'Photographer : '+scaleImgName" footer-hide>
          <!-- <p>{{scaleImgName}}</p> -->
          <img :src="scaleImgSrc" alt="">
          <div class="info">
            <div class="views"><Icon type="ios-eye" />{{scaleImgViews}}</div>
            <div class="downloadsNum"><Icon type="md-download" />{{scaleImgDownloads}}</div>
            <div class="date"><Icon type="md-time" />{{scaleImgDate}}</div>
            <div class="exifInfo">
              <Button @click="modal5 = true"><Icon type="md-information-circle"/>EXIF</Button>
              <Modal v-model="modal5" title="Exif infomation" width="650" footer-hide>
                <div class="exif">
                  <Row type="flex" justify="center" align="middle" >
                    <Col :sm="8">
                      <span>Camera Make <br> 【{{exif.make}}】</span>
                    </Col>
                    <Col :sm="8">
                      <span>Camera Model <br> 【{{exif.model}}】</span>
                    </Col>
                    <Col :sm="8">
                      <span>Focal Length <br> 【{{exif.focal_length}}】</span>
                    </Col>
                  </Row>
                  <br> 
                  <Row type="flex" justify="center" align="middle" >
                    <Col :sm="8">
                      <span>Aperture <br> 【<Icon type="md-aperture"/>{{exif.aperture}}】</span>
                    </Col>
                    <Col :sm="8">
                      <span>Shutter Speed <br> 【{{exif.exposure_time}}s】</span>
                    </Col>
                    <Col :sm="8">
                      <span>ISO <br> 【{{exif.iso}}】</span>
                    </Col>
                  </Row>
                </div>
              </Modal>
            </div>
            <Button icon="ios-download-outline" @click="download" type="primary" ghost>Download</Button>
          </div>
        </Modal>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  .searchResultContainer{
    margin: 50px 30px;
    overflow: hidden;
  }
  .col{
    margin: 5px;
    overflow: hidden;
  }
  .img{
    width: 100%; height: 100%;
    transition: 0.5s linear all;
    &:hover{
      transform: scale(1.1,1.1);
      opacity:0.8;
      cursor : zoom-in;
    }
  }
  .scaleImgBox{
    img{
      width:100%; height:100%;      
    }
    .info{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  
</style>
  
