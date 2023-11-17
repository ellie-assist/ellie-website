<script>
  import Button from "./Button.svelte";
  import Info from "./Info.svelte";
  import Review from "./Review.svelte";
  // import i18next from "i18next";

  // const p = i18next.getResource(i18next.language, "pricing", "prices", {});
  // debugger;
  export let translations;
  export let locale;

  const stripeParams = new URLSearchParams({
    prefilled_promo_code: "",
    locale,
    utm_campaign: "",
  }).toString();
  const stripeLinks = {
    casual: `https://buy.stripe.com/7sI29OcMifOEdRm8wB?${stripeParams}`,
    professional: `https://buy.stripe.com/3cs01G6nU8mc8x24gm?${stripeParams}`,
    business: `https://buy.stripe.com/9AQ3dS8w2eKA7sY8wD?${stripeParams}`,
  };

  let affiliate_id = "none";
  let customerEmail = null;

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
    const p = new URLSearchParams(window.location.search);
    if (p.has("e")) {
      customerEmail = decodeURIComponent(p.get("e"));
    }
  }

  function translate(key) {
    return key.split(".").reduce((out, k) => {
      return out[k] ?? "";
    }, translations);
  }
</script>

<div class="pricing">
  <!-- <div class="discount"><p>{translate("promo")}</p></div> -->
  <div class="pricing-table" data-ref={affiliate_id}>
    <div class="pricing-type">
      <div class="type-header"><span>{translate("type.personal")}</span></div>
      <div class="pricing-boxes">
        <div class="pricing-box">
          <h3 class="pricing-title">Basic</h3>
          <p class="description">
            {translate("prices.free.lead")}<br /><br />
          </p>
          <div class="price">
            <span class="currency">$</span>
            <span class="amount">0</span>
          </div>
          <ul class="features">
            <li>
              <Info
                tooltip={translate("prices.free.features.replies.description")}
                ><span class="important">3 simple replies</span> a day</Info
              >
            </li>
            <li>
              <Info tooltip={translate("prices.free.features.ai.description")}
                >Basic AI model <span class="important">(GPT-3-turbo)</span
                ></Info
              >
            </li>
          </ul>
          <div class="buy-cta">
            <Button muted href="/downloads"
              >{translate("actions.free")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="arrow"
                ><path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                /></svg
              ></Button
            >
          </div>
        </div>
        <div class="pricing-box">
          <h3 class="pricing-title">Casual</h3>
          <p class="description">
            {translate("prices.casual.lead")}
          </p>
          <div class="prices">
            <!-- <div class="price discounted">
              <span class="currency">$</span>
              <span class="amount">10</span>
              <span class="person duration">{`/${translate("monthly")}`}</span>
            </div> -->
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">19</span>
              <span class="person duration">{`/${translate("monthly")}`}</span>
            </div>
          </div>
          <ul class="features">
            <!-- <li>
              <Info tooltip={translate("prices.casual.features.replies.description")}>
                <span class="important">100 simple replies</span> a day
              </Info>
            </li> -->
            <li>
              <Info
                tooltip={translate(
                  "prices.casual.features.replies.description"
                )}
              >
                <span class="important">25 replies</span> a day
              </Info>
            </li>
            <li>
              <Info
                tooltip={translate("prices.casual.features.ai.description")}
              >
                Intelligent AI model <span class="important">(GPT-4)</span>
              </Info>
            </li>
            <li>
              <Info
                tooltip={translate(
                  "prices.casual.features.training.description"
                )}
              >
                Advanced AI training
              </Info>
            </li>
            <li>
              <Info
                tooltip={translate("prices.pro.features.roles.description")}
              >
                Roles
              </Info>
            </li>
          </ul>
          <div class="buy-cta">
            <Button href={stripeLinks.casual}
              >{translate("actions.casual")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="arrow"
                ><path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                /></svg
              ></Button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="pricing-type">
      <div class="type-header"><span>{translate("type.business")}</span></div>
      <div class="pricing-boxes">
        <div class="pricing-box">
          <h3 class="pricing-title">Business</h3>
          <p class="description">
            {translate("prices.business.lead")}
          </p>
          <div class="prices">
            <!-- <div class="price discounted">
              <span class="currency">$</span>
              <span class="amount">23</span>
              <span class="person duration"
                >{`/${translate("teamsMonthly")}`}</span
              >
            </div> -->
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">39</span>
              <span class="person">{`/${translate("teamsMonthly")}`}</span>
            </div>
          </div>
          <ul class="features">
            <li>
              <Info
                tooltip={translate(
                  "prices.business.features.replies.description"
                )}
              >
                <span class="important">100 replies</span> a day
              </Info>
            </li>
            <li>
              <Info
                tooltip={translate("prices.business.features.ai.description")}
              >
                Intelligent AI model <span class="important">(GPT-4)</span>
              </Info>
            </li>
            <li>
              <Info
                tooltip={translate(
                  "prices.business.features.training.description"
                )}
              >
                Advanced AI training
              </Info>
            </li>
            <li>
              <Info
                tooltip={translate(
                  "prices.business.features.roles.description"
                )}
              >
                Roles
              </Info>
            </li>
            <li>
              <Info
                tooltip={translate(
                  "prices.business.features.teams.description"
                )}
              >
                Team sharing</Info
              >
            </li>
            <li>
              <Info
                tooltip={translate(
                  "prices.business.features.support.description"
                )}
                >Email support
              </Info>
            </li>
          </ul>
          <div class="buy-cta">
            <Button
              >{translate("actions.teams")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="arrow"
                ><path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                /></svg
              ></Button
            >
          </div>
        </div>
        <div class="pricing-box">
          <h3 class="pricing-title">Professional</h3>
          <p class="description">
            {translate("prices.pro.lead")}
          </p>
          <div class="prices">
            <!-- <div class="price discounted">
              <span class="currency">$</span>
              <span class="amount">47</span>
              <span class="person duration">/{translate("teamsMonthly")}</span>
            </div> -->
            <div class="price">
              <span class="currency">$</span>
              <span class="amount">79</span>
              <span class="person">{`/${translate("teamsMonthly")}`}</span>
            </div>
          </div>
          <ul class="features">
            <li>
              <Info
                tooltip={translate("prices.pro.features.replies.description")}
              >
                <span class="important">∞ replies</span> a day
              </Info>
            </li>
            <li>
              <Info tooltip={translate("prices.pro.features.ai.description")}>
                Customized AI model <span class="important"
                  >(fine-tuned GPT-4)</span
                ></Info
              >
            </li>
            <li>
              <Info
                tooltip={translate("prices.pro.features.training.description")}
              >
                Advanced AI training
              </Info>
            </li>
            <li>
              <Info
                tooltip={translate("prices.pro.features.roles.description")}
              >
                Roles
              </Info>
            </li>
            <li>
              <Info tooltip={translate("prices.pro.features.teams.description")}
                >Team sharing</Info
              >
            </li>
            <li>
              <Info
                tooltip={translate("prices.pro.features.support.description")}
                >1-on-1 support specialist</Info
              >
            </li>
          </ul>
          <div class="buy-cta">
            <Button
              >{translate("actions.teams")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="arrow"
                ><path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                /></svg
              >
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="payment-instructions">
    {translate("activate")}
  </p>

  <div class="content">
    <div class="social-proof">
      <div class="lead">
        <img class="big-arrow" alt="" src="/assets/images/arrow.png" />
        <div class="review">
          <p class="review-lead">
            {translate("proof.lead")}
          </p>
          <Review />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .discount {
    margin: -0.5em auto 2.5em auto;
    text-align: center;
    display: inline-block;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: rgb(242, 236, 255);
    font-weight: bold;
    border: 1px solid #5e4c984d;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  }

  .discount p {
    margin: 0;
  }

  .payment-instructions {
    margin-bottom: 2em;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    opacity: 0.4;
  }

  .lead {
    display: flex;
    flex-direction: row;
  }
  .review {
    display: flex;
    flex-direction: column;
  }

  .review-lead {
    margin-bottom: 0;
  }

  .social-proof {
    width: 100%;
    max-width: 520px;
    margin: 1em auto 5em auto;
    font-weight: 500;
  }
  .social-proof p {
    padding-top: 20px;
  }
  .big-arrow {
    margin-right: 20px;
    height: 60px;
  }
  .arrow {
    width: 20px;
    margin-left: 5px;
  }

  .pricing {
    margin: 2em auto;
    display: flex;
    flex-direction: column;
  }

  .important {
    color: var(--btn-color);
    font-weight: 600;
  }

  .pricing-table {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin: 0 auto;
  }

  @media (max-width: 1200px) {
    .pricing-table {
      flex-direction: column;
      max-width: 540px;
      gap: 50px;
    }
  }

  .buy-cta {
    margin-top: 1em;
  }

  .description {
    font-size: 14px;
    line-height: 18px;
  }

  .pricing-type {
    padding: 35px 10px;
    border: 2px solid #f2edec;
    border-radius: 10px;
    position: relative;
  }

  .pricing-boxes {
    display: flex;
    flex-direction: row;
    gap: 0;
    height: 100%;
  }

  .pricing-box {
    display: flex;
    flex-direction: column;
    padding: 0 5px 0 15px;
    width: 270px;
    position: relative;
    height: 100%;
  }

  .pricing-box:first-child {
    padding: 0 5px 0 5px;
  }

  .pricing-box:first-child::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2px;
    background-color: #f2edec;
  }

  @media (max-width: 560px) {
    .pricing-type {
      width: 300px;
      margin: 0 auto;
    }
    .pricing-boxes {
      flex-direction: column;
    }

    .pricing-box:first-child {
      padding-bottom: 20px;
    }

    .pricing-box:first-child::after {
      left: 0;
      top: 100%;
      width: 100%;
      height: 2px;
    }
    .big-arrow {
      display: none;
    }

    .social-proof p {
      padding-top: 0;
    }
  }

  .type-header {
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    text-align: center;
  }

  .type-header > span {
    background-color: var(--btn-color);
    border-radius: 15px;
    padding: 6px 15px;
    color: white;
    font-weight: 500;
    font-size: 12px;
  }

  .features {
    list-style: none;

    margin: 10px 0 0 0;
    font-size: 16px;
    line-height: 24px;
    padding: 0;
    flex: 1;
  }

  .features li {
    display: block;
    position: relative;
    padding: 3px 0 0 22px;
  }

  .features li::before {
    border-radius: 10px;
    background-image: url(/assets/check.webp);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    content: "";
    height: 15px;
    left: 0;
    position: absolute;
    top: 6px;
    width: 15px;
  }

  .pricing-title {
    font-size: 22px;
    margin: 0.5em 0 0 0;
  }

  .prices {
    display: flex;
    flex-direction: column-reverse;
  }

  .price {
    position: relative;
    display: inline-block;
  }

  .price.discounted + .price {
    font-size: 65%;
  }

  .price.discounted + .price .person {
    display: none;
  }

  .price.discounted + .price .amount:after {
    content: "";
    width: 52px;
    height: 3px;
    background-color: red;
    position: absolute;
    left: 14px;
    top: 40%;
    border-radius: 2px;
    transform: rotate(-30deg);
    opacity: 0.75;
  }

  .price .amount {
    font-size: 3.2em;
    font-weight: bold;
    padding-left: 20px;
  }

  .price .currency {
    font-size: 1.5em;
    font-weight: bold;
    opacity: 0.5;
    position: absolute;
    top: 10px;
  }

  .price .person {
    font-size: 1em;
    font-weight: bold;
    opacity: 0.5;
  }
</style>
