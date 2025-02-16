<script>
    import { createEventDispatcher, onMount } from "svelte";

    let dateHolder;

    const dispatch = createEventDispatcher();

    onMount(() => {
        dateHolder.valueAsDate = new Date();
        emitChangeEvent();
    });

    function getNextSevenDays() {
        let dateParts = dateHolder.value.split("-");
        let date = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2]));
        let days = Array.from({length: 7}, (_, i) => {
            let nextDay = new Date(date);
            nextDay.setDate(date.getUTCDate() + i);
            return nextDay;
        });

        return days;
    }

    function emitChangeEvent() {
        dispatch("change", {
            value: getNextSevenDays()
        });
    }
</script>

<div class="week-container">
    <h3>Start date:</h3>
    <input type="date" name="" id="" bind:this={dateHolder} on:change={emitChangeEvent}/>
</div>

<style>
    .week-container {
        background-color: #dbdbdb;
        width: 300px;
        height: 50px;
        border-radius: 5px;
        border: 3px solid rgb(66, 81, 97);
        margin-bottom: 100px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 50px;
    }

    input {
        cursor: pointer;
    }
</style>
