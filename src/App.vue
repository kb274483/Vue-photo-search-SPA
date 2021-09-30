<script>
    export default {
      data () {
        return {
          theme1: 'light'
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
            <a href="https://github.com/kb274483/vue-search-photos-website" 
              target="_blank" >
              <Icon type="logo-github" class="github"/>
            </a>
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
                  <a href="https://github.com/kb274483/vue-search-photos-website" 
                    target="_blank" >
                    <Icon type="logo-github" class="github"/>
                  </a>
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

$BG-color:#ffffff;
$Text-color:#171826;
$Text-color-hover:#93A2BF;

#nav {
  a{
    color: $Text-color;
    &:hover{
      cursor: pointer;
      color:$Text-color-hover ;
    }
  }
  .navContainer{
    font-size: 20px; 
    height:110px;
    background-color: $BG-color;
    padding: 0px 10px;
    padding-top: 50px ; 
  }
  .logoBG{
    background-color: #384759;
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
  .github{
    margin-left: 100px;
    transform: scale(2,2);
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
      height: 100px;
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
