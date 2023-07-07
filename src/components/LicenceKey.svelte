<script>
  const apiUrl = window.location.href.includes("localhost")
    ? "http://localhost:3113"
    : "https://api.tryellie.com";

  let sessionId = new URLSearchParams(window.location.search).get("session");

  let loading = "true";
  let licenceKey = "Loading licence key...";
  let attempts = 0;
  const fetchKey = () => {
    fetch(`${apiUrl}/checkout/${sessionId}/licence`)
      .then((res) => {
        if (res.status === 102) {
          return { waiting: true };
        }
        if (res.status !== 200) {
          throw new Error("Something went wrong");
        }
        return res.json().then((t) => ({ key: t.licenceKey }));
      })
      .then(({ key, waiting }) => {
        if (waiting) {
          attempts += 1;
          if (attempts < 30) {
            setTimeout(fetchKey, 2000);
          } else {
            throw new Error("Something went wrong");
          }
        } else {
          licenceKey = key;
          loading = "false";
        }
      })
      .catch((err) => {
        console.error(err);
        licenceKey = err.message;
      });
  };

  fetchKey();

  const onClick = () => copyToClipboard(licenceKey);

  const copyToClipboard = (str) => {
    console.log("Copied to clipboard", str);
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };
</script>

<code
  class="code"
  on:click={onClick}
  on:keydown={onClick}
  data-loading={loading}
>
  {licenceKey}
</code>

<style>
  .code {
    font-family: "Gotham-Rounded", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 240px;
    background-color: var(--code-bg-color);
    color: var(--code-text-color);
    height: 32px;
    min-height: 32px;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
    border: none;
    cursor: default;
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    user-select: none;
    outline: none;
    text-decoration: none;
    border: 1px solid var(--border-color);
    padding: 0 12px;
    transition: background-color 200ms ease-in-out, outline 200ms ease-in-out;
  }

  .code[data-loading="true"] {
    font-size: 12px;
  }
</style>
