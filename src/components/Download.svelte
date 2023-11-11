<script>
  import Button from "./Button.svelte";
  import Box from "./Box.svelte";
</script>

<Box class="downloads">
  <div class="download-content">
    <h4>Ellie works directly in your inbox as a browser extension</h4>
    <p>This means Ellie can be easily integrated into your usual workflow</p>
    <Button href="/downloads">
      <span>Download the extension</span>
      <span class="browser-icons">
        <img class="browser-icon" src="/assets/chrome.png" alt="chrome icon" />
        <img
          class="browser-icon"
          src="/assets/firefox.png"
          alt="firefox icon"
        />
      </span>
    </Button>
  </div>
  <div class="download-image">
    <img src="/assets/images/native-example.png" alt="" />
  </div>
</Box>

<style>
  .download-content {
    text-decoration: none;
    font-weight: 500;
    padding: 20px 50px 40px 60px;
  }

  @media (max-width: 560px) {
    .download-content {
      padding: 0 25px 25px 25px;
    }
  }

  .download-image {
    position: relative;
    min-height: 100%;
    width: 100%;
  }

  .download-image img {
    position: absolute;
    bottom: -70px;
    right: 55px;
    /* height: auto; */
    width: 100%;
    max-width: 500px;
  }

  .download-content h4 {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 0;
    width: 400px;
  }

  .download-content p {
    font-size: 16px;
    line-height: 24px;
    opacity: 0.75;
  }
</style>
