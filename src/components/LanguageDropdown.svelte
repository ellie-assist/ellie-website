<script>
  import { language } from "astro-i18next";
  console.log("The selected language", language);
  const languages = [
    {
      value: "en",
      label: "🇬🇧 English",
      slug: "/",
    },
    {
      value: "fr",
      label: "🇫🇷 French",
      slug: "/fr/",
    },
    // {
    //   label: "🇪🇦 Spanish",
    //   slug: "/es/",
    // },
    {
      value: "tr",
      label: "🇹🇷 Turkish",
      slug: "/tr/",
    },
  ];

  let currentLang = languages.find((l) => l.value === language).label;
  debugger;
  let isShown = false;

  function toggle() {
    isShown = !isShown;
  }
</script>

<button class="dropdown-btn" on:click={toggle}>
  {currentLang}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="10"
    height="10"
    fill="currentcolor"
    stroke="currentcolor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="4"
  >
    <path d="M30 10 L16 26 2 10 Z" />
  </svg></button
>

<ul class="header-dropdown" data-shown={isShown}>
  {#each languages as lang}
    <li><a href={lang.slug}>{lang.label}</a></li>
  {/each}
</ul>

<style>
  .dropdown-btn {
    padding: 8px 10px;
    border-radius: 5px;
    text-decoration: none;
    border: 0;
    background: none;
    font-size: 16px;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
  }

  .dropdown-btn:hover {
    background: #eeeeee;
  }

  .header-dropdown {
    display: none;
    position: absolute;
    z-index: 999;
    transform: translateY(10px);
    padding: 0;
    margin: 0;
    background-color: white;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    box-shadow: 0px -10px 20px #eee;
    list-style: none;
  }

  .header-dropdown[data-shown="true"] {
    display: block;
  }

  .header-dropdown:before,
  .header-dropdown:after {
    content: "";
    position: absolute;
    bottom: 100%;
  }

  .header-dropdown:after {
    right: 15px;
    border: 10px solid transparent;
    border-bottom-color: white;
  }

  .header-dropdown:before {
    right: 13px;
    border: 12px solid transparent;
    border-bottom-color: var(--border-color);
  }

  .header-dropdown li {
    overflow: hidden;
  }
  .header-dropdown a {
    display: block;
    padding: 7px 20px;
    text-decoration: none;
  }

  .header-dropdown a:hover {
    background-color: var(--btn-secondary-color-hover);
  }
</style>
