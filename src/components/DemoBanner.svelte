<script>
  import Button from "./Button.svelte";
  import Box from "./Box.svelte";
</script>

<div class="demo-banner">
  <div class="demo-content">
    <h4>
      Check out our <strong>demo of Ellie</strong> that has been trained to understand
      all about how Ellie works!
    </h4>
    <p />
    <Button href="/demo">Try the demo</Button>
  </div>
</div>

<style>
  .demo-banner {
    background-color: rgb(242, 236, 255);
    border: 1px solid #5e4c984d;
    width: 90%;
    max-width: 1000px;
    border-radius: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    overflow: hidden;
  }
  .demo-content {
    text-align: center;
    text-decoration: none;
    font-weight: 500;
  }

  @media (max-width: 560px) {
    .demo-content {
    }
  }

  /* .demo-image {
    position: relative;
    min-height: 100%;
    width: 100%;
  }

  .demo-image img {
    position: absolute;
    bottom: -70px;
    right: 55px;

    width: 100%;
    max-width: 500px;
  } */

  .demo-content h4 {
    font-size: 1.15em;
    line-height: 30px;
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
  }

  .demo-content p {
    font-size: 16px;
    line-height: 24px;
    opacity: 0.75;
  }
</style>
