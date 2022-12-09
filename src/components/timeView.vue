<template>
    <div class="row justify-content-evenly right-top-container" id="time">
        <div class="col-6 time-box">
            <h2 class="time">9:41 am</h2>
            <div class="row">
                <h5 class="col">Monday</h5>
                <h5 class="col">31/05/22</h5>
            </div>
        </div>
        <div class="col-6 pomodoro-box">
            <h2 class="pomodoro">Pomodoro</h2>
            <div class="row">
                <h5 class="col">23 mins</h5>
                <h5 class="col">Focus</h5>
            </div>
            <h5 id="horizontal"><i class="fa-solid fa-pause"></i> &nbsp;&nbsp;&nbsp; <i class="fa-solid fa-mug-hot"></i> &nbsp;&nbsp;&nbsp; <i class="fa-solid fa-gear"></i></h5>
        </div>
        <hr>
    </div>
</template>

<script>

</script>

<style>
#time {
    background-color: #2b3a55;
    color: aliceblue;
}
.col-6 {
    width: 22%;
    text-align: center;
}
.time {
    font-size: 3rem;
}
.pomodoro {
    font-size: 2.3rem;
}
#horizontal {
    border: 5px solid #00ff04;
    border-radius: 10px;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>