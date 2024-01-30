<script>
  import { onMount } from "svelte";

  export let text = "";
  export let name;
  let interval;

  let words = text.match(/<[^>]+>|[^<\s]+|\s+/g) || [];
  let displayText = "";
  let index = 0;

  function startTyping() {
    const interval = setInterval(() => {
      if (index < words.length) {
        displayText += words[index++];
        document.getElementById(`${name}-text`).innerHTML = displayText;
      } else {
        clearInterval(interval);
      }
    }, 50);
  }
  onMount(() => {
    document.getElementById(`${name}-placeholder`).innerHTML = text;
    setTimeout(startTyping, 1200);
  });
</script>

<div class="ellie-box">
  <div class="ellie-reply-text">
    <div id={`${name}-text`} class="typed-text visible"></div>
    <div id={`${name}-placeholder`} class="typed-text invisible"></div>
  </div>
</div>

<style>
  .ellie-box {
    margin-top: 15px;
    text-align: left;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #e1e3e1;
    background-color: #fefefe;
    width: 200px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;

    box-shadow:
      -1px -1px 2px rgba(0, 0, 0, 0.1),
      -4px -4px 5px rgba(255, 255, 255, 1),
      2px 2px 5px rgba(0, 0, 0, 0.1);
  }

  .typed-text {
    padding: 8px 10px 12px 12px;
    font-size: 13px;
    font-family: Arial, Helvetica, sans-serif;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }

  .typed-text.visible {
    position: absolute;
    top: 0;
  }
  .typed-text.invisible {
    visibility: hidden;
  }

  .typed-text::after {
    content: "";
    position: absolute;
    right: 0;
    border-right: 2px solid black;
    animation: blinkCursor 0.75s steps(40) infinite;
  }

  @keyframes blinkCursor {
    50% {
      border-color: transparent;
    }
  }
</style>
