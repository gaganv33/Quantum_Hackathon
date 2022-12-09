<!-- eslint-disable vue/valid-template-root -->
<template>
    <div class="logo">
        <img src="photos\rick astley.png" alt="logo">
        <h1>Signup</h1>
    </div>
    <div class="container">
        <form @submit.prevent="signup">
            <div class="row justify-content-center">
                <h2 class="col-4">Username:</h2>
                <input class="col-4" type="text" id="username" v-model="signupDetails.username">
            </div>
            <div class="row justify-content-center">
                <h2 class="col-4">Password:</h2>
                <input class="col-4" type="text" id="password" v-model="signupDetails.password">
            </div>
            <div class="row justify-content-center">
                <h2 class="col-4">confirm password:</h2>
                <input class="col-4" type="text" id="confirm-password" v-model="signupDetails.confirmPassword">
            </div>
            <div class="row justify-content-center">
                <h2 class="col-4">Email:</h2>
                <input class="col-4" type="text" id="email" v-model="signupDetails.email">
            </div>
            <br>
            <button class="btn btn-warning">login</button>
        </form>
    </div>
</template>

<script>
import axios from "../axios_config";
export default{
    data(){
        return{
            signupDetails : {
                username : '',
                password : '',
                confirmPassword : '',
                email : '',
            },
            isCorrect : false,
        }
    },
    methods: {
        signup : async function() {
            if(this.signupDetails.password == this.signupDetails.confirmPassword){
                this.isCorrect = true;
            }
            if(this.isCorrect){
                const signup_data = {
                        username : this.signupDetails.username,
                        password : this.signupDetails.password,
                        email : this.signupDetails.email,
                }
                try{
                    const response = await axios.post('auth/register', signup_data);
                    console.log(response)
                    if(response.status == 200){
                        this.$store.dispatch('setMsg', response.data.msg);
                    }else{
                        this.$store.dispatch('setError', response.data.msg);
                    }   
                }catch(err){
                    console.log("Error in signup Page.", err);
                }
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