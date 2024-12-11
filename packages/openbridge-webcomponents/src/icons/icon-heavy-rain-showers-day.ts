import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-heavy-rain-showers-day')
export class ObiHeavyRainShowersDay extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6726 1.73559C10.8094 1.31501 11.4045 1.24899 11.6302 1.62937L12.8485 3.68309C13.0037 3.9446 13.3653 4.01422 13.6188 3.83136L15.6092 2.39533C15.9778 2.12935 16.4963 2.40973 16.4435 2.84648L16.1581 5.20454C16.1218 5.5048 16.3693 5.76462 16.6853 5.75791L19.1672 5.70515C19.6269 5.69538 19.8707 6.21506 19.5596 6.54135L18.1679 8.00059C18.3829 7.99706 18.6026 8.00379 18.827 8.02185C22.242 8.29662 24.1524 10.0866 25.107 11.9189C25.4389 12.5559 25.645 13.1746 25.774 13.6989C25.9743 13.7573 26.1852 13.8251 26.3986 13.9033C26.9122 14.0916 27.5831 14.3908 28.1495 14.8676C28.733 15.3588 29.4242 16.2439 29.3274 17.5021C29.178 19.4449 27.6727 21.3487 25.3333 21.3487H6.66662C4.45749 21.3487 2.66663 19.5579 2.66663 17.3487C2.66663 16.4054 2.95372 15.385 3.69549 14.5796C4.46207 13.7473 5.52695 13.3487 6.66663 13.3487H7.25983C7.2893 13.2064 7.32722 13.0596 7.37559 12.9108C7.35561 12.9091 7.33529 12.9084 7.31467 12.9088L4.83277 12.9616C4.37309 12.9713 4.12928 12.4516 4.44046 12.1254L6.1206 10.3637C6.33454 10.1393 6.29563 9.78855 6.03773 9.61656L4.01236 8.26588C3.63723 8.01571 3.76123 7.45524 4.21188 7.36403L6.64501 6.8716C6.95483 6.8089 7.13943 6.50114 7.03817 6.21614L6.24296 3.97794C6.09568 3.5634 6.54012 3.1762 6.9581 3.35492L9.21485 4.31985C9.50221 4.44272 9.83981 4.29555 9.93387 4.00639L10.6726 1.73559ZM8.36309 11.3875C8.57294 11.2042 8.81849 11.0367 9.10553 10.8932C10.3817 10.2551 11.5414 10.5915 12.333 11.0276C12.4855 10.8521 12.6503 10.6732 12.8272 10.4944C13.5967 9.71689 14.6977 8.8461 16.0951 8.36647C15.6162 6.43897 13.6897 5.1214 11.559 5.35774C9.24779 5.6141 7.5716 7.60187 7.81515 9.79755C7.8796 10.3786 8.07206 10.9161 8.36309 11.3875ZM27.3333 17.3487C27.4497 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6666 10.0154C16.5282 9.84334 14.8895 11.1453 13.8692 12.309C13.0854 13.203 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 11.999 13.014 11.1362 12.6646C10.7796 12.5202 10.3898 12.4871 9.99996 12.6821C9.66663 12.8487 9.45829 13.0987 9.33329 13.38C8.95829 14.2237 9.33329 15.3487 9.33329 15.3487H6.66663C5.33329 15.3487 4.66663 16.2442 4.66663 17.3487C4.66663 18.4533 5.56206 19.3487 6.66663 19.3487H25.3333C26.4379 19.3487 27.2486 18.4501 27.3333 17.3487Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.87804 23.337C6.14866 22.7507 6.78781 22.5309 7.35635 22.7496L7.3665 22.7535L7.37638 22.7581C7.96273 23.0287 8.18248 23.6678 7.96381 24.2364L7.95839 24.2505L6.84004 26.8059C6.65323 27.2665 6.23118 27.4901 5.79669 27.4901C5.64576 27.4901 5.47651 27.444 5.37128 27.409L5.35377 27.4031L5.33701 27.3954C4.75065 27.1248 4.53091 26.4856 4.74958 25.9171L4.75499 25.903L5.87804 23.337Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2114 23.337C15.482 22.7507 16.1211 22.5309 16.6897 22.7496L16.6998 22.7535L16.7097 22.7581C17.2961 23.0287 17.5158 23.6678 17.2971 24.2364L17.2917 24.2505L16.1734 26.8059C15.9866 27.2665 15.5645 27.4901 15.13 27.4901C14.9791 27.4901 14.8098 27.444 14.7046 27.409L14.6871 27.4031L14.6703 27.3954C14.084 27.1248 13.8642 26.4856 14.0829 25.9171L14.0883 25.903L15.2114 23.337Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2114 23.337C19.482 22.7507 20.1211 22.5309 20.6897 22.7496L20.6998 22.7535L20.7097 22.7581C21.2961 23.0287 21.5158 23.6678 21.2971 24.2364L21.2917 24.2505L20.1734 26.8059C19.9866 27.2665 19.5645 27.4901 19.13 27.4901C18.9791 27.4901 18.8098 27.444 18.7046 27.409L18.6871 27.4031L18.6703 27.3954C18.084 27.1248 17.8642 26.4856 18.0829 25.9171L18.0883 25.903L19.2114 23.337Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5447 26.0037C24.8153 25.4174 25.4545 25.1976 26.023 25.4163L26.0332 25.4202L26.043 25.4247C26.6294 25.6954 26.8491 26.3345 26.6305 26.9031L26.6251 26.9171L25.5067 29.4725C25.3199 29.9332 24.8978 30.1567 24.4634 30.1567C24.3124 30.1567 24.1432 30.1107 24.038 30.0756L24.0204 30.0698L24.0037 30.0621C23.4173 29.7914 23.1976 29.1523 23.4162 28.5837L23.4217 28.5697L24.5447 26.0037Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.87804 26.0037C10.1487 25.4174 10.7878 25.1976 11.3564 25.4163L11.3665 25.4202L11.3764 25.4247C11.9627 25.6954 12.1825 26.3345 11.9638 26.9031L11.9584 26.9171L10.84 29.4725C10.6532 29.9332 10.2312 30.1567 9.79669 30.1567C9.64576 30.1567 9.47651 30.1107 9.37128 30.0756L9.35377 30.0698L9.33701 30.0621C8.75065 29.7914 8.5309 29.1523 8.74958 28.5837L8.75499 28.5697L9.87804 26.0037Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6726 1.73559C10.8094 1.31501 11.4045 1.24899 11.6302 1.62937L12.8485 3.68309C13.0037 3.9446 13.3653 4.01422 13.6188 3.83136L15.6092 2.39533C15.9778 2.12935 16.4963 2.40973 16.4435 2.84648L16.1581 5.20454C16.1218 5.5048 16.3693 5.76462 16.6853 5.75791L19.1672 5.70515C19.6269 5.69538 19.8707 6.21506 19.5596 6.54135L18.1679 8.00059C18.3829 7.99706 18.6026 8.00379 18.827 8.02185C22.242 8.29662 24.1524 10.0866 25.107 11.9189C25.4389 12.5559 25.645 13.1746 25.774 13.6989C25.9743 13.7573 26.1852 13.8251 26.3986 13.9033C26.9122 14.0916 27.5831 14.3908 28.1495 14.8676C28.733 15.3588 29.4242 16.2439 29.3274 17.5021C29.178 19.4449 27.6727 21.3487 25.3333 21.3487H6.66662C4.45749 21.3487 2.66663 19.5579 2.66663 17.3487C2.66663 16.4054 2.95372 15.385 3.69549 14.5796C4.46207 13.7473 5.52695 13.3487 6.66663 13.3487H7.25983C7.2893 13.2064 7.32722 13.0596 7.37559 12.9108C7.35561 12.9091 7.33529 12.9084 7.31467 12.9088L4.83277 12.9616C4.37309 12.9713 4.12928 12.4516 4.44046 12.1254L6.1206 10.3637C6.33454 10.1393 6.29563 9.78855 6.03773 9.61656L4.01236 8.26588C3.63723 8.01571 3.76123 7.45524 4.21188 7.36403L6.64501 6.8716C6.95483 6.8089 7.13943 6.50114 7.03817 6.21614L6.24296 3.97794C6.09568 3.5634 6.54012 3.1762 6.9581 3.35492L9.21485 4.31985C9.50221 4.44272 9.83981 4.29555 9.93387 4.00639L10.6726 1.73559ZM8.36309 11.3875C8.57294 11.2042 8.81849 11.0367 9.10553 10.8932C10.3817 10.2551 11.5414 10.5915 12.333 11.0276C12.4855 10.8521 12.6503 10.6732 12.8272 10.4944C13.5967 9.71689 14.6977 8.8461 16.0951 8.36647C15.6162 6.43897 13.6897 5.1214 11.559 5.35774C9.24779 5.6141 7.5716 7.60187 7.81515 9.79755C7.8796 10.3786 8.07206 10.9161 8.36309 11.3875ZM27.3333 17.3487C27.4497 15.8351 24 15.3487 24 15.3487C24 15.3487 24 10.4445 18.6666 10.0154C16.5282 9.84334 14.8895 11.1453 13.8692 12.309C13.0854 13.203 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 11.999 13.014 11.1362 12.6646C10.7796 12.5202 10.3898 12.4871 9.99996 12.6821C9.66663 12.8487 9.45829 13.0987 9.33329 13.38C8.95829 14.2237 9.33329 15.3487 9.33329 15.3487H6.66663C5.33329 15.3487 4.66663 16.2442 4.66663 17.3487C4.66663 18.4533 5.56206 19.3487 6.66663 19.3487H25.3333C26.4379 19.3487 27.2486 18.4501 27.3333 17.3487Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.87804 23.337C6.14866 22.7507 6.78781 22.5309 7.35635 22.7496L7.3665 22.7535L7.37638 22.7581C7.96273 23.0287 8.18248 23.6678 7.96381 24.2364L7.95839 24.2505L6.84004 26.8059C6.65323 27.2665 6.23118 27.4901 5.79669 27.4901C5.64576 27.4901 5.47651 27.444 5.37128 27.409L5.35377 27.4031L5.33701 27.3954C4.75065 27.1248 4.53091 26.4856 4.74958 25.9171L4.75499 25.903L5.87804 23.337Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2114 23.337C15.482 22.7507 16.1211 22.5309 16.6897 22.7496L16.6998 22.7535L16.7097 22.7581C17.2961 23.0287 17.5158 23.6678 17.2971 24.2364L17.2917 24.2505L16.1734 26.8059C15.9866 27.2665 15.5645 27.4901 15.13 27.4901C14.9791 27.4901 14.8098 27.444 14.7046 27.409L14.6871 27.4031L14.6703 27.3954C14.084 27.1248 13.8642 26.4856 14.0829 25.9171L14.0883 25.903L15.2114 23.337Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2114 23.337C19.482 22.7507 20.1211 22.5309 20.6897 22.7496L20.6998 22.7535L20.7097 22.7581C21.2961 23.0287 21.5158 23.6678 21.2971 24.2364L21.2917 24.2505L20.1734 26.8059C19.9866 27.2665 19.5645 27.4901 19.13 27.4901C18.9791 27.4901 18.8098 27.444 18.7046 27.409L18.6871 27.4031L18.6703 27.3954C18.084 27.1248 17.8642 26.4856 18.0829 25.9171L18.0883 25.903L19.2114 23.337Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5447 26.0037C24.8153 25.4174 25.4545 25.1976 26.023 25.4163L26.0332 25.4202L26.043 25.4247C26.6294 25.6954 26.8491 26.3345 26.6305 26.9031L26.6251 26.9171L25.5067 29.4725C25.3199 29.9332 24.8978 30.1567 24.4634 30.1567C24.3124 30.1567 24.1432 30.1107 24.038 30.0756L24.0204 30.0698L24.0037 30.0621C23.4173 29.7914 23.1976 29.1523 23.4162 28.5837L23.4217 28.5697L24.5447 26.0037Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.87804 26.0037C10.1487 25.4174 10.7878 25.1976 11.3564 25.4163L11.3665 25.4202L11.3764 25.4247C11.9627 25.6954 12.1825 26.3345 11.9638 26.9031L11.9584 26.9171L10.84 29.4725C10.6532 29.9332 10.2312 30.1567 9.79669 30.1567C9.64576 30.1567 9.47651 30.1107 9.37128 30.0756L9.35377 30.0698L9.33701 30.0621C8.75065 29.7914 8.5309 29.1523 8.74958 28.5837L8.75499 28.5697L9.87804 26.0037Z" style="fill: var(--element-active-color)"/>
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
    'obi-heavy-rain-showers-day': ObiHeavyRainShowersDay;
  }
}