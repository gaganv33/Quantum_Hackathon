<!-- eslint-disable vue/valid-template-root -->
<template>
    <div class="row">
        <div class="col-lg-3">
            <sideBar/>
            
            </div><br>
            <div class="col-lg-9">
                <timeView/>
                <taskView/>
            <router-view/>
        </div>
    </div>

</template>

<script>
import timeView from '../components/timeView.vue';
import sideBar from '../components/sideBar.vue';
import taskView from '../components/taskView.vue';
import { mapGetters } from 'vuex';
export default {
    data(){
        return{

        }
    },
    components: { sideBar, timeView, taskView},
    computed : mapGetters(['getError', 'getMsg', 'getisLogin']),
    methods : {},
    mounted(){
        
    }
}
</script>

<style>

@import "~bootstrap/dist/css/bootstrap.css";
</style>