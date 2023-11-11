<script>
  import Button from "./Button.svelte";
  import Box from "./Box.svelte";
</script>

<Box class="demo-banner">
  <div class="demo-content">
    <h4>
      Check out our <strong>demo of Ellie</strong> that has been trained to understand
      all about how Ellie works!
    </h4>
    <p />
    <Button href="/demo">Try the demo</Button>
  </div>
  <div class="demo-image">
    <img src="/assets/images/native-example.png" alt="" />
  </div>
</Box>

<style>
  .demo-content {
    text-decoration: none;
    font-weight: 500;
    padding: 20px 50px 40px 60px;
  }

  @media (max-width: 560px) {
    .demo-content {
      padding: 0 25px 25px 25px;
    }
  }

  .demo-image {
    position: relative;
    min-height: 100%;
    width: 100%;
    display: none;
  }

  .demo-image img {
    position: absolute;
    bottom: -70px;
    right: 55px;

    width: 100%;
    max-width: 500px;
  }

  .demo-content h4 {
    font-size: 1.35em;
    line-height: 30px;
    margin-bottom: 0;
    width: 400px;
  }

  .demo-content p {
    font-size: 16px;
    line-height: 24px;
    opacity: 0.75;
  }
</style>
