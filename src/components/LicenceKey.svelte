<script>
  const apiUrl = window.location.href.includes("localhost")
    ? "http://localhost:3113"
    : "https://api.tryellie.com";

  let sessionId = new URLSearchParams(window.location.search).get("session");

  let loading = "true";
  let licenceKey = "Loading licence key...";
  let attempts = 0;
  let copied = "false";
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
    copied = "true";
  };
</script>

<span translate="no" class="code" data-loading={loading}>
  {licenceKey}
  <span
    class="copy-icon"
    on:click={onClick}
    on:keydown={onClick}
    data-copied={copied}
  >
    <svg
      class="checkmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="15"
      height="15"
      fill="none"
      stroke="currentcolor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="4"
    >
      <path d="M2 20 L12 28 30 4" />
    </svg>
    <span class="copy">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="15"
        height="15"
        fill="none"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      >
        <path d="M6 2 L6 30 26 30 26 10 18 2 Z M18 2 L18 10 26 10" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="15"
        height="15"
        fill="none"
        stroke="currentcolor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      >
        <path d="M6 2 L6 30 26 30 26 10 18 2 Z M18 2 L18 10 26 10" />
      </svg>
    </span>
  </span>
</span>

<style>
  .code {
    position: relative;
    font-family: "Gotham-Rounded", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 240px;
    background-color: var(--code-bg-color);
    color: var(--code-text-color);
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
    outline: none;
    text-decoration: none;
    border: 1px solid var(--border-color);
    padding: 0 32px 0 12px;
    transition: background-color 200ms ease-in-out, outline 200ms ease-in-out;
  }

  .code[data-loading="true"] {
    font-size: 12px;
  }

  .code[data-loading="true"] .copy-icon {
    display: none;
  }

  @media (max-width: 400px) {
    .code {
      margin-top: 4px;
      padding: 6px 12px;
    }
  }

  .copy-icon {
    position: absolute;
    right: 5px;
    top: 6px;
    width: 20px;
  }

  .copy-icon[data-copied="false"] .checkmark {
    display: none;
  }

  .copy-icon[data-copied="true"] .copy {
    display: none;
  }

  .copy-icon svg {
    fill: #dfdfdf;
    position: absolute;
  }
  .copy-icon svg:nth-child(2) {
    top: 3px;
    left: 3px;
  }
</style>
