<script>
  let important = true;
</script>

{#if important}
  <span class="important">
    <slot />
  </span>
{:else}
  <span>
    <slot />
  </span>
{/if}

<style>
  .important {
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    color: var(--btn-color);
  }
</style>
