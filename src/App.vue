<script>
    export default {
      data () {
        return {
          theme : false ,
        }
      },
      mounted(){
        let themeSet = localStorage.getItem('theme')
        console.log(themeSet);
        if(themeSet === null){
          this.theme = true
          this.modeSwitch()
        }else if(themeSet === "dark"){
          this.theme = false
          this.modeSwitch()
        }else if(themeSet === 'dafault'){
          this.theme = true
          this.modeSwitch()
        }
      },
      methods:{
        modeSwitch(){
          this.theme = !this.theme
          let btn = document.querySelector('.modeIcon')
          let themeChange = document.querySelector('#app')
          if(this.theme === true){
            btn.classList.value = 'modeIcon dark ivu-icon ivu-icon-md-contrast'
            themeChange.setAttribute('data-theme','dark')
            localStorage.setItem('theme','dark')
          }else{
            btn.classList.value = 'modeIcon light ivu-icon ivu-icon-md-contrast'
            themeChange.setAttribute('data-theme','default')
            localStorage.setItem('theme','default')
          }
        }
      }
    }
</script>

<template>
  <div id="app">
    <header id="nav">  
      <div class="navContainer">
        <Row class="PcMenu">
          <Col span="6">
            <div class="logoBG">
              <div class="logo"> Roy </div>
              <div class="logo"> Lee </div>
            </div>
          </Col>
          <Col span="6">
            <p>Search free high-resolution photos</p>
          </Col>
          <Col span="6" class="menu">
            <div class="home">
              <router-link to="/"> Home </router-link>
            </div>
            <div class="album">
              <router-link to="/searchpage"> SearchPhotos </router-link>
            </div>
          </Col>
          <Col span="6">
            <div class="buttonContainer">
              <a href="https://github.com/kb274483" 
                target="_blank" >
                <Icon type="logo-github" class="github" size="40"/>
              </a>
              <button class="modeSwitch" @click="modeSwitch">
                <Icon type="md-contrast" size="40" class="modeIcon light"/>
              </button>
            </div>
          </Col>
        </Row>

        <div class="RwdMenu">
          <div class="logoBG">
              <div class="logo"> Roy </div>
              <div class="logo"> Lee </div>
          </div>
          <Dropdown trigger="click">
            <a href="javascript:void(0)">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </a>
            <DropdownMenu slot="list" class="list">
                <DropdownItem><router-link to="/"> Home </router-link></DropdownItem>
                <DropdownItem><router-link to="/searchpage"> Search </router-link></DropdownItem>
                <DropdownItem>
                  <a href="https://github.com/kb274483" 
                    target="_blank" >
                    <Icon type="logo-github" class="github"/>
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <button class="modeSwitch">mode</button>
                </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    vertical-align: baseline;
    transition: all linear 0.5s;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
}

:root,[data-theme='default']{
  --url: url("https://images.unsplash.com/photo-1589737655982-73ef7ea30a69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80");
  --BgColor:#ffffff;
  --logoBgColor:#384759;
  --TextColor:#171826;
  --TextColorHover:#93A2BF;
}
[data-theme='dark']{
  --url: url("https://images.unsplash.com/photo-1615044484665-b28d6be56285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  --BgColor:#242424;
  --logoBgColor:#6a7383;
  --TextColor:#ebebeb;
  --TextColorHover:#93A2BF;
}

#nav {
  p{
    color:var(--TextColor);
  }
  a{
    color:var(--TextColor);
    &:hover{
      cursor: pointer;
      color:var(--TextColorHover);
    }
  }
  .navContainer{
    font-size: 20px; 
    height:110px;
    background-color: var(--BgColor);
    padding: 0px 10px;
    padding-top: 50px ; 
  }
  .logoBG{
    background-color: var(--logoBgColor);
    width: 120px; height: 80px;
    position: relative; 
    top:-40px ; left:100px;
    .logo{
      margin: 0px 20px;
      color: white;
      font-size: 25px;
      &:last-child{
        text-align: right;
      }
    } 
  }
  .menu{
    display: flex;
    justify-content: space-around;
  }
  .buttonContainer{
    display: flex;
    align-content: center;
  }
  .github{
    margin-left: 100px;
  }
  .modeSwitch{
    cursor: pointer;
    margin-left: 100px;
    border: none;
    background-color: rgba(255, 255, 255, 0);
    &:hover{
      cursor: pointer;
      color:var(--TextColorHover);
    }
    .modeIcon{
      transition: all linear 0.5s;
    }
  }
  .light{
    transform: rotate(0deg);
  }
  .dark{
    transform: rotate(540deg);
    color:var(--TextColor);
    &:hover{
      color:var(--TextColorHover);
    }
  }
  
  // --------------------------------------------------------------
  .RwdMenu{
    display: none;
    justify-content: space-between;
    .line{
      background-color:#384759;
      height: 3px;
      width: 30px;
      margin: 5px;
    }
    .list{
      width: 100px;
      height: 150px;
      text-align: center;
      letter-spacing: 2px;
      padding: 10px;
    }
    .github{
      margin-left: 0px;
    }
  }
}
@media(max-width:800px){
  #nav{
    .PcMenu{
      display: none;
    }
    .RwdMenu{
      display: flex;
      position: relative; 
      left: -50px;
    }
  }
  
}
</style>
