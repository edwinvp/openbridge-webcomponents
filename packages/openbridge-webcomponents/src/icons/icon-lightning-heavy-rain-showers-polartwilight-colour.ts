import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-lightning-heavy-rain-showers-polartwilight-colour')
export class ObiLightningHeavyRainShowersPolartwilightColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66663 5.33341C2.66663 4.96522 2.9651 4.66675 3.33329 4.66675H18C18.3681 4.66675 18.6666 4.96522 18.6666 5.33341C18.6666 5.7016 18.3681 6.00008 18 6.00008H3.33329C2.9651 6.00008 2.66663 5.7016 2.66663 5.33341Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8772 6H6.45618C6.45618 8.20914 8.34129 10 10.6667 10C12.9921 10 14.8772 8.20914 14.8772 6Z" fill="currentColor"/>
<path d="M4.70947 6.37584C4.82815 6.27615 4.88749 6.13808 4.88749 6H6.4561C6.4561 8.20914 8.34122 10 10.6666 10C12.992 10 14.8772 8.20914 14.8772 6H16.4458C16.4458 6.13808 16.5051 6.27615 16.6238 6.37584L18.4879 7.94157C18.5118 7.96166 18.5332 7.98296 18.5521 8.00522C15.9532 7.90023 14.0032 9.30621 12.8272 10.4944C12.6503 10.6732 12.4855 10.8521 12.333 11.0276C11.5414 10.5915 10.3817 10.2551 9.10553 10.8932C8.88879 11.0016 8.6957 11.1236 8.52378 11.2558C8.49911 11.2652 8.47483 11.2766 8.45116 11.29L6.31455 12.4978C5.91882 12.7215 5.4344 12.3857 5.53509 11.9575L6.0787 9.64523C6.14792 9.35081 5.93051 9.06528 5.61567 9.03712L3.14308 8.81593C2.68513 8.77496 2.50009 8.23157 2.84536 7.94157L4.70947 6.37584Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1633 19.4933L17.1792 13.3333L13.3334 21.1333L15.9093 22.3333L14.2404 29.3333L18.6667 20.6933L16.1633 19.4933Z" fill="currentColor"/>
<path d="M27.3333 17.3488C27.4497 15.8352 24 15.3488 24 15.3488C24 15.3488 24 10.4446 18.6666 10.0155C16.5282 9.84342 14.8895 11.1454 13.8692 12.3091C13.0854 13.2031 12.6666 14.0155 12.6666 14.0155C12.6666 14.0155 11.999 13.014 11.1362 12.6646C10.7796 12.5203 10.3898 12.4872 9.99996 12.6822C9.66663 12.8488 9.45829 13.0988 9.33329 13.3801C8.95829 14.2238 9.33329 15.3488 9.33329 15.3488H6.66663C5.33329 15.3488 4.66663 16.2442 4.66663 17.3488C4.66663 18.4534 5.56206 19.3488 6.66663 19.3488H12.7266L12.1374 20.5438C12.0137 20.7948 11.9729 21.0764 12.0175 21.3488H6.66662C4.45749 21.3488 2.66663 19.558 2.66663 17.3488C2.66663 16.4055 2.95372 15.3851 3.69549 14.5797C4.46207 13.7474 5.52695 13.3488 6.66663 13.3488H7.25983C7.43538 12.5011 7.91136 11.4904 9.10553 10.8933C10.3817 10.2552 11.5414 10.5915 12.333 11.0276C12.4855 10.8522 12.6503 10.6732 12.8272 10.4945C14.0443 9.26475 16.0905 7.80174 18.827 8.02193C22.242 8.29671 24.1524 10.0867 25.107 11.919C25.4389 12.556 25.645 13.1747 25.774 13.699C25.9743 13.7574 26.1852 13.8252 26.3986 13.9034C26.9122 14.0917 27.5831 14.3909 28.1495 14.8677C28.733 15.3588 29.4242 16.244 29.3274 17.5022C29.178 19.445 27.6727 21.3488 25.3333 21.3488H19.829L19.8533 21.3014C20.0173 20.9812 20.045 20.6084 19.9301 20.2675C19.8152 19.9266 19.5674 19.6466 19.243 19.4911L18.9461 19.3488H25.3333C26.4379 19.3488 27.2486 18.4501 27.3333 17.3488Z" fill="currentColor"/>
<path d="M9.33329 15.3487C9.33329 15.3487 8.66663 13.3487 9.99996 12.6821C11.3333 12.0154 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 14.8855 9.71116 18.6666 10.0154C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4497 15.8351 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H18.9461L17.6415 18.7234L18.4947 13.5503C18.6022 12.8983 18.2159 12.266 17.5868 12.0639C16.9577 11.8618 16.2754 12.1511 15.9832 12.7437L12.7266 19.3487H6.66663C5.56206 19.3487 4.66663 18.4533 4.66663 17.3487C4.66663 16.2442 5.33329 15.3487 6.66663 15.3487H9.33329Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.54479 23.3371C4.81541 22.7508 5.45456 22.531 6.0231 22.7497L6.03325 22.7536L6.04313 22.7582C6.62948 23.0288 6.84923 23.6679 6.63056 24.2365L6.62514 24.2506L5.50679 26.8059C5.31998 27.2666 4.89793 27.4901 4.46344 27.4901C4.31251 27.4901 4.14326 27.4441 4.03803 27.409L4.02052 27.4032L4.00375 27.3955C3.4174 27.1248 3.19765 26.4857 3.41632 25.9172L3.42174 25.9031L4.54479 23.3371Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.21145 26.0038C9.48208 25.4174 10.1212 25.1977 10.6898 25.4164L10.6999 25.4203L10.7098 25.4248C11.2961 25.6955 11.5159 26.3346 11.2972 26.9031L11.2918 26.9172L10.1735 29.4726C9.98664 29.9333 9.56459 30.1568 9.13011 30.1568C8.97918 30.1568 8.80993 30.1108 8.7047 30.0757L8.68718 30.0699L8.67042 30.0621C8.08406 29.7915 7.86432 29.1524 8.08299 28.5838L8.08841 28.5697L9.21145 26.0038Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8781 24.6705C20.1487 24.0841 20.7879 23.8644 21.3564 24.083L21.3666 24.0869L21.3765 24.0915C21.9628 24.3621 22.1826 25.0013 21.9639 25.5698L21.9585 25.5839L20.8401 28.1393C20.6533 28.5999 20.2313 28.8235 19.7968 28.8235C19.6458 28.8235 19.4766 28.7775 19.3714 28.7424L19.3538 28.7365L19.3371 28.7288C18.7507 28.4582 18.531 27.819 18.7497 27.2505L18.7551 27.2364L19.8781 24.6705Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.8781 26.6705C28.1487 26.0841 28.7879 25.8644 29.3564 26.083L29.3666 26.0869L29.3765 26.0915C29.9628 26.3621 30.1826 27.0013 29.9639 27.5698L29.9585 27.5839L28.8401 30.1393C28.6533 30.5999 28.2313 30.8235 27.7968 30.8235C27.6458 30.8235 27.4766 30.7775 27.3714 30.7424L27.3538 30.7365L27.3371 30.7288C26.7507 30.4582 26.531 29.819 26.7497 29.2505L26.7551 29.2364L27.8781 26.6705Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5448 23.3371C24.8154 22.7508 25.4546 22.531 26.0231 22.7497L26.0333 22.7536L26.0431 22.7582C26.6295 23.0288 26.8492 23.6679 26.6306 24.2365L26.6251 24.2506L25.5068 26.8059C25.32 27.2666 24.8979 27.4901 24.4634 27.4901C24.3125 27.4901 24.1433 27.4441 24.038 27.409L24.0205 27.4032L24.0038 27.3955C23.4174 27.1248 23.1977 26.4857 23.4163 25.9172L23.4217 25.9031L24.5448 23.3371Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66663 5.33341C2.66663 4.96522 2.9651 4.66675 3.33329 4.66675H18C18.3681 4.66675 18.6666 4.96522 18.6666 5.33341C18.6666 5.7016 18.3681 6.00008 18 6.00008H3.33329C2.9651 6.00008 2.66663 5.7016 2.66663 5.33341Z" style="fill: var(--data-weather-cloud-heavy-secondary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8772 6H6.45618C6.45618 8.20914 8.34129 10 10.6667 10C12.9921 10 14.8772 8.20914 14.8772 6Z" style="fill: var(--data-weather-sun-secondary-color)"/>
<path d="M4.70947 6.37584C4.82815 6.27615 4.88749 6.13808 4.88749 6H6.4561C6.4561 8.20914 8.34122 10 10.6666 10C12.992 10 14.8772 8.20914 14.8772 6H16.4458C16.4458 6.13808 16.5051 6.27615 16.6238 6.37584L18.4879 7.94157C18.5118 7.96166 18.5332 7.98296 18.5521 8.00522C15.9532 7.90023 14.0032 9.30621 12.8272 10.4944C12.6503 10.6732 12.4855 10.8521 12.333 11.0276C11.5414 10.5915 10.3817 10.2551 9.10553 10.8932C8.88879 11.0016 8.6957 11.1236 8.52378 11.2558C8.49911 11.2652 8.47483 11.2766 8.45116 11.29L6.31455 12.4978C5.91882 12.7215 5.4344 12.3857 5.53509 11.9575L6.0787 9.64523C6.14792 9.35081 5.93051 9.06528 5.61567 9.03712L3.14308 8.81593C2.68513 8.77496 2.50009 8.23157 2.84536 7.94157L4.70947 6.37584Z" style="fill: var(--data-weather-lightning-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1633 19.4933L17.1792 13.3333L13.3334 21.1333L15.9093 22.3333L14.2404 29.3333L18.6667 20.6933L16.1633 19.4933Z" style="fill: var(--data-weather-lightning-primary-color)"/>
<path d="M27.3333 17.3488C27.4497 15.8352 24 15.3488 24 15.3488C24 15.3488 24 10.4446 18.6666 10.0155C16.5282 9.84342 14.8895 11.1454 13.8692 12.3091C13.0854 13.2031 12.6666 14.0155 12.6666 14.0155C12.6666 14.0155 11.999 13.014 11.1362 12.6646C10.7796 12.5203 10.3898 12.4872 9.99996 12.6822C9.66663 12.8488 9.45829 13.0988 9.33329 13.3801C8.95829 14.2238 9.33329 15.3488 9.33329 15.3488H6.66663C5.33329 15.3488 4.66663 16.2442 4.66663 17.3488C4.66663 18.4534 5.56206 19.3488 6.66663 19.3488H12.7266L12.1374 20.5438C12.0137 20.7948 11.9729 21.0764 12.0175 21.3488H6.66662C4.45749 21.3488 2.66663 19.558 2.66663 17.3488C2.66663 16.4055 2.95372 15.3851 3.69549 14.5797C4.46207 13.7474 5.52695 13.3488 6.66663 13.3488H7.25983C7.43538 12.5011 7.91136 11.4904 9.10553 10.8933C10.3817 10.2552 11.5414 10.5915 12.333 11.0276C12.4855 10.8522 12.6503 10.6732 12.8272 10.4945C14.0443 9.26475 16.0905 7.80174 18.827 8.02193C22.242 8.29671 24.1524 10.0867 25.107 11.919C25.4389 12.556 25.645 13.1747 25.774 13.699C25.9743 13.7574 26.1852 13.8252 26.3986 13.9034C26.9122 14.0917 27.5831 14.3909 28.1495 14.8677C28.733 15.3588 29.4242 16.244 29.3274 17.5022C29.178 19.445 27.6727 21.3488 25.3333 21.3488H19.829L19.8533 21.3014C20.0173 20.9812 20.045 20.6084 19.9301 20.2675C19.8152 19.9266 19.5674 19.6466 19.243 19.4911L18.9461 19.3488H25.3333C26.4379 19.3488 27.2486 18.4501 27.3333 17.3488Z" style="fill: var(--data-weather-cloud-heavy-secondary-color)"/>
<path d="M9.33329 15.3487C9.33329 15.3487 8.66663 13.3487 9.99996 12.6821C11.3333 12.0154 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 14.8855 9.71116 18.6666 10.0154C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4497 15.8351 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H18.9461L17.6415 18.7234L18.4947 13.5503C18.6022 12.8983 18.2159 12.266 17.5868 12.0639C16.9577 11.8618 16.2754 12.1511 15.9832 12.7437L12.7266 19.3487H6.66663C5.56206 19.3487 4.66663 18.4533 4.66663 17.3487C4.66663 16.2442 5.33329 15.3487 6.66663 15.3487H9.33329Z" style="fill: var(--data-weather-cloud-heavy-secondary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.54479 23.3371C4.81541 22.7508 5.45456 22.531 6.0231 22.7497L6.03325 22.7536L6.04313 22.7582C6.62948 23.0288 6.84923 23.6679 6.63056 24.2365L6.62514 24.2506L5.50679 26.8059C5.31998 27.2666 4.89793 27.4901 4.46344 27.4901C4.31251 27.4901 4.14326 27.4441 4.03803 27.409L4.02052 27.4032L4.00375 27.3955C3.4174 27.1248 3.19765 26.4857 3.41632 25.9172L3.42174 25.9031L4.54479 23.3371Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.21145 26.0038C9.48208 25.4174 10.1212 25.1977 10.6898 25.4164L10.6999 25.4203L10.7098 25.4248C11.2961 25.6955 11.5159 26.3346 11.2972 26.9031L11.2918 26.9172L10.1735 29.4726C9.98664 29.9333 9.56459 30.1568 9.13011 30.1568C8.97918 30.1568 8.80993 30.1108 8.7047 30.0757L8.68718 30.0699L8.67042 30.0621C8.08406 29.7915 7.86432 29.1524 8.08299 28.5838L8.08841 28.5697L9.21145 26.0038Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8781 24.6705C20.1487 24.0841 20.7879 23.8644 21.3564 24.083L21.3666 24.0869L21.3765 24.0915C21.9628 24.3621 22.1826 25.0013 21.9639 25.5698L21.9585 25.5839L20.8401 28.1393C20.6533 28.5999 20.2313 28.8235 19.7968 28.8235C19.6458 28.8235 19.4766 28.7775 19.3714 28.7424L19.3538 28.7365L19.3371 28.7288C18.7507 28.4582 18.531 27.819 18.7497 27.2505L18.7551 27.2364L19.8781 24.6705Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.8781 26.6705C28.1487 26.0841 28.7879 25.8644 29.3564 26.083L29.3666 26.0869L29.3765 26.0915C29.9628 26.3621 30.1826 27.0013 29.9639 27.5698L29.9585 27.5839L28.8401 30.1393C28.6533 30.5999 28.2313 30.8235 27.7968 30.8235C27.6458 30.8235 27.4766 30.7775 27.3714 30.7424L27.3538 30.7365L27.3371 30.7288C26.7507 30.4582 26.531 29.819 26.7497 29.2505L26.7551 29.2364L27.8781 26.6705Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5448 23.3371C24.8154 22.7508 25.4546 22.531 26.0231 22.7497L26.0333 22.7536L26.0431 22.7582C26.6295 23.0288 26.8492 23.6679 26.6306 24.2365L26.6251 24.2506L25.5068 26.8059C25.32 27.2666 24.8979 27.4901 24.4634 27.4901C24.3125 27.4901 24.1433 27.4441 24.038 27.409L24.0205 27.4032L24.0038 27.3955C23.4174 27.1248 23.1977 26.4857 23.4163 25.9172L23.4217 25.9031L24.5448 23.3371Z" style="fill: var(--data-weather-rain-primary-color)"/>
</svg>
`;

  override render() {
    return html`
      <div class="wrapper" >
        ${this.useCssColor? this.iconCss : this.icon}
      </div>
    `;
  }

  static override styles = css`
  .wrapper {
    height: 100%;
    width: 100%;
    line-height: 0;
  }
  .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'obi-lightning-heavy-rain-showers-polartwilight-colour': ObiLightningHeavyRainShowersPolartwilightColour;
  }
}