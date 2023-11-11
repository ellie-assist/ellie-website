<div class="box">
  <slot />
</div>

<style>
  .box {
    background-color: rgb(242, 236, 255);
    /* border: 1px solid rgba(242, 236, 255, 1); */
    border: 1px solid #5e4c984d;
    width: 90%;
    max-width: 1200px;
    border-radius: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }
</style>
