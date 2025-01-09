import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-heavy-rain-showers-night')
export class ObiHeavyRainShowersNight extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.3916 10.9585C6.74822 12.0291 11.1299 9.43869 12.1782 5.17262C12.4158 4.20591 12.4618 3.23613 12.3402 2.30184C12.2658 1.72975 12.8169 1.22937 13.2974 1.53125C15.5527 2.94814 16.9853 5.4163 17.0969 8.10506C17.6381 8.00747 18.2154 7.97259 18.8271 8.02181C22.2421 8.29658 24.1525 10.0865 25.1071 11.9189C25.4389 12.5559 25.6451 13.1745 25.7741 13.6989C25.9743 13.7572 26.1852 13.825 26.3987 13.9033C26.9123 14.0915 27.5832 14.3908 28.1496 14.8675C28.7331 15.3587 29.4242 16.2439 29.3274 17.5021C29.178 19.4449 27.6727 21.3487 25.3333 21.3487H6.66666C4.45753 21.3487 2.66667 19.5578 2.66667 17.3487C2.66667 16.437 2.93481 15.4534 3.62235 14.6614C2.73016 13.8771 2.02231 12.9059 1.54474 11.8242C1.31873 11.3122 1.85537 10.8267 2.3916 10.9585ZM27.3333 17.3487C27.4498 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6667 10.0154C16.5282 9.8433 14.8895 11.1452 13.8692 12.309C13.0855 13.203 12.6667 14.0154 12.6667 14.0154C12.6667 14.0154 11.999 13.0139 11.1362 12.6645C10.7797 12.5202 10.3898 12.4871 10 12.682C9.66667 12.8487 9.45833 13.0987 9.33333 13.3799C8.95833 14.2237 9.33333 15.3487 9.33333 15.3487H6.66667C5.33333 15.3487 4.66667 16.2441 4.66667 17.3487C4.66667 18.4533 5.5621 19.3487 6.66667 19.3487H25.3333C26.4379 19.3487 27.2486 18.45 27.3333 17.3487Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.21141 23.337C5.48204 22.7507 6.12118 22.5309 6.68973 22.7496L6.69988 22.7535L6.70975 22.758C7.29611 23.0287 7.51585 23.6678 7.29718 24.2364L7.29177 24.2504L6.17341 26.8058C5.9866 27.2665 5.56455 27.49 5.13007 27.49C4.97914 27.49 4.80989 27.444 4.70466 27.4089L4.68714 27.4031L4.67038 27.3953C4.08402 27.1247 3.86428 26.4856 4.08295 25.917L4.08837 25.9029L5.21141 23.337Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5447 23.337C14.8154 22.7507 15.4545 22.5309 16.0231 22.7496L16.0332 22.7535L16.0431 22.758C16.6294 23.0287 16.8492 23.6678 16.6305 24.2364L16.6251 24.2504L15.5067 26.8058C15.3199 27.2665 14.8979 27.49 14.4634 27.49C14.3125 27.49 14.1432 27.444 14.038 27.4089L14.0205 27.4031L14.0037 27.3953C13.4174 27.1247 13.1976 26.4856 13.4163 25.917L13.4217 25.9029L14.5447 23.337Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5447 23.337C18.8154 22.7507 19.4545 22.5309 20.0231 22.7496L20.0332 22.7535L20.0431 22.758C20.6294 23.0287 20.8492 23.6678 20.6305 24.2364L20.6251 24.2504L19.5067 26.8058C19.3199 27.2665 18.8979 27.49 18.4634 27.49C18.3125 27.49 18.1432 27.444 18.038 27.4089L18.0205 27.4031L18.0037 27.3953C17.4174 27.1247 17.1976 26.4856 17.4163 25.917L17.4217 25.9029L18.5447 23.337Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.8781 26.0037C24.1487 25.4173 24.7878 25.1976 25.3564 25.4162L25.3665 25.4201L25.3764 25.4247C25.9628 25.6953 26.1825 26.3345 25.9639 26.903L25.9584 26.9171L24.8401 29.4725C24.6533 29.9331 24.2312 30.1567 23.7967 30.1567C23.6458 30.1567 23.4766 30.1107 23.3713 30.0756L23.3538 30.0697L23.337 30.062C22.7507 29.7914 22.5309 29.1522 22.7496 28.5837L22.755 28.5696L23.8781 26.0037Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.21141 26.0037C9.48204 25.4173 10.1212 25.1976 10.6897 25.4162L10.6999 25.4201L10.7098 25.4247C11.2961 25.6953 11.5159 26.3345 11.2972 26.903L11.2918 26.9171L10.1734 29.4725C9.9866 29.9331 9.56455 30.1567 9.13007 30.1567C8.97914 30.1567 8.80989 30.1107 8.70466 30.0756L8.68714 30.0697L8.67038 30.062C8.08402 29.7914 7.86428 29.1522 8.08295 28.5837L8.08837 28.5696L9.21141 26.0037Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.3916 10.9585C6.74822 12.0291 11.1299 9.43869 12.1782 5.17262C12.4158 4.20591 12.4618 3.23613 12.3402 2.30184C12.2658 1.72975 12.8169 1.22937 13.2974 1.53125C15.5527 2.94814 16.9853 5.4163 17.0969 8.10506C17.6381 8.00747 18.2154 7.97259 18.8271 8.02181C22.2421 8.29658 24.1525 10.0865 25.1071 11.9189C25.4389 12.5559 25.6451 13.1745 25.7741 13.6989C25.9743 13.7572 26.1852 13.825 26.3987 13.9033C26.9123 14.0915 27.5832 14.3908 28.1496 14.8675C28.7331 15.3587 29.4242 16.2439 29.3274 17.5021C29.178 19.4449 27.6727 21.3487 25.3333 21.3487H6.66666C4.45753 21.3487 2.66667 19.5578 2.66667 17.3487C2.66667 16.437 2.93481 15.4534 3.62235 14.6614C2.73016 13.8771 2.02231 12.9059 1.54474 11.8242C1.31873 11.3122 1.85537 10.8267 2.3916 10.9585ZM27.3333 17.3487C27.4498 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6667 10.0154C16.5282 9.8433 14.8895 11.1452 13.8692 12.309C13.0855 13.203 12.6667 14.0154 12.6667 14.0154C12.6667 14.0154 11.999 13.0139 11.1362 12.6645C10.7797 12.5202 10.3898 12.4871 10 12.682C9.66667 12.8487 9.45833 13.0987 9.33333 13.3799C8.95833 14.2237 9.33333 15.3487 9.33333 15.3487H6.66667C5.33333 15.3487 4.66667 16.2441 4.66667 17.3487C4.66667 18.4533 5.5621 19.3487 6.66667 19.3487H25.3333C26.4379 19.3487 27.2486 18.45 27.3333 17.3487Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.21141 23.337C5.48204 22.7507 6.12118 22.5309 6.68973 22.7496L6.69988 22.7535L6.70975 22.758C7.29611 23.0287 7.51585 23.6678 7.29718 24.2364L7.29177 24.2504L6.17341 26.8058C5.9866 27.2665 5.56455 27.49 5.13007 27.49C4.97914 27.49 4.80989 27.444 4.70466 27.4089L4.68714 27.4031L4.67038 27.3953C4.08402 27.1247 3.86428 26.4856 4.08295 25.917L4.08837 25.9029L5.21141 23.337Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5447 23.337C14.8154 22.7507 15.4545 22.5309 16.0231 22.7496L16.0332 22.7535L16.0431 22.758C16.6294 23.0287 16.8492 23.6678 16.6305 24.2364L16.6251 24.2504L15.5067 26.8058C15.3199 27.2665 14.8979 27.49 14.4634 27.49C14.3125 27.49 14.1432 27.444 14.038 27.4089L14.0205 27.4031L14.0037 27.3953C13.4174 27.1247 13.1976 26.4856 13.4163 25.917L13.4217 25.9029L14.5447 23.337Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5447 23.337C18.8154 22.7507 19.4545 22.5309 20.0231 22.7496L20.0332 22.7535L20.0431 22.758C20.6294 23.0287 20.8492 23.6678 20.6305 24.2364L20.6251 24.2504L19.5067 26.8058C19.3199 27.2665 18.8979 27.49 18.4634 27.49C18.3125 27.49 18.1432 27.444 18.038 27.4089L18.0205 27.4031L18.0037 27.3953C17.4174 27.1247 17.1976 26.4856 17.4163 25.917L17.4217 25.9029L18.5447 23.337Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.8781 26.0037C24.1487 25.4173 24.7878 25.1976 25.3564 25.4162L25.3665 25.4201L25.3764 25.4247C25.9628 25.6953 26.1825 26.3345 25.9639 26.903L25.9584 26.9171L24.8401 29.4725C24.6533 29.9331 24.2312 30.1567 23.7967 30.1567C23.6458 30.1567 23.4766 30.1107 23.3713 30.0756L23.3538 30.0697L23.337 30.062C22.7507 29.7914 22.5309 29.1522 22.7496 28.5837L22.755 28.5696L23.8781 26.0037Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.21141 26.0037C9.48204 25.4173 10.1212 25.1976 10.6897 25.4162L10.6999 25.4201L10.7098 25.4247C11.2961 25.6953 11.5159 26.3345 11.2972 26.903L11.2918 26.9171L10.1734 29.4725C9.9866 29.9331 9.56455 30.1567 9.13007 30.1567C8.97914 30.1567 8.80989 30.1107 8.70466 30.0756L8.68714 30.0697L8.67038 30.062C8.08402 29.7914 7.86428 29.1522 8.08295 28.5837L8.08837 28.5696L9.21141 26.0037Z" style="fill: var(--element-active-color)"/>
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
    'obi-heavy-rain-showers-night': ObiHeavyRainShowersNight;
  }
}