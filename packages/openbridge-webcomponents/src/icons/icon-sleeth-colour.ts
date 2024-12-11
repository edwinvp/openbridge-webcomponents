import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-sleeth-colour')
export class ObiSleethColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.8781 22.0036C22.1487 21.4173 22.7878 21.1975 23.3564 21.4162L23.3665 21.4201L23.3764 21.4247C23.9628 21.6953 24.1825 22.3344 23.9638 22.903L23.9584 22.9171L22.8401 25.4724C22.6533 25.9331 22.2312 26.1567 21.7967 26.1567C21.6458 26.1567 21.4766 26.1106 21.3713 26.0755L21.3538 26.0697L21.337 26.062C20.7507 25.7913 20.5309 25.1522 20.7496 24.5837L20.755 24.5696L21.8781 22.0036Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2114 25.337C15.482 24.7506 16.1212 24.5309 16.6897 24.7495L16.6999 24.7534L16.7098 24.758C17.2961 25.0286 17.5159 25.6678 17.2972 26.2363L17.2918 26.2504L16.1734 28.8058C15.9866 29.2664 15.5646 29.49 15.1301 29.49C14.9791 29.49 14.8099 29.444 14.7047 29.4089L14.6871 29.403L14.6704 29.3953C14.084 29.1247 13.8643 28.4855 14.0829 27.917L14.0884 27.9029L15.2114 25.337Z" fill="currentColor"/>
<path d="M8 26.5672C7.68114 26.3625 7.57189 25.9093 7.75598 25.5548L8.17863 24.741H7.33329C6.9651 24.741 6.66663 24.4092 6.66663 23.9999C6.66663 23.5906 6.9651 23.2588 7.33329 23.2588H8.17863L7.75598 22.445C7.57189 22.0906 7.68114 21.6373 8 21.4327C8.31886 21.228 8.72659 21.3495 8.91068 21.7039L9.33333 22.5177L9.75598 21.7039C9.94008 21.3495 10.3478 21.228 10.6667 21.4327C10.9855 21.6373 11.0948 22.0906 10.9107 22.445L10.488 23.2588H11.3333C11.7015 23.2588 12 23.5906 12 23.9999C12 24.4092 11.7015 24.741 11.3333 24.741H10.488L10.9107 25.5548C11.0948 25.9093 10.9855 26.3625 10.6667 26.5672C10.3478 26.7718 9.94008 26.6504 9.75598 26.2959L9.33333 25.4821L8.91068 26.2959C8.72659 26.6504 8.31886 26.7718 8 26.5672Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33325C15.7936 3.33325 13.5609 4.78582 12.4614 7.11736L12.0452 7.99982L11.1528 7.60555C10.9179 7.50176 10.6813 7.45799 10.4275 7.45799C9.54947 7.45799 8.78596 8.00763 8.48304 8.85646L8.1991 9.65211L7.3672 9.5051C7.27659 9.48909 7.20215 9.4871 7.00789 9.4871C6.00825 9.4871 5.08296 9.89685 4.39061 10.657C3.70873 11.4069 3.33337 12.3653 3.33337 13.3769V13.4314C3.36175 14.5558 3.77303 15.5276 4.47904 16.2245L4.49175 16.2371L4.504 16.25C5.16232 16.9481 6.06001 17.3333 7.00788 17.3333H24.4824C26.363 17.3333 28 15.6987 28 13.5765C28 11.7971 26.8572 10.3217 25.3793 9.91734L24.7566 9.74697L24.6555 9.10942C24.1293 5.79117 21.3737 3.33325 18.2393 3.33325ZM11.0544 5.50734C12.5728 2.95032 15.2594 1.33325 18.2393 1.33325C22.2431 1.33325 25.6239 4.28953 26.5148 8.19534C28.597 9.05046 30 11.1904 30 13.5765C30 16.71 27.5587 19.3333 24.4824 19.3333H7.00788C5.51463 19.3333 4.09608 18.7254 3.06133 17.6353C1.95818 16.5395 1.37027 15.059 1.33364 13.4664L1.33337 13.4549V13.3769C1.33337 11.8605 1.89911 10.424 2.91121 9.31116C3.95631 8.16348 5.38205 7.51112 6.92203 7.48775C7.63403 6.25968 8.93646 5.45799 10.4275 5.45799C10.6339 5.45799 10.8432 5.47326 11.0544 5.50734Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33325C15.7936 3.33325 13.5609 4.78582 12.4614 7.11736L12.0452 7.99982L11.1528 7.60555C10.9179 7.50176 10.6813 7.45799 10.4275 7.45799C9.54947 7.45799 8.78596 8.00763 8.48304 8.85646L8.1991 9.65211L7.3672 9.5051C7.27659 9.48909 7.20215 9.4871 7.00789 9.4871C6.00825 9.4871 5.08296 9.89685 4.39061 10.657C3.70873 11.4069 3.33337 12.3653 3.33337 13.3769V13.4314C3.36175 14.5558 3.77303 15.5276 4.47904 16.2245L4.49175 16.2371L4.504 16.25C5.16232 16.9481 6.06001 17.3333 7.00788 17.3333H24.4824C26.363 17.3333 28 15.6987 28 13.5765C28 11.7971 26.8572 10.3217 25.3793 9.91734L24.7566 9.74697L24.6555 9.10942C24.1293 5.79117 21.3737 3.33325 18.2393 3.33325Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.8781 22.0036C22.1487 21.4173 22.7878 21.1975 23.3564 21.4162L23.3665 21.4201L23.3764 21.4247C23.9628 21.6953 24.1825 22.3344 23.9638 22.903L23.9584 22.9171L22.8401 25.4724C22.6533 25.9331 22.2312 26.1567 21.7967 26.1567C21.6458 26.1567 21.4766 26.1106 21.3713 26.0755L21.3538 26.0697L21.337 26.062C20.7507 25.7913 20.5309 25.1522 20.7496 24.5837L20.755 24.5696L21.8781 22.0036Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2114 25.337C15.482 24.7506 16.1212 24.5309 16.6897 24.7495L16.6999 24.7534L16.7098 24.758C17.2961 25.0286 17.5159 25.6678 17.2972 26.2363L17.2918 26.2504L16.1734 28.8058C15.9866 29.2664 15.5646 29.49 15.1301 29.49C14.9791 29.49 14.8099 29.444 14.7047 29.4089L14.6871 29.403L14.6704 29.3953C14.084 29.1247 13.8643 28.4855 14.0829 27.917L14.0884 27.9029L15.2114 25.337Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path d="M8 26.5672C7.68114 26.3625 7.57189 25.9093 7.75598 25.5548L8.17863 24.741H7.33329C6.9651 24.741 6.66663 24.4092 6.66663 23.9999C6.66663 23.5906 6.9651 23.2588 7.33329 23.2588H8.17863L7.75598 22.445C7.57189 22.0906 7.68114 21.6373 8 21.4327C8.31886 21.228 8.72659 21.3495 8.91068 21.7039L9.33333 22.5177L9.75598 21.7039C9.94008 21.3495 10.3478 21.228 10.6667 21.4327C10.9855 21.6373 11.0948 22.0906 10.9107 22.445L10.488 23.2588H11.3333C11.7015 23.2588 12 23.5906 12 23.9999C12 24.4092 11.7015 24.741 11.3333 24.741H10.488L10.9107 25.5548C11.0948 25.9093 10.9855 26.3625 10.6667 26.5672C10.3478 26.7718 9.94008 26.6504 9.75598 26.2959L9.33333 25.4821L8.91068 26.2959C8.72659 26.6504 8.31886 26.7718 8 26.5672Z" style="fill: var(--data-weather-snow-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33325C15.7936 3.33325 13.5609 4.78582 12.4614 7.11736L12.0452 7.99982L11.1528 7.60555C10.9179 7.50176 10.6813 7.45799 10.4275 7.45799C9.54947 7.45799 8.78596 8.00763 8.48304 8.85646L8.1991 9.65211L7.3672 9.5051C7.27659 9.48909 7.20215 9.4871 7.00789 9.4871C6.00825 9.4871 5.08296 9.89685 4.39061 10.657C3.70873 11.4069 3.33337 12.3653 3.33337 13.3769V13.4314C3.36175 14.5558 3.77303 15.5276 4.47904 16.2245L4.49175 16.2371L4.504 16.25C5.16232 16.9481 6.06001 17.3333 7.00788 17.3333H24.4824C26.363 17.3333 28 15.6987 28 13.5765C28 11.7971 26.8572 10.3217 25.3793 9.91734L24.7566 9.74697L24.6555 9.10942C24.1293 5.79117 21.3737 3.33325 18.2393 3.33325ZM11.0544 5.50734C12.5728 2.95032 15.2594 1.33325 18.2393 1.33325C22.2431 1.33325 25.6239 4.28953 26.5148 8.19534C28.597 9.05046 30 11.1904 30 13.5765C30 16.71 27.5587 19.3333 24.4824 19.3333H7.00788C5.51463 19.3333 4.09608 18.7254 3.06133 17.6353C1.95818 16.5395 1.37027 15.059 1.33364 13.4664L1.33337 13.4549V13.3769C1.33337 11.8605 1.89911 10.424 2.91121 9.31116C3.95631 8.16348 5.38205 7.51112 6.92203 7.48775C7.63403 6.25968 8.93646 5.45799 10.4275 5.45799C10.6339 5.45799 10.8432 5.47326 11.0544 5.50734Z" style="fill: var(--data-weather-cloud-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33325C15.7936 3.33325 13.5609 4.78582 12.4614 7.11736L12.0452 7.99982L11.1528 7.60555C10.9179 7.50176 10.6813 7.45799 10.4275 7.45799C9.54947 7.45799 8.78596 8.00763 8.48304 8.85646L8.1991 9.65211L7.3672 9.5051C7.27659 9.48909 7.20215 9.4871 7.00789 9.4871C6.00825 9.4871 5.08296 9.89685 4.39061 10.657C3.70873 11.4069 3.33337 12.3653 3.33337 13.3769V13.4314C3.36175 14.5558 3.77303 15.5276 4.47904 16.2245L4.49175 16.2371L4.504 16.25C5.16232 16.9481 6.06001 17.3333 7.00788 17.3333H24.4824C26.363 17.3333 28 15.6987 28 13.5765C28 11.7971 26.8572 10.3217 25.3793 9.91734L24.7566 9.74697L24.6555 9.10942C24.1293 5.79117 21.3737 3.33325 18.2393 3.33325Z" style="fill: var(--data-weather-cloud-rain-secondary-color)"/>
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
    'obi-sleeth-colour': ObiSleethColour;
  }
}