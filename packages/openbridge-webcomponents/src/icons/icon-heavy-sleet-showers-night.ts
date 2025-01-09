import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-heavy-sleet-showers-night')
export class ObiHeavySleetShowersNight extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.3916 10.9585C6.74822 12.0291 11.1299 9.43869 12.1782 5.17262C12.4158 4.20591 12.4618 3.23613 12.3402 2.30184C12.2658 1.72975 12.8169 1.22937 13.2974 1.53125C15.5527 2.94814 16.9853 5.4163 17.0969 8.10506C17.6381 8.00747 18.2154 7.97259 18.8271 8.02181C22.2421 8.29658 24.1525 10.0865 25.1071 11.9189C25.4389 12.5559 25.6451 13.1745 25.7741 13.6989C25.9743 13.7572 26.1852 13.825 26.3987 13.9033C26.9123 14.0915 27.5832 14.3908 28.1496 14.8675C28.7331 15.3587 29.4242 16.2439 29.3274 17.5021C29.178 19.4449 27.6727 21.3487 25.3333 21.3487H6.66666C4.45753 21.3487 2.66667 19.5578 2.66667 17.3487C2.66667 16.437 2.93481 15.4534 3.62235 14.6614C2.73016 13.8771 2.02231 12.9059 1.54474 11.8242C1.31873 11.3122 1.85537 10.8267 2.3916 10.9585ZM27.3333 17.3487C27.4498 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6667 10.0154C16.5282 9.8433 14.8895 11.1452 13.8692 12.309C13.0855 13.203 12.6667 14.0154 12.6667 14.0154C12.6667 14.0154 11.999 13.0139 11.1362 12.6645C10.7797 12.5202 10.3898 12.4871 10 12.682C9.66667 12.8487 9.45833 13.0987 9.33333 13.3799C8.95833 14.2237 9.33333 15.3487 9.33333 15.3487H6.66667C5.33333 15.3487 4.66667 16.2441 4.66667 17.3487C4.66667 18.4533 5.5621 19.3487 6.66667 19.3487H25.3333C26.4379 19.3487 27.2486 18.45 27.3333 17.3487Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.8781 23.337C26.1487 22.7507 26.7879 22.5309 27.3564 22.7496L27.3665 22.7535L27.3764 22.758C27.9628 23.0287 28.1825 23.6678 27.9639 24.2364L27.9584 24.2504L26.8401 26.8058C26.6533 27.2665 26.2312 27.49 25.7967 27.49C25.6458 27.49 25.4766 27.444 25.3713 27.4089L25.3538 27.4031L25.337 27.3953C24.7507 27.1247 24.5309 26.4856 24.7496 25.917L24.755 25.9029L25.8781 23.337Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2114 23.337C15.482 22.7507 16.1212 22.5309 16.6897 22.7496L16.6999 22.7535L16.7098 22.758C17.2961 23.0287 17.5159 23.6678 17.2972 24.2364L17.2918 24.2504L16.1734 26.8058C15.9866 27.2665 15.5646 27.49 15.1301 27.49C14.9791 27.49 14.8099 27.444 14.7047 27.4089L14.6871 27.4031L14.6704 27.3953C14.084 27.1247 13.8643 26.4856 14.083 25.917L14.0884 25.9029L15.2114 23.337Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.87808 26.0037C10.1487 25.4173 10.7878 25.1976 11.3564 25.4162L11.3665 25.4201L11.3764 25.4247C11.9628 25.6953 12.1825 26.3345 11.9638 26.903L11.9584 26.9171L10.8401 29.4725C10.6533 29.9331 10.2312 30.1567 9.79673 30.1567C9.6458 30.1567 9.47656 30.1107 9.37132 30.0756L9.35381 30.0697L9.33705 30.062C8.75069 29.7914 8.53095 29.1522 8.74962 28.5837L8.75503 28.5696L9.87808 26.0037Z" fill="currentColor"/>
<path d="M4.00004 27.9005C3.68118 27.6959 3.57193 27.2426 3.75602 26.8882L4.17868 26.0744H3.33333C2.96514 26.0744 2.66667 25.7426 2.66667 25.3333C2.66667 24.924 2.96514 24.5922 3.33333 24.5922H4.17867L3.75602 23.7784C3.57193 23.4239 3.68118 22.9707 4.00004 22.766C4.3189 22.5614 4.72663 22.6828 4.91072 23.0373L5.33337 23.8511L5.75602 23.0373C5.94012 22.6828 6.34784 22.5614 6.66671 22.766C6.98557 22.9707 7.09482 23.4239 6.91072 23.7784L6.48808 24.5922H7.33333C7.70152 24.5922 8 24.924 8 25.3333C8 25.7426 7.70152 26.0744 7.33333 26.0744H6.48807L6.91072 26.8882C7.09482 27.2426 6.98557 27.6959 6.66671 27.9005C6.34784 28.1052 5.94012 27.9837 5.75602 27.6293L5.33337 26.8155L4.91072 27.6293C4.72663 27.9837 4.3189 28.1052 4.00004 27.9005Z" fill="currentColor"/>
<path d="M19.3334 30.5672C19.0145 30.3626 18.9053 29.9093 19.0894 29.5548L19.512 28.7411H18.6667C18.2985 28.7411 18 28.4093 18 28C18 27.5907 18.2985 27.2589 18.6667 27.2589H19.512L19.0894 26.4451C18.9053 26.0906 19.0145 25.6374 19.3334 25.4327C19.6522 25.2281 20.06 25.3495 20.2441 25.704L20.6667 26.5178L21.0894 25.704C21.2734 25.3495 21.6812 25.2281 22 25.4327C22.3189 25.6374 22.4282 26.0906 22.2441 26.4451L21.8214 27.2589H22.6667C23.0349 27.2589 23.3333 27.5907 23.3333 28C23.3333 28.4093 23.0349 28.7411 22.6667 28.7411H21.8214L22.2441 29.5548C22.4282 29.9093 22.3189 30.3626 22 30.5672C21.6812 30.7719 21.2734 30.6504 21.0894 30.2959L20.6667 29.4822L20.2441 30.2959C20.06 30.6504 19.6522 30.7719 19.3334 30.5672Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.3916 10.9585C6.74822 12.0291 11.1299 9.43869 12.1782 5.17262C12.4158 4.20591 12.4618 3.23613 12.3402 2.30184C12.2658 1.72975 12.8169 1.22937 13.2974 1.53125C15.5527 2.94814 16.9853 5.4163 17.0969 8.10506C17.6381 8.00747 18.2154 7.97259 18.8271 8.02181C22.2421 8.29658 24.1525 10.0865 25.1071 11.9189C25.4389 12.5559 25.6451 13.1745 25.7741 13.6989C25.9743 13.7572 26.1852 13.825 26.3987 13.9033C26.9123 14.0915 27.5832 14.3908 28.1496 14.8675C28.7331 15.3587 29.4242 16.2439 29.3274 17.5021C29.178 19.4449 27.6727 21.3487 25.3333 21.3487H6.66666C4.45753 21.3487 2.66667 19.5578 2.66667 17.3487C2.66667 16.437 2.93481 15.4534 3.62235 14.6614C2.73016 13.8771 2.02231 12.9059 1.54474 11.8242C1.31873 11.3122 1.85537 10.8267 2.3916 10.9585ZM27.3333 17.3487C27.4498 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6667 10.0154C16.5282 9.8433 14.8895 11.1452 13.8692 12.309C13.0855 13.203 12.6667 14.0154 12.6667 14.0154C12.6667 14.0154 11.999 13.0139 11.1362 12.6645C10.7797 12.5202 10.3898 12.4871 10 12.682C9.66667 12.8487 9.45833 13.0987 9.33333 13.3799C8.95833 14.2237 9.33333 15.3487 9.33333 15.3487H6.66667C5.33333 15.3487 4.66667 16.2441 4.66667 17.3487C4.66667 18.4533 5.5621 19.3487 6.66667 19.3487H25.3333C26.4379 19.3487 27.2486 18.45 27.3333 17.3487Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.8781 23.337C26.1487 22.7507 26.7879 22.5309 27.3564 22.7496L27.3665 22.7535L27.3764 22.758C27.9628 23.0287 28.1825 23.6678 27.9639 24.2364L27.9584 24.2504L26.8401 26.8058C26.6533 27.2665 26.2312 27.49 25.7967 27.49C25.6458 27.49 25.4766 27.444 25.3713 27.4089L25.3538 27.4031L25.337 27.3953C24.7507 27.1247 24.5309 26.4856 24.7496 25.917L24.755 25.9029L25.8781 23.337Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2114 23.337C15.482 22.7507 16.1212 22.5309 16.6897 22.7496L16.6999 22.7535L16.7098 22.758C17.2961 23.0287 17.5159 23.6678 17.2972 24.2364L17.2918 24.2504L16.1734 26.8058C15.9866 27.2665 15.5646 27.49 15.1301 27.49C14.9791 27.49 14.8099 27.444 14.7047 27.4089L14.6871 27.4031L14.6704 27.3953C14.084 27.1247 13.8643 26.4856 14.083 25.917L14.0884 25.9029L15.2114 23.337Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.87808 26.0037C10.1487 25.4173 10.7878 25.1976 11.3564 25.4162L11.3665 25.4201L11.3764 25.4247C11.9628 25.6953 12.1825 26.3345 11.9638 26.903L11.9584 26.9171L10.8401 29.4725C10.6533 29.9331 10.2312 30.1567 9.79673 30.1567C9.6458 30.1567 9.47656 30.1107 9.37132 30.0756L9.35381 30.0697L9.33705 30.062C8.75069 29.7914 8.53095 29.1522 8.74962 28.5837L8.75503 28.5696L9.87808 26.0037Z" style="fill: var(--element-active-color)"/>
<path d="M4.00004 27.9005C3.68118 27.6959 3.57193 27.2426 3.75602 26.8882L4.17868 26.0744H3.33333C2.96514 26.0744 2.66667 25.7426 2.66667 25.3333C2.66667 24.924 2.96514 24.5922 3.33333 24.5922H4.17867L3.75602 23.7784C3.57193 23.4239 3.68118 22.9707 4.00004 22.766C4.3189 22.5614 4.72663 22.6828 4.91072 23.0373L5.33337 23.8511L5.75602 23.0373C5.94012 22.6828 6.34784 22.5614 6.66671 22.766C6.98557 22.9707 7.09482 23.4239 6.91072 23.7784L6.48808 24.5922H7.33333C7.70152 24.5922 8 24.924 8 25.3333C8 25.7426 7.70152 26.0744 7.33333 26.0744H6.48807L6.91072 26.8882C7.09482 27.2426 6.98557 27.6959 6.66671 27.9005C6.34784 28.1052 5.94012 27.9837 5.75602 27.6293L5.33337 26.8155L4.91072 27.6293C4.72663 27.9837 4.3189 28.1052 4.00004 27.9005Z" style="fill: var(--element-active-color)"/>
<path d="M19.3334 30.5672C19.0145 30.3626 18.9053 29.9093 19.0894 29.5548L19.512 28.7411H18.6667C18.2985 28.7411 18 28.4093 18 28C18 27.5907 18.2985 27.2589 18.6667 27.2589H19.512L19.0894 26.4451C18.9053 26.0906 19.0145 25.6374 19.3334 25.4327C19.6522 25.2281 20.06 25.3495 20.2441 25.704L20.6667 26.5178L21.0894 25.704C21.2734 25.3495 21.6812 25.2281 22 25.4327C22.3189 25.6374 22.4282 26.0906 22.2441 26.4451L21.8214 27.2589H22.6667C23.0349 27.2589 23.3333 27.5907 23.3333 28C23.3333 28.4093 23.0349 28.7411 22.6667 28.7411H21.8214L22.2441 29.5548C22.4282 29.9093 22.3189 30.3626 22 30.5672C21.6812 30.7719 21.2734 30.6504 21.0894 30.2959L20.6667 29.4822L20.2441 30.2959C20.06 30.6504 19.6522 30.7719 19.3334 30.5672Z" style="fill: var(--element-active-color)"/>
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
    'obi-heavy-sleet-showers-night': ObiHeavySleetShowersNight;
  }
}