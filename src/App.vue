<template>
<div>
  <div v-show="(this.getError.length > 0)" class="error-msg">
    {{this.getError}}
  </div>
  <div v-show="(this.getMsg.length > 0)" class="success-msg">
    {{this.getMsg}}
  </div>
  <!-- <div class="row">
    <div class="col-lg-3" v-if="this.getisLogin">
      <sideBar/>
    </div>
    <div class="col-lg-11">
      <router-view/>
  </div>
  </div> -->
  <router-view/>
</div>
  
</template>

<script>
// import axios from 'axios';
// import sideBar from './components/sideBar.vue';
import { mapGetters } from 'vuex';
export default {
    // components: { sideBar },
    data(){
      return{
        isLogin : false,
      }
    },
    computed : mapGetters(['getError', 'getMsg', 'getisLogin']),
    methods : {

    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
    background-color: #2b3a55;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    color: antiquewhite;
    
}
.error-msg {
  width: 25%;
  text-align: center;
  margin: auto;
  margin-top: 2vh;
  background: #f7b2b2;
  border: none;
  border-radius: 10px;
  padding: 2vh 2vw;
  color : white;
}
.success-msg {
  width: 25%;
  text-align: center;
  margin: auto;
  margin-top: 2vh;
  background: #b2f7b2;
  border: none;
  border-radius: 10px;
  padding: 2vh 2vw;
  background-color : #6ECCAF;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
