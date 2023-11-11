<script>
  import { onMount } from "svelte";
  export let url;
  export let innerClass;
  export let flat = false;

  let isPlaying;
  let vid;

  function onPause() {
    isPlaying = false;
  }
  function onPlaying() {
    isPlaying = true;
  }
  function canPlay() {}
  function onClick() {
    if (isPlaying) {
      isPlaying = false;
      vid.pause();
    } else {
      isPlaying = true;
      vid.play();
    }
  }

  function onKeydown() {
    // if space
    return;
  }

  onMount(() => {
    vid.play();
  });
</script>

<div
  class="video-container"
  data-is-playing={isPlaying}
  data-flat={flat}
  on:keydown={onKeydown}
  on:click={onClick}
>
  <div class="video-wrapper">
    <video
      class={innerClass}
      muted
      bind:this={vid}
      on:playing={onPlaying}
      on:pause={onPause}
      on:canplay={canPlay}
    >
      <source src={url} />
    </video>
  </div>
  <div class="play-btn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32"
      height="32"
      fill="none"
      stroke="currentcolor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path d="M10 2 L10 30 24 16 Z" />
    </svg>
  </div>
</div>

<style>
  [data-is-playing="true"] .play-btn {
    display: none;
  }
  .video-wrapper {
    width: 100%;
    overflow: hidden;
  }
  .play-btn {
    position: absolute;
    padding: 10px;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
    color: white;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .video-container {
    margin: 40px auto 0 auto;
    position: relative;
    padding: 5px 5px 0px 5px;
    overflow: hidden;
    border-radius: 16px;
    border: 1px solid #e1e3e1;
    background-color: #fefefe;
    max-width: 600px;
  }

  .video-container[data-flat="true"] {
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
</style>
