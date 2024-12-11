import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-heavy-rain-showers-polartwilight-colour')
export class ObiHeavyRainShowersPolartwilightColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 15.3488C24 15.3488 27.4497 15.8352 27.3333 17.3488C27.2486 18.4501 26.4379 19.3488 25.3333 19.3488H6.66663C5.56206 19.3488 4.66663 18.4534 4.66663 17.3488C4.66663 16.2442 5.33329 15.3488 6.66663 15.3488H9.33329C9.33329 15.3488 8.95829 14.2238 9.33329 13.3801C9.45829 13.0988 9.66663 12.8488 9.99996 12.6822C10.3898 12.4872 10.7796 12.5203 11.1362 12.6646C11.999 13.014 12.6666 14.0155 12.6666 14.0155C12.6666 14.0155 13.0854 13.2031 13.8692 12.3091C14.8895 11.1454 16.5282 9.84342 18.6666 10.0155C24 10.4446 24 15.3488 24 15.3488ZM12.333 11.0276C12.4855 10.8522 12.6503 10.6732 12.8272 10.4945C14.0443 9.26475 16.0905 7.80174 18.827 8.02193C22.242 8.29671 24.1524 10.0867 25.107 11.919C25.4389 12.556 25.645 13.1747 25.774 13.699C25.9743 13.7574 26.1852 13.8252 26.3986 13.9034C26.9122 14.0917 27.5831 14.3909 28.1495 14.8677C28.733 15.3588 29.4242 16.244 29.3274 17.5022C29.178 19.445 27.6727 21.3488 25.3333 21.3488H6.66662C4.45749 21.3488 2.66663 19.558 2.66663 17.3488C2.66663 16.4055 2.95372 15.3851 3.69549 14.5797C4.46207 13.7474 5.52695 13.3488 6.66663 13.3488H7.25983C7.43538 12.5011 7.91136 11.4904 9.10553 10.8933C10.3817 10.2552 11.5414 10.5915 12.333 11.0276Z" fill="currentColor"/>
<path d="M9.99996 12.6821C8.66663 13.3487 9.33329 15.3487 9.33329 15.3487H6.66663C5.33329 15.3487 4.66663 16.2442 4.66663 17.3487C4.66663 18.4533 5.56206 19.3487 6.66663 19.3487H25.3333C26.4379 19.3487 27.2486 18.45 27.3333 17.3487C27.4497 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6666 10.0154C14.8855 9.71116 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 11.3333 12.0154 9.99996 12.6821Z" fill="currentColor"/>
<path d="M2.66663 5.33341C2.66663 4.96522 2.9651 4.66675 3.33329 4.66675H18C18.3681 4.66675 18.6666 4.96522 18.6666 5.33341C18.6666 5.7016 18.3681 6.00008 18 6.00008H3.33329C2.9651 6.00008 2.66663 5.7016 2.66663 5.33341Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8772 6H6.45618C6.45618 8.20914 8.34129 10 10.6667 10C12.9921 10 14.8772 8.20914 14.8772 6Z" fill="currentColor"/>
<path d="M4.70947 6.37584C4.82815 6.27615 4.88749 6.13808 4.88749 6H6.4561C6.4561 8.20914 8.34122 10 10.6666 10C12.992 10 14.8772 8.20914 14.8772 6H16.4458C16.4458 6.13808 16.5051 6.27615 16.6238 6.37584L18.4879 7.94157C18.5118 7.96166 18.5332 7.98296 18.5521 8.00522C15.9532 7.90023 14.0032 9.30621 12.8272 10.4944C12.6503 10.6732 12.4855 10.8521 12.333 11.0276C11.5414 10.5915 10.3817 10.2551 9.10553 10.8932C8.88879 11.0016 8.6957 11.1236 8.52378 11.2558C8.49911 11.2652 8.47483 11.2766 8.45116 11.29L6.31455 12.4978C5.91882 12.7215 5.4344 12.3857 5.53509 11.9575L6.0787 9.64523C6.14792 9.35081 5.93051 9.06528 5.61567 9.03712L3.14308 8.81593C2.68513 8.77496 2.50009 8.23157 2.84536 7.94157L4.70947 6.37584Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.21141 23.3371C5.48204 22.7508 6.12118 22.531 6.68973 22.7497L6.69988 22.7536L6.70975 22.7582C7.29611 23.0288 7.51585 23.6679 7.29718 24.2365L7.29176 24.2506L6.17341 26.8059C5.9866 27.2666 5.56455 27.4901 5.13007 27.4901C4.97914 27.4901 4.80989 27.4441 4.70466 27.409L4.68714 27.4032L4.67038 27.3955C4.08402 27.1248 3.86428 26.4857 4.08295 25.9172L4.08837 25.9031L5.21141 23.3371Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5447 23.3371C14.8154 22.7508 15.4545 22.531 16.0231 22.7497L16.0332 22.7536L16.0431 22.7582C16.6294 23.0288 16.8492 23.6679 16.6305 24.2365L16.6251 24.2506L15.5067 26.8059C15.3199 27.2666 14.8979 27.4901 14.4634 27.4901C14.3125 27.4901 14.1432 27.4441 14.038 27.409L14.0205 27.4032L14.0037 27.3955C13.4174 27.1248 13.1976 26.4857 13.4163 25.9172L13.4217 25.9031L14.5447 23.3371Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5447 23.3371C18.8154 22.7508 19.4545 22.531 20.0231 22.7497L20.0332 22.7536L20.0431 22.7582C20.6294 23.0288 20.8492 23.6679 20.6305 24.2365L20.6251 24.2506L19.5067 26.8059C19.3199 27.2666 18.8979 27.4901 18.4634 27.4901C18.3125 27.4901 18.1432 27.4441 18.038 27.409L18.0205 27.4032L18.0037 27.3955C17.4174 27.1248 17.1976 26.4857 17.4163 25.9172L17.4217 25.9031L18.5447 23.3371Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.8781 26.0038C24.1487 25.4174 24.7878 25.1977 25.3564 25.4164L25.3665 25.4203L25.3764 25.4248C25.9628 25.6955 26.1825 26.3346 25.9639 26.9031L25.9584 26.9172L24.8401 29.4726C24.6533 29.9333 24.2312 30.1568 23.7967 30.1568C23.6458 30.1568 23.4766 30.1108 23.3713 30.0757L23.3538 30.0699L23.337 30.0621C22.7507 29.7915 22.5309 29.1524 22.7496 28.5838L22.755 28.5697L23.8781 26.0038Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.21141 26.0038C9.48204 25.4174 10.1212 25.1977 10.6897 25.4164L10.6999 25.4203L10.7098 25.4248C11.2961 25.6955 11.5159 26.3346 11.2972 26.9031L11.2918 26.9172L10.1734 29.4726C9.9866 29.9333 9.56455 30.1568 9.13007 30.1568C8.97914 30.1568 8.80989 30.1108 8.70466 30.0757L8.68714 30.0699L8.67038 30.0621C8.08402 29.7915 7.86428 29.1524 8.08295 28.5838L8.08837 28.5697L9.21141 26.0038Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 15.3488C24 15.3488 27.4497 15.8352 27.3333 17.3488C27.2486 18.4501 26.4379 19.3488 25.3333 19.3488H6.66663C5.56206 19.3488 4.66663 18.4534 4.66663 17.3488C4.66663 16.2442 5.33329 15.3488 6.66663 15.3488H9.33329C9.33329 15.3488 8.95829 14.2238 9.33329 13.3801C9.45829 13.0988 9.66663 12.8488 9.99996 12.6822C10.3898 12.4872 10.7796 12.5203 11.1362 12.6646C11.999 13.014 12.6666 14.0155 12.6666 14.0155C12.6666 14.0155 13.0854 13.2031 13.8692 12.3091C14.8895 11.1454 16.5282 9.84342 18.6666 10.0155C24 10.4446 24 15.3488 24 15.3488ZM12.333 11.0276C12.4855 10.8522 12.6503 10.6732 12.8272 10.4945C14.0443 9.26475 16.0905 7.80174 18.827 8.02193C22.242 8.29671 24.1524 10.0867 25.107 11.919C25.4389 12.556 25.645 13.1747 25.774 13.699C25.9743 13.7574 26.1852 13.8252 26.3986 13.9034C26.9122 14.0917 27.5831 14.3909 28.1495 14.8677C28.733 15.3588 29.4242 16.244 29.3274 17.5022C29.178 19.445 27.6727 21.3488 25.3333 21.3488H6.66662C4.45749 21.3488 2.66663 19.558 2.66663 17.3488C2.66663 16.4055 2.95372 15.3851 3.69549 14.5797C4.46207 13.7474 5.52695 13.3488 6.66663 13.3488H7.25983C7.43538 12.5011 7.91136 11.4904 9.10553 10.8933C10.3817 10.2552 11.5414 10.5915 12.333 11.0276Z" style="fill: var(--data-weather-cloud-heavy-secondary-color)"/>
<path d="M9.99996 12.6821C8.66663 13.3487 9.33329 15.3487 9.33329 15.3487H6.66663C5.33329 15.3487 4.66663 16.2442 4.66663 17.3487C4.66663 18.4533 5.56206 19.3487 6.66663 19.3487H25.3333C26.4379 19.3487 27.2486 18.45 27.3333 17.3487C27.4497 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6666 10.0154C14.8855 9.71116 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 11.3333 12.0154 9.99996 12.6821Z" style="fill: var(--data-weather-cloud-heavy-secondary-color)"/>
<path d="M2.66663 5.33341C2.66663 4.96522 2.9651 4.66675 3.33329 4.66675H18C18.3681 4.66675 18.6666 4.96522 18.6666 5.33341C18.6666 5.7016 18.3681 6.00008 18 6.00008H3.33329C2.9651 6.00008 2.66663 5.7016 2.66663 5.33341Z" style="fill: var(--data-weather-sun-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8772 6H6.45618C6.45618 8.20914 8.34129 10 10.6667 10C12.9921 10 14.8772 8.20914 14.8772 6Z" style="fill: var(--data-weather-sun-secondary-color)"/>
<path d="M4.70947 6.37584C4.82815 6.27615 4.88749 6.13808 4.88749 6H6.4561C6.4561 8.20914 8.34122 10 10.6666 10C12.992 10 14.8772 8.20914 14.8772 6H16.4458C16.4458 6.13808 16.5051 6.27615 16.6238 6.37584L18.4879 7.94157C18.5118 7.96166 18.5332 7.98296 18.5521 8.00522C15.9532 7.90023 14.0032 9.30621 12.8272 10.4944C12.6503 10.6732 12.4855 10.8521 12.333 11.0276C11.5414 10.5915 10.3817 10.2551 9.10553 10.8932C8.88879 11.0016 8.6957 11.1236 8.52378 11.2558C8.49911 11.2652 8.47483 11.2766 8.45116 11.29L6.31455 12.4978C5.91882 12.7215 5.4344 12.3857 5.53509 11.9575L6.0787 9.64523C6.14792 9.35081 5.93051 9.06528 5.61567 9.03712L3.14308 8.81593C2.68513 8.77496 2.50009 8.23157 2.84536 7.94157L4.70947 6.37584Z" style="fill: var(--data-weather-sun-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.21141 23.3371C5.48204 22.7508 6.12118 22.531 6.68973 22.7497L6.69988 22.7536L6.70975 22.7582C7.29611 23.0288 7.51585 23.6679 7.29718 24.2365L7.29176 24.2506L6.17341 26.8059C5.9866 27.2666 5.56455 27.4901 5.13007 27.4901C4.97914 27.4901 4.80989 27.4441 4.70466 27.409L4.68714 27.4032L4.67038 27.3955C4.08402 27.1248 3.86428 26.4857 4.08295 25.9172L4.08837 25.9031L5.21141 23.3371Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5447 23.3371C14.8154 22.7508 15.4545 22.531 16.0231 22.7497L16.0332 22.7536L16.0431 22.7582C16.6294 23.0288 16.8492 23.6679 16.6305 24.2365L16.6251 24.2506L15.5067 26.8059C15.3199 27.2666 14.8979 27.4901 14.4634 27.4901C14.3125 27.4901 14.1432 27.4441 14.038 27.409L14.0205 27.4032L14.0037 27.3955C13.4174 27.1248 13.1976 26.4857 13.4163 25.9172L13.4217 25.9031L14.5447 23.3371Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5447 23.3371C18.8154 22.7508 19.4545 22.531 20.0231 22.7497L20.0332 22.7536L20.0431 22.7582C20.6294 23.0288 20.8492 23.6679 20.6305 24.2365L20.6251 24.2506L19.5067 26.8059C19.3199 27.2666 18.8979 27.4901 18.4634 27.4901C18.3125 27.4901 18.1432 27.4441 18.038 27.409L18.0205 27.4032L18.0037 27.3955C17.4174 27.1248 17.1976 26.4857 17.4163 25.9172L17.4217 25.9031L18.5447 23.3371Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.8781 26.0038C24.1487 25.4174 24.7878 25.1977 25.3564 25.4164L25.3665 25.4203L25.3764 25.4248C25.9628 25.6955 26.1825 26.3346 25.9639 26.9031L25.9584 26.9172L24.8401 29.4726C24.6533 29.9333 24.2312 30.1568 23.7967 30.1568C23.6458 30.1568 23.4766 30.1108 23.3713 30.0757L23.3538 30.0699L23.337 30.0621C22.7507 29.7915 22.5309 29.1524 22.7496 28.5838L22.755 28.5697L23.8781 26.0038Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.21141 26.0038C9.48204 25.4174 10.1212 25.1977 10.6897 25.4164L10.6999 25.4203L10.7098 25.4248C11.2961 25.6955 11.5159 26.3346 11.2972 26.9031L11.2918 26.9172L10.1734 29.4726C9.9866 29.9333 9.56455 30.1568 9.13007 30.1568C8.97914 30.1568 8.80989 30.1108 8.70466 30.0757L8.68714 30.0699L8.67038 30.0621C8.08402 29.7915 7.86428 29.1524 8.08295 28.5838L8.08837 28.5697L9.21141 26.0038Z" style="fill: var(--data-weather-rain-primary-color)"/>
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
    'obi-heavy-rain-showers-polartwilight-colour': ObiHeavyRainShowersPolartwilightColour;
  }
}