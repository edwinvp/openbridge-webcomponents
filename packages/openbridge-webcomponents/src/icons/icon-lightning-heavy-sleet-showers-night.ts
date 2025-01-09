import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-lightning-heavy-sleet-showers-night')
export class ObiLightningHeavySleetShowersNight extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1782 5.17262C11.1299 9.43869 6.74822 12.0291 2.3916 10.9585C1.85537 10.8267 1.31873 11.3122 1.54474 11.8242C2.0223 12.9059 2.73015 13.8771 3.62234 14.6614C2.9348 15.4534 2.66667 16.437 2.66667 17.3487C2.66667 19.5578 4.45753 21.3487 6.66666 21.3487H12.0175C11.9729 21.0763 12.0137 20.7947 12.1375 20.5437L12.7267 19.3487H6.66667C5.5621 19.3487 4.66667 18.4532 4.66667 17.3487C4.66667 16.2441 5.33333 15.3487 6.66667 15.3487H9.33333C9.33333 15.3487 8.95833 14.2237 9.33333 13.3799C9.45833 13.0987 9.66667 12.8487 10 12.682C10.3898 12.4871 10.7797 12.5201 11.1362 12.6645C11.999 13.0139 12.6667 14.0153 12.6667 14.0153C12.6667 14.0153 13.0855 13.2029 13.8692 12.3089C14.8895 11.1452 16.5282 9.84326 18.6667 10.0153C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4498 15.835 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H18.9461L19.243 19.491C19.5674 19.6465 19.8152 19.9264 19.9301 20.2673C20.0451 20.6082 20.0174 20.9811 19.8533 21.3012L19.829 21.3487H25.3333C27.6727 21.3487 29.178 19.4449 29.3274 17.502C29.4242 16.2438 28.7331 15.3587 28.1496 14.8675C27.5832 14.3907 26.9123 14.0915 26.3987 13.9032C26.1852 13.825 25.9743 13.7572 25.7741 13.6988C25.6451 13.1745 25.4389 12.5559 25.1071 11.9189C24.1525 10.0865 22.2421 8.29654 18.8271 8.02176C18.2154 7.97254 17.6381 8.00744 17.0969 8.10503C16.9853 5.41628 15.5526 2.94813 13.2974 1.53125C12.8169 1.22937 12.2658 1.72975 12.3402 2.30184C12.4618 3.23613 12.4158 4.20591 12.1782 5.17262Z" fill="currentColor"/>
<path d="M17.1791 13.3333L16.1633 19.4933L18.6667 20.6933L14.2404 29.3333L15.9093 22.3333L13.3333 21.1333L17.1791 13.3333Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.87808 26.0036C10.1487 25.4173 10.7878 25.1975 11.3564 25.4162L11.3665 25.4201L11.3764 25.4247C11.9628 25.6953 12.1825 26.3344 11.9638 26.903L11.9584 26.9171L10.8401 29.4724C10.6533 29.9331 10.2312 30.1567 9.79673 30.1567C9.6458 30.1567 9.47655 30.1106 9.37132 30.0755L9.35381 30.0697L9.33705 30.062C8.75069 29.7913 8.53095 29.1522 8.74962 28.5837L8.75503 28.5696L9.87808 26.0036Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2114 24.6703C19.482 24.0839 20.1212 23.8642 20.6897 24.0829L20.6999 24.0868L20.7098 24.0913C21.2961 24.362 21.5159 25.0011 21.2972 25.5696L21.2918 25.5837L20.1734 28.1391C19.9866 28.5998 19.5646 28.8233 19.1301 28.8233C18.9791 28.8233 18.8099 28.7773 18.7047 28.7422L18.6871 28.7364L18.6704 28.7286C18.084 28.458 17.8643 27.8189 18.083 27.2503L18.0884 27.2362L19.2114 24.6703Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.2114 26.0036C29.482 25.4173 30.1212 25.1975 30.6897 25.4162L30.6999 25.4201L30.7098 25.4247C31.2961 25.6953 31.5159 26.3344 31.2972 26.903L31.2918 26.9171L30.1734 29.4724C29.9866 29.9331 29.5646 30.1567 29.1301 30.1567C28.9791 30.1567 28.8099 30.1106 28.7047 30.0755L28.6871 30.0697L28.6704 30.062C28.084 29.7913 27.8643 29.1522 28.083 28.5837L28.0884 28.5696L29.2114 26.0036Z" fill="currentColor"/>
<path d="M4.00004 27.9005C3.68118 27.6959 3.57193 27.2426 3.75602 26.8881L4.17868 26.0743H3.33333C2.96514 26.0743 2.66667 25.7425 2.66667 25.3332C2.66667 24.9239 2.96514 24.5921 3.33333 24.5921H4.17867L3.75602 23.7784C3.57193 23.4239 3.68118 22.9706 4.00004 22.766C4.3189 22.5613 4.72663 22.6828 4.91072 23.0373L5.33337 23.851L5.75602 23.0373C5.94012 22.6828 6.34784 22.5613 6.66671 22.766C6.98557 22.9706 7.09482 23.4239 6.91072 23.7784L6.48808 24.5921H7.33333C7.70152 24.5921 8 24.9239 8 25.3332C8 25.7425 7.70152 26.0743 7.33333 26.0743H6.48807L6.91072 26.8881C7.09482 27.2426 6.98557 27.6959 6.66671 27.9005C6.34784 28.1052 5.94012 27.9837 5.75602 27.6292L5.33337 26.8155L4.91072 27.6292C4.72663 27.9837 4.3189 28.1052 4.00004 27.9005Z" fill="currentColor"/>
<path d="M24 27.9005C23.6812 27.6959 23.5719 27.2426 23.756 26.8881L24.1787 26.0743H23.3333C22.9651 26.0743 22.6667 25.7425 22.6667 25.3332C22.6667 24.9239 22.9651 24.5921 23.3333 24.5921H24.1787L23.756 23.7784C23.5719 23.4239 23.6812 22.9706 24 22.766C24.3189 22.5613 24.7266 22.6828 24.9107 23.0373L25.3334 23.851L25.756 23.0373C25.9401 22.6828 26.3478 22.5613 26.6667 22.766C26.9856 22.9706 27.0948 23.4239 26.9107 23.7784L26.4881 24.5921H27.3333C27.7015 24.5921 28 24.9239 28 25.3332C28 25.7425 27.7015 26.0743 27.3333 26.0743H26.4881L26.9107 26.8881C27.0948 27.2426 26.9856 27.6959 26.6667 27.9005C26.3478 28.1052 25.9401 27.9837 25.756 27.6292L25.3334 26.8155L24.9107 27.6292C24.7266 27.9837 24.3189 28.1052 24 27.9005Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1782 5.17262C11.1299 9.43869 6.74822 12.0291 2.3916 10.9585C1.85537 10.8267 1.31873 11.3122 1.54474 11.8242C2.0223 12.9059 2.73015 13.8771 3.62234 14.6614C2.9348 15.4534 2.66667 16.437 2.66667 17.3487C2.66667 19.5578 4.45753 21.3487 6.66666 21.3487H12.0175C11.9729 21.0763 12.0137 20.7947 12.1375 20.5437L12.7267 19.3487H6.66667C5.5621 19.3487 4.66667 18.4532 4.66667 17.3487C4.66667 16.2441 5.33333 15.3487 6.66667 15.3487H9.33333C9.33333 15.3487 8.95833 14.2237 9.33333 13.3799C9.45833 13.0987 9.66667 12.8487 10 12.682C10.3898 12.4871 10.7797 12.5201 11.1362 12.6645C11.999 13.0139 12.6667 14.0153 12.6667 14.0153C12.6667 14.0153 13.0855 13.2029 13.8692 12.3089C14.8895 11.1452 16.5282 9.84326 18.6667 10.0153C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4498 15.835 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H18.9461L19.243 19.491C19.5674 19.6465 19.8152 19.9264 19.9301 20.2673C20.0451 20.6082 20.0174 20.9811 19.8533 21.3012L19.829 21.3487H25.3333C27.6727 21.3487 29.178 19.4449 29.3274 17.502C29.4242 16.2438 28.7331 15.3587 28.1496 14.8675C27.5832 14.3907 26.9123 14.0915 26.3987 13.9032C26.1852 13.825 25.9743 13.7572 25.7741 13.6988C25.6451 13.1745 25.4389 12.5559 25.1071 11.9189C24.1525 10.0865 22.2421 8.29654 18.8271 8.02176C18.2154 7.97254 17.6381 8.00744 17.0969 8.10503C16.9853 5.41628 15.5526 2.94813 13.2974 1.53125C12.8169 1.22937 12.2658 1.72975 12.3402 2.30184C12.4618 3.23613 12.4158 4.20591 12.1782 5.17262Z" style="fill: var(--element-active-color)"/>
<path d="M17.1791 13.3333L16.1633 19.4933L18.6667 20.6933L14.2404 29.3333L15.9093 22.3333L13.3333 21.1333L17.1791 13.3333Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.87808 26.0036C10.1487 25.4173 10.7878 25.1975 11.3564 25.4162L11.3665 25.4201L11.3764 25.4247C11.9628 25.6953 12.1825 26.3344 11.9638 26.903L11.9584 26.9171L10.8401 29.4724C10.6533 29.9331 10.2312 30.1567 9.79673 30.1567C9.6458 30.1567 9.47655 30.1106 9.37132 30.0755L9.35381 30.0697L9.33705 30.062C8.75069 29.7913 8.53095 29.1522 8.74962 28.5837L8.75503 28.5696L9.87808 26.0036Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2114 24.6703C19.482 24.0839 20.1212 23.8642 20.6897 24.0829L20.6999 24.0868L20.7098 24.0913C21.2961 24.362 21.5159 25.0011 21.2972 25.5696L21.2918 25.5837L20.1734 28.1391C19.9866 28.5998 19.5646 28.8233 19.1301 28.8233C18.9791 28.8233 18.8099 28.7773 18.7047 28.7422L18.6871 28.7364L18.6704 28.7286C18.084 28.458 17.8643 27.8189 18.083 27.2503L18.0884 27.2362L19.2114 24.6703Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.2114 26.0036C29.482 25.4173 30.1212 25.1975 30.6897 25.4162L30.6999 25.4201L30.7098 25.4247C31.2961 25.6953 31.5159 26.3344 31.2972 26.903L31.2918 26.9171L30.1734 29.4724C29.9866 29.9331 29.5646 30.1567 29.1301 30.1567C28.9791 30.1567 28.8099 30.1106 28.7047 30.0755L28.6871 30.0697L28.6704 30.062C28.084 29.7913 27.8643 29.1522 28.083 28.5837L28.0884 28.5696L29.2114 26.0036Z" style="fill: var(--element-active-color)"/>
<path d="M4.00004 27.9005C3.68118 27.6959 3.57193 27.2426 3.75602 26.8881L4.17868 26.0743H3.33333C2.96514 26.0743 2.66667 25.7425 2.66667 25.3332C2.66667 24.9239 2.96514 24.5921 3.33333 24.5921H4.17867L3.75602 23.7784C3.57193 23.4239 3.68118 22.9706 4.00004 22.766C4.3189 22.5613 4.72663 22.6828 4.91072 23.0373L5.33337 23.851L5.75602 23.0373C5.94012 22.6828 6.34784 22.5613 6.66671 22.766C6.98557 22.9706 7.09482 23.4239 6.91072 23.7784L6.48808 24.5921H7.33333C7.70152 24.5921 8 24.9239 8 25.3332C8 25.7425 7.70152 26.0743 7.33333 26.0743H6.48807L6.91072 26.8881C7.09482 27.2426 6.98557 27.6959 6.66671 27.9005C6.34784 28.1052 5.94012 27.9837 5.75602 27.6292L5.33337 26.8155L4.91072 27.6292C4.72663 27.9837 4.3189 28.1052 4.00004 27.9005Z" style="fill: var(--element-active-color)"/>
<path d="M24 27.9005C23.6812 27.6959 23.5719 27.2426 23.756 26.8881L24.1787 26.0743H23.3333C22.9651 26.0743 22.6667 25.7425 22.6667 25.3332C22.6667 24.9239 22.9651 24.5921 23.3333 24.5921H24.1787L23.756 23.7784C23.5719 23.4239 23.6812 22.9706 24 22.766C24.3189 22.5613 24.7266 22.6828 24.9107 23.0373L25.3334 23.851L25.756 23.0373C25.9401 22.6828 26.3478 22.5613 26.6667 22.766C26.9856 22.9706 27.0948 23.4239 26.9107 23.7784L26.4881 24.5921H27.3333C27.7015 24.5921 28 24.9239 28 25.3332C28 25.7425 27.7015 26.0743 27.3333 26.0743H26.4881L26.9107 26.8881C27.0948 27.2426 26.9856 27.6959 26.6667 27.9005C26.3478 28.1052 25.9401 27.9837 25.756 27.6292L25.3334 26.8155L24.9107 27.6292C24.7266 27.9837 24.3189 28.1052 24 27.9005Z" style="fill: var(--element-active-color)"/>
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
    'obi-lightning-heavy-sleet-showers-night': ObiLightningHeavySleetShowersNight;
  }
}