<script>
  import numeral from 'numeral';
  export let shown;

  const apiUrl = window.location.href.includes("localhost")
    ? "http://localhost:3113"
    : "https://api.tryellie.com";

  let opacity = 0;
  let totalUsers = 0;
  let repliesGenerated = 0;

  function formatStat(n)  {
    if (!n) return '0';
    return numeral(n).format('0,0');
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
    Join
    <strong id="total-users">{totalUsers}</strong> people, who have used Ellie to
    write over
    <strong id="replies-generated">{repliesGenerated}</strong> email replies!
  </p>
</div>
