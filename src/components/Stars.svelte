<script>
  export let large;
  let className = large ? "stars-big" : "stars";
</script>

<svg
  viewBox="0 0 121 21"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
>
  <g clip-path="url(#clip0)">
    <path
      d="M10.5984 0.272079L12.8435 7.18191H20.109L14.2311 11.4524L16.4762 18.3622L10.5984 14.0917L4.72054 18.3622L6.96568 11.4524L1.08782 7.18191H8.35325L10.5984 0.272079Z"
      fill="currentcolor"
    />
    <path
      d="M35.5984 0.272079L37.8435 7.18191H45.109L39.2311 11.4524L41.4762 18.3622L35.5984 14.0917L29.7205 18.3622L31.9657 11.4524L26.0878 7.18191H33.3532L35.5984 0.272079Z"
      fill="currentcolor"
    />
    <path
      d="M60.5984 0.272079L62.8435 7.18191H70.109L64.2311 11.4524L66.4762 18.3622L60.5984 14.0917L54.7205 18.3622L56.9657 11.4524L51.0878 7.18191H58.3532L60.5984 0.272079Z"
      fill="currentcolor"
    />
    <path
      d="M85.5984 0.272079L87.8435 7.18191H95.109L89.2311 11.4524L91.4762 18.3622L85.5984 14.0917L79.7205 18.3622L81.9657 11.4524L76.0878 7.18191H83.3532L85.5984 0.272079Z"
      fill="currentcolor"
    />
    <path
      d="M110.598 0.272079L112.844 7.18191H120.109L114.231 11.4524L116.476 18.3622L110.598 14.0917L104.721 18.3622L106.966 11.4524L101.088 7.18191H108.353L110.598 0.272079Z"
      fill="currentcolor"
    />
  </g>
  <defs>
    <clipPath id="clip0">
      <rect x="0.598389" y="0.272079" width="120" height="20" fill="white" />
    </clipPath>
  </defs>
</svg>

<style>
  .stars {
    color: #f7e011;
    width: 121px;
    height: 21px;
  }
  .stars-big {
    fill: #202124;
    width: 220px;
    height: 50px;
  }
  .stars-big path:last-child {
    fill: #80868b;
  }
</style>
