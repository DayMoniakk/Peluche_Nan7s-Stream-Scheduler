<script>
    import { createEventDispatcher, onMount } from "svelte";

    const dispatch = createEventDispatcher();

    let offlineTextInput;

    function handleOfflineTextChange() {
        dispatch("change", {
            value: offlineTextInput.value,
        });
    }

    onMount(() => {
        handleOfflineTextChange();
    });
</script>

<div class="offline-msg">
    <h3>Offline text</h3>
    <input bind:this={offlineTextInput} on:change={handleOfflineTextChange} type="text" value="`Error 404: nan7s.exe not found`" />
</div>

<style>
    .offline-msg {
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;
        max-width: 700px;
        background-color: #dbdbdb;
        border: 3px solid rgb(66, 81, 97);
        padding: 10px;
        margin-top: 20px;
    }
    .offline-msg h3 {
        font-weight: 500;
        font-size: 25px;
        margin: 0;
    }
    .offline-msg input {
        width: 400px;
        height: 30px;
        border: 1px solid rgb(66, 81, 97);
        border-radius: 5px;
        padding: 0 10px 0 10px;
        font-size: 18px;
    }

    @media screen and (max-width: 700px) {
        .offline-msg {
            flex-direction: column;
        }
    }
</style>
