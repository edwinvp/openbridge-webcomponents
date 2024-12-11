import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-light-snow-showers-day-colour')
export class ObiLightSnowShowersDayColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 15.3487C24 15.3487 27.4497 15.8351 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H6.66663C5.56206 19.3487 4.66663 18.4533 4.66663 17.3487C4.66663 16.2441 5.33329 15.3487 6.66663 15.3487H9.33329C9.33329 15.3487 8.95829 14.2237 9.33329 13.3799C9.45829 13.0987 9.66663 12.8487 9.99996 12.682C10.3898 12.4871 10.7796 12.5202 11.1362 12.6645C11.999 13.0139 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 13.0854 13.203 13.8692 12.309C14.8895 11.1452 16.5282 9.8433 18.6666 10.0154C24 10.4445 24 15.3487 24 15.3487ZM12.333 11.0275C12.4855 10.8521 12.6503 10.6731 12.8272 10.4944C14.0443 9.26463 16.0905 7.80162 18.827 8.02181C22.242 8.29658 24.1524 10.0865 25.107 11.9189C25.4389 12.5559 25.645 13.1745 25.774 13.6989C25.9743 13.7572 26.1852 13.825 26.3986 13.9033C26.9122 14.0915 27.5831 14.3908 28.1495 14.8675C28.733 15.3587 29.4242 16.2438 29.3274 17.5021C29.178 19.4449 27.6727 21.3487 25.3333 21.3487H6.66662C4.45749 21.3487 2.66663 19.5578 2.66663 17.3487C2.66663 16.4054 2.95372 15.385 3.69549 14.5796C4.46207 13.7472 5.52695 13.3487 6.66663 13.3487H7.25983C7.43538 12.5009 7.91136 11.4903 9.10553 10.8932C10.3817 10.2551 11.5414 10.5914 12.333 11.0275Z" fill="currentColor"/>
<path d="M9.99996 12.6821C8.66663 13.3487 9.33329 15.3487 9.33329 15.3487H6.66663C5.33329 15.3487 4.66663 16.2442 4.66663 17.3487C4.66663 18.4533 5.56206 19.3487 6.66663 19.3487H25.3333C26.4379 19.3487 27.2486 18.45 27.3333 17.3487C27.4497 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6666 10.0154C14.8855 9.71116 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 11.3333 12.0154 9.99996 12.6821Z" fill="currentColor"/>
<path d="M11.6302 1.62937C11.4045 1.24899 10.8094 1.31501 10.6726 1.73559L9.93391 4.00639C9.83985 4.29555 9.50225 4.44272 9.21489 4.31985L6.95814 3.35492C6.54016 3.1762 6.09572 3.5634 6.243 3.97794L7.03821 6.21614C7.13947 6.50114 6.95487 6.8089 6.64505 6.8716L4.21192 7.36403C3.76127 7.45524 3.63728 8.01571 4.0124 8.26588L6.03777 9.61656C6.29567 9.78855 6.33458 10.1393 6.12064 10.3637L4.4405 12.1254C4.12932 12.4516 4.37313 12.9713 4.83281 12.9616L7.31471 12.9088C7.33533 12.9084 7.35567 12.9091 7.37565 12.9108C7.54618 12.3864 7.84648 11.8388 8.36314 11.3875C8.0721 10.9161 7.87964 10.3786 7.81519 9.79755C7.57164 7.60187 9.24783 5.6141 11.5591 5.35774C13.6897 5.1214 15.6163 6.43898 16.0951 8.36649C16.7266 8.14973 17.4186 8.01286 18.1679 8.00059L19.5596 6.54135C19.8708 6.21506 19.627 5.69538 19.1673 5.70515L16.6854 5.75791C16.3694 5.76462 16.1218 5.5048 16.1581 5.20454L16.4435 2.84648C16.4964 2.40973 15.9779 2.12935 15.6092 2.39533L13.6188 3.83136C13.3654 4.01422 13.0037 3.9446 12.8486 3.68309L11.6302 1.62937Z" fill="currentColor"/>
<path d="M8.3631 11.3875C8.57295 11.2042 8.8185 11.0367 9.10554 10.8932C10.3817 10.2552 11.5414 10.5915 12.333 11.0276C12.4855 10.8521 12.6503 10.6732 12.8272 10.4944C13.5967 9.7169 14.6977 8.84611 16.0951 8.36648C15.6162 6.43896 13.6897 5.12137 11.559 5.35771C9.24778 5.61408 7.57159 7.60185 7.81514 9.79752C7.8796 10.3786 8.07206 10.916 8.3631 11.3875Z" fill="currentColor"/>
<path d="M9.33337 29.9007C9.01451 29.696 8.90526 29.2428 9.08936 28.8883L9.51201 28.0745H8.66667C8.29848 28.0745 8 27.7427 8 27.3334C8 26.9241 8.29848 26.5923 8.66667 26.5923H9.512L9.08936 25.7785C8.90526 25.4241 9.01451 24.9708 9.33337 24.7662C9.65223 24.5615 10.06 24.683 10.2441 25.0374L10.6667 25.8512L11.0894 25.0374C11.2735 24.683 11.6812 24.5615 12 24.7662C12.3189 24.9708 12.4282 25.4241 12.2441 25.7785L11.8214 26.5923H12.6667C13.0349 26.5923 13.3333 26.9241 13.3333 27.3334C13.3333 27.7427 13.0349 28.0745 12.6667 28.0745H11.8214L12.2441 28.8883C12.4282 29.2428 12.3189 29.696 12 29.9007C11.6812 30.1053 11.2735 29.9839 11.0894 29.6294L10.6667 28.8156L10.2441 29.6294C10.06 29.9839 9.65223 30.1053 9.33337 29.9007Z" fill="currentColor"/>
<path d="M19.3334 27.9007C19.0145 27.696 18.9053 27.2428 19.0894 26.8883L19.512 26.0745H18.6667C18.2985 26.0745 18 25.7427 18 25.3334C18 24.9241 18.2985 24.5923 18.6667 24.5923H19.512L19.0894 23.7785C18.9053 23.4241 19.0145 22.9708 19.3334 22.7662C19.6522 22.5615 20.06 22.683 20.2441 23.0374L20.6667 23.8512L21.0894 23.0374C21.2734 22.683 21.6812 22.5615 22 22.7662C22.3189 22.9708 22.4282 23.4241 22.2441 23.7785L21.8214 24.5923H22.6667C23.0349 24.5923 23.3333 24.9241 23.3333 25.3334C23.3333 25.7427 23.0349 26.0745 22.6667 26.0745H21.8214L22.2441 26.8883C22.4282 27.2428 22.3189 27.696 22 27.9007C21.6812 28.1053 21.2734 27.9839 21.0894 27.6294L20.6667 26.8156L20.2441 27.6294C20.06 27.9839 19.6522 28.1053 19.3334 27.9007Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 15.3487C24 15.3487 27.4497 15.8351 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H6.66663C5.56206 19.3487 4.66663 18.4533 4.66663 17.3487C4.66663 16.2441 5.33329 15.3487 6.66663 15.3487H9.33329C9.33329 15.3487 8.95829 14.2237 9.33329 13.3799C9.45829 13.0987 9.66663 12.8487 9.99996 12.682C10.3898 12.4871 10.7796 12.5202 11.1362 12.6645C11.999 13.0139 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 13.0854 13.203 13.8692 12.309C14.8895 11.1452 16.5282 9.8433 18.6666 10.0154C24 10.4445 24 15.3487 24 15.3487ZM12.333 11.0275C12.4855 10.8521 12.6503 10.6731 12.8272 10.4944C14.0443 9.26463 16.0905 7.80162 18.827 8.02181C22.242 8.29658 24.1524 10.0865 25.107 11.9189C25.4389 12.5559 25.645 13.1745 25.774 13.6989C25.9743 13.7572 26.1852 13.825 26.3986 13.9033C26.9122 14.0915 27.5831 14.3908 28.1495 14.8675C28.733 15.3587 29.4242 16.2438 29.3274 17.5021C29.178 19.4449 27.6727 21.3487 25.3333 21.3487H6.66662C4.45749 21.3487 2.66663 19.5578 2.66663 17.3487C2.66663 16.4054 2.95372 15.385 3.69549 14.5796C4.46207 13.7472 5.52695 13.3487 6.66663 13.3487H7.25983C7.43538 12.5009 7.91136 11.4903 9.10553 10.8932C10.3817 10.2551 11.5414 10.5914 12.333 11.0275Z" style="fill: var(--data-weather-cloud-light-primary-color)"/>
<path d="M9.99996 12.6821C8.66663 13.3487 9.33329 15.3487 9.33329 15.3487H6.66663C5.33329 15.3487 4.66663 16.2442 4.66663 17.3487C4.66663 18.4533 5.56206 19.3487 6.66663 19.3487H25.3333C26.4379 19.3487 27.2486 18.45 27.3333 17.3487C27.4497 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6666 10.0154C14.8855 9.71116 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 11.3333 12.0154 9.99996 12.6821Z" style="fill: var(--data-weather-cloud-light-seconday-color)"/>
<path d="M11.6302 1.62937C11.4045 1.24899 10.8094 1.31501 10.6726 1.73559L9.93391 4.00639C9.83985 4.29555 9.50225 4.44272 9.21489 4.31985L6.95814 3.35492C6.54016 3.1762 6.09572 3.5634 6.243 3.97794L7.03821 6.21614C7.13947 6.50114 6.95487 6.8089 6.64505 6.8716L4.21192 7.36403C3.76127 7.45524 3.63728 8.01571 4.0124 8.26588L6.03777 9.61656C6.29567 9.78855 6.33458 10.1393 6.12064 10.3637L4.4405 12.1254C4.12932 12.4516 4.37313 12.9713 4.83281 12.9616L7.31471 12.9088C7.33533 12.9084 7.35567 12.9091 7.37565 12.9108C7.54618 12.3864 7.84648 11.8388 8.36314 11.3875C8.0721 10.9161 7.87964 10.3786 7.81519 9.79755C7.57164 7.60187 9.24783 5.6141 11.5591 5.35774C13.6897 5.1214 15.6163 6.43898 16.0951 8.36649C16.7266 8.14973 17.4186 8.01286 18.1679 8.00059L19.5596 6.54135C19.8708 6.21506 19.627 5.69538 19.1673 5.70515L16.6854 5.75791C16.3694 5.76462 16.1218 5.5048 16.1581 5.20454L16.4435 2.84648C16.4964 2.40973 15.9779 2.12935 15.6092 2.39533L13.6188 3.83136C13.3654 4.01422 13.0037 3.9446 12.8486 3.68309L11.6302 1.62937Z" style="fill: var(--data-weather-sun-primary-color)"/>
<path d="M8.3631 11.3875C8.57295 11.2042 8.8185 11.0367 9.10554 10.8932C10.3817 10.2552 11.5414 10.5915 12.333 11.0276C12.4855 10.8521 12.6503 10.6732 12.8272 10.4944C13.5967 9.7169 14.6977 8.84611 16.0951 8.36648C15.6162 6.43896 13.6897 5.12137 11.559 5.35771C9.24778 5.61408 7.57159 7.60185 7.81514 9.79752C7.8796 10.3786 8.07206 10.916 8.3631 11.3875Z" style="fill: var(--data-weather-sun-secondary-color)"/>
<path d="M9.33337 29.9007C9.01451 29.696 8.90526 29.2428 9.08936 28.8883L9.51201 28.0745H8.66667C8.29848 28.0745 8 27.7427 8 27.3334C8 26.9241 8.29848 26.5923 8.66667 26.5923H9.512L9.08936 25.7785C8.90526 25.4241 9.01451 24.9708 9.33337 24.7662C9.65223 24.5615 10.06 24.683 10.2441 25.0374L10.6667 25.8512L11.0894 25.0374C11.2735 24.683 11.6812 24.5615 12 24.7662C12.3189 24.9708 12.4282 25.4241 12.2441 25.7785L11.8214 26.5923H12.6667C13.0349 26.5923 13.3333 26.9241 13.3333 27.3334C13.3333 27.7427 13.0349 28.0745 12.6667 28.0745H11.8214L12.2441 28.8883C12.4282 29.2428 12.3189 29.696 12 29.9007C11.6812 30.1053 11.2735 29.9839 11.0894 29.6294L10.6667 28.8156L10.2441 29.6294C10.06 29.9839 9.65223 30.1053 9.33337 29.9007Z" style="fill: var(--data-weather-snow-primary-color)"/>
<path d="M19.3334 27.9007C19.0145 27.696 18.9053 27.2428 19.0894 26.8883L19.512 26.0745H18.6667C18.2985 26.0745 18 25.7427 18 25.3334C18 24.9241 18.2985 24.5923 18.6667 24.5923H19.512L19.0894 23.7785C18.9053 23.4241 19.0145 22.9708 19.3334 22.7662C19.6522 22.5615 20.06 22.683 20.2441 23.0374L20.6667 23.8512L21.0894 23.0374C21.2734 22.683 21.6812 22.5615 22 22.7662C22.3189 22.9708 22.4282 23.4241 22.2441 23.7785L21.8214 24.5923H22.6667C23.0349 24.5923 23.3333 24.9241 23.3333 25.3334C23.3333 25.7427 23.0349 26.0745 22.6667 26.0745H21.8214L22.2441 26.8883C22.4282 27.2428 22.3189 27.696 22 27.9007C21.6812 28.1053 21.2734 27.9839 21.0894 27.6294L20.6667 26.8156L20.2441 27.6294C20.06 27.9839 19.6522 28.1053 19.3334 27.9007Z" style="fill: var(--data-weather-snow-primary-color)"/>
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
    'obi-light-snow-showers-day-colour': ObiLightSnowShowersDayColour;
  }
}