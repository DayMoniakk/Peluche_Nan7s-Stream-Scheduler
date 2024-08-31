<script>
    import { formatDate } from "../utilities";
    import { ScheduleData } from "../scheduleData";

    import Week from "../components/week.svelte";
    import Day from "../components/day.svelte";
    import ApplyButton from "../components/applyButton.svelte";
    import ClipboardNotification from "../components/clipboardNotification.svelte";
    import OfflineText from "../components/offlineText.svelte";

    let daysString = [];
    let daysRef = new Array(7);
    let fullDays = [];
    let clipboardNotification;
    let offlineMessage = "Offline";

    let scheduleData = [new ScheduleData(), new ScheduleData(), new ScheduleData(), new ScheduleData(), new ScheduleData(), new ScheduleData(), new ScheduleData()];

    function handleWeekChange(event) {
        fullDays = event.detail.value;

        for (let i = 0; i < fullDays.length; i++) {
            daysString[i] = formatDate(fullDays[i]);
        }
    }

    function handleDayChange(event, index) {
        scheduleData[index].setIsdayOff(event.detail.isDayOff);
        scheduleData[index].setHasSecondStream(event.detail.hasSecondStream);

        scheduleData[index].setFirstTime(event.detail.firstTime);
        scheduleData[index].setFirstContent(event.detail.firstContent);

        scheduleData[index].setSecondTime(event.detail.secondTime);
        scheduleData[index].setSecondContent(event.detail.secondContent);
    }

    function handleOfflineMessage(event) {
        offlineMessage = event.detail.value;
    }

    function handleClipboardNotification() {
        clipboardNotification.show(5000);
    }
</script>

<svelte:head>
    <title>Stream Scheduler</title>
</svelte:head>

<div class="blur"></div>

<ClipboardNotification bind:this={clipboardNotification} />

<div class="day-container">
    <Week on:change={handleWeekChange} />

    {#each daysRef as _, i}
        <Day
            bind:fullDay={daysString[i]}
            on:contentChange={(e) => {
                handleDayChange(e, i);
            }}
        />
    {/each}

    <OfflineText on:change={handleOfflineMessage} />

    <ApplyButton bind:weekDays={fullDays} bind:scheduleData on:savedToClipboard={handleClipboardNotification} bind:offlineMessage={offlineMessage} />
</div>

<span class="credit-container">Developed for <a href="https://www.twitch.tv/nan7s_peluche" target="_blank">nan7s_peluche</a> by <a href="https://github.com/DayMoniakk" target="_blank">DayMoniakk</a></span>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;700&display=swap");

    :global(*) {
        font-family: "Fredoka", sans-serif;
    }

    :global(body) {
        margin: 0;
        box-sizing: border-box;
        background-image: url("/background.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        position: relative;
        min-height: 100vh;
    }

    .blur {
        position: absolute;
        backdrop-filter: blur(5px);
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.219);
        z-index: -1;
    }

    .day-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .credit-container {
        position: absolute;
        bottom: 5px;
        width: 100%;
        text-align: center;
        color: rgb(175, 175, 175);
        font-weight: 100;
    }
    .credit-container a {
        text-decoration: none;
        color: rgb(224, 224, 224);
    }
</style>
