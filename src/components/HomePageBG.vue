<script>
export default {
    props:{
        resdata:{
            type:[],
        }
    },
}
</script>

<template>
  <div class="gridContainer">
        <div v-for="item in resdata" :key="item" >
            <img :src="item" alt="bg-img">
        </div>
  </div>
</template>

<style lang="scss" scoped>
    .gridContainer{
        display: grid;
        width: 100% ; height: 100% ; 
        grid-template-rows: 45% 45% ;
        grid-template-columns: 25% 25% 25% 25%;
        img{
            width: 100%; height: 100%;
        }
    }
    @media(max-width: 800px){
        .gridContainer{
            grid-template-columns: 33% 33% 33% ;
        }
    }
    @media(max-width: 600px){
        .gridContainer{
            grid-template-columns: 50% 50% ; 
        }
    }
    @media(max-width: 450px){
        .gridContainer{
            grid-template-rows: 33% 33% 33%; 
            grid-template-columns: 100% ; 
        }
    }

</style>