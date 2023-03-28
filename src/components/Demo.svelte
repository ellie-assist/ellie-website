<script>
  import Button from "./Button.svelte";

  export let translations = {};

  const BASE_URL = window.location.href.includes("localhost")
    ? "http://localhost:3113"
    : "https://api.tryellie.com";

  let inputText = translations.replyText;

  let disabled = false;
  let output = "";
  let source = "";
  let isDone = false;

  async function generateReply() {
    output = "";
    isDone = false;
    disabled = true;
    source = "";

    try {
      const response = await fetch(`${BASE_URL}/demo/stream`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "text/event-stream",
          "x-ellie-version": "website",
        },
        body: JSON.stringify({
          emailText: inputText,
        }),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");

      do {
        const { value, done } = await reader.read();
        const dataString = decoder.decode(value);
        if (isDone || dataString.includes("[source]")) {
          isDone = true;
          const index = dataString.indexOf("[source]");
          output += dataString.substring(0, index);
          source += dataString.substring(index);
          source = source.replace("[source]: ", "");
        } else {
          output += dataString;
        }

        isDone = done;
      } while (!isDone);

      source = source.split(",").filter(Boolean);
      console.log(source);
      disabled = false;
    } catch (err) {
      console.error(err);
      disabled = false;
    }
  }
</script>

<div class="demo">
  <textarea class="text-area" bind:value={inputText} id="demo-input" />

  <Button
    isLoading={disabled}
    loadingText={translations.btnThinkingText}
    class="btn"
    onClick={generateReply}
    {disabled}>{translations.askBtn}</Button
  >
  <pre class="output" id="demo-output">{output}</pre>
  {#if source.length}
    <p data-visible={isDone} class="source">
      {translations.source}
      {#each source as s, index}<a href={s}>{s}</a
        >{#if index === source.length}.{:else},{/if}{/each}.
    </p>
  {/if}
</div>

<style>
  .text-area {
    width: 100%;
    height: 130px;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin-bottom: 1em;
  }
  .output {
    color: #702bf1;
    width: 100%;
    height: auto;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin: 2em 0 0 0;
  }

  .output:empty {
    opacity: 0;
  }

  .source {
    transition: all ease-in-out 200ms;
    opacity: 0;
    transform: translateY(-2px);
    min-height: 60px;
    font-size: 12px;
    margin-top: 0.25em;
    margin-bottom: 4em;
    padding-left: 4px;
    line-height: 18px;
  }

  .source[data-visible="true"] {
    transform: translateY(0);
    opacity: 1;
  }
</style>
