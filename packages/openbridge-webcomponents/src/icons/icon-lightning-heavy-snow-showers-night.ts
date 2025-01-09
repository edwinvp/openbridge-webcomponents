import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-lightning-heavy-snow-showers-night')
export class ObiLightningHeavySnowShowersNight extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1782 5.17262C11.1299 9.43869 6.74822 12.0291 2.3916 10.9585C1.85537 10.8267 1.31873 11.3122 1.54474 11.8242C2.0223 12.9059 2.73015 13.8771 3.62234 14.6614C2.9348 15.4534 2.66667 16.437 2.66667 17.3487C2.66667 19.5578 4.45753 21.3487 6.66666 21.3487H12.0175C11.9729 21.0763 12.0137 20.7947 12.1375 20.5437L12.7267 19.3487H6.66667C5.5621 19.3487 4.66667 18.4532 4.66667 17.3487C4.66667 16.2441 5.33333 15.3487 6.66667 15.3487H9.33333C9.33333 15.3487 8.95833 14.2237 9.33333 13.3799C9.45833 13.0987 9.66667 12.8487 10 12.682C10.3898 12.4871 10.7797 12.5201 11.1362 12.6645C11.999 13.0139 12.6667 14.0153 12.6667 14.0153C12.6667 14.0153 13.0855 13.2029 13.8692 12.3089C14.8895 11.1452 16.5282 9.84326 18.6667 10.0153C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4498 15.835 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H18.9461L19.243 19.491C19.5674 19.6465 19.8152 19.9264 19.9301 20.2673C20.0451 20.6082 20.0174 20.9811 19.8533 21.3012L19.829 21.3487H25.3333C27.6727 21.3487 29.178 19.4449 29.3274 17.502C29.4242 16.2438 28.7331 15.3587 28.1496 14.8675C27.5832 14.3907 26.9122 14.0915 26.3987 13.9032C26.1852 13.825 25.9743 13.7572 25.7741 13.6988C25.6451 13.1745 25.4389 12.5559 25.1071 11.9189C24.1525 10.0865 22.2421 8.29654 18.8271 8.02176C18.2153 7.97254 17.6381 8.00744 17.0969 8.10503C16.9853 5.41628 15.5526 2.94813 13.2974 1.53125C12.8169 1.22937 12.2658 1.72975 12.3402 2.30184C12.4618 3.23613 12.4158 4.20591 12.1782 5.17262Z" fill="currentColor"/>
<path d="M17.1791 13.3333L16.1633 19.4933L18.6667 20.6933L14.2404 29.3333L15.9093 22.3333L13.3333 21.1333L17.1791 13.3333Z" fill="currentColor"/>
<path d="M3.33337 27.2338C3.01451 27.0292 2.90526 26.5759 3.08936 26.2215L3.51201 25.4077H2.66667C2.29848 25.4077 2 25.0759 2 24.6666C2 24.2573 2.29848 23.9255 2.66667 23.9255H3.512L3.08936 23.1117C2.90526 22.7572 3.01451 22.304 3.33337 22.0993C3.65223 21.8947 4.05996 22.0161 4.24406 22.3706L4.66671 23.1844L5.08936 22.3706C5.27345 22.0161 5.68118 21.8947 6.00004 22.0993C6.3189 22.304 6.42815 22.7572 6.24406 23.1117L5.82141 23.9255H6.66667C7.03486 23.9255 7.33333 24.2573 7.33333 24.6666C7.33333 25.0759 7.03486 25.4077 6.66667 25.4077H5.8214L6.24406 26.2215C6.42815 26.5759 6.3189 27.0292 6.00004 27.2338C5.68118 27.4385 5.27345 27.317 5.08936 26.9626L4.66671 26.1488L4.24406 26.9626C4.05996 27.317 3.65223 27.4385 3.33337 27.2338Z" fill="currentColor"/>
<path d="M8.66671 30.5672C8.34784 30.3625 8.23859 29.9093 8.42269 29.5548L8.84534 28.741H8C7.63181 28.741 7.33333 28.4092 7.33333 27.9999C7.33333 27.5906 7.63181 27.2588 8 27.2588H8.84533L8.42269 26.445C8.23859 26.0906 8.34784 25.6373 8.66671 25.4327C8.98557 25.228 9.39329 25.3495 9.57739 25.7039L10 26.5177L10.4227 25.7039C10.6068 25.3495 11.0145 25.228 11.3334 25.4327C11.6522 25.6373 11.7615 26.0906 11.5774 26.445L11.1547 27.2588H12C12.3682 27.2588 12.6667 27.5906 12.6667 27.9999C12.6667 28.4092 12.3682 28.741 12 28.741H11.1547L11.5774 29.5548C11.7615 29.9093 11.6522 30.3625 11.3334 30.5672C11.0145 30.7718 10.6068 30.6504 10.4227 30.2959L10 29.4821L9.57739 30.2959C9.39329 30.6504 8.98557 30.7718 8.66671 30.5672Z" fill="currentColor"/>
<path d="M20 27.9005C19.6812 27.6959 19.5719 27.2426 19.756 26.8881L20.1787 26.0743H19.3333C18.9651 26.0743 18.6667 25.7425 18.6667 25.3332C18.6667 24.9239 18.9651 24.5921 19.3333 24.5921H20.1787L19.756 23.7784C19.5719 23.4239 19.6812 22.9706 20 22.766C20.3189 22.5613 20.7266 22.6828 20.9107 23.0373L21.3334 23.851L21.756 23.0373C21.9401 22.6828 22.3478 22.5613 22.6667 22.766C22.9856 22.9706 23.0948 23.4239 22.9107 23.7784L22.4881 24.5921H23.3333C23.7015 24.5921 24 24.9239 24 25.3332C24 25.7425 23.7015 26.0743 23.3333 26.0743H22.4881L22.9107 26.8881C23.0948 27.2426 22.9856 27.6959 22.6667 27.9005C22.3478 28.1052 21.9401 27.9837 21.756 27.6292L21.3334 26.8155L20.9107 27.6292C20.7266 27.9837 20.3189 28.1052 20 27.9005Z" fill="currentColor"/>
<path d="M26.6667 30.5672C26.3478 30.3625 26.2386 29.9093 26.4227 29.5548L26.8453 28.741H26C25.6318 28.741 25.3333 28.4092 25.3333 27.9999C25.3333 27.5906 25.6318 27.2588 26 27.2588H26.8453L26.4227 26.445C26.2386 26.0906 26.3478 25.6373 26.6667 25.4327C26.9856 25.228 27.3933 25.3495 27.5774 25.7039L28 26.5177L28.4227 25.7039C28.6068 25.3495 29.0145 25.228 29.3334 25.4327C29.6522 25.6373 29.7615 26.0906 29.5774 26.445L29.1547 27.2588H30C30.3682 27.2588 30.6667 27.5906 30.6667 27.9999C30.6667 28.4092 30.3682 28.741 30 28.741H29.1547L29.5774 29.5548C29.7615 29.9093 29.6522 30.3625 29.3334 30.5672C29.0145 30.7718 28.6068 30.6504 28.4227 30.2959L28 29.4821L27.5774 30.2959C27.3933 30.6504 26.9856 30.7718 26.6667 30.5672Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1782 5.17262C11.1299 9.43869 6.74822 12.0291 2.3916 10.9585C1.85537 10.8267 1.31873 11.3122 1.54474 11.8242C2.0223 12.9059 2.73015 13.8771 3.62234 14.6614C2.9348 15.4534 2.66667 16.437 2.66667 17.3487C2.66667 19.5578 4.45753 21.3487 6.66666 21.3487H12.0175C11.9729 21.0763 12.0137 20.7947 12.1375 20.5437L12.7267 19.3487H6.66667C5.5621 19.3487 4.66667 18.4532 4.66667 17.3487C4.66667 16.2441 5.33333 15.3487 6.66667 15.3487H9.33333C9.33333 15.3487 8.95833 14.2237 9.33333 13.3799C9.45833 13.0987 9.66667 12.8487 10 12.682C10.3898 12.4871 10.7797 12.5201 11.1362 12.6645C11.999 13.0139 12.6667 14.0153 12.6667 14.0153C12.6667 14.0153 13.0855 13.2029 13.8692 12.3089C14.8895 11.1452 16.5282 9.84326 18.6667 10.0153C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4498 15.835 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H18.9461L19.243 19.491C19.5674 19.6465 19.8152 19.9264 19.9301 20.2673C20.0451 20.6082 20.0174 20.9811 19.8533 21.3012L19.829 21.3487H25.3333C27.6727 21.3487 29.178 19.4449 29.3274 17.502C29.4242 16.2438 28.7331 15.3587 28.1496 14.8675C27.5832 14.3907 26.9122 14.0915 26.3987 13.9032C26.1852 13.825 25.9743 13.7572 25.7741 13.6988C25.6451 13.1745 25.4389 12.5559 25.1071 11.9189C24.1525 10.0865 22.2421 8.29654 18.8271 8.02176C18.2153 7.97254 17.6381 8.00744 17.0969 8.10503C16.9853 5.41628 15.5526 2.94813 13.2974 1.53125C12.8169 1.22937 12.2658 1.72975 12.3402 2.30184C12.4618 3.23613 12.4158 4.20591 12.1782 5.17262Z" style="fill: var(--element-active-color)"/>
<path d="M17.1791 13.3333L16.1633 19.4933L18.6667 20.6933L14.2404 29.3333L15.9093 22.3333L13.3333 21.1333L17.1791 13.3333Z" style="fill: var(--element-active-color)"/>
<path d="M3.33337 27.2338C3.01451 27.0292 2.90526 26.5759 3.08936 26.2215L3.51201 25.4077H2.66667C2.29848 25.4077 2 25.0759 2 24.6666C2 24.2573 2.29848 23.9255 2.66667 23.9255H3.512L3.08936 23.1117C2.90526 22.7572 3.01451 22.304 3.33337 22.0993C3.65223 21.8947 4.05996 22.0161 4.24406 22.3706L4.66671 23.1844L5.08936 22.3706C5.27345 22.0161 5.68118 21.8947 6.00004 22.0993C6.3189 22.304 6.42815 22.7572 6.24406 23.1117L5.82141 23.9255H6.66667C7.03486 23.9255 7.33333 24.2573 7.33333 24.6666C7.33333 25.0759 7.03486 25.4077 6.66667 25.4077H5.8214L6.24406 26.2215C6.42815 26.5759 6.3189 27.0292 6.00004 27.2338C5.68118 27.4385 5.27345 27.317 5.08936 26.9626L4.66671 26.1488L4.24406 26.9626C4.05996 27.317 3.65223 27.4385 3.33337 27.2338Z" style="fill: var(--element-active-color)"/>
<path d="M8.66671 30.5672C8.34784 30.3625 8.23859 29.9093 8.42269 29.5548L8.84534 28.741H8C7.63181 28.741 7.33333 28.4092 7.33333 27.9999C7.33333 27.5906 7.63181 27.2588 8 27.2588H8.84533L8.42269 26.445C8.23859 26.0906 8.34784 25.6373 8.66671 25.4327C8.98557 25.228 9.39329 25.3495 9.57739 25.7039L10 26.5177L10.4227 25.7039C10.6068 25.3495 11.0145 25.228 11.3334 25.4327C11.6522 25.6373 11.7615 26.0906 11.5774 26.445L11.1547 27.2588H12C12.3682 27.2588 12.6667 27.5906 12.6667 27.9999C12.6667 28.4092 12.3682 28.741 12 28.741H11.1547L11.5774 29.5548C11.7615 29.9093 11.6522 30.3625 11.3334 30.5672C11.0145 30.7718 10.6068 30.6504 10.4227 30.2959L10 29.4821L9.57739 30.2959C9.39329 30.6504 8.98557 30.7718 8.66671 30.5672Z" style="fill: var(--element-active-color)"/>
<path d="M20 27.9005C19.6812 27.6959 19.5719 27.2426 19.756 26.8881L20.1787 26.0743H19.3333C18.9651 26.0743 18.6667 25.7425 18.6667 25.3332C18.6667 24.9239 18.9651 24.5921 19.3333 24.5921H20.1787L19.756 23.7784C19.5719 23.4239 19.6812 22.9706 20 22.766C20.3189 22.5613 20.7266 22.6828 20.9107 23.0373L21.3334 23.851L21.756 23.0373C21.9401 22.6828 22.3478 22.5613 22.6667 22.766C22.9856 22.9706 23.0948 23.4239 22.9107 23.7784L22.4881 24.5921H23.3333C23.7015 24.5921 24 24.9239 24 25.3332C24 25.7425 23.7015 26.0743 23.3333 26.0743H22.4881L22.9107 26.8881C23.0948 27.2426 22.9856 27.6959 22.6667 27.9005C22.3478 28.1052 21.9401 27.9837 21.756 27.6292L21.3334 26.8155L20.9107 27.6292C20.7266 27.9837 20.3189 28.1052 20 27.9005Z" style="fill: var(--element-active-color)"/>
<path d="M26.6667 30.5672C26.3478 30.3625 26.2386 29.9093 26.4227 29.5548L26.8453 28.741H26C25.6318 28.741 25.3333 28.4092 25.3333 27.9999C25.3333 27.5906 25.6318 27.2588 26 27.2588H26.8453L26.4227 26.445C26.2386 26.0906 26.3478 25.6373 26.6667 25.4327C26.9856 25.228 27.3933 25.3495 27.5774 25.7039L28 26.5177L28.4227 25.7039C28.6068 25.3495 29.0145 25.228 29.3334 25.4327C29.6522 25.6373 29.7615 26.0906 29.5774 26.445L29.1547 27.2588H30C30.3682 27.2588 30.6667 27.5906 30.6667 27.9999C30.6667 28.4092 30.3682 28.741 30 28.741H29.1547L29.5774 29.5548C29.7615 29.9093 29.6522 30.3625 29.3334 30.5672C29.0145 30.7718 28.6068 30.6504 28.4227 30.2959L28 29.4821L27.5774 30.2959C27.3933 30.6504 26.9856 30.7718 26.6667 30.5672Z" style="fill: var(--element-active-color)"/>
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
    'obi-lightning-heavy-snow-showers-night': ObiLightningHeavySnowShowersNight;
  }
}