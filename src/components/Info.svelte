<script>
  export let tooltip;
</script>

<span class="info">
  <span class="toggle">
    <span class="label"><slot /></span>
    <svg
      class="icon"
      viewBox="0 0 32 32"
      height="14"
      width="14"
      fill="none"
      stroke="currentcolor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path d="M16 14 L16 23 M16 8 L16 10" />
      <circle cx="16" cy="16" r="14" />
    </svg>
  </span>
  <span class="tooltip">
    {tooltip}
  </span>
</span>

<style>
  .icon {
    position: relative;
    top: 2px;
    display: none;
  }
  .info {
    position: relative;
  }

  .label {
    cursor: default;
    border-bottom: 1px dashed #999;
  }
  .tooltip {
    position: absolute;
    display: none;
    top: calc(100% + 5px);
    left: -50%;
    padding: 4px 8px;
    width: 400px;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    z-index: 9;
    border-radius: 5px;
    transform: translate(50px -25%);
  }

  .info:hover .tooltip {
    display: block;
  }
</style>
