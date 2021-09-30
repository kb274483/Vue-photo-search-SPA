<script>
    import SearchView from '@/components/SearchView.vue'
    import axios from "axios"

    export default {
        components: {
           SearchView
        },

        async mounted(){
            let that = this ;
            await axios.get('https://api.unsplash.com/photos/random?client_id=bKFaiEZpPA7eGovGXxXcSGe2KUo2ZUGe0qBzaOUFLZo',{
                params:{
                    count : 30 ,
                    orientation: "squarish",
                }
            })
            .then(function (response){
                for(let i=0 ; i<response.data.length ; i++){
                    that.resDataUrl.push(response.data[i])
                }
            }) 
        },

        data () {
            return {
                keywords:'',
                keywordForSearch:'',
                resDataUrl:[],
                searchResult:[],
                propsSearchResult:[],
            }
        },

        methods:{
            createKeyword(){
                this.keywordForSearch = this.keywords;
                this.keywords = '';
                if(this.keywordForSearch != ''){
                    this.getApiData();
                }else{
                    alert("You need to type something...");
                }
                
            },

            getApiData(){
                let that = this ;
                axios.get('https://api.unsplash.com/photos/random?client_id=bKFaiEZpPA7eGovGXxXcSGe2KUo2ZUGe0qBzaOUFLZo',{
                    params:{
                        count : 21 ,
                        query : this.keywordForSearch,
                        orientation: "squarish",
                    }
                })
                .then(function (response){
                    for(let i=0 ; i<response.data.length ; i++){
                        that.searchResult.push(response.data[i])
                    }
                    that.propsSearchResult = that.searchResult;
                    that.searchResult = [];
                })
                .catch(function(error){
                    alert("Invalid keywords");
                })
            }

        }
    }
</script>

<template>

    <div class="albumContainer">
        <div class="searchPart">
            <div class="searchBoxContainer">
                <h1 class="text">Find what you need</h1>
                <p class="text">Enter keyword to find the picture you want</p>
                <input type="text" class="searchBox" v-model="keywords"
                    placeholder="Enter keyword..." @keypress.enter="createKeyword">
                <input type="submit" class="searchBtn" value="Search" @click.left="createKeyword">
            </div>
        </div>
        <SearchView :resdata="resDataUrl" :searchresult="propsSearchResult"/>      
    </div>
      
</template>

<style lang="scss" scoped>
    .searchPart{
        padding: 130px;
        display: flex;
        justify-content: center;
        background-image: url("https://images.unsplash.com/photo-1474874055390-459bc92357f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1446&q=80");
        background-size: cover;
        background-position:center;
    }
    .searchBoxContainer{
        color: white;
        h1{
            font-size: 40px;
        }
        p{
            font-size: 25px;
        }
        input{
            box-sizing: border-box;
            outline: none;
            border: none;
        }
        .text{
            text-shadow: black 2px 2px;
        }
        .searchBox{
            width:350px; height: 40px;
            border-radius: 25px 0px 0px 25px ;
            background-color: rgb(253, 242, 224);
            padding: 0px 30px;
            &:focus{
                border: 2px solid rgb(255, 129, 79);
            }
        }
        .searchBtn{
            position: relative; 
            left: -5px; top:-1px;
            width:100px; height: 40px;
            border-radius: 0px 25px 25px 0px ;
            background-color: rgb(252, 183, 73);
            transition: 0.5s all linear;
            &:hover{
                cursor: pointer;
                background-color: rgb(255, 129, 79);
            }
        }
    }
    @media(max-width: 750px ){
        .searchPart{
            padding: 80px;
        }
    }

    @media(max-width: 630px ){
        .searchPart{
            padding:  80px 50px;
        }
        .searchBoxContainer{
            h1{
                font-size: 25px;
            }
            p{
                font-size: 18px;
            }
        }
    }

    @media(max-width: 550px ){
        .searchPart{
            padding: 40px;
        }
        .searchBoxContainer{
            .searchBox{
                width:180px;
            }
            .searchBtn{
                width: 80px;
            }
        }
    }

    
</style>

