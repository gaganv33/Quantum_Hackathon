<template>
    <div>
        <div class="left-container">
            <div class="options" v-if="this.getisLogin">
                <img class="dp" src="photos\rick astley.png" alt="profile photo">
                <h1>Welcome <span class="papi">{{this.getUser.username}}</span></h1>
                <h3 class="option-text"><i class="fa-solid fa-check"></i> Tasks</h3>
                <h3 class="option-text"><i class="fa-solid fa-calendar-days"></i> Calender</h3>
                <h3 class="option-text"><i class="fa-solid fa-note-sticky"></i> Notes</h3>
                <h3 class="option-text"><i class="fa-solid fa-sitemap"></i> Organisations</h3>
            </div>
            <div class="container text-center" v-if="!this.getisLogin">
                <router-link :to="{name : 'signup'}" class="btn btn-success">Signup</router-link>
                <router-link :to="{name : 'login'}" class="btn btn-secondary">Login</router-link>
            </div>
            <router-view/>
            <!-- <h3 class="plugins"><i class="fa-solid fa-plus"></i> Add Plugins</h3> -->
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default{
    data(){
        return{

        }
    },
    computed : mapGetters(['getError', 'getMsg', 'getisLogin', 'getUser']),
    beforeMount(){
        console.log(this.getUser)
    }
}
</script>

<style>
img {
    border-radius: 100%;
    width: 250px;
    padding: 50px 0 0;
}
h1 {
    margin: 1rem;
    font-family: 'Courier New', Times, serif;
}
.options {
    position: relative;
    top: 6rem;
    left: 2.5rem;
    text-align: left;
}
.option-text {
    padding: 10px;
    font-size: 1.5rem;
}
.plugins {
    position: relative;
    bottom: 1rem;
    left: 120px;
}
.left-container {
    background-color: #16213e;
    color: antiquewhite; 
    height: 100vh;
}
</style>