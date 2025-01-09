import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-lightning-heavy-sleet-showers-night-colour')
export class ObiLightningHeavySleetShowersNightColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3597_1252)">
<path d="M12.1782 5.17262C11.1299 9.43869 6.74822 12.0291 2.3916 10.9585C1.85537 10.8267 1.31873 11.3122 1.54474 11.8242C2.02231 12.9059 2.73016 13.8771 3.62235 14.6614C3.64624 14.6339 3.67063 14.6066 3.69553 14.5796C4.46211 13.7472 5.52698 13.3487 6.66666 13.3487H7.25987C7.43541 12.5009 7.91139 11.4903 9.10557 10.8932C10.3817 10.2551 11.5414 10.5914 12.333 11.0275C12.4856 10.8521 12.6503 10.6731 12.8272 10.4944C13.7723 9.53953 15.2171 8.44404 17.0969 8.10506C16.9853 5.4163 15.5527 2.94814 13.2974 1.53125C12.8169 1.22937 12.2658 1.72975 12.3402 2.30184C12.4618 3.23613 12.4158 4.20591 12.1782 5.17262Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1633 19.4933L17.1792 13.3333L13.3334 21.1333L15.9093 22.3333L14.2404 29.3333L18.6667 20.6933L16.1633 19.4933Z" fill="currentColor"/>
<path d="M27.3333 17.3488C27.4497 15.8352 24 15.3488 24 15.3488C24 15.3488 24 10.4446 18.6666 10.0155C16.5282 9.84342 14.8895 11.1454 13.8692 12.3091C13.0854 13.2031 12.6666 14.0155 12.6666 14.0155C12.6666 14.0155 11.999 13.014 11.1362 12.6646C10.7796 12.5203 10.3898 12.4872 9.99996 12.6822C9.66663 12.8488 9.45829 13.0988 9.33329 13.3801C8.95829 14.2238 9.33329 15.3488 9.33329 15.3488H6.66663C5.33329 15.3488 4.66663 16.2442 4.66663 17.3488C4.66663 18.4534 5.56206 19.3488 6.66663 19.3488H12.7266L12.1374 20.5438C12.0137 20.7948 11.9729 21.0764 12.0175 21.3488H6.66662C4.45749 21.3488 2.66663 19.558 2.66663 17.3488C2.66663 16.4055 2.95372 15.3851 3.69549 14.5797C4.46207 13.7474 5.52695 13.3488 6.66663 13.3488H7.25983C7.43538 12.5011 7.91136 11.4904 9.10553 10.8933C10.3817 10.2552 11.5414 10.5915 12.333 11.0276C12.4855 10.8522 12.6503 10.6732 12.8272 10.4945C14.0443 9.26475 16.0905 7.80174 18.827 8.02193C22.242 8.29671 24.1524 10.0867 25.107 11.919C25.4389 12.556 25.645 13.1747 25.774 13.699C25.9743 13.7574 26.1852 13.8252 26.3986 13.9034C26.9122 14.0917 27.5831 14.3909 28.1495 14.8677C28.733 15.3588 29.4242 16.244 29.3274 17.5022C29.178 19.445 27.6727 21.3488 25.3333 21.3488H19.829L19.8533 21.3014C20.0173 20.9812 20.045 20.6084 19.9301 20.2675C19.8152 19.9266 19.5674 19.6466 19.243 19.4911L18.9461 19.3488H25.3333C26.4379 19.3488 27.2486 18.4501 27.3333 17.3488Z" fill="currentColor"/>
<path d="M9.33329 15.3487C9.33329 15.3487 8.66663 13.3487 9.99996 12.6821C11.3333 12.0154 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 14.8855 9.71116 18.6666 10.0154C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4497 15.8351 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H18.9461L17.6415 18.7234L18.4947 13.5503C18.6022 12.8983 18.2159 12.266 17.5868 12.0639C16.9577 11.8618 16.2754 12.1511 15.9832 12.7437L12.7266 19.3487H6.66663C5.56206 19.3487 4.66663 18.4533 4.66663 17.3487C4.66663 16.2442 5.33329 15.3487 6.66663 15.3487H9.33329Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5448 26.0037C10.8154 25.4174 11.4546 25.1976 12.0231 25.4163L12.0333 25.4202L12.0431 25.4247C12.6295 25.6954 12.8492 26.3345 12.6306 26.9031L12.6251 26.9171L11.5068 29.4725C11.32 29.9332 10.8979 30.1567 10.4634 30.1567C10.3125 30.1567 10.1433 30.1107 10.038 30.0756L10.0205 30.0698L10.0038 30.0621C9.4174 29.7914 9.19765 29.1523 9.41632 28.5837L9.42174 28.5697L10.5448 26.0037Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8781 24.6704C20.1487 24.084 20.7879 23.8643 21.3564 24.0829L21.3666 24.0869L21.3765 24.0914C21.9628 24.362 22.1826 25.0012 21.9639 25.5697L21.9585 25.5838L20.8401 28.1392C20.6533 28.5999 20.2313 28.8234 19.7968 28.8234C19.6458 28.8234 19.4766 28.7774 19.3714 28.7423L19.3538 28.7365L19.3371 28.7287C18.7507 28.4581 18.531 27.819 18.7497 27.2504L18.7551 27.2363L19.8781 24.6704Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.8781 26.0037C30.1487 25.4174 30.7879 25.1976 31.3564 25.4163L31.3666 25.4202L31.3765 25.4247C31.9628 25.6954 32.1826 26.3345 31.9639 26.9031L31.9585 26.9171L30.8401 29.4725C30.6533 29.9332 30.2313 30.1567 29.7968 30.1567C29.6458 30.1567 29.4766 30.1107 29.3714 30.0756L29.3538 30.0698L29.3371 30.0621C28.7507 29.7914 28.531 29.1523 28.7497 28.5837L28.7551 28.5697L29.8781 26.0037Z" fill="currentColor"/>
<path d="M4.66675 27.9007C4.34788 27.696 4.23863 27.2428 4.42273 26.8883L4.84538 26.0745H4.00004C3.63185 26.0745 3.33337 25.7427 3.33337 25.3334C3.33337 24.9241 3.63185 24.5923 4.00004 24.5923H4.84538L4.42273 23.7785C4.23863 23.4241 4.34788 22.9708 4.66675 22.7662C4.98561 22.5615 5.39333 22.683 5.57743 23.0374L6.00008 23.8512L6.42273 23.0374C6.60682 22.683 7.01455 22.5615 7.33341 22.7662C7.65228 22.9708 7.76153 23.4241 7.57743 23.7785L7.15478 24.5923H8.00004C8.36823 24.5923 8.66671 24.9241 8.66671 25.3334C8.66671 25.7427 8.36823 26.0745 8.00004 26.0745H7.15478L7.57743 26.8883C7.76153 27.2428 7.65228 27.696 7.33341 27.9007C7.01455 28.1053 6.60682 27.9839 6.42273 27.6294L6.00008 26.8156L5.57743 27.6294C5.39334 27.9839 4.98561 28.1053 4.66675 27.9007Z" fill="currentColor"/>
<path d="M24.6667 27.9007C24.3479 27.696 24.2386 27.2428 24.4227 26.8883L24.8454 26.0745H24C23.6319 26.0745 23.3334 25.7427 23.3334 25.3334C23.3334 24.9241 23.6319 24.5923 24 24.5923H24.8454L24.4227 23.7785C24.2386 23.4241 24.3479 22.9708 24.6667 22.7662C24.9856 22.5615 25.3933 22.683 25.5774 23.0374L26.0001 23.8512L26.4227 23.0374C26.6068 22.683 27.0146 22.5615 27.3334 22.7662C27.6523 22.9708 27.7615 23.4241 27.5774 23.7785L27.1548 24.5923H28C28.3682 24.5923 28.6667 24.9241 28.6667 25.3334C28.6667 25.7427 28.3682 26.0745 28 26.0745H27.1548L27.5774 26.8883C27.7615 27.2428 27.6523 27.696 27.3334 27.9007C27.0146 28.1053 26.6068 27.9839 26.4227 27.6294L26.0001 26.8156L25.5774 27.6294C25.3933 27.9839 24.9856 28.1053 24.6667 27.9007Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_3597_1252">
<rect width="32" height="32" fill="currentColor"/>
</clipPath>
</defs>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3597_1252)">
<path d="M12.1782 5.17262C11.1299 9.43869 6.74822 12.0291 2.3916 10.9585C1.85537 10.8267 1.31873 11.3122 1.54474 11.8242C2.02231 12.9059 2.73016 13.8771 3.62235 14.6614C3.64624 14.6339 3.67063 14.6066 3.69553 14.5796C4.46211 13.7472 5.52698 13.3487 6.66666 13.3487H7.25987C7.43541 12.5009 7.91139 11.4903 9.10557 10.8932C10.3817 10.2551 11.5414 10.5914 12.333 11.0275C12.4856 10.8521 12.6503 10.6731 12.8272 10.4944C13.7723 9.53953 15.2171 8.44404 17.0969 8.10506C16.9853 5.4163 15.5527 2.94814 13.2974 1.53125C12.8169 1.22937 12.2658 1.72975 12.3402 2.30184C12.4618 3.23613 12.4158 4.20591 12.1782 5.17262Z" style="fill: var(--data-weather-lightning-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1633 19.4933L17.1792 13.3333L13.3334 21.1333L15.9093 22.3333L14.2404 29.3333L18.6667 20.6933L16.1633 19.4933Z" style="fill: var(--data-weather-lightning-primary-color)"/>
<path d="M27.3333 17.3488C27.4497 15.8352 24 15.3488 24 15.3488C24 15.3488 24 10.4446 18.6666 10.0155C16.5282 9.84342 14.8895 11.1454 13.8692 12.3091C13.0854 13.2031 12.6666 14.0155 12.6666 14.0155C12.6666 14.0155 11.999 13.014 11.1362 12.6646C10.7796 12.5203 10.3898 12.4872 9.99996 12.6822C9.66663 12.8488 9.45829 13.0988 9.33329 13.3801C8.95829 14.2238 9.33329 15.3488 9.33329 15.3488H6.66663C5.33329 15.3488 4.66663 16.2442 4.66663 17.3488C4.66663 18.4534 5.56206 19.3488 6.66663 19.3488H12.7266L12.1374 20.5438C12.0137 20.7948 11.9729 21.0764 12.0175 21.3488H6.66662C4.45749 21.3488 2.66663 19.558 2.66663 17.3488C2.66663 16.4055 2.95372 15.3851 3.69549 14.5797C4.46207 13.7474 5.52695 13.3488 6.66663 13.3488H7.25983C7.43538 12.5011 7.91136 11.4904 9.10553 10.8933C10.3817 10.2552 11.5414 10.5915 12.333 11.0276C12.4855 10.8522 12.6503 10.6732 12.8272 10.4945C14.0443 9.26475 16.0905 7.80174 18.827 8.02193C22.242 8.29671 24.1524 10.0867 25.107 11.919C25.4389 12.556 25.645 13.1747 25.774 13.699C25.9743 13.7574 26.1852 13.8252 26.3986 13.9034C26.9122 14.0917 27.5831 14.3909 28.1495 14.8677C28.733 15.3588 29.4242 16.244 29.3274 17.5022C29.178 19.445 27.6727 21.3488 25.3333 21.3488H19.829L19.8533 21.3014C20.0173 20.9812 20.045 20.6084 19.9301 20.2675C19.8152 19.9266 19.5674 19.6466 19.243 19.4911L18.9461 19.3488H25.3333C26.4379 19.3488 27.2486 18.4501 27.3333 17.3488Z" style="fill: var(--data-weather-cloud-heavy-secondary-color)"/>
<path d="M9.33329 15.3487C9.33329 15.3487 8.66663 13.3487 9.99996 12.6821C11.3333 12.0154 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 14.8855 9.71116 18.6666 10.0154C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4497 15.8351 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H18.9461L17.6415 18.7234L18.4947 13.5503C18.6022 12.8983 18.2159 12.266 17.5868 12.0639C16.9577 11.8618 16.2754 12.1511 15.9832 12.7437L12.7266 19.3487H6.66663C5.56206 19.3487 4.66663 18.4533 4.66663 17.3487C4.66663 16.2442 5.33329 15.3487 6.66663 15.3487H9.33329Z" style="fill: var(--data-weather-cloud-heavy-secondary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5448 26.0037C10.8154 25.4174 11.4546 25.1976 12.0231 25.4163L12.0333 25.4202L12.0431 25.4247C12.6295 25.6954 12.8492 26.3345 12.6306 26.9031L12.6251 26.9171L11.5068 29.4725C11.32 29.9332 10.8979 30.1567 10.4634 30.1567C10.3125 30.1567 10.1433 30.1107 10.038 30.0756L10.0205 30.0698L10.0038 30.0621C9.4174 29.7914 9.19765 29.1523 9.41632 28.5837L9.42174 28.5697L10.5448 26.0037Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8781 24.6704C20.1487 24.084 20.7879 23.8643 21.3564 24.0829L21.3666 24.0869L21.3765 24.0914C21.9628 24.362 22.1826 25.0012 21.9639 25.5697L21.9585 25.5838L20.8401 28.1392C20.6533 28.5999 20.2313 28.8234 19.7968 28.8234C19.6458 28.8234 19.4766 28.7774 19.3714 28.7423L19.3538 28.7365L19.3371 28.7287C18.7507 28.4581 18.531 27.819 18.7497 27.2504L18.7551 27.2363L19.8781 24.6704Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.8781 26.0037C30.1487 25.4174 30.7879 25.1976 31.3564 25.4163L31.3666 25.4202L31.3765 25.4247C31.9628 25.6954 32.1826 26.3345 31.9639 26.9031L31.9585 26.9171L30.8401 29.4725C30.6533 29.9332 30.2313 30.1567 29.7968 30.1567C29.6458 30.1567 29.4766 30.1107 29.3714 30.0756L29.3538 30.0698L29.3371 30.0621C28.7507 29.7914 28.531 29.1523 28.7497 28.5837L28.7551 28.5697L29.8781 26.0037Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path d="M4.66675 27.9007C4.34788 27.696 4.23863 27.2428 4.42273 26.8883L4.84538 26.0745H4.00004C3.63185 26.0745 3.33337 25.7427 3.33337 25.3334C3.33337 24.9241 3.63185 24.5923 4.00004 24.5923H4.84538L4.42273 23.7785C4.23863 23.4241 4.34788 22.9708 4.66675 22.7662C4.98561 22.5615 5.39333 22.683 5.57743 23.0374L6.00008 23.8512L6.42273 23.0374C6.60682 22.683 7.01455 22.5615 7.33341 22.7662C7.65228 22.9708 7.76153 23.4241 7.57743 23.7785L7.15478 24.5923H8.00004C8.36823 24.5923 8.66671 24.9241 8.66671 25.3334C8.66671 25.7427 8.36823 26.0745 8.00004 26.0745H7.15478L7.57743 26.8883C7.76153 27.2428 7.65228 27.696 7.33341 27.9007C7.01455 28.1053 6.60682 27.9839 6.42273 27.6294L6.00008 26.8156L5.57743 27.6294C5.39334 27.9839 4.98561 28.1053 4.66675 27.9007Z" style="fill: var(--data-weather-snow-primary-color)"/>
<path d="M24.6667 27.9007C24.3479 27.696 24.2386 27.2428 24.4227 26.8883L24.8454 26.0745H24C23.6319 26.0745 23.3334 25.7427 23.3334 25.3334C23.3334 24.9241 23.6319 24.5923 24 24.5923H24.8454L24.4227 23.7785C24.2386 23.4241 24.3479 22.9708 24.6667 22.7662C24.9856 22.5615 25.3933 22.683 25.5774 23.0374L26.0001 23.8512L26.4227 23.0374C26.6068 22.683 27.0146 22.5615 27.3334 22.7662C27.6523 22.9708 27.7615 23.4241 27.5774 23.7785L27.1548 24.5923H28C28.3682 24.5923 28.6667 24.9241 28.6667 25.3334C28.6667 25.7427 28.3682 26.0745 28 26.0745H27.1548L27.5774 26.8883C27.7615 27.2428 27.6523 27.696 27.3334 27.9007C27.0146 28.1053 26.6068 27.9839 26.4227 27.6294L26.0001 26.8156L25.5774 27.6294C25.3933 27.9839 24.9856 28.1053 24.6667 27.9007Z" style="fill: var(--data-weather-snow-primary-color)"/>
</g>
<defs>
<clipPath id="clip0_3597_1252">
<rect width="32" height="32" fill="none"/>
</clipPath>
</defs>
</svg>
`;

  override render() {
    return html`
      <div class="wrapper">${this.useCssColor ? this.iconCss : this.icon}</div>
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
    'obi-lightning-heavy-sleet-showers-night-colour': ObiLightningHeavySleetShowersNightColour;
  }
}