import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-snow-colour')
export class ObiSnowColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0001 26.5672C21.6812 26.3625 21.572 25.9093 21.7561 25.5548L22.1787 24.741H21.3334C20.9652 24.741 20.6667 24.4092 20.6667 23.9999C20.6667 23.5906 20.9652 23.2588 21.3334 23.2588H22.1787L21.7561 22.445C21.572 22.0906 21.6812 21.6373 22.0001 21.4327C22.3189 21.228 22.7267 21.3495 22.9108 21.7039L23.3334 22.5177L23.7561 21.7039C23.9402 21.3495 24.3479 21.228 24.6667 21.4327C24.9856 21.6373 25.0949 22.0906 24.9108 22.445L24.4881 23.2588H25.3334C25.7016 23.2588 26 23.5906 26 23.9999C26 24.4092 25.7016 24.741 25.3334 24.741H24.4881L24.9108 25.5548C25.0949 25.9093 24.9856 26.3625 24.6667 26.5672C24.3479 26.7718 23.9402 26.6504 23.7561 26.2959L23.3334 25.4821L22.9108 26.2959C22.7267 26.6504 22.3189 26.7718 22.0001 26.5672Z" fill="currentColor"/>
<path d="M14.6667 29.2338C14.3479 29.0292 14.2386 28.5759 14.4227 28.2215L14.8454 27.4077H14C13.6319 27.4077 13.3334 27.0759 13.3334 26.6666C13.3334 26.2573 13.6319 25.9255 14 25.9255H14.8454L14.4227 25.1117C14.2386 24.7572 14.3479 24.304 14.6667 24.0993C14.9856 23.8947 15.3933 24.0161 15.5774 24.3706L16.0001 25.1844L16.4227 24.3706C16.6068 24.0161 17.0146 23.8947 17.3334 24.0993C17.6523 24.304 17.7615 24.7572 17.5774 25.1117L17.1548 25.9255H18C18.3682 25.9255 18.6667 26.2573 18.6667 26.6666C18.6667 27.0759 18.3682 27.4077 18 27.4077H17.1548L17.5774 28.2215C17.7615 28.5759 17.6523 29.0292 17.3334 29.2338C17.0146 29.4385 16.6068 29.317 16.4227 28.9626L16.0001 28.1488L15.5774 28.9626C15.3933 29.317 14.9856 29.4385 14.6667 29.2338Z" fill="currentColor"/>
<path d="M6.66675 26.5672C6.34788 26.3625 6.23863 25.9093 6.42273 25.5548L6.84538 24.741H6.00004C5.63185 24.741 5.33337 24.4092 5.33337 23.9999C5.33337 23.5906 5.63185 23.2588 6.00004 23.2588H6.84538L6.42273 22.445C6.23863 22.0906 6.34788 21.6373 6.66675 21.4327C6.98561 21.228 7.39333 21.3495 7.57743 21.7039L8.00008 22.5177L8.42273 21.7039C8.60682 21.3495 9.01455 21.228 9.33341 21.4327C9.65227 21.6373 9.76152 22.0906 9.57743 22.445L9.15478 23.2588H10C10.3682 23.2588 10.6667 23.5906 10.6667 23.9999C10.6667 24.4092 10.3682 24.741 10 24.741H9.15478L9.57743 25.5548C9.76152 25.9093 9.65227 26.3625 9.33341 26.5672C9.01455 26.7718 8.60682 26.6504 8.42273 26.2959L8.00008 25.4821L7.57743 26.2959C7.39334 26.6504 6.98561 26.7718 6.66675 26.5672Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33325C15.7936 3.33325 13.5609 4.78582 12.4614 7.11736L12.0452 7.99982L11.1528 7.60555C10.9179 7.50176 10.6813 7.45799 10.4275 7.45799C9.54947 7.45799 8.78596 8.00763 8.48304 8.85646L8.1991 9.65211L7.3672 9.5051C7.27659 9.48909 7.20215 9.4871 7.00789 9.4871C6.00825 9.4871 5.08296 9.89685 4.39061 10.657C3.70873 11.4069 3.33337 12.3653 3.33337 13.3769V13.4314C3.36175 14.5558 3.77303 15.5276 4.47904 16.2245L4.49175 16.2371L4.504 16.25C5.16232 16.9481 6.06001 17.3333 7.00788 17.3333H24.4824C26.363 17.3333 28 15.6987 28 13.5765C28 11.7971 26.8572 10.3217 25.3793 9.91734L24.7566 9.74697L24.6555 9.10942C24.1293 5.79117 21.3737 3.33325 18.2393 3.33325ZM11.0544 5.50734C12.5728 2.95032 15.2594 1.33325 18.2393 1.33325C22.2431 1.33325 25.6239 4.28953 26.5148 8.19534C28.597 9.05046 30 11.1904 30 13.5765C30 16.71 27.5587 19.3333 24.4824 19.3333H7.00788C5.51463 19.3333 4.09608 18.7254 3.06133 17.6353C1.95818 16.5395 1.37027 15.059 1.33364 13.4664L1.33337 13.4549V13.3769C1.33337 11.8605 1.89911 10.424 2.91121 9.31116C3.95631 8.16348 5.38205 7.51112 6.92203 7.48775C7.63403 6.25968 8.93646 5.45799 10.4275 5.45799C10.6339 5.45799 10.8432 5.47326 11.0544 5.50734Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33325C15.7936 3.33325 13.5609 4.78582 12.4614 7.11736L12.0452 7.99982L11.1528 7.60555C10.9179 7.50176 10.6813 7.45799 10.4275 7.45799C9.54947 7.45799 8.78596 8.00763 8.48304 8.85646L8.1991 9.65211L7.3672 9.5051C7.27659 9.48909 7.20215 9.4871 7.00789 9.4871C6.00825 9.4871 5.08296 9.89685 4.39061 10.657C3.70873 11.4069 3.33337 12.3653 3.33337 13.3769V13.4314C3.36175 14.5558 3.77303 15.5276 4.47904 16.2245L4.49175 16.2371L4.504 16.25C5.16232 16.9481 6.06001 17.3333 7.00788 17.3333H24.4824C26.363 17.3333 28 15.6987 28 13.5765C28 11.7971 26.8572 10.3217 25.3793 9.91734L24.7566 9.74697L24.6555 9.10942C24.1293 5.79117 21.3737 3.33325 18.2393 3.33325Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0001 26.5672C21.6812 26.3625 21.572 25.9093 21.7561 25.5548L22.1787 24.741H21.3334C20.9652 24.741 20.6667 24.4092 20.6667 23.9999C20.6667 23.5906 20.9652 23.2588 21.3334 23.2588H22.1787L21.7561 22.445C21.572 22.0906 21.6812 21.6373 22.0001 21.4327C22.3189 21.228 22.7267 21.3495 22.9108 21.7039L23.3334 22.5177L23.7561 21.7039C23.9402 21.3495 24.3479 21.228 24.6667 21.4327C24.9856 21.6373 25.0949 22.0906 24.9108 22.445L24.4881 23.2588H25.3334C25.7016 23.2588 26 23.5906 26 23.9999C26 24.4092 25.7016 24.741 25.3334 24.741H24.4881L24.9108 25.5548C25.0949 25.9093 24.9856 26.3625 24.6667 26.5672C24.3479 26.7718 23.9402 26.6504 23.7561 26.2959L23.3334 25.4821L22.9108 26.2959C22.7267 26.6504 22.3189 26.7718 22.0001 26.5672Z" style="fill: var(--data-weather-snow-primary-color)"/>
<path d="M14.6667 29.2338C14.3479 29.0292 14.2386 28.5759 14.4227 28.2215L14.8454 27.4077H14C13.6319 27.4077 13.3334 27.0759 13.3334 26.6666C13.3334 26.2573 13.6319 25.9255 14 25.9255H14.8454L14.4227 25.1117C14.2386 24.7572 14.3479 24.304 14.6667 24.0993C14.9856 23.8947 15.3933 24.0161 15.5774 24.3706L16.0001 25.1844L16.4227 24.3706C16.6068 24.0161 17.0146 23.8947 17.3334 24.0993C17.6523 24.304 17.7615 24.7572 17.5774 25.1117L17.1548 25.9255H18C18.3682 25.9255 18.6667 26.2573 18.6667 26.6666C18.6667 27.0759 18.3682 27.4077 18 27.4077H17.1548L17.5774 28.2215C17.7615 28.5759 17.6523 29.0292 17.3334 29.2338C17.0146 29.4385 16.6068 29.317 16.4227 28.9626L16.0001 28.1488L15.5774 28.9626C15.3933 29.317 14.9856 29.4385 14.6667 29.2338Z" style="fill: var(--data-weather-snow-primary-color)"/>
<path d="M6.66675 26.5672C6.34788 26.3625 6.23863 25.9093 6.42273 25.5548L6.84538 24.741H6.00004C5.63185 24.741 5.33337 24.4092 5.33337 23.9999C5.33337 23.5906 5.63185 23.2588 6.00004 23.2588H6.84538L6.42273 22.445C6.23863 22.0906 6.34788 21.6373 6.66675 21.4327C6.98561 21.228 7.39333 21.3495 7.57743 21.7039L8.00008 22.5177L8.42273 21.7039C8.60682 21.3495 9.01455 21.228 9.33341 21.4327C9.65227 21.6373 9.76152 22.0906 9.57743 22.445L9.15478 23.2588H10C10.3682 23.2588 10.6667 23.5906 10.6667 23.9999C10.6667 24.4092 10.3682 24.741 10 24.741H9.15478L9.57743 25.5548C9.76152 25.9093 9.65227 26.3625 9.33341 26.5672C9.01455 26.7718 8.60682 26.6504 8.42273 26.2959L8.00008 25.4821L7.57743 26.2959C7.39334 26.6504 6.98561 26.7718 6.66675 26.5672Z" style="fill: var(--data-weather-snow-primary-color)"/>
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
    'obi-snow-colour': ObiSnowColour;
  }
}