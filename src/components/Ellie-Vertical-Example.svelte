<script>
  import { onMount } from "svelte";

  export let input;
  export let output;
  export let name;
  export let subject;
  export let image;
  export let orientation = "vertical";

  let words = output.match(/<[^>]+>|[^<\s]+|\s+/g) || [];
  let displayText = "";
  let index = 0;

  function startTyping() {
    const interval = setInterval(() => {
      if (index < words.length) {
        displayText += words[index++];
        document.getElementById(`${name}-output`).innerHTML = displayText;
      } else {
        clearInterval(interval);
      }
    }, 15);
  }
  onMount(() => {
    document.getElementById(`${name}-input`).innerHTML = input;
    document.getElementById(`${name}-placeholder`).innerHTML = output;
    setInterval(startTyping, 500);
  });
</script>

<div class="ellie-example {orientation}">
  <div class="box">
    <div class="subject">
      <span class="label">Subject</span>
      <span class="value">{subject}</span>
    </div>
    <div id={`${name}-input`} class="typed-text"></div>
  </div>

  <div class="ellie-image-container">
    <img class="ellie-reply-image" role="presentation" src={image} alt="" />
  </div>

  <div class="box ellie-reply">
    <div class="subject">
      <span class="label">Subject</span>
      <span class="value">RE: {subject}</span>
    </div>
    <div class="ellie-reply-output">
      <div id={`${name}-output`} class="typed-text visible"></div>
      <div id={`${name}-placeholder`} class="typed-text invisible"></div>
    </div>
  </div>
</div>

<style>
  .ellie-example {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    gap: 10px;
  }

  .ellie-example.horizontal {
    flex-direction: row;
  }

  .box {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #e1e3e1;
    background-color: #fefefe;
    width: 100%;
    max-width: 450px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    padding-bottom: 8px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  }
  .subject {
    margin-bottom: 10px;
    border-bottom: 1px solid #e1e3e1;
  }
  .label {
    display: inline-block;
    padding: 6px 6px;
    background-color: rgb(242, 236, 255);
  }
  .value {
    display: inline-block;
    padding: 6px 0 6px 6px;
  }
  .ellie-reply-output {
    position: relative;
  }
  .ellie-image-container {
    display: flex;
    align-items: center;
    margin: -1px 0 -5px 0;
    position: relative;
    z-index: 2;
  }
  .ellie-reply-image {
    margin: 0 auto;
    height: 60px;
  }
  .ellie-reply {
  }
  .typed-text {
    padding: 4px 8px;
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
