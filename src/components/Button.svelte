<script>
  export let muted;
  export let isLoading;
  export let onClick = () => {};
  export let loadingText = "Loading...";
  export let href;

  let classes = ["btn"];
  if (muted) {
    classes = [...classes, "muted"];
  }
  classes = [...classes, ...($$restProps.class ?? [])];
</script>

{#if href}
  <a
    class={classes.join(" ")}
    {href}
    on:click={onClick}
    data-loading={isLoading}
    {...$$restProps}
  >
    <slot />
  </a>
{:else}
  <button
    class={classes.join(" ")}
    on:click={onClick}
    data-loading={isLoading}
    {...$$restProps}
  >
    {#if isLoading}
      <span>{loadingText}</span>
    {:else}
      <slot />
    {/if}
  </button>
{/if}

<style>
  .btn {
    font-family: "Gotham-Rounded", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: auto;
    background-color: var(--btn-color);
    color: white;
    height: 40px;
    min-height: 40px;
    line-height: 18px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    outline: none;
    text-decoration: none;
    border: 1px solid var(--btn-color-border);
    padding: 0 15px;
    transition: background-color 200ms ease-in-out, outline 200ms ease-in-out;
  }

  .btn::-moz-focus-inner {
    border: 0;
  }
  .btn:hover,
  .btn:focus,
  .btn:active {
    background-color: var(--btn-color-hover);
    outline: none;
  }

  .btn:disabled {
    opacity: 0.5;
  }

  .muted {
    background-color: white;
    color: var(--text-color);
  }

  .muted:hover,
  .muted:focus,
  .muted:active {
    background-color: white;
    outline: none;
  }
</style>
