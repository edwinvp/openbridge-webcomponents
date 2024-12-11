import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-snow-showers-night')
export class ObiSnowShowersNight extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.3916 10.9585C6.74822 12.0291 11.1299 9.43869 12.1782 5.17262C12.4158 4.20591 12.4618 3.23613 12.3402 2.30184C12.2658 1.72975 12.8169 1.22937 13.2974 1.53125C15.5527 2.94814 16.9853 5.4163 17.0969 8.10506C17.6381 8.00747 18.2154 7.97259 18.8271 8.02181C22.2421 8.29658 24.1525 10.0865 25.1071 11.9189C25.4389 12.5559 25.6451 13.1745 25.7741 13.6989C25.9743 13.7572 26.1852 13.825 26.3987 13.9033C26.9123 14.0915 27.5832 14.3908 28.1496 14.8675C28.7331 15.3587 29.4242 16.2439 29.3274 17.5021C29.178 19.4449 27.6727 21.3487 25.3333 21.3487H6.66666C4.45753 21.3487 2.66667 19.5578 2.66667 17.3487C2.66667 16.437 2.93481 15.4534 3.62235 14.6614C2.73016 13.8771 2.02231 12.9059 1.54474 11.8242C1.31873 11.3122 1.85537 10.8267 2.3916 10.9585ZM27.3333 17.3487C27.4498 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6667 10.0154C16.5282 9.8433 14.8895 11.1452 13.8692 12.309C13.0855 13.203 12.6667 14.0154 12.6667 14.0154C12.6667 14.0154 11.999 13.0139 11.1362 12.6645C10.7797 12.5202 10.3898 12.4871 10 12.682C9.66667 12.8487 9.45833 13.0987 9.33333 13.3799C8.95833 14.2237 9.33333 15.3487 9.33333 15.3487H6.66667C5.33333 15.3487 4.66667 16.2441 4.66667 17.3487C4.66667 18.4533 5.5621 19.3487 6.66667 19.3487H25.3333C26.4379 19.3487 27.2486 18.45 27.3333 17.3487Z" fill="currentColor"/>
<path d="M8.00004 27.9005C7.68118 27.6959 7.57193 27.2426 7.75602 26.8882L8.17868 26.0744H7.33333C6.96514 26.0744 6.66667 25.7426 6.66667 25.3333C6.66667 24.924 6.96514 24.5922 7.33333 24.5922H8.17867L7.75602 23.7784C7.57193 23.4239 7.68118 22.9707 8.00004 22.766C8.3189 22.5614 8.72663 22.6828 8.91072 23.0373L9.33337 23.8511L9.75602 23.0373C9.94012 22.6828 10.3478 22.5614 10.6667 22.766C10.9856 22.9707 11.0948 23.4239 10.9107 23.7784L10.4881 24.5922H11.3333C11.7015 24.5922 12 24.924 12 25.3333C12 25.7426 11.7015 26.0744 11.3333 26.0744H10.4881L10.9107 26.8882C11.0948 27.2426 10.9856 27.6959 10.6667 27.9005C10.3478 28.1052 9.94012 27.9837 9.75602 27.6293L9.33337 26.8155L8.91072 27.6293C8.72663 27.9837 8.3189 28.1052 8.00004 27.9005Z" fill="currentColor"/>
<path d="M14.6667 30.5672C14.3478 30.3626 14.2386 29.9093 14.4227 29.5548L14.8453 28.7411H14C13.6318 28.7411 13.3333 28.4093 13.3333 28C13.3333 27.5907 13.6318 27.2589 14 27.2589H14.8453L14.4227 26.4451C14.2386 26.0906 14.3478 25.6374 14.6667 25.4327C14.9856 25.2281 15.3933 25.3495 15.5774 25.704L16 26.5178L16.4227 25.704C16.6068 25.3495 17.0145 25.2281 17.3334 25.4327C17.6522 25.6374 17.7615 26.0906 17.5774 26.4451L17.1547 27.2589H18C18.3682 27.2589 18.6667 27.5907 18.6667 28C18.6667 28.4093 18.3682 28.7411 18 28.7411H17.1547L17.5774 29.5548C17.7615 29.9093 17.6522 30.3626 17.3334 30.5672C17.0145 30.7719 16.6068 30.6504 16.4227 30.2959L16 29.4822L15.5774 30.2959C15.3933 30.6504 14.9856 30.7719 14.6667 30.5672Z" fill="currentColor"/>
<path d="M21.3334 27.9005C21.0145 27.6959 20.9053 27.2426 21.0894 26.8882L21.512 26.0744H20.6667C20.2985 26.0744 20 25.7426 20 25.3333C20 24.924 20.2985 24.5922 20.6667 24.5922H21.512L21.0894 23.7784C20.9053 23.4239 21.0145 22.9707 21.3334 22.766C21.6522 22.5614 22.06 22.6828 22.2441 23.0373L22.6667 23.8511L23.0894 23.0373C23.2734 22.6828 23.6812 22.5614 24 22.766C24.3189 22.9707 24.4282 23.4239 24.2441 23.7784L23.8214 24.5922H24.6667C25.0349 24.5922 25.3333 24.924 25.3333 25.3333C25.3333 25.7426 25.0349 26.0744 24.6667 26.0744H23.8214L24.2441 26.8882C24.4282 27.2426 24.3189 27.6959 24 27.9005C23.6812 28.1052 23.2734 27.9837 23.0894 27.6293L22.6667 26.8155L22.2441 27.6293C22.06 27.9837 21.6522 28.1052 21.3334 27.9005Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.3916 10.9585C6.74822 12.0291 11.1299 9.43869 12.1782 5.17262C12.4158 4.20591 12.4618 3.23613 12.3402 2.30184C12.2658 1.72975 12.8169 1.22937 13.2974 1.53125C15.5527 2.94814 16.9853 5.4163 17.0969 8.10506C17.6381 8.00747 18.2154 7.97259 18.8271 8.02181C22.2421 8.29658 24.1525 10.0865 25.1071 11.9189C25.4389 12.5559 25.6451 13.1745 25.7741 13.6989C25.9743 13.7572 26.1852 13.825 26.3987 13.9033C26.9123 14.0915 27.5832 14.3908 28.1496 14.8675C28.7331 15.3587 29.4242 16.2439 29.3274 17.5021C29.178 19.4449 27.6727 21.3487 25.3333 21.3487H6.66666C4.45753 21.3487 2.66667 19.5578 2.66667 17.3487C2.66667 16.437 2.93481 15.4534 3.62235 14.6614C2.73016 13.8771 2.02231 12.9059 1.54474 11.8242C1.31873 11.3122 1.85537 10.8267 2.3916 10.9585ZM27.3333 17.3487C27.4498 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6667 10.0154C16.5282 9.8433 14.8895 11.1452 13.8692 12.309C13.0855 13.203 12.6667 14.0154 12.6667 14.0154C12.6667 14.0154 11.999 13.0139 11.1362 12.6645C10.7797 12.5202 10.3898 12.4871 10 12.682C9.66667 12.8487 9.45833 13.0987 9.33333 13.3799C8.95833 14.2237 9.33333 15.3487 9.33333 15.3487H6.66667C5.33333 15.3487 4.66667 16.2441 4.66667 17.3487C4.66667 18.4533 5.5621 19.3487 6.66667 19.3487H25.3333C26.4379 19.3487 27.2486 18.45 27.3333 17.3487Z" style="fill: var(--element-active-color)"/>
<path d="M8.00004 27.9005C7.68118 27.6959 7.57193 27.2426 7.75602 26.8882L8.17868 26.0744H7.33333C6.96514 26.0744 6.66667 25.7426 6.66667 25.3333C6.66667 24.924 6.96514 24.5922 7.33333 24.5922H8.17867L7.75602 23.7784C7.57193 23.4239 7.68118 22.9707 8.00004 22.766C8.3189 22.5614 8.72663 22.6828 8.91072 23.0373L9.33337 23.8511L9.75602 23.0373C9.94012 22.6828 10.3478 22.5614 10.6667 22.766C10.9856 22.9707 11.0948 23.4239 10.9107 23.7784L10.4881 24.5922H11.3333C11.7015 24.5922 12 24.924 12 25.3333C12 25.7426 11.7015 26.0744 11.3333 26.0744H10.4881L10.9107 26.8882C11.0948 27.2426 10.9856 27.6959 10.6667 27.9005C10.3478 28.1052 9.94012 27.9837 9.75602 27.6293L9.33337 26.8155L8.91072 27.6293C8.72663 27.9837 8.3189 28.1052 8.00004 27.9005Z" style="fill: var(--element-active-color)"/>
<path d="M14.6667 30.5672C14.3478 30.3626 14.2386 29.9093 14.4227 29.5548L14.8453 28.7411H14C13.6318 28.7411 13.3333 28.4093 13.3333 28C13.3333 27.5907 13.6318 27.2589 14 27.2589H14.8453L14.4227 26.4451C14.2386 26.0906 14.3478 25.6374 14.6667 25.4327C14.9856 25.2281 15.3933 25.3495 15.5774 25.704L16 26.5178L16.4227 25.704C16.6068 25.3495 17.0145 25.2281 17.3334 25.4327C17.6522 25.6374 17.7615 26.0906 17.5774 26.4451L17.1547 27.2589H18C18.3682 27.2589 18.6667 27.5907 18.6667 28C18.6667 28.4093 18.3682 28.7411 18 28.7411H17.1547L17.5774 29.5548C17.7615 29.9093 17.6522 30.3626 17.3334 30.5672C17.0145 30.7719 16.6068 30.6504 16.4227 30.2959L16 29.4822L15.5774 30.2959C15.3933 30.6504 14.9856 30.7719 14.6667 30.5672Z" style="fill: var(--element-active-color)"/>
<path d="M21.3334 27.9005C21.0145 27.6959 20.9053 27.2426 21.0894 26.8882L21.512 26.0744H20.6667C20.2985 26.0744 20 25.7426 20 25.3333C20 24.924 20.2985 24.5922 20.6667 24.5922H21.512L21.0894 23.7784C20.9053 23.4239 21.0145 22.9707 21.3334 22.766C21.6522 22.5614 22.06 22.6828 22.2441 23.0373L22.6667 23.8511L23.0894 23.0373C23.2734 22.6828 23.6812 22.5614 24 22.766C24.3189 22.9707 24.4282 23.4239 24.2441 23.7784L23.8214 24.5922H24.6667C25.0349 24.5922 25.3333 24.924 25.3333 25.3333C25.3333 25.7426 25.0349 26.0744 24.6667 26.0744H23.8214L24.2441 26.8882C24.4282 27.2426 24.3189 27.6959 24 27.9005C23.6812 28.1052 23.2734 27.9837 23.0894 27.6293L22.6667 26.8155L22.2441 27.6293C22.06 27.9837 21.6522 28.1052 21.3334 27.9005Z" style="fill: var(--element-active-color)"/>
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
    'obi-snow-showers-night': ObiSnowShowersNight;
  }
}