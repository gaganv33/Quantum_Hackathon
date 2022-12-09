<!-- eslint-disable vue/valid-template-root -->
<template>
    <div id="body">
    <div class="row tasks">
        <h2 class="col task-text">Tasks</h2>
        <h5 class="col"><i class="fa-solid fa-caret-left"></i> 31st may 2022 <i class="fa-solid fa-caret-right"></i></h5>
        <h5 class="col">filter <i class="fa-solid fa-caret-down"></i></h5>
    </div>

    <div v-for="item in this.notcompletedTask" :key="item._id">
        <div class="box" id="box-1">
            <div class="row">
                <input class="col cb form-check-input" type="checkbox" name="box-1" @onclick.prevent="completed(item._id)">
                <h3 class="col tk">{{item.title}}</h3>
                <h3 class="col te">time:{{item.start}}-{{item.end}}</h3>
            </div>
            <div class="row justify-content-center lower">
                <h4 class="col-sm-2">{{item.labelId}}</h4>
                <h4 class="col-sm-2">{{item.organization}}</h4>
                <h4 class="col-sm-2">{{item.urgency}}</h4>
            </div>
        </div>
    </div>


    <!-- <div class="box" id="box-1">
        <div class="row">
            <input class="col cb form-check-input" type="checkbox" name="box-1">
            <h3 class="col tk">Complete Math HW</h3>
            <h3 class="col te">time:3:00pm-5:00pm</h3>
        </div>
        <div class="row justify-content-center lower">
            <h4 class="col-sm-2">Study</h4>
            <h4 class="col-sm-2">Personal</h4>
            <h4 class="col-sm-2">Important</h4>
        </div>
    </div>
    <div class="box" id="box-2">
        <div class="row">
            <input class="col cb form-check-input" type="checkbox" name="box-2">
            <h3 class="col tk">Prepare Report</h3>
            <h3 class="col te">time: <span>choose time</span> </h3>
        </div>
        <div class="row justify-content-center lower">
            <h4 class="col-sm-2">Events</h4>
            <h4 class="col-sm-2">BIT club</h4>
            <h4 class="col-sm-2">Important</h4>
        </div>
    </div>
    <div class="box" id="box-3">
        <div class="row">
            <input class="col cb form-check-input" type="checkbox" name="box-3">
            <h3 class="col tk">Submit eng</h3>
            <h3 class="col te">time: <span>choose time</span> </h3>
        </div>
        <div class="row justify-content-center lower">
            <h4 class="col-sm-2">Assignment</h4>
            <h4 class="col-sm-2">Personal</h4>
            <h4 class="col-sm-2 urgent">urgent</h4>
        </div>
    </div> -->


    <div class="add-task">
        <button type="button" @click.prevent="openForm()" class="bt-add btn btn-dark"><i class="fa-2x fa-solid fa-circle-plus">Add Task</i></button>
        <!-- The form -->
        <div class="form-popup" id="myForm">
            <form @submit.prevent="Submit()" class="form-container">
            <input type="text" class="form-control" placeholder="Task name" v-model="addTask.title">
            <br>
            <!-- <h3 class="form-text">select date <i class="fa-solid fa-calendar-days"></i></h3> -->
            <label for="startTime" class="from-label">Starting Time</label>
            <input type="datetime-local" class="form-control" v-model="addTask.start" id="startTime">
            <label for="endTime" class="form-label">Ending Time</label>
            <input type="datetime-local" v-model="addTask.end" id="endTime" class="form-control"><br>
            <label>Select</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="urgent" v-model="this.addTask.urgency">
                <label class="form-check-label" for="flexRadioDefault1">
                    Urgent
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked value="important" v-model="this.addTask.urgency">
                <label class="form-check-label" for="flexRadioDefault2">
                    Important
                </label>
            </div>

            <h3 class="form-text">select labelId</h3>
            <div class="row justify-content-center">
                <h4 class="col-sm-3 form-text btn" @click.prevent="Study">study</h4>
                <h4 class="col-sm-3 form-text btn" @click.prevent="Code">code</h4>
                <h4 class="col-sm-3 form-text btn" @click.prevent="Read">read</h4>
            </div>
            <button type="submit" class="low-bt btn">Add New Task</button>
            <button type="button" class="low-bt btn cancel" @click.prevent="closeForm()">Close</button>
            </form>
        </div> 
    </div>
</div>
</template>


<script>
import axios from '../axios_config';
// import store from '../store/index';
import { mapGetters } from 'vuex';


export default{
    computed : mapGetters(['getError', 'getMsg', 'getisLogin', 'getUser', 'getAccessToken']),
    data(){
        return{
            addTask : {
                title : '',
                organization : undefined,
                start : null,
                end : null,
                labelId : null,
                urgency : '',
            },
            allTask : [],
            completedTask : [],
            notcompletedTask : [],
        }
    },
    methods : {
        openForm : function() {
        document.getElementById("myForm").style.display = "block";
        },
        closeForm : function() {
        document.getElementById("myForm").style.display = "none";
        },
        Study : function(){
            this.addTask.labelId = 'Study';
        },
        Code : function(){
            this.addTask.labelId = 'Code';
        },
        Read : function(){
            this.addTask.labelId = 'Read';
        },
        Submit : async function(){
            this.addTask.start = new Date(this.addTask.start);
            this.addTask.start = this.addTask.start.valueOf();
            this.addTask.end = new Date(this.addTask.end);
            this.addTask.end = this.addTask.end.valueOf();
            console.log(this.addTask);
            console.log(this.getAccessToken , "im here in submit");
            const response = await axios.post('task', this.addTask);
            console.log(response);
            
        },
        completed : async function(taskId) {
            console.log("In check func")
            const response = await axios.get(`task/${taskId}/complete`);
            console.log(response);
            
        }
    },
    mounted : async function(){
        const response = await axios.get('task');
        this.allTask = response.data.tasks;
        console.log(response);
        const lengthAllTask = this.allTask.length;
        for(let i=0;i<lengthAllTask; i++){
            if(this.allTask[i].organization == "Personal"){
                if(this.allTask[i].isComplete == true){
                    this.completedTask.push(this.allTask[i]);
                }else{
                    this.notcompletedTask.push(this.allTask[i]);
                }
            }else{
                let completedByLength = this.allTask[i].completedBy.length;
                let flag = false;
                for(let j=0; j<completedByLength; j++){
                    if(this.allTask[i].completedBy[j] == this.getUser._id){
                        this.completedTask.push(this.allTask[i]);
                        flag = true;
                    }
                }
                if(!flag){
                    this.notcompletedTask.push(this.allTask[i]);
                }
            }
        }
        console.log("All tasks: ", this.allTask)
        console.log("Completed Task: ", this.completedTask);
        console.log("Non completed Task: ", this.notcompletedTask);
    }

}

</script>

<style>
#body {
    background-color: #2b3a55;
    color: aliceblue;
}
.tasks {
    padding-top: 2rem;
    text-align: center;
}
.task-text {
    position: relative;
    right: 9.5rem;
    font-size: 2rem;
}


.box {
    background-color: #16213e;
    margin: 4rem 7rem;
    border-radius: 2rem;
    padding: 1rem;
}
.cb {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem;
}
.tk {
    position: relative;
    left: 2rem;
    text-align: left;
    font-weight: lighter;
}
.te {
    position: relative;
    text-align: right;
    font-size: 1.2rem;
}
.col-sm-2 {
    background-color: #2b3a55;
    text-align: center;
    margin: 1rem;
    margin-bottom: 0;
    border-radius: 2rem;
    padding: 0.2rem;
    padding-bottom: 0.5rem;
    font-weight: lighter;
}

span {
    color: rgb(117, 117, 199);
}
.urgent {
    background-color: rgb(208, 70, 70);
}


.add-task {
    text-align: center;
}
.bt-add {
    background-color: #16213e;
}
.form-text {
    font-weight: light;
    padding: 1rem;
    font-size: 1.3rem;
    margin: 0.4rem;
}
.col-sm-3 {
    background-color: #2b3a55;
    font-size: 1rem;
    width: auto;
    border-radius: 2rem;
}

#myForm {
    background-color: #16213e;
    margin: 2% 35%;
    border-radius: 2rem;
    padding: 2rem;
    display: none;
}
#add-tag {
    margin-top: 2rem;
}
.low-bt {
    background-color: #2b3a55;
    margin: 1rem 4rem 0;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>