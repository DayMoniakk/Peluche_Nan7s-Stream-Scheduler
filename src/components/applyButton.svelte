<script>
    import { createEventDispatcher } from "svelte";
    import { formatDate } from "../utilities";

    const dispatch = createEventDispatcher();

    export let weekDays;
    export let scheduleData;

    function getDate(date, time) {
        let target = date;
        const timeParts = time.split(":");
        target.setHours(timeParts[0]);
        target.setMinutes(timeParts[1]);
        target.setSeconds(0);
        target.setMilliseconds(0);

        return target;
    }

    function generateSchedule() {
        let result = "";

        for (let i = 0; i < weekDays.length; i++) {
            let date = Math.floor(getDate(weekDays[i], scheduleData[i].getFirstTime()) / 1000);

            let streamContent = scheduleData[i].firstContent;
            const isDayOff = scheduleData[i].getIsDayOff();
            const hasSecondStream = scheduleData[i].getHasSecondStream();

            if (isDayOff) {
                result += `${formatDate(weekDays[i])} - Offline\n\n`;
                continue;
            }

            result += `<t:${date}:F> - <t:${date}:R> - ${streamContent}\n`;
            if (!hasSecondStream){
                result += "\n";
            }

            if (hasSecondStream) {
                let date2 = Math.floor(getDate(weekDays[i], scheduleData[i].getSecondTime()) / 1000);
                streamContent = scheduleData[i].getSecondContent();
                result += `<t:${date2}:F> - <t:${date2}:R> - ${streamContent}\n\n`;
            }
        }

        navigator.clipboard.writeText(result);
        emitClipboardEvent();
    }

    function emitClipboardEvent() {
        dispatch("savedToClipboard", {});
    }
</script>

<button on:click={generateSchedule}>Get Schedule</button>

<style>
    button {
        margin: 50px 0 100px 0;
        font-size: 30px;
        padding: 2px 10px 2px 10px;
        cursor: pointer;
        transition: scale 0.2s, padding 0.2s;
    }
    button:hover {
        scale: 110%;
        padding: 2px 30px 2px 30px;
    }
</style>
