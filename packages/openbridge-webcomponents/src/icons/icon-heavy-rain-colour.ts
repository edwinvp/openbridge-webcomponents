import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-heavy-rain-colour')
export class ObiHeavyRainColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.21141 21.337C7.48204 20.7507 8.12118 20.5309 8.68973 20.7496L8.69988 20.7535L8.70975 20.7581C9.29611 21.0287 9.51585 21.6678 9.29718 22.2364L9.29176 22.2505L8.17341 24.8059C7.9866 25.2665 7.56455 25.4901 7.13007 25.4901C6.97914 25.4901 6.80989 25.444 6.70466 25.409L6.68714 25.4031L6.67038 25.3954C6.08402 25.1248 5.86428 24.4856 6.08295 23.9171L6.08837 23.903L7.21141 21.337Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2114 25.337C11.482 24.7507 12.1212 24.5309 12.6897 24.7496L12.6999 24.7535L12.7098 24.7581C13.2961 25.0287 13.5159 25.6678 13.2972 26.2364L13.2918 26.2505L12.1734 28.8059C11.9866 29.2665 11.5646 29.4901 11.1301 29.4901C10.9791 29.4901 10.8099 29.444 10.7047 29.409L10.6871 29.4031L10.6704 29.3954C10.084 29.1248 9.86428 28.4856 10.0829 27.9171L10.0884 27.903L11.2114 25.337Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8781 20.6704C16.1487 20.084 16.7878 19.8643 17.3564 20.0829L17.3665 20.0869L17.3764 20.0914C17.9628 20.362 18.1825 21.0012 17.9638 21.5697L17.9584 21.5838L16.8401 24.1392C16.6533 24.5999 16.2312 24.8234 15.7967 24.8234C15.6458 24.8234 15.4766 24.7774 15.3713 24.7423L15.3538 24.7365L15.337 24.7287C14.7507 24.4581 14.5309 23.819 14.7496 23.2504L14.755 23.2363L15.8781 20.6704Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8781 20.6704C20.1487 20.084 20.7878 19.8643 21.3564 20.0829L21.3665 20.0869L21.3764 20.0914C21.9628 20.362 22.1825 21.0012 21.9638 21.5697L21.9584 21.5838L20.8401 24.1392C20.6533 24.5999 20.2312 24.8234 19.7967 24.8234C19.6458 24.8234 19.4766 24.7774 19.3713 24.7423L19.3538 24.7365L19.337 24.7287C18.7507 24.4581 18.5309 23.819 18.7496 23.2504L18.755 23.2363L19.8781 20.6704Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.8781 24.6704C24.1487 24.084 24.7878 23.8643 25.3564 24.083L25.3665 24.0869L25.3764 24.0914C25.9628 24.362 26.1825 25.0012 25.9638 25.5697L25.9584 25.5838L24.8401 28.1392C24.6533 28.5999 24.2312 28.8234 23.7967 28.8234C23.6458 28.8234 23.4766 28.7774 23.3713 28.7423L23.3538 28.7365L23.337 28.7287C22.7507 28.4581 22.5309 27.819 22.7496 27.2504L22.755 27.2363L23.8781 24.6704Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33325C15.7936 3.33325 13.5609 4.78582 12.4614 7.11736L12.0452 7.99982L11.1528 7.60555C10.9179 7.50176 10.6813 7.45799 10.4275 7.45799C9.54947 7.45799 8.78596 8.00763 8.48304 8.85646L8.1991 9.65211L7.3672 9.5051C7.27659 9.48909 7.20215 9.4871 7.00789 9.4871C6.00825 9.4871 5.08296 9.89685 4.39061 10.657C3.70873 11.4069 3.33337 12.3653 3.33337 13.3769V13.4314C3.36175 14.5558 3.77303 15.5276 4.47904 16.2245L4.49175 16.2371L4.504 16.25C5.16232 16.9481 6.06001 17.3333 7.00788 17.3333H24.4824C26.363 17.3333 28 15.6987 28 13.5765C28 11.7971 26.8572 10.3217 25.3793 9.91734L24.7566 9.74697L24.6555 9.10942C24.1293 5.79117 21.3737 3.33325 18.2393 3.33325ZM11.0544 5.50734C12.5728 2.95032 15.2594 1.33325 18.2393 1.33325C22.2431 1.33325 25.6239 4.28953 26.5148 8.19534C28.597 9.05046 30 11.1904 30 13.5765C30 16.71 27.5587 19.3333 24.4824 19.3333H7.00788C5.51463 19.3333 4.09608 18.7254 3.06133 17.6353C1.95818 16.5395 1.37027 15.059 1.33364 13.4664L1.33337 13.4549V13.3769C1.33337 11.8605 1.89911 10.424 2.91121 9.31116C3.95631 8.16348 5.38205 7.51112 6.92203 7.48775C7.63403 6.25968 8.93646 5.45799 10.4275 5.45799C10.6339 5.45799 10.8432 5.47326 11.0544 5.50734Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33325C15.7936 3.33325 13.5609 4.78582 12.4614 7.11736L12.0452 7.99982L11.1528 7.60555C10.9179 7.50176 10.6813 7.45799 10.4275 7.45799C9.54947 7.45799 8.78596 8.00763 8.48304 8.85646L8.1991 9.65211L7.3672 9.5051C7.27659 9.48909 7.20215 9.4871 7.00789 9.4871C6.00825 9.4871 5.08296 9.89685 4.39061 10.657C3.70873 11.4069 3.33337 12.3653 3.33337 13.3769V13.4314C3.36175 14.5558 3.77303 15.5276 4.47904 16.2245L4.49175 16.2371L4.504 16.25C5.16232 16.9481 6.06001 17.3333 7.00788 17.3333H24.4824C26.363 17.3333 28 15.6987 28 13.5765C28 11.7971 26.8572 10.3217 25.3793 9.91734L24.7566 9.74697L24.6555 9.10942C24.1293 5.79117 21.3737 3.33325 18.2393 3.33325Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.21141 21.337C7.48204 20.7507 8.12118 20.5309 8.68973 20.7496L8.69988 20.7535L8.70975 20.7581C9.29611 21.0287 9.51585 21.6678 9.29718 22.2364L9.29176 22.2505L8.17341 24.8059C7.9866 25.2665 7.56455 25.4901 7.13007 25.4901C6.97914 25.4901 6.80989 25.444 6.70466 25.409L6.68714 25.4031L6.67038 25.3954C6.08402 25.1248 5.86428 24.4856 6.08295 23.9171L6.08837 23.903L7.21141 21.337Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2114 25.337C11.482 24.7507 12.1212 24.5309 12.6897 24.7496L12.6999 24.7535L12.7098 24.7581C13.2961 25.0287 13.5159 25.6678 13.2972 26.2364L13.2918 26.2505L12.1734 28.8059C11.9866 29.2665 11.5646 29.4901 11.1301 29.4901C10.9791 29.4901 10.8099 29.444 10.7047 29.409L10.6871 29.4031L10.6704 29.3954C10.084 29.1248 9.86428 28.4856 10.0829 27.9171L10.0884 27.903L11.2114 25.337Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8781 20.6704C16.1487 20.084 16.7878 19.8643 17.3564 20.0829L17.3665 20.0869L17.3764 20.0914C17.9628 20.362 18.1825 21.0012 17.9638 21.5697L17.9584 21.5838L16.8401 24.1392C16.6533 24.5999 16.2312 24.8234 15.7967 24.8234C15.6458 24.8234 15.4766 24.7774 15.3713 24.7423L15.3538 24.7365L15.337 24.7287C14.7507 24.4581 14.5309 23.819 14.7496 23.2504L14.755 23.2363L15.8781 20.6704Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8781 20.6704C20.1487 20.084 20.7878 19.8643 21.3564 20.0829L21.3665 20.0869L21.3764 20.0914C21.9628 20.362 22.1825 21.0012 21.9638 21.5697L21.9584 21.5838L20.8401 24.1392C20.6533 24.5999 20.2312 24.8234 19.7967 24.8234C19.6458 24.8234 19.4766 24.7774 19.3713 24.7423L19.3538 24.7365L19.337 24.7287C18.7507 24.4581 18.5309 23.819 18.7496 23.2504L18.755 23.2363L19.8781 20.6704Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.8781 24.6704C24.1487 24.084 24.7878 23.8643 25.3564 24.083L25.3665 24.0869L25.3764 24.0914C25.9628 24.362 26.1825 25.0012 25.9638 25.5697L25.9584 25.5838L24.8401 28.1392C24.6533 28.5999 24.2312 28.8234 23.7967 28.8234C23.6458 28.8234 23.4766 28.7774 23.3713 28.7423L23.3538 28.7365L23.337 28.7287C22.7507 28.4581 22.5309 27.819 22.7496 27.2504L22.755 27.2363L23.8781 24.6704Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33325C15.7936 3.33325 13.5609 4.78582 12.4614 7.11736L12.0452 7.99982L11.1528 7.60555C10.9179 7.50176 10.6813 7.45799 10.4275 7.45799C9.54947 7.45799 8.78596 8.00763 8.48304 8.85646L8.1991 9.65211L7.3672 9.5051C7.27659 9.48909 7.20215 9.4871 7.00789 9.4871C6.00825 9.4871 5.08296 9.89685 4.39061 10.657C3.70873 11.4069 3.33337 12.3653 3.33337 13.3769V13.4314C3.36175 14.5558 3.77303 15.5276 4.47904 16.2245L4.49175 16.2371L4.504 16.25C5.16232 16.9481 6.06001 17.3333 7.00788 17.3333H24.4824C26.363 17.3333 28 15.6987 28 13.5765C28 11.7971 26.8572 10.3217 25.3793 9.91734L24.7566 9.74697L24.6555 9.10942C24.1293 5.79117 21.3737 3.33325 18.2393 3.33325ZM11.0544 5.50734C12.5728 2.95032 15.2594 1.33325 18.2393 1.33325C22.2431 1.33325 25.6239 4.28953 26.5148 8.19534C28.597 9.05046 30 11.1904 30 13.5765C30 16.71 27.5587 19.3333 24.4824 19.3333H7.00788C5.51463 19.3333 4.09608 18.7254 3.06133 17.6353C1.95818 16.5395 1.37027 15.059 1.33364 13.4664L1.33337 13.4549V13.3769C1.33337 11.8605 1.89911 10.424 2.91121 9.31116C3.95631 8.16348 5.38205 7.51112 6.92203 7.48775C7.63403 6.25968 8.93646 5.45799 10.4275 5.45799C10.6339 5.45799 10.8432 5.47326 11.0544 5.50734Z" style="fill: var(--data-weather-cloud-heavy-secondary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 3.33325C15.7936 3.33325 13.5609 4.78582 12.4614 7.11736L12.0452 7.99982L11.1528 7.60555C10.9179 7.50176 10.6813 7.45799 10.4275 7.45799C9.54947 7.45799 8.78596 8.00763 8.48304 8.85646L8.1991 9.65211L7.3672 9.5051C7.27659 9.48909 7.20215 9.4871 7.00789 9.4871C6.00825 9.4871 5.08296 9.89685 4.39061 10.657C3.70873 11.4069 3.33337 12.3653 3.33337 13.3769V13.4314C3.36175 14.5558 3.77303 15.5276 4.47904 16.2245L4.49175 16.2371L4.504 16.25C5.16232 16.9481 6.06001 17.3333 7.00788 17.3333H24.4824C26.363 17.3333 28 15.6987 28 13.5765C28 11.7971 26.8572 10.3217 25.3793 9.91734L24.7566 9.74697L24.6555 9.10942C24.1293 5.79117 21.3737 3.33325 18.2393 3.33325Z" style="fill: var(--data-weather-cloud-heavy-secondary-color)"/>
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
    'obi-heavy-rain-colour': ObiHeavyRainColour;
  }
}