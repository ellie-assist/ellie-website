<script>
  export let translations;
  export let plan;
  const plans = {
    free: {},
    business: {
      minSeats: 1,
    },
    pro: {
      minSeats: 5,
    },
  };
  let planDetails = plans[plan];
  const { features } = translations;
</script>

<ul class="features">
  {#if features.replies}
    <li>
      <span class="important">unlimited replies</span> a day
    </li>
  {/if}
  <li>
    Most intelligent AI model <span class="important">(fine-tuned GPT-4)</span>
  </li>
  <li>Advanced AI Training</li>
  <li>Roles</li>
  <li>Team sharing</li>
  <li>1-on-1 Support specialist</li>
</ul>

<style>
</style>
