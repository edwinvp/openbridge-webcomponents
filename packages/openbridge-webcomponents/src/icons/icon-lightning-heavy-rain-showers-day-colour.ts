import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-lightning-heavy-rain-showers-day-colour')
export class ObiLightningHeavyRainShowersDayColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6302 1.62937C11.4045 1.24899 10.8094 1.31501 10.6726 1.73559L9.93391 4.00639C9.83985 4.29555 9.50225 4.44272 9.21489 4.31985L6.95814 3.35492C6.54016 3.1762 6.09572 3.5634 6.243 3.97794L7.03821 6.21614C7.13947 6.50114 6.95487 6.8089 6.64505 6.8716L4.21192 7.36403C3.76127 7.45524 3.63728 8.01571 4.0124 8.26588L6.03777 9.61656C6.29567 9.78855 6.33458 10.1393 6.12064 10.3637L4.4405 12.1254C4.12932 12.4516 4.37313 12.9713 4.83281 12.9616L7.31471 12.9088C7.33533 12.9084 7.35567 12.9091 7.37565 12.9108C7.54618 12.3864 7.84648 11.8388 8.36314 11.3875C8.0721 10.9161 7.87964 10.3786 7.81519 9.79755C7.57164 7.60187 9.24783 5.6141 11.5591 5.35774C13.6897 5.1214 15.6163 6.43898 16.0951 8.36649C16.7266 8.14973 17.4186 8.01286 18.1679 8.00059L19.5596 6.54135C19.8708 6.21506 19.627 5.69538 19.1673 5.70515L16.6854 5.75791C16.3694 5.76462 16.1218 5.5048 16.1581 5.20454L16.4435 2.84648C16.4964 2.40973 15.9779 2.12935 15.6092 2.39533L13.6188 3.83136C13.3654 4.01422 13.0037 3.9446 12.8486 3.68309L11.6302 1.62937Z" fill="currentColor"/>
<path d="M8.3631 11.3875C8.57295 11.2042 8.8185 11.0367 9.10554 10.8932C10.3817 10.2552 11.5414 10.5915 12.333 11.0276C12.4855 10.8521 12.6503 10.6732 12.8272 10.4944C13.5967 9.7169 14.6977 8.84611 16.0951 8.36648C15.6162 6.43896 13.6897 5.12137 11.559 5.35771C9.24778 5.61408 7.57159 7.60185 7.81514 9.79752C7.8796 10.3786 8.07206 10.916 8.3631 11.3875Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1633 19.4934L17.1792 13.3334L13.3334 21.1334L15.9093 22.3334L14.2404 29.3334L18.6667 20.6934L16.1633 19.4934Z" fill="currentColor"/>
<path d="M27.3333 17.3487C27.4497 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6666 10.0154C16.5282 9.8433 14.8895 11.1452 13.8692 12.309C13.0854 13.203 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 11.999 13.0139 11.1362 12.6645C10.7796 12.5202 10.3898 12.4871 9.99996 12.682C9.66663 12.8487 9.45829 13.0987 9.33329 13.3799C8.95829 14.2237 9.33329 15.3487 9.33329 15.3487H6.66663C5.33329 15.3487 4.66663 16.2441 4.66663 17.3487C4.66663 18.4533 5.56206 19.3487 6.66663 19.3487H12.7266L12.1374 20.5437C12.0137 20.7947 11.9729 21.0763 12.0175 21.3487H6.66662C4.45749 21.3487 2.66663 19.5578 2.66663 17.3487C2.66663 16.4054 2.95372 15.385 3.69549 14.5796C4.46207 13.7472 5.52695 13.3487 6.66663 13.3487H7.25983C7.43538 12.5009 7.91136 11.4903 9.10553 10.8932C10.3817 10.2551 11.5414 10.5914 12.333 11.0275C12.4855 10.8521 12.6503 10.6731 12.8272 10.4944C14.0443 9.26463 16.0905 7.80162 18.827 8.02181C22.242 8.29658 24.1524 10.0865 25.107 11.9189C25.4389 12.5559 25.645 13.1745 25.774 13.6989C25.9743 13.7572 26.1852 13.825 26.3986 13.9033C26.9122 14.0915 27.5831 14.3908 28.1495 14.8675C28.733 15.3587 29.4242 16.2438 29.3274 17.5021C29.178 19.4449 27.6727 21.3487 25.3333 21.3487H19.829L19.8533 21.3013C20.0173 20.9811 20.045 20.6082 19.9301 20.2674C19.8152 19.9265 19.5674 19.6465 19.243 19.491L18.9461 19.3487H25.3333C26.4379 19.3487 27.2486 18.45 27.3333 17.3487Z" fill="currentColor"/>
<path d="M9.33329 15.3487C9.33329 15.3487 8.66663 13.3487 9.99996 12.6821C11.3333 12.0154 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 14.8855 9.71116 18.6666 10.0154C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4497 15.8351 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H18.9461L17.6415 18.7234L18.4947 13.5503C18.6022 12.8983 18.2159 12.266 17.5868 12.0639C16.9577 11.8618 16.2754 12.1511 15.9832 12.7437L12.7266 19.3487H6.66663C5.56206 19.3487 4.66663 18.4533 4.66663 17.3487C4.66663 16.2442 5.33329 15.3487 6.66663 15.3487H9.33329Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.87804 23.337C4.14866 22.7507 4.78781 22.5309 5.35635 22.7496L5.3665 22.7535L5.37638 22.758C5.96273 23.0287 6.18248 23.6678 5.96381 24.2364L5.95839 24.2504L4.84004 26.8058C4.65323 27.2665 4.23118 27.49 3.79669 27.49C3.64576 27.49 3.47651 27.444 3.37128 27.4089L3.35377 27.4031L3.33701 27.3953C2.75065 27.1247 2.53091 26.4856 2.74958 25.917L2.75499 25.9029L3.87804 23.337Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5447 26.0037C8.81533 25.4173 9.45447 25.1976 10.023 25.4162L10.0332 25.4201L10.043 25.4247C10.6294 25.6953 10.8491 26.3345 10.6305 26.903L10.6251 26.9171L9.5067 29.4725C9.31989 29.9331 8.89785 30.1567 8.46336 30.1567C8.31243 30.1567 8.14318 30.1107 8.03795 30.0756L8.02043 30.0697L8.00367 30.062C7.41732 29.7914 7.19757 29.1522 7.41624 28.5837L7.42166 28.5696L8.5447 26.0037Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2114 24.6703C19.482 24.084 20.1211 23.8642 20.6897 24.0829L20.6998 24.0868L20.7097 24.0914C21.2961 24.362 21.5158 25.0011 21.2971 25.5697L21.2917 25.5838L20.1734 28.1392C19.9866 28.5998 19.5645 28.8234 19.13 28.8234C18.9791 28.8234 18.8098 28.7773 18.7046 28.7423L18.6871 28.7364L18.6703 28.7287C18.084 28.4581 17.8642 27.8189 18.0829 27.2504L18.0883 27.2363L19.2114 24.6703Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.2114 26.6703C27.482 26.084 28.1211 25.8642 28.6897 26.0829L28.6998 26.0868L28.7097 26.0914C29.2961 26.362 29.5158 27.0011 29.2971 27.5697L29.2917 27.5838L28.1734 30.1392C27.9866 30.5998 27.5645 30.8234 27.13 30.8234C26.9791 30.8234 26.8098 30.7773 26.7046 30.7423L26.6871 30.7364L26.6703 30.7287C26.084 30.4581 25.8642 29.8189 26.0829 29.2504L26.0883 29.2363L27.2114 26.6703Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.878 23.337C24.1487 22.7507 24.7878 22.5309 25.3563 22.7496L25.3665 22.7535L25.3764 22.758C25.9627 23.0287 26.1825 23.6678 25.9638 24.2364L25.9584 24.2504L24.84 26.8058C24.6532 27.2665 24.2312 27.49 23.7967 27.49C23.6458 27.49 23.4765 27.444 23.3713 27.4089L23.3538 27.4031L23.337 27.3953C22.7506 27.1247 22.5309 26.4856 22.7496 25.917L22.755 25.9029L23.878 23.337Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6302 1.62937C11.4045 1.24899 10.8094 1.31501 10.6726 1.73559L9.93391 4.00639C9.83985 4.29555 9.50225 4.44272 9.21489 4.31985L6.95814 3.35492C6.54016 3.1762 6.09572 3.5634 6.243 3.97794L7.03821 6.21614C7.13947 6.50114 6.95487 6.8089 6.64505 6.8716L4.21192 7.36403C3.76127 7.45524 3.63728 8.01571 4.0124 8.26588L6.03777 9.61656C6.29567 9.78855 6.33458 10.1393 6.12064 10.3637L4.4405 12.1254C4.12932 12.4516 4.37313 12.9713 4.83281 12.9616L7.31471 12.9088C7.33533 12.9084 7.35567 12.9091 7.37565 12.9108C7.54618 12.3864 7.84648 11.8388 8.36314 11.3875C8.0721 10.9161 7.87964 10.3786 7.81519 9.79755C7.57164 7.60187 9.24783 5.6141 11.5591 5.35774C13.6897 5.1214 15.6163 6.43898 16.0951 8.36649C16.7266 8.14973 17.4186 8.01286 18.1679 8.00059L19.5596 6.54135C19.8708 6.21506 19.627 5.69538 19.1673 5.70515L16.6854 5.75791C16.3694 5.76462 16.1218 5.5048 16.1581 5.20454L16.4435 2.84648C16.4964 2.40973 15.9779 2.12935 15.6092 2.39533L13.6188 3.83136C13.3654 4.01422 13.0037 3.9446 12.8486 3.68309L11.6302 1.62937Z" style="fill: var(--data-weather-lightning-primary-color)"/>
<path d="M8.3631 11.3875C8.57295 11.2042 8.8185 11.0367 9.10554 10.8932C10.3817 10.2552 11.5414 10.5915 12.333 11.0276C12.4855 10.8521 12.6503 10.6732 12.8272 10.4944C13.5967 9.7169 14.6977 8.84611 16.0951 8.36648C15.6162 6.43896 13.6897 5.12137 11.559 5.35771C9.24778 5.61408 7.57159 7.60185 7.81514 9.79752C7.8796 10.3786 8.07206 10.916 8.3631 11.3875Z" style="fill: var(--data-weather-sun-secondary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1633 19.4934L17.1792 13.3334L13.3334 21.1334L15.9093 22.3334L14.2404 29.3334L18.6667 20.6934L16.1633 19.4934Z" style="fill: var(--data-weather-lightning-primary-color)"/>
<path d="M27.3333 17.3487C27.4497 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6666 10.0154C16.5282 9.8433 14.8895 11.1452 13.8692 12.309C13.0854 13.203 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 11.999 13.0139 11.1362 12.6645C10.7796 12.5202 10.3898 12.4871 9.99996 12.682C9.66663 12.8487 9.45829 13.0987 9.33329 13.3799C8.95829 14.2237 9.33329 15.3487 9.33329 15.3487H6.66663C5.33329 15.3487 4.66663 16.2441 4.66663 17.3487C4.66663 18.4533 5.56206 19.3487 6.66663 19.3487H12.7266L12.1374 20.5437C12.0137 20.7947 11.9729 21.0763 12.0175 21.3487H6.66662C4.45749 21.3487 2.66663 19.5578 2.66663 17.3487C2.66663 16.4054 2.95372 15.385 3.69549 14.5796C4.46207 13.7472 5.52695 13.3487 6.66663 13.3487H7.25983C7.43538 12.5009 7.91136 11.4903 9.10553 10.8932C10.3817 10.2551 11.5414 10.5914 12.333 11.0275C12.4855 10.8521 12.6503 10.6731 12.8272 10.4944C14.0443 9.26463 16.0905 7.80162 18.827 8.02181C22.242 8.29658 24.1524 10.0865 25.107 11.9189C25.4389 12.5559 25.645 13.1745 25.774 13.6989C25.9743 13.7572 26.1852 13.825 26.3986 13.9033C26.9122 14.0915 27.5831 14.3908 28.1495 14.8675C28.733 15.3587 29.4242 16.2438 29.3274 17.5021C29.178 19.4449 27.6727 21.3487 25.3333 21.3487H19.829L19.8533 21.3013C20.0173 20.9811 20.045 20.6082 19.9301 20.2674C19.8152 19.9265 19.5674 19.6465 19.243 19.491L18.9461 19.3487H25.3333C26.4379 19.3487 27.2486 18.45 27.3333 17.3487Z" style="fill: var(--data-weather-cloud-heavy-secondary-color)"/>
<path d="M9.33329 15.3487C9.33329 15.3487 8.66663 13.3487 9.99996 12.6821C11.3333 12.0154 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 14.8855 9.71116 18.6666 10.0154C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4497 15.8351 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H18.9461L17.6415 18.7234L18.4947 13.5503C18.6022 12.8983 18.2159 12.266 17.5868 12.0639C16.9577 11.8618 16.2754 12.1511 15.9832 12.7437L12.7266 19.3487H6.66663C5.56206 19.3487 4.66663 18.4533 4.66663 17.3487C4.66663 16.2442 5.33329 15.3487 6.66663 15.3487H9.33329Z" style="fill: var(--data-weather-cloud-heavy-secondary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.87804 23.337C4.14866 22.7507 4.78781 22.5309 5.35635 22.7496L5.3665 22.7535L5.37638 22.758C5.96273 23.0287 6.18248 23.6678 5.96381 24.2364L5.95839 24.2504L4.84004 26.8058C4.65323 27.2665 4.23118 27.49 3.79669 27.49C3.64576 27.49 3.47651 27.444 3.37128 27.4089L3.35377 27.4031L3.33701 27.3953C2.75065 27.1247 2.53091 26.4856 2.74958 25.917L2.75499 25.9029L3.87804 23.337Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5447 26.0037C8.81533 25.4173 9.45447 25.1976 10.023 25.4162L10.0332 25.4201L10.043 25.4247C10.6294 25.6953 10.8491 26.3345 10.6305 26.903L10.6251 26.9171L9.5067 29.4725C9.31989 29.9331 8.89785 30.1567 8.46336 30.1567C8.31243 30.1567 8.14318 30.1107 8.03795 30.0756L8.02043 30.0697L8.00367 30.062C7.41732 29.7914 7.19757 29.1522 7.41624 28.5837L7.42166 28.5696L8.5447 26.0037Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2114 24.6703C19.482 24.084 20.1211 23.8642 20.6897 24.0829L20.6998 24.0868L20.7097 24.0914C21.2961 24.362 21.5158 25.0011 21.2971 25.5697L21.2917 25.5838L20.1734 28.1392C19.9866 28.5998 19.5645 28.8234 19.13 28.8234C18.9791 28.8234 18.8098 28.7773 18.7046 28.7423L18.6871 28.7364L18.6703 28.7287C18.084 28.4581 17.8642 27.8189 18.0829 27.2504L18.0883 27.2363L19.2114 24.6703Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.2114 26.6703C27.482 26.084 28.1211 25.8642 28.6897 26.0829L28.6998 26.0868L28.7097 26.0914C29.2961 26.362 29.5158 27.0011 29.2971 27.5697L29.2917 27.5838L28.1734 30.1392C27.9866 30.5998 27.5645 30.8234 27.13 30.8234C26.9791 30.8234 26.8098 30.7773 26.7046 30.7423L26.6871 30.7364L26.6703 30.7287C26.084 30.4581 25.8642 29.8189 26.0829 29.2504L26.0883 29.2363L27.2114 26.6703Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.878 23.337C24.1487 22.7507 24.7878 22.5309 25.3563 22.7496L25.3665 22.7535L25.3764 22.758C25.9627 23.0287 26.1825 23.6678 25.9638 24.2364L25.9584 24.2504L24.84 26.8058C24.6532 27.2665 24.2312 27.49 23.7967 27.49C23.6458 27.49 23.4765 27.444 23.3713 27.4089L23.3538 27.4031L23.337 27.3953C22.7506 27.1247 22.5309 26.4856 22.7496 25.917L22.755 25.9029L23.878 23.337Z" style="fill: var(--data-weather-rain-primary-color)"/>
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
    'obi-lightning-heavy-rain-showers-day-colour': ObiLightningHeavyRainShowersDayColour;
  }
}