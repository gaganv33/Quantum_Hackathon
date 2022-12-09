<!-- eslint-disable vue/valid-template-root -->
<template>
    <div class="container">
        <h1 class="text-center">Login</h1>
        <div>
            <form @submit.prevent="login">
                <div class="row justify-content-center">
                    <h2 class="col-4">Username:</h2>
                    <input class="col-4" type="text" id="username" v-model="loginDetails.username">
                </div>
                <div class="row justify-content-center">
                    <h2 class="col-4">Password:</h2>
                    <input class="col-4" type="text" id="password" v-model="loginDetails.password">
                </div>
                <div class="row justify-content-center">
                    <h2 class="col-4">Email:</h2>
                    <input class="col-4" type="email" id="email" v-model="loginDetails.email">
                </div>
                <br>
                <button class="btn btn-warning">login</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from '../axios_config';
import { mapGetters } from 'vuex';
export default{
    data(){
        return{
            loginDetails : {
                username : '',
                password : '',
                email : '',
            }

        }
    },
    computed : mapGetters(['getError', 'getMsg', 'getisLogin', 'getUser', 'getAccessToken']),
    methods : {
        login : async function(){
            try{
                const login_data = {
                    username : this.loginDetails.username,
                    password : this.loginDetails.password,
                    email : this.loginDetails.email,
                }
                const response = await axios.post('auth/login', login_data);
                console.log(response , "in login response");
                if(response.status == 200){
                    this.$store.dispatch('setAccessToken', response.data.accessToken);
                    console.log("In Login View: ", this.getAccessToken);
                    this.$store.dispatch('setisLogin', true)
                    this.$store.dispatch('setUser', response.data.user);
                    this.$router.push({ name: 'dashboard' });
                    console.log(response);
                }else{
                    this.$store.dispatch('setError', 'Login Error.');
                }
            }catch(err){
                console.log(err);
                console.log("Error:", err);
            }
        }
    }
}

</script>

<style>
body {
    text-align: center;
    background-color: rgb(67, 49, 108);
    font-family: 'Montserrat', sans-serif;
    color: beige;
}
.container {
    padding-top: 2rem;
}
h1 {
    color : white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: relative;
    bottom: 27px;
}
img {
    border-radius: 100%;
    margin: 50px;
}
h2 {
    color : white;
    text-align: right;
    font-size: 20px;
    margin: 20px;
}
.col-4 {
    position: relative;
    right: 50px;
    height: 35px;
    width: 300px;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>