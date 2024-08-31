<script>
    import { createEventDispatcher } from "svelte";

    export let fullDay = "????";

    const dispatch = createEventDispatcher();

    let isDayOff = false;
    let hasSecondStream = false;
    let streamContentInput;
    let streamContentInput2;
    let prevStreamContent = "";
    let timeInput;
    let timeInput2;

    function handleDayOff() {
        isDayOff = !isDayOff;
        emitContentChangeEvent();

        if (isDayOff) {
            prevStreamContent = streamContentInput.value;
            streamContentInput.value = "Offline";

            if (hasSecondStream) {
                handleNewStream();
            }
        } else {
            streamContentInput.value = prevStreamContent;
        }
    }

    function handleNewStream() {
        hasSecondStream = !hasSecondStream;
    }

    function emitContentChangeEvent() {
        dispatch("contentChange", {
            hasSecondStream: hasSecondStream,
            isDayOff: isDayOff,

            firstTime: timeInput.value,
            firstContent: streamContentInput.value,

            secondTime: timeInput2 != null ? timeInput2.value : "",
            secondContent: streamContentInput2 != null ? streamContentInput2.value : "",
        });
    }
</script>

<div class={isDayOff ? "day-container off" : "day-container"}>
    <div class="stream">
        <h3 class="day-text">{fullDay}</h3>
        <input type="time" name="" class="stream-time" value="14:00" bind:this={timeInput} on:change={emitContentChangeEvent} disabled={isDayOff} />
        <input type="text" name="" class={isDayOff ? "stream-content off" : "stream-content"} bind:this={streamContentInput} on:change={emitContentChangeEvent} disabled={isDayOff} />
        <button class={hasSecondStream ? "btn-offline stream-on" : "btn-offline stream-off"} on:click={handleNewStream} disabled={isDayOff}></button>
        <div class="spacer"></div>
        <button class="btn-offline" on:click={handleDayOff}></button>
    </div>

    {#if hasSecondStream}
        <div class="stream">
            <h3 class="day-text">{fullDay}</h3>
            <input type="time" name="" class="stream-time" value="20:00" bind:this={timeInput2} on:change={emitContentChangeEvent} disabled={isDayOff} />
            <input type="text" name="" class={isDayOff ? "stream-content off" : "stream-content"} bind:this={streamContentInput2} on:change={emitContentChangeEvent} />
        </div>
    {/if}
</div>

<style>
    .day-container {
        background-color: #dbdbdb;
        width: 80vw;
        max-width: 700px;
        border-radius: 5px;
        border: 3px solid rgb(66, 81, 97);
        transition: background-color 0.2s;
        display: flex;
        flex-direction: column;
    }
    .day-container.off {
        background-color: rgb(83, 83, 83);
    }

    .stream {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px 0 10px;
        height: 50px;
    }

    .stream-content {
        flex-grow: 1;
        height: 30px;
        margin: 0 10px 0 10px;
        font-size: large;
        transition:
            background-color 0.2s,
            color 0.2s;
    }
    .stream-content.off {
        background-color: rgb(71, 71, 71);
        border: none;
        text-align: center;
        color: black;
    }

    .btn-offline {
        width: 30px;
        height: 30px;
        background-color: white;
        border: 1px solid rgb(65, 65, 65);
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
        background-image: url("/icon_sleep.png");
        background-size: 20px;
        background-position: center;
        background-repeat: no-repeat;
    }
    .btn-offline:hover {
        background-color: rgb(92, 142, 218);
    }
    .btn-offline:disabled {
        background-color: rgb(65, 65, 65);
        cursor: not-allowed;
    }

    .spacer {
        width: 5px;
    }

    .btn-offline.stream-on {
        background-image: url("/icon_cancel.png");
    }

    .btn-offline.stream-off {
        background-image: url("/icon_add.png");
    }

    .day-text {
        max-width: 120px;
        padding-right: 10px;
        font-weight: 400;
        text-align: center;
    }

    .stream-time {
        height: 30px;
        cursor: pointer;
    }
</style>
