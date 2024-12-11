import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-lightning-light-rain-colour')
export class ObiLightningLightRainColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.4966 13.4934L18.5124 7.33337L14.6666 15.1334L17.2426 16.3334L15.5737 23.3334L20 14.6934L17.4966 13.4934Z" fill="currentColor"/>
<path d="M12.4614 7.11749C13.5609 4.78594 15.7936 3.33337 18.2393 3.33337C21.3737 3.33337 24.1293 5.7913 24.6555 9.10954L24.7566 9.7471L25.3793 9.91746C26.8572 10.3219 28 11.7972 28 13.5766C28 15.6989 26.363 17.3334 24.4824 17.3334H20.1457L21.1867 15.3013C21.3507 14.9812 21.3784 14.6083 21.2635 14.2674C21.1486 13.9266 20.9008 13.6466 20.5764 13.4911L18.975 12.7234L19.8281 7.55037C19.9356 6.89838 19.5494 6.266 18.9202 6.06394C18.2911 5.86189 17.6089 6.15112 17.3166 6.74378L13.4708 14.5438C13.3122 14.8655 13.2899 15.2376 13.409 15.576C13.5281 15.9144 13.7785 16.1906 14.1037 16.342L15.6933 17.0826L15.6336 17.3334H7.00788C6.06001 17.3334 5.16232 16.9482 4.504 16.2502L4.49175 16.2372L4.47904 16.2246C3.77303 15.5277 3.36175 14.5559 3.33337 13.4315V13.377C3.33337 12.3655 3.70873 11.407 4.39061 10.6572C5.08296 9.89697 6.00825 9.48722 7.00789 9.48722C7.20215 9.48722 7.27659 9.48921 7.3672 9.50523L8.1991 9.65224L8.48304 8.85659C8.78596 8.00775 9.54947 7.45811 10.4275 7.45811C10.6813 7.45811 10.9179 7.50189 11.1528 7.60567L12.0452 7.99994L12.4614 7.11749Z" fill="currentColor"/>
<path d="M12.4614 7.11749C13.5609 4.78594 15.7936 3.33337 18.2393 3.33337C21.3737 3.33337 24.1293 5.7913 24.6555 9.10954L24.7566 9.7471L25.3793 9.91746C26.8572 10.3219 28 11.7972 28 13.5766C28 15.6989 26.363 17.3334 24.4824 17.3334H20.1457L19.1211 19.3334H24.4824C27.5587 19.3334 30 16.7101 30 13.5766C30 11.1906 28.597 9.05058 26.5148 8.19546C25.6239 4.28966 22.2431 1.33337 18.2393 1.33337C15.2594 1.33337 12.5728 2.95044 11.0544 5.50746C10.8432 5.47338 10.6339 5.45811 10.4275 5.45811C8.93646 5.45811 7.63403 6.25981 6.92203 7.48787C5.38205 7.51124 3.95631 8.1636 2.91121 9.31128C1.89911 10.4241 1.33337 11.8607 1.33337 13.377V13.4551L1.33364 13.4666C1.37027 15.0591 1.95818 16.5396 3.06133 17.6354C4.09608 18.7255 5.51463 19.3334 7.00788 19.3334H15.1567L15.6336 17.3334H7.00788C6.06001 17.3334 5.16232 16.9482 4.504 16.2502L4.49175 16.2372L4.47904 16.2246C3.77303 15.5277 3.36175 14.5559 3.33337 13.4315V13.377C3.33337 12.3655 3.70873 11.407 4.39061 10.6572C5.08296 9.89697 6.00825 9.48722 7.00789 9.48722C7.20215 9.48722 7.27659 9.48921 7.3672 9.50523L8.1991 9.65224L8.48304 8.85659C8.78596 8.00775 9.54947 7.45811 10.4275 7.45811C10.6813 7.45811 10.9179 7.50189 11.1528 7.60567L12.0452 7.99994L12.4614 7.11749Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.87804 23.3371C8.14866 22.7507 8.78781 22.531 9.35635 22.7497L9.3665 22.7536L9.37638 22.7581C9.96273 23.0287 10.1825 23.6679 9.96381 24.2364L9.95839 24.2505L8.84004 26.8059C8.65323 27.2666 8.23118 27.4901 7.79669 27.4901C7.64576 27.4901 7.47651 27.4441 7.37128 27.409L7.35377 27.4032L7.33701 27.3954C6.75065 27.1248 6.53091 26.4857 6.74958 25.9171L6.75499 25.903L7.87804 23.3371Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2114 22.0038C21.482 21.4174 22.1211 21.1977 22.6897 21.4163L22.6998 21.4202L22.7097 21.4248C23.2961 21.6954 23.5158 22.3346 23.2971 22.9031L23.2917 22.9172L22.1734 25.4726C21.9866 25.9332 21.5645 26.1568 21.13 26.1568C20.9791 26.1568 20.8098 26.1107 20.7046 26.0757L20.6871 26.0698L20.6703 26.0621C20.084 25.7915 19.8642 25.1523 20.0829 24.5838L20.0883 24.5697L21.2114 22.0038Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.4966 13.4934L18.5124 7.33337L14.6666 15.1334L17.2426 16.3334L15.5737 23.3334L20 14.6934L17.4966 13.4934Z" style="fill: var(--data-weather-lightning-primary-color)"/>
<path d="M12.4614 7.11749C13.5609 4.78594 15.7936 3.33337 18.2393 3.33337C21.3737 3.33337 24.1293 5.7913 24.6555 9.10954L24.7566 9.7471L25.3793 9.91746C26.8572 10.3219 28 11.7972 28 13.5766C28 15.6989 26.363 17.3334 24.4824 17.3334H20.1457L21.1867 15.3013C21.3507 14.9812 21.3784 14.6083 21.2635 14.2674C21.1486 13.9266 20.9008 13.6466 20.5764 13.4911L18.975 12.7234L19.8281 7.55037C19.9356 6.89838 19.5494 6.266 18.9202 6.06394C18.2911 5.86189 17.6089 6.15112 17.3166 6.74378L13.4708 14.5438C13.3122 14.8655 13.2899 15.2376 13.409 15.576C13.5281 15.9144 13.7785 16.1906 14.1037 16.342L15.6933 17.0826L15.6336 17.3334H7.00788C6.06001 17.3334 5.16232 16.9482 4.504 16.2502L4.49175 16.2372L4.47904 16.2246C3.77303 15.5277 3.36175 14.5559 3.33337 13.4315V13.377C3.33337 12.3655 3.70873 11.407 4.39061 10.6572C5.08296 9.89697 6.00825 9.48722 7.00789 9.48722C7.20215 9.48722 7.27659 9.48921 7.3672 9.50523L8.1991 9.65224L8.48304 8.85659C8.78596 8.00775 9.54947 7.45811 10.4275 7.45811C10.6813 7.45811 10.9179 7.50189 11.1528 7.60567L12.0452 7.99994L12.4614 7.11749Z" style="fill: var(--data-weather-cloud-light-seconday-color)"/>
<path d="M12.4614 7.11749C13.5609 4.78594 15.7936 3.33337 18.2393 3.33337C21.3737 3.33337 24.1293 5.7913 24.6555 9.10954L24.7566 9.7471L25.3793 9.91746C26.8572 10.3219 28 11.7972 28 13.5766C28 15.6989 26.363 17.3334 24.4824 17.3334H20.1457L19.1211 19.3334H24.4824C27.5587 19.3334 30 16.7101 30 13.5766C30 11.1906 28.597 9.05058 26.5148 8.19546C25.6239 4.28966 22.2431 1.33337 18.2393 1.33337C15.2594 1.33337 12.5728 2.95044 11.0544 5.50746C10.8432 5.47338 10.6339 5.45811 10.4275 5.45811C8.93646 5.45811 7.63403 6.25981 6.92203 7.48787C5.38205 7.51124 3.95631 8.1636 2.91121 9.31128C1.89911 10.4241 1.33337 11.8607 1.33337 13.377V13.4551L1.33364 13.4666C1.37027 15.0591 1.95818 16.5396 3.06133 17.6354C4.09608 18.7255 5.51463 19.3334 7.00788 19.3334H15.1567L15.6336 17.3334H7.00788C6.06001 17.3334 5.16232 16.9482 4.504 16.2502L4.49175 16.2372L4.47904 16.2246C3.77303 15.5277 3.36175 14.5559 3.33337 13.4315V13.377C3.33337 12.3655 3.70873 11.407 4.39061 10.6572C5.08296 9.89697 6.00825 9.48722 7.00789 9.48722C7.20215 9.48722 7.27659 9.48921 7.3672 9.50523L8.1991 9.65224L8.48304 8.85659C8.78596 8.00775 9.54947 7.45811 10.4275 7.45811C10.6813 7.45811 10.9179 7.50189 11.1528 7.60567L12.0452 7.99994L12.4614 7.11749Z" style="fill: var(--data-weather-cloud-light-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.87804 23.3371C8.14866 22.7507 8.78781 22.531 9.35635 22.7497L9.3665 22.7536L9.37638 22.7581C9.96273 23.0287 10.1825 23.6679 9.96381 24.2364L9.95839 24.2505L8.84004 26.8059C8.65323 27.2666 8.23118 27.4901 7.79669 27.4901C7.64576 27.4901 7.47651 27.4441 7.37128 27.409L7.35377 27.4032L7.33701 27.3954C6.75065 27.1248 6.53091 26.4857 6.74958 25.9171L6.75499 25.903L7.87804 23.3371Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2114 22.0038C21.482 21.4174 22.1211 21.1977 22.6897 21.4163L22.6998 21.4202L22.7097 21.4248C23.2961 21.6954 23.5158 22.3346 23.2971 22.9031L23.2917 22.9172L22.1734 25.4726C21.9866 25.9332 21.5645 26.1568 21.13 26.1568C20.9791 26.1568 20.8098 26.1107 20.7046 26.0757L20.6871 26.0698L20.6703 26.0621C20.084 25.7915 19.8642 25.1523 20.0829 24.5838L20.0883 24.5697L21.2114 22.0038Z" style="fill: var(--data-weather-rain-primary-color)"/>
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
    'obi-lightning-light-rain-colour': ObiLightningLightRainColour;
  }
}