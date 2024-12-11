import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-light-snow-colour')
export class ObiLightSnowColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0001 26.5672C19.6812 26.3625 19.572 25.9093 19.7561 25.5548L20.1787 24.741H19.3334C18.9652 24.741 18.6667 24.4092 18.6667 23.9999C18.6667 23.5906 18.9652 23.2588 19.3334 23.2588H20.1787L19.7561 22.445C19.572 22.0906 19.6812 21.6373 20.0001 21.4327C20.3189 21.228 20.7267 21.3495 20.9108 21.7039L21.3334 22.5177L21.7561 21.7039C21.9402 21.3495 22.3479 21.228 22.6667 21.4327C22.9856 21.6373 23.0949 22.0906 22.9108 22.445L22.4881 23.2588H23.3334C23.7016 23.2588 24 23.5906 24 23.9999C24 24.4092 23.7016 24.741 23.3334 24.741H22.4881L22.9108 25.5548C23.0949 25.9093 22.9856 26.3625 22.6667 26.5672C22.3479 26.7718 21.9402 26.6504 21.7561 26.2959L21.3334 25.4821L20.9108 26.2959C20.7267 26.6504 20.3189 26.7718 20.0001 26.5672Z" fill="currentColor"/>
<path d="M10.6667 29.2338C10.3479 29.0292 10.2386 28.5759 10.4227 28.2215L10.8454 27.4077H10C9.63185 27.4077 9.33337 27.0759 9.33337 26.6666C9.33337 26.2573 9.63185 25.9255 10 25.9255H10.8454L10.4227 25.1117C10.2386 24.7572 10.3479 24.304 10.6667 24.0993C10.9856 23.8947 11.3933 24.0161 11.5774 24.3706L12.0001 25.1844L12.4227 24.3706C12.6068 24.0161 13.0146 23.8947 13.3334 24.0993C13.6523 24.304 13.7615 24.7572 13.5774 25.1117L13.1548 25.9255H14C14.3682 25.9255 14.6667 26.2573 14.6667 26.6666C14.6667 27.0759 14.3682 27.4077 14 27.4077H13.1548L13.5774 28.2215C13.7615 28.5759 13.6523 29.0292 13.3334 29.2338C13.0146 29.4385 12.6068 29.317 12.4227 28.9626L12.0001 28.1488L11.5774 28.9626C11.3933 29.317 10.9856 29.4385 10.6667 29.2338Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33337C15.7936 3.33337 13.5609 4.78594 12.4614 7.11749L12.0452 7.99994L11.1528 7.60567C10.9179 7.50189 10.6813 7.45811 10.4275 7.45811C9.54947 7.45811 8.78596 8.00775 8.48304 8.85659L8.1991 9.65224L7.3672 9.50523C7.27659 9.48921 7.20215 9.48722 7.00789 9.48722C6.00825 9.48722 5.08296 9.89697 4.39061 10.6572C3.70873 11.407 3.33337 12.3655 3.33337 13.377V13.4315C3.36175 14.5559 3.77303 15.5277 4.47904 16.2246L4.49175 16.2372L4.504 16.2502C5.16232 16.9482 6.06001 17.3334 7.00788 17.3334H24.4824C26.363 17.3334 28 15.6989 28 13.5766C28 11.7972 26.8572 10.3219 25.3793 9.91746L24.7566 9.7471L24.6555 9.10954C24.1293 5.7913 21.3737 3.33337 18.2393 3.33337ZM11.0544 5.50746C12.5728 2.95044 15.2594 1.33337 18.2393 1.33337C22.2431 1.33337 25.6239 4.28966 26.5148 8.19546C28.597 9.05058 30 11.1906 30 13.5766C30 16.7101 27.5587 19.3334 24.4824 19.3334H7.00788C5.51463 19.3334 4.09608 18.7255 3.06133 17.6354C1.95818 16.5396 1.37027 15.0591 1.33364 13.4666L1.33337 13.4551V13.377C1.33337 11.8607 1.89911 10.4241 2.91121 9.31128C3.95631 8.1636 5.38205 7.51124 6.92203 7.48787C7.63403 6.25981 8.93646 5.45811 10.4275 5.45811C10.6339 5.45811 10.8432 5.47338 11.0544 5.50746Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33337C15.7936 3.33337 13.5609 4.78594 12.4614 7.11749L12.0452 7.99994L11.1528 7.60567C10.9179 7.50189 10.6813 7.45811 10.4275 7.45811C9.54947 7.45811 8.78596 8.00775 8.48304 8.85659L8.1991 9.65224L7.3672 9.50523C7.27659 9.48921 7.20215 9.48722 7.00789 9.48722C6.00825 9.48722 5.08296 9.89697 4.39061 10.6572C3.70873 11.407 3.33337 12.3655 3.33337 13.377V13.4315C3.36175 14.5559 3.77303 15.5277 4.47904 16.2246L4.49175 16.2372L4.504 16.2502C5.16232 16.9482 6.06001 17.3334 7.00788 17.3334H24.4824C26.363 17.3334 28 15.6989 28 13.5766C28 11.7972 26.8572 10.3219 25.3793 9.91746L24.7566 9.7471L24.6555 9.10954C24.1293 5.7913 21.3737 3.33337 18.2393 3.33337Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0001 26.5672C19.6812 26.3625 19.572 25.9093 19.7561 25.5548L20.1787 24.741H19.3334C18.9652 24.741 18.6667 24.4092 18.6667 23.9999C18.6667 23.5906 18.9652 23.2588 19.3334 23.2588H20.1787L19.7561 22.445C19.572 22.0906 19.6812 21.6373 20.0001 21.4327C20.3189 21.228 20.7267 21.3495 20.9108 21.7039L21.3334 22.5177L21.7561 21.7039C21.9402 21.3495 22.3479 21.228 22.6667 21.4327C22.9856 21.6373 23.0949 22.0906 22.9108 22.445L22.4881 23.2588H23.3334C23.7016 23.2588 24 23.5906 24 23.9999C24 24.4092 23.7016 24.741 23.3334 24.741H22.4881L22.9108 25.5548C23.0949 25.9093 22.9856 26.3625 22.6667 26.5672C22.3479 26.7718 21.9402 26.6504 21.7561 26.2959L21.3334 25.4821L20.9108 26.2959C20.7267 26.6504 20.3189 26.7718 20.0001 26.5672Z" style="fill: var(--data-weather-snow-primary-color)"/>
<path d="M10.6667 29.2338C10.3479 29.0292 10.2386 28.5759 10.4227 28.2215L10.8454 27.4077H10C9.63185 27.4077 9.33337 27.0759 9.33337 26.6666C9.33337 26.2573 9.63185 25.9255 10 25.9255H10.8454L10.4227 25.1117C10.2386 24.7572 10.3479 24.304 10.6667 24.0993C10.9856 23.8947 11.3933 24.0161 11.5774 24.3706L12.0001 25.1844L12.4227 24.3706C12.6068 24.0161 13.0146 23.8947 13.3334 24.0993C13.6523 24.304 13.7615 24.7572 13.5774 25.1117L13.1548 25.9255H14C14.3682 25.9255 14.6667 26.2573 14.6667 26.6666C14.6667 27.0759 14.3682 27.4077 14 27.4077H13.1548L13.5774 28.2215C13.7615 28.5759 13.6523 29.0292 13.3334 29.2338C13.0146 29.4385 12.6068 29.317 12.4227 28.9626L12.0001 28.1488L11.5774 28.9626C11.3933 29.317 10.9856 29.4385 10.6667 29.2338Z" style="fill: var(--data-weather-snow-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33337C15.7936 3.33337 13.5609 4.78594 12.4614 7.11749L12.0452 7.99994L11.1528 7.60567C10.9179 7.50189 10.6813 7.45811 10.4275 7.45811C9.54947 7.45811 8.78596 8.00775 8.48304 8.85659L8.1991 9.65224L7.3672 9.50523C7.27659 9.48921 7.20215 9.48722 7.00789 9.48722C6.00825 9.48722 5.08296 9.89697 4.39061 10.6572C3.70873 11.407 3.33337 12.3655 3.33337 13.377V13.4315C3.36175 14.5559 3.77303 15.5277 4.47904 16.2246L4.49175 16.2372L4.504 16.2502C5.16232 16.9482 6.06001 17.3334 7.00788 17.3334H24.4824C26.363 17.3334 28 15.6989 28 13.5766C28 11.7972 26.8572 10.3219 25.3793 9.91746L24.7566 9.7471L24.6555 9.10954C24.1293 5.7913 21.3737 3.33337 18.2393 3.33337ZM11.0544 5.50746C12.5728 2.95044 15.2594 1.33337 18.2393 1.33337C22.2431 1.33337 25.6239 4.28966 26.5148 8.19546C28.597 9.05058 30 11.1906 30 13.5766C30 16.7101 27.5587 19.3334 24.4824 19.3334H7.00788C5.51463 19.3334 4.09608 18.7255 3.06133 17.6354C1.95818 16.5396 1.37027 15.0591 1.33364 13.4666L1.33337 13.4551V13.377C1.33337 11.8607 1.89911 10.4241 2.91121 9.31128C3.95631 8.1636 5.38205 7.51124 6.92203 7.48787C7.63403 6.25981 8.93646 5.45811 10.4275 5.45811C10.6339 5.45811 10.8432 5.47338 11.0544 5.50746Z" style="fill: var(--data-weather-cloud-light-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33337C15.7936 3.33337 13.5609 4.78594 12.4614 7.11749L12.0452 7.99994L11.1528 7.60567C10.9179 7.50189 10.6813 7.45811 10.4275 7.45811C9.54947 7.45811 8.78596 8.00775 8.48304 8.85659L8.1991 9.65224L7.3672 9.50523C7.27659 9.48921 7.20215 9.48722 7.00789 9.48722C6.00825 9.48722 5.08296 9.89697 4.39061 10.6572C3.70873 11.407 3.33337 12.3655 3.33337 13.377V13.4315C3.36175 14.5559 3.77303 15.5277 4.47904 16.2246L4.49175 16.2372L4.504 16.2502C5.16232 16.9482 6.06001 17.3334 7.00788 17.3334H24.4824C26.363 17.3334 28 15.6989 28 13.5766C28 11.7972 26.8572 10.3219 25.3793 9.91746L24.7566 9.7471L24.6555 9.10954C24.1293 5.7913 21.3737 3.33337 18.2393 3.33337Z" style="fill: var(--data-weather-cloud-light-seconday-color)"/>
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
    'obi-light-snow-colour': ObiLightSnowColour;
  }
}