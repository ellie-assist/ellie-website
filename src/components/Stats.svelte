<script>
  // import { changeLanguage, setDefaultNamespace, t } from "i18next";
  export let shown;
  // changeLanguage("en");
  // setDefaultNamespace("common");

  const apiUrl = window.location.href.includes("localhost")
    ? "http://localhost:3113"
    : "https://api.ellieai.com";

  let opacity = 0;
  let totalUsers = 0;
  let repliesGenerated = 0;

  async function getStats() {
    const result = await (await fetch(`${apiUrl}/extension/stats`)).json();
    const { usage } = result;
    totalUsers = result.totalUsers;
    repliesGenerated = usage.totalRepliesGenerated;
    opacity = 1;
  }
  if (shown) {
    getStats();
  }
</script>

<div id="stats" class="stats" style:opacity>
  <p>
    Join
    <strong id="total-users">{totalUsers}</strong> users, who have used Ellie to
    generate over
    <strong id="replies-generated">{repliesGenerated}</strong> email replies!
  </p>
</div>
