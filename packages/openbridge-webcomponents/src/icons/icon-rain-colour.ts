import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-rain-colour')
export class ObiRainColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5448 20.6704C10.8154 20.084 11.4546 19.8643 12.0231 20.0829L12.0333 20.0869L12.0431 20.0914C12.6295 20.362 12.8492 21.0012 12.6306 21.5697L12.6251 21.5838L11.5068 24.1392C11.32 24.5999 10.8979 24.8234 10.4634 24.8234C10.3125 24.8234 10.1433 24.7774 10.038 24.7423L10.0205 24.7365L10.0038 24.7287C9.4174 24.4581 9.19765 23.819 9.41632 23.2504L9.42174 23.2363L10.5448 20.6704Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8781 24.6704C16.1487 24.084 16.7879 23.8643 17.3564 24.0829L17.3666 24.0869L17.3765 24.0914C17.9628 24.362 18.1826 25.0012 17.9639 25.5697L17.9585 25.5838L16.8401 28.1392C16.6533 28.5999 16.2313 28.8234 15.7968 28.8234C15.6458 28.8234 15.4766 28.7774 15.3714 28.7423L15.3538 28.7365L15.3371 28.7287C14.7507 28.4581 14.531 27.819 14.7497 27.2504L14.7551 27.2363L15.8781 24.6704Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2115 20.6704C21.4821 20.084 22.1212 19.8643 22.6898 20.0829L22.6999 20.0869L22.7098 20.0914C23.2961 20.362 23.5159 21.0012 23.2972 21.5697L23.2918 21.5838L22.1735 24.1392C21.9866 24.5999 21.5646 24.8234 21.1301 24.8234C20.9792 24.8234 20.8099 24.7774 20.7047 24.7423L20.6872 24.7365L20.6704 24.7287C20.0841 24.4581 19.8643 23.819 20.083 23.2504L20.0884 23.2363L21.2115 20.6704Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33325C15.7936 3.33325 13.5609 4.78582 12.4614 7.11736L12.0452 7.99982L11.1528 7.60555C10.9179 7.50176 10.6813 7.45799 10.4275 7.45799C9.54947 7.45799 8.78596 8.00763 8.48304 8.85646L8.1991 9.65211L7.3672 9.5051C7.27659 9.48909 7.20215 9.4871 7.00789 9.4871C6.00825 9.4871 5.08296 9.89685 4.39061 10.657C3.70873 11.4069 3.33337 12.3653 3.33337 13.3769V13.4314C3.36175 14.5558 3.77303 15.5276 4.47904 16.2245L4.49175 16.2371L4.504 16.25C5.16232 16.9481 6.06001 17.3333 7.00788 17.3333H24.4824C26.363 17.3333 28 15.6987 28 13.5765C28 11.7971 26.8572 10.3217 25.3793 9.91734L24.7566 9.74697L24.6555 9.10942C24.1293 5.79117 21.3737 3.33325 18.2393 3.33325ZM11.0544 5.50734C12.5728 2.95032 15.2594 1.33325 18.2393 1.33325C22.2431 1.33325 25.6239 4.28953 26.5148 8.19534C28.597 9.05046 30 11.1904 30 13.5765C30 16.71 27.5587 19.3333 24.4824 19.3333H7.00788C5.51463 19.3333 4.09608 18.7254 3.06133 17.6353C1.95818 16.5395 1.37027 15.059 1.33364 13.4664L1.33337 13.4549V13.3769C1.33337 11.8605 1.89911 10.424 2.91121 9.31116C3.95631 8.16348 5.38205 7.51112 6.92203 7.48775C7.63403 6.25968 8.93646 5.45799 10.4275 5.45799C10.6339 5.45799 10.8432 5.47326 11.0544 5.50734Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33325C15.7936 3.33325 13.5609 4.78582 12.4614 7.11736L12.0452 7.99982L11.1528 7.60555C10.9179 7.50176 10.6813 7.45799 10.4275 7.45799C9.54947 7.45799 8.78596 8.00763 8.48304 8.85646L8.1991 9.65211L7.3672 9.5051C7.27659 9.48909 7.20215 9.4871 7.00789 9.4871C6.00825 9.4871 5.08296 9.89685 4.39061 10.657C3.70873 11.4069 3.33337 12.3653 3.33337 13.3769V13.4314C3.36175 14.5558 3.77303 15.5276 4.47904 16.2245L4.49175 16.2371L4.504 16.25C5.16232 16.9481 6.06001 17.3333 7.00788 17.3333H24.4824C26.363 17.3333 28 15.6987 28 13.5765C28 11.7971 26.8572 10.3217 25.3793 9.91734L24.7566 9.74697L24.6555 9.10942C24.1293 5.79117 21.3737 3.33325 18.2393 3.33325Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5448 20.6704C10.8154 20.084 11.4546 19.8643 12.0231 20.0829L12.0333 20.0869L12.0431 20.0914C12.6295 20.362 12.8492 21.0012 12.6306 21.5697L12.6251 21.5838L11.5068 24.1392C11.32 24.5999 10.8979 24.8234 10.4634 24.8234C10.3125 24.8234 10.1433 24.7774 10.038 24.7423L10.0205 24.7365L10.0038 24.7287C9.4174 24.4581 9.19765 23.819 9.41632 23.2504L9.42174 23.2363L10.5448 20.6704Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8781 24.6704C16.1487 24.084 16.7879 23.8643 17.3564 24.0829L17.3666 24.0869L17.3765 24.0914C17.9628 24.362 18.1826 25.0012 17.9639 25.5697L17.9585 25.5838L16.8401 28.1392C16.6533 28.5999 16.2313 28.8234 15.7968 28.8234C15.6458 28.8234 15.4766 28.7774 15.3714 28.7423L15.3538 28.7365L15.3371 28.7287C14.7507 28.4581 14.531 27.819 14.7497 27.2504L14.7551 27.2363L15.8781 24.6704Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2115 20.6704C21.4821 20.084 22.1212 19.8643 22.6898 20.0829L22.6999 20.0869L22.7098 20.0914C23.2961 20.362 23.5159 21.0012 23.2972 21.5697L23.2918 21.5838L22.1735 24.1392C21.9866 24.5999 21.5646 24.8234 21.1301 24.8234C20.9792 24.8234 20.8099 24.7774 20.7047 24.7423L20.6872 24.7365L20.6704 24.7287C20.0841 24.4581 19.8643 23.819 20.083 23.2504L20.0884 23.2363L21.2115 20.6704Z" style="fill: var(--data-weather-rain-primary-color)"/>
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
    'obi-rain-colour': ObiRainColour;
  }
}