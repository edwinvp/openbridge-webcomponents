import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-lightning-light-sleet-showers-night-colour')
export class ObiLightningLightSleetShowersNightColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1782 5.17262C11.1299 9.43869 6.74822 12.0291 2.3916 10.9585C1.85537 10.8267 1.31873 11.3122 1.54474 11.8242C2.02231 12.9059 2.73016 13.8771 3.62235 14.6614C3.64624 14.6339 3.67063 14.6066 3.69553 14.5796C4.46211 13.7472 5.52698 13.3487 6.66666 13.3487H7.25987C7.43541 12.5009 7.91139 11.4903 9.10557 10.8932C10.3817 10.2551 11.5414 10.5914 12.333 11.0275C12.4856 10.8521 12.6503 10.6731 12.8272 10.4944C13.7723 9.53953 15.2171 8.44404 17.0969 8.10506C16.9853 5.4163 15.5527 2.94814 13.2974 1.53125C12.8169 1.22937 12.2658 1.72975 12.3402 2.30184C12.4618 3.23613 12.4158 4.20591 12.1782 5.17262Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1632 19.4933L17.1791 13.3333L13.3333 21.1333L15.9092 22.3333L14.2403 29.3333L18.6666 20.6933L16.1632 19.4933Z" fill="currentColor"/>
<path d="M27.3333 17.3488C27.4497 15.8352 24 15.3488 24 15.3488C24 15.3488 24 10.4446 18.6666 10.0155C16.5282 9.84342 14.8895 11.1454 13.8692 12.3091C13.0854 13.2031 12.6666 14.0155 12.6666 14.0155C12.6666 14.0155 11.999 13.014 11.1362 12.6646C10.7796 12.5203 10.3898 12.4872 9.99996 12.6822C9.66663 12.8488 9.45829 13.0988 9.33329 13.3801C8.95829 14.2238 9.33329 15.3488 9.33329 15.3488H6.66663C5.33329 15.3488 4.66663 16.2442 4.66663 17.3488C4.66663 18.4534 5.56206 19.3488 6.66663 19.3488H12.7266L12.1374 20.5438C12.0137 20.7948 11.9729 21.0764 12.0175 21.3488H6.66662C4.45749 21.3488 2.66663 19.558 2.66663 17.3488C2.66663 16.4055 2.95372 15.3851 3.69549 14.5797C4.46207 13.7474 5.52695 13.3488 6.66663 13.3488H7.25983C7.43538 12.5011 7.91136 11.4904 9.10553 10.8933C10.3817 10.2552 11.5414 10.5915 12.333 11.0276C12.4855 10.8522 12.6503 10.6732 12.8272 10.4945C14.0443 9.26475 16.0905 7.80174 18.827 8.02193C22.242 8.29671 24.1524 10.0867 25.107 11.919C25.4389 12.556 25.645 13.1747 25.774 13.699C25.9743 13.7574 26.1852 13.8252 26.3986 13.9034C26.9122 14.0917 27.5831 14.3909 28.1495 14.8677C28.733 15.3588 29.4242 16.244 29.3274 17.5022C29.178 19.445 27.6727 21.3488 25.3333 21.3488H19.829L19.8533 21.3014C20.0173 20.9812 20.045 20.6084 19.9301 20.2675C19.8152 19.9266 19.5674 19.6466 19.243 19.4911L18.9461 19.3488H25.3333C26.4379 19.3488 27.2486 18.4501 27.3333 17.3488Z" fill="currentColor"/>
<path d="M9.33329 15.3487C9.33329 15.3487 8.66663 13.3487 9.99996 12.6821C11.3333 12.0154 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 14.8855 9.71116 18.6666 10.0154C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4497 15.8351 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H18.9461L17.6415 18.7234L18.4947 13.5503C18.6022 12.8983 18.2159 12.266 17.5868 12.0639C16.9577 11.8618 16.2754 12.1511 15.9832 12.7437L12.7266 19.3487H6.66663C5.56206 19.3487 4.66663 18.4533 4.66663 17.3487C4.66663 16.2442 5.33329 15.3487 6.66663 15.3487H9.33329Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.8782 24.0036C22.1488 23.4173 22.7879 23.1975 23.3565 23.4162L23.3666 23.4201L23.3765 23.4247C23.9629 23.6953 24.1826 24.3344 23.9639 24.903L23.9585 24.9171L22.8402 27.4724C22.6534 27.9331 22.2313 28.1567 21.7968 28.1567C21.6459 28.1567 21.4766 28.1106 21.3714 28.0755L21.3539 28.0697L21.3371 28.062C20.7508 27.7913 20.531 27.1522 20.7497 26.5837L20.7551 26.5696L21.8782 24.0036Z" fill="currentColor"/>
<path d="M8 29.2339C7.68114 29.0293 7.57189 28.576 7.75598 28.2216L8.17863 27.4078H7.33329C6.9651 27.4078 6.66663 27.076 6.66663 26.6667C6.66663 26.2574 6.9651 25.9256 7.33329 25.9256H8.17863L7.75598 25.1118C7.57189 24.7573 7.68114 24.3041 8 24.0994C8.31886 23.8948 8.72659 24.0162 8.91068 24.3707L9.33333 25.1845L9.75598 24.3707C9.94008 24.0162 10.3478 23.8948 10.6667 24.0994C10.9855 24.3041 11.0948 24.7573 10.9107 25.1118L10.488 25.9256H11.3333C11.7015 25.9256 12 26.2574 12 26.6667C12 27.076 11.7015 27.4078 11.3333 27.4078H10.488L10.9107 28.2216C11.0948 28.576 10.9855 29.0293 10.6667 29.2339C10.3478 29.4386 9.94008 29.3171 9.75598 28.9627L9.33333 28.1489L8.91068 28.9627C8.72659 29.3171 8.31886 29.4386 8 29.2339Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1782 5.17262C11.1299 9.43869 6.74822 12.0291 2.3916 10.9585C1.85537 10.8267 1.31873 11.3122 1.54474 11.8242C2.02231 12.9059 2.73016 13.8771 3.62235 14.6614C3.64624 14.6339 3.67063 14.6066 3.69553 14.5796C4.46211 13.7472 5.52698 13.3487 6.66666 13.3487H7.25987C7.43541 12.5009 7.91139 11.4903 9.10557 10.8932C10.3817 10.2551 11.5414 10.5914 12.333 11.0275C12.4856 10.8521 12.6503 10.6731 12.8272 10.4944C13.7723 9.53953 15.2171 8.44404 17.0969 8.10506C16.9853 5.4163 15.5527 2.94814 13.2974 1.53125C12.8169 1.22937 12.2658 1.72975 12.3402 2.30184C12.4618 3.23613 12.4158 4.20591 12.1782 5.17262Z" style="fill: var(--data-weather-lightning-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1632 19.4933L17.1791 13.3333L13.3333 21.1333L15.9092 22.3333L14.2403 29.3333L18.6666 20.6933L16.1632 19.4933Z" style="fill: var(--data-weather-lightning-primary-color)"/>
<path d="M27.3333 17.3488C27.4497 15.8352 24 15.3488 24 15.3488C24 15.3488 24 10.4446 18.6666 10.0155C16.5282 9.84342 14.8895 11.1454 13.8692 12.3091C13.0854 13.2031 12.6666 14.0155 12.6666 14.0155C12.6666 14.0155 11.999 13.014 11.1362 12.6646C10.7796 12.5203 10.3898 12.4872 9.99996 12.6822C9.66663 12.8488 9.45829 13.0988 9.33329 13.3801C8.95829 14.2238 9.33329 15.3488 9.33329 15.3488H6.66663C5.33329 15.3488 4.66663 16.2442 4.66663 17.3488C4.66663 18.4534 5.56206 19.3488 6.66663 19.3488H12.7266L12.1374 20.5438C12.0137 20.7948 11.9729 21.0764 12.0175 21.3488H6.66662C4.45749 21.3488 2.66663 19.558 2.66663 17.3488C2.66663 16.4055 2.95372 15.3851 3.69549 14.5797C4.46207 13.7474 5.52695 13.3488 6.66663 13.3488H7.25983C7.43538 12.5011 7.91136 11.4904 9.10553 10.8933C10.3817 10.2552 11.5414 10.5915 12.333 11.0276C12.4855 10.8522 12.6503 10.6732 12.8272 10.4945C14.0443 9.26475 16.0905 7.80174 18.827 8.02193C22.242 8.29671 24.1524 10.0867 25.107 11.919C25.4389 12.556 25.645 13.1747 25.774 13.699C25.9743 13.7574 26.1852 13.8252 26.3986 13.9034C26.9122 14.0917 27.5831 14.3909 28.1495 14.8677C28.733 15.3588 29.4242 16.244 29.3274 17.5022C29.178 19.445 27.6727 21.3488 25.3333 21.3488H19.829L19.8533 21.3014C20.0173 20.9812 20.045 20.6084 19.9301 20.2675C19.8152 19.9266 19.5674 19.6466 19.243 19.4911L18.9461 19.3488H25.3333C26.4379 19.3488 27.2486 18.4501 27.3333 17.3488Z" style="fill: var(--data-weather-cloud-light-primary-color)"/>
<path d="M9.33329 15.3487C9.33329 15.3487 8.66663 13.3487 9.99996 12.6821C11.3333 12.0154 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 14.8855 9.71116 18.6666 10.0154C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4497 15.8351 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H18.9461L17.6415 18.7234L18.4947 13.5503C18.6022 12.8983 18.2159 12.266 17.5868 12.0639C16.9577 11.8618 16.2754 12.1511 15.9832 12.7437L12.7266 19.3487H6.66663C5.56206 19.3487 4.66663 18.4533 4.66663 17.3487C4.66663 16.2442 5.33329 15.3487 6.66663 15.3487H9.33329Z" style="fill: var(--data-weather-cloud-light-seconday-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.8782 24.0036C22.1488 23.4173 22.7879 23.1975 23.3565 23.4162L23.3666 23.4201L23.3765 23.4247C23.9629 23.6953 24.1826 24.3344 23.9639 24.903L23.9585 24.9171L22.8402 27.4724C22.6534 27.9331 22.2313 28.1567 21.7968 28.1567C21.6459 28.1567 21.4766 28.1106 21.3714 28.0755L21.3539 28.0697L21.3371 28.062C20.7508 27.7913 20.531 27.1522 20.7497 26.5837L20.7551 26.5696L21.8782 24.0036Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path d="M8 29.2339C7.68114 29.0293 7.57189 28.576 7.75598 28.2216L8.17863 27.4078H7.33329C6.9651 27.4078 6.66663 27.076 6.66663 26.6667C6.66663 26.2574 6.9651 25.9256 7.33329 25.9256H8.17863L7.75598 25.1118C7.57189 24.7573 7.68114 24.3041 8 24.0994C8.31886 23.8948 8.72659 24.0162 8.91068 24.3707L9.33333 25.1845L9.75598 24.3707C9.94008 24.0162 10.3478 23.8948 10.6667 24.0994C10.9855 24.3041 11.0948 24.7573 10.9107 25.1118L10.488 25.9256H11.3333C11.7015 25.9256 12 26.2574 12 26.6667C12 27.076 11.7015 27.4078 11.3333 27.4078H10.488L10.9107 28.2216C11.0948 28.576 10.9855 29.0293 10.6667 29.2339C10.3478 29.4386 9.94008 29.3171 9.75598 28.9627L9.33333 28.1489L8.91068 28.9627C8.72659 29.3171 8.31886 29.4386 8 29.2339Z" style="fill: var(--data-weather-snow-primary-color)"/>
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
    'obi-lightning-light-sleet-showers-night-colour': ObiLightningLightSleetShowersNightColour;
  }
}