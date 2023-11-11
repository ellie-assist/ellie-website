<script>
  import numeral from "numeral";
  export let shown = true;

  const apiUrl = window.location.href.includes("localhost")
    ? "http://localhost:3113"
    : "https://api.tryellie.com";
  // const apiUrl = "https://api.tryellie.com";
  let opacity = 1;
  let totalUsers = 0;
  let repliesGenerated = 0;

  function formatStat(n) {
    if (!n) return "0";
    return numeral(n).format("0,0");
  }

  async function getStats() {
    const result = await (await fetch(`${apiUrl}/extension/stats`)).json();
    const { usage } = result;
    totalUsers = formatStat(result.totalUsers);
    repliesGenerated = formatStat(usage.totalRepliesGenerated);
    opacity = 1;
  }

  if (shown) {
    getStats();
  }
</script>

<div id="stats" class="stats" style:opacity>
  <p>
    <span class="proof-emails">{repliesGenerated}</span> professional emails
    already generated for<br />
    <span class="proof-emails">{totalUsers}</span>
    happy customers!
  </p>
</div>

<style>
  .stats p {
    font-size: 2.25em;
    line-height: 38px !important;
  }
  .proof-emails {
    /* font-size: 2.5em; */
    font-weight: bold;
    color: var(--btn-color);
  }
</style>
