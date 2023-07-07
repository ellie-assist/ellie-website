<script>
  let affiliate_id = "none";
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  if (document) {
    const cookie = getCookie("reflioData");
    if (cookie) {
      affiliate_id = JSON.parse(cookie).affiliate_id;
    }

    console.log("Ref data", affiliate_id);
  }
</script>

<div class="pricing-table" data-ref={affiliate_id}>
  <stripe-pricing-table
    pricing-table-id={import.meta.env.PUBLIC_STRIPE_PRICING_TABLE_ID}
    publishable-key={import.meta.env.PUBLIC_STRIPE_PK}
    client-reference-id={affiliate_id}
  />
</div>
