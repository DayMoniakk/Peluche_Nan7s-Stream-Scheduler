<script>
    import { fly } from "svelte/transition";

    let visible = false;
    let timeout;

    export function show(time) {
        if (timeout != null) {
            clearTimeout(timeout);
            visible = false;
        }

        setTimeout(() => {
            visible = true;

            timeout = setTimeout(() => {
                visible = false;
            }, time);
        }, 100);
    }
</script>

{#if visible}
    <h4 transition:fly={{ y: -200, duration: 1000 }}>
        Schedule copied to the clipboard !
    </h4>
{/if}

<style>
    h4 {
        position: absolute;
        right: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 20px;
        border-radius: 10px;
        font-weight: 400;
    }
</style>
