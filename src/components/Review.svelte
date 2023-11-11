<script>
  import Stars from "./Stars.svelte";

  let classes = ["inline-review"];
  classes = [...classes, ...($$restProps.class ?? [])];
</script>

<div class={classes.join(" ")}>
  <Stars />
  <blockquote>
    <p class="review-text">
      <span class="review-highlight"
        >Ellie knows exactly what I want to say</span
      >, and the exact right way to say it.
    </p>

    <p class="review-author">- Jared</p>
  </blockquote>
</div>

<style>
  .inline-review {
    position: relative;
    margin: 20px -25px 0 -55px;
    border-radius: 25px;
    /* border: 2px solid #f2edec; */
    padding: 10px 15px 15px 55px;
  }

  .inline-review blockquote {
    margin-bottom: 0.75em;
  }

  .inline-review blockquote::before {
    content: '"';
    position: absolute;
    font-size: 52px;
    opacity: 0.75;
    left: 15px;
    top: 12px;
  }
  .inline-review .review-highlight {
    background-color: var(--purple-lighter);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 560px) {
    .inline-review {
      margin: 10px 0 10px 0;
    }
  }
</style>
