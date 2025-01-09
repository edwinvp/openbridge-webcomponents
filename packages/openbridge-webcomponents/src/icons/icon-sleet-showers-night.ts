import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-sleet-showers-night')
export class ObiSleetShowersNight extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.3916 10.9585C6.74822 12.0291 11.1299 9.43869 12.1782 5.17262C12.4158 4.20591 12.4618 3.23613 12.3402 2.30184C12.2658 1.72975 12.8169 1.22937 13.2974 1.53125C15.5527 2.94814 16.9853 5.4163 17.0969 8.10506C17.6381 8.00747 18.2154 7.97259 18.8271 8.02181C22.2421 8.29658 24.1525 10.0865 25.1071 11.9189C25.4389 12.5559 25.6451 13.1745 25.7741 13.6989C25.9743 13.7572 26.1852 13.825 26.3987 13.9033C26.9123 14.0915 27.5832 14.3908 28.1496 14.8675C28.7331 15.3587 29.4242 16.2439 29.3274 17.5021C29.178 19.4449 27.6727 21.3487 25.3333 21.3487H6.66666C4.45753 21.3487 2.66667 19.5578 2.66667 17.3487C2.66667 16.437 2.93481 15.4534 3.62235 14.6614C2.73016 13.8771 2.02231 12.9059 1.54474 11.8242C1.31873 11.3122 1.85537 10.8267 2.3916 10.9585ZM27.3333 17.3487C27.4498 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6667 10.0154C16.5282 9.8433 14.8895 11.1452 13.8692 12.309C13.0855 13.203 12.6667 14.0154 12.6667 14.0154C12.6667 14.0154 11.999 13.0139 11.1362 12.6645C10.7797 12.5202 10.3898 12.4871 10 12.682C9.66667 12.8487 9.45833 13.0987 9.33333 13.3799C8.95833 14.2237 9.33333 15.3487 9.33333 15.3487H6.66667C5.33333 15.3487 4.66667 16.2441 4.66667 17.3487C4.66667 18.4533 5.5621 19.3487 6.66667 19.3487H25.3333C26.4379 19.3487 27.2486 18.45 27.3333 17.3487Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5447 23.337C22.8154 22.7507 23.4545 22.5309 24.0231 22.7496L24.0332 22.7535L24.0431 22.758C24.6294 23.0287 24.8492 23.6678 24.6305 24.2364L24.6251 24.2504L23.5067 26.8058C23.3199 27.2665 22.8979 27.49 22.4634 27.49C22.3125 27.49 22.1432 27.444 22.038 27.4089L22.0205 27.4031L22.0037 27.3953C21.4174 27.1247 21.1976 26.4856 21.4163 25.917L21.4217 25.9029L22.5447 23.337Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8781 26.0037C16.1487 25.4173 16.7878 25.1976 17.3564 25.4162L17.3665 25.4201L17.3764 25.4247C17.9628 25.6953 18.1825 26.3345 17.9638 26.903L17.9584 26.9171L16.8401 29.4725C16.6533 29.9331 16.2312 30.1567 15.7967 30.1567C15.6458 30.1567 15.4766 30.1107 15.3713 30.0756L15.3538 30.0697L15.337 30.062C14.7507 29.7914 14.5309 29.1522 14.7496 28.5837L14.755 28.5696L15.8781 26.0037Z" fill="currentColor"/>
<path d="M8.00004 27.9005C7.68118 27.6959 7.57193 27.2426 7.75602 26.8882L8.17868 26.0744H7.33333C6.96514 26.0744 6.66667 25.7426 6.66667 25.3333C6.66667 24.924 6.96514 24.5922 7.33333 24.5922H8.17867L7.75602 23.7784C7.57193 23.4239 7.68118 22.9707 8.00004 22.766C8.3189 22.5614 8.72663 22.6828 8.91072 23.0373L9.33337 23.8511L9.75602 23.0373C9.94012 22.6828 10.3478 22.5614 10.6667 22.766C10.9856 22.9707 11.0948 23.4239 10.9107 23.7784L10.4881 24.5922H11.3333C11.7015 24.5922 12 24.924 12 25.3333C12 25.7426 11.7015 26.0744 11.3333 26.0744H10.4881L10.9107 26.8882C11.0948 27.2426 10.9856 27.6959 10.6667 27.9005C10.3478 28.1052 9.94012 27.9837 9.75602 27.6293L9.33337 26.8155L8.91072 27.6293C8.72663 27.9837 8.3189 28.1052 8.00004 27.9005Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.3916 10.9585C6.74822 12.0291 11.1299 9.43869 12.1782 5.17262C12.4158 4.20591 12.4618 3.23613 12.3402 2.30184C12.2658 1.72975 12.8169 1.22937 13.2974 1.53125C15.5527 2.94814 16.9853 5.4163 17.0969 8.10506C17.6381 8.00747 18.2154 7.97259 18.8271 8.02181C22.2421 8.29658 24.1525 10.0865 25.1071 11.9189C25.4389 12.5559 25.6451 13.1745 25.7741 13.6989C25.9743 13.7572 26.1852 13.825 26.3987 13.9033C26.9123 14.0915 27.5832 14.3908 28.1496 14.8675C28.7331 15.3587 29.4242 16.2439 29.3274 17.5021C29.178 19.4449 27.6727 21.3487 25.3333 21.3487H6.66666C4.45753 21.3487 2.66667 19.5578 2.66667 17.3487C2.66667 16.437 2.93481 15.4534 3.62235 14.6614C2.73016 13.8771 2.02231 12.9059 1.54474 11.8242C1.31873 11.3122 1.85537 10.8267 2.3916 10.9585ZM27.3333 17.3487C27.4498 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6667 10.0154C16.5282 9.8433 14.8895 11.1452 13.8692 12.309C13.0855 13.203 12.6667 14.0154 12.6667 14.0154C12.6667 14.0154 11.999 13.0139 11.1362 12.6645C10.7797 12.5202 10.3898 12.4871 10 12.682C9.66667 12.8487 9.45833 13.0987 9.33333 13.3799C8.95833 14.2237 9.33333 15.3487 9.33333 15.3487H6.66667C5.33333 15.3487 4.66667 16.2441 4.66667 17.3487C4.66667 18.4533 5.5621 19.3487 6.66667 19.3487H25.3333C26.4379 19.3487 27.2486 18.45 27.3333 17.3487Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.5447 23.337C22.8154 22.7507 23.4545 22.5309 24.0231 22.7496L24.0332 22.7535L24.0431 22.758C24.6294 23.0287 24.8492 23.6678 24.6305 24.2364L24.6251 24.2504L23.5067 26.8058C23.3199 27.2665 22.8979 27.49 22.4634 27.49C22.3125 27.49 22.1432 27.444 22.038 27.4089L22.0205 27.4031L22.0037 27.3953C21.4174 27.1247 21.1976 26.4856 21.4163 25.917L21.4217 25.9029L22.5447 23.337Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8781 26.0037C16.1487 25.4173 16.7878 25.1976 17.3564 25.4162L17.3665 25.4201L17.3764 25.4247C17.9628 25.6953 18.1825 26.3345 17.9638 26.903L17.9584 26.9171L16.8401 29.4725C16.6533 29.9331 16.2312 30.1567 15.7967 30.1567C15.6458 30.1567 15.4766 30.1107 15.3713 30.0756L15.3538 30.0697L15.337 30.062C14.7507 29.7914 14.5309 29.1522 14.7496 28.5837L14.755 28.5696L15.8781 26.0037Z" style="fill: var(--element-active-color)"/>
<path d="M8.00004 27.9005C7.68118 27.6959 7.57193 27.2426 7.75602 26.8882L8.17868 26.0744H7.33333C6.96514 26.0744 6.66667 25.7426 6.66667 25.3333C6.66667 24.924 6.96514 24.5922 7.33333 24.5922H8.17867L7.75602 23.7784C7.57193 23.4239 7.68118 22.9707 8.00004 22.766C8.3189 22.5614 8.72663 22.6828 8.91072 23.0373L9.33337 23.8511L9.75602 23.0373C9.94012 22.6828 10.3478 22.5614 10.6667 22.766C10.9856 22.9707 11.0948 23.4239 10.9107 23.7784L10.4881 24.5922H11.3333C11.7015 24.5922 12 24.924 12 25.3333C12 25.7426 11.7015 26.0744 11.3333 26.0744H10.4881L10.9107 26.8882C11.0948 27.2426 10.9856 27.6959 10.6667 27.9005C10.3478 28.1052 9.94012 27.9837 9.75602 27.6293L9.33337 26.8155L8.91072 27.6293C8.72663 27.9837 8.3189 28.1052 8.00004 27.9005Z" style="fill: var(--element-active-color)"/>
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
    'obi-sleet-showers-night': ObiSleetShowersNight;
  }
}