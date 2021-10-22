<script>
import HomePageBG from '@/components/HomePageBG.vue'
import axios from "axios"

  export default {
    components: {
      HomePageBG
    },
    async mounted(){
      let that = this ;
      await axios.get('https://api.unsplash.com/photos/random?client_id=bKFaiEZpPA7eGovxXcSGe2KUo2ZUGeqBzaOUFLZo',{
        params:{
          count : 8 ,
          orientation: "squarish",
        }
      })
        .then(function (response){
          that.loading = false;
          for(let i=0 ; i<response.data.length ; i++){
            that.resData.push(response.data[i].urls.regular)
          }
        }) 
    },

    data(){
      return{
        loading:true,
        resData:[],
      }
    },

    methods:{
    },  
  }

</script>

<template>
<div>
  <div class="loading" v-if="loading">
    <Spin size="large" fix ></Spin>
  </div>
  <div class="div" v-else>
    <HomePageBG class="bgImg" :resdata="resData"/>
    <div class="bg">
      <div class="animationText">
        <div class="animationTextContainer">
          <div class="animationTextTitle">
            Welcome
          </div>
          <ul class="animationTextList">
            <li class="animationTextItems">My Website</li>
            <li class="animationTextItems">Select</li>
            <li class="animationTextItems">The Photo</li>
            <li class="animationTextItems">You Need</li>
          </ul>
        </div>
      </div>
      <div class="entrance"><router-link to="/searchpage">Enter Search</router-link></div>
    </div>
  </div>
  
</div>
</template>

<style lang="scss" scoped>
  $Text-color:#384759;
  .bgImg{
    width: 100%;
    height: 100%;
    position: fixed;
  }
  .bg{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #ffffff88;
  }
  .entrance{
    font-size: 30px;
    position: absolute;
    top: 45%;
    right:35%;
    a{
      color: $Text-color;
      &:hover{
        color: #b5d1e4;
      }
    }
  }
  .animationText{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100px; 
    width:600px;
    overflow:hidden;
    color: $Text-color;

  .animationTextContainer{
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    font-weight: bold;


    &:before {
      content: '[';
      left: 0;
    }
    &:after {
      content: ']';
      right: 0;
    }
    &:after, &:before{
      position: absolute;
      top: 0;
      color: $Text-color;
      font-size: 80px;
      line-height: 80px;
        
      animation-name: opacity;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }
  .animationTextTitle{
    font-size: 50px;
    line-height:100px;
  }
  .animationTextList{
    list-style: none;
        
    animation-name: change;
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
  .animationTextItems{
    font-size: 50px;
    line-height:100px;
  }
  
} 
  @keyframes opacity {
    0%, 100% {opacity:0;}
    50% {opacity:1;}
  }
  @keyframes change {
    0%, 12.66%, 100% {transform:translate3d(0,0,0);}
    16.66%, 29.32% {transform:translate3d(0,-25%,0);}
    33.32%,45.98% {transform:translate3d(0,-50%,0);}
    49.98%,62.64% {transform:translate3d(0,-75%,0);}
    66.64%,79.3% {transform:translate3d(0,-50%,0);}
    83.3%,95.96% {transform:translate3d(0,-25%,0);}
  }

  @media(max-width:650px){
    .animationText{
      height: 100px; 
      width:360px;
    }
    .animationTextTitle{
      display: none;
    }
    .entrance{
      right:15%;
    }  
  }

</style>

