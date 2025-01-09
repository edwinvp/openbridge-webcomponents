import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-lightning-sleet-showers-day')
export class ObiLightningSleetShowersDay extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6302 1.62937C11.4045 1.24899 10.8094 1.31501 10.6726 1.73559L9.93387 4.00639C9.83981 4.29555 9.50221 4.44272 9.21485 4.31985L6.9581 3.35492C6.54012 3.1762 6.09568 3.5634 6.24296 3.97794L7.03817 6.21614C7.13943 6.50114 6.95483 6.8089 6.64501 6.8716L4.21188 7.36403C3.76123 7.45524 3.63723 8.01571 4.01236 8.26588L6.03773 9.61656C6.29563 9.78855 6.33454 10.1393 6.1206 10.3637L4.44046 12.1254C4.12928 12.4516 4.37309 12.9713 4.83277 12.9616L7.31467 12.9088C7.33529 12.9084 7.35561 12.9091 7.37559 12.9108C7.32722 13.0596 7.2893 13.2064 7.25983 13.3487H6.66663C5.52695 13.3487 4.46207 13.7473 3.69549 14.5796C2.95372 15.385 2.66663 16.4054 2.66663 17.3487C2.66663 19.5579 4.45749 21.3487 6.66662 21.3487H12.0175C11.9729 21.0764 12.0137 20.7947 12.1374 20.5437L12.7266 19.3487H6.66663C5.56206 19.3487 4.66663 18.4533 4.66663 17.3487C4.66663 16.2442 5.33329 15.3487 6.66663 15.3487H9.33329C9.33329 15.3487 8.95829 14.2237 9.33329 13.38C9.45829 13.0987 9.66663 12.8487 9.99996 12.6821C10.3898 12.4871 10.7796 12.5202 11.1362 12.6646C11.999 13.014 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 13.0854 13.203 13.8692 12.309C14.8895 11.1453 16.5282 9.84334 18.6666 10.0154C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4497 15.8351 27.3333 17.3487C27.2486 18.4501 26.4379 19.3487 25.3333 19.3487H18.9461L19.243 19.491C19.5674 19.6465 19.8152 19.9265 19.9301 20.2674C20.045 20.6083 20.0173 20.9811 19.8533 21.3013L19.829 21.3487H25.3333C27.6727 21.3487 29.178 19.4449 29.3274 17.5021C29.4242 16.2439 28.733 15.3588 28.1495 14.8676C27.5831 14.3908 26.9122 14.0916 26.3986 13.9033C26.1852 13.8251 25.9743 13.7573 25.774 13.6989C25.645 13.1746 25.4389 12.5559 25.107 11.9189C24.1524 10.0866 22.242 8.29662 18.827 8.02185C18.6026 8.00379 18.3829 7.99706 18.1679 8.00059L19.5596 6.54135C19.8707 6.21506 19.6269 5.69538 19.1672 5.70515L16.6853 5.75791C16.3693 5.76462 16.1218 5.5048 16.1581 5.20454L16.4435 2.84648C16.4963 2.40973 15.9778 2.12935 15.6092 2.39533L13.6188 3.83136C13.3653 4.01422 13.0037 3.9446 12.8485 3.68309L11.6302 1.62937ZM9.10553 10.8932C8.81849 11.0367 8.57294 11.2042 8.36309 11.3875C8.07206 10.9161 7.8796 10.3786 7.81515 9.79755C7.5716 7.60187 9.24779 5.6141 11.559 5.35774C13.6897 5.1214 15.6162 6.43897 16.0951 8.36647C14.6977 8.8461 13.5967 9.71689 12.8272 10.4944C12.6503 10.6732 12.4855 10.8521 12.333 11.0276C11.5414 10.5915 10.3817 10.2551 9.10553 10.8932Z" fill="currentColor"/>
<path d="M17.1791 13.3333L16.1632 19.4933L18.6666 20.6933L14.2403 29.3333L15.9093 22.3333L13.3333 21.1333L17.1791 13.3333Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.878 24.6704C20.1487 24.084 20.7878 23.8643 21.3564 24.083L21.3665 24.0869L21.3764 24.0914C21.9627 24.362 22.1825 25.0012 21.9638 25.5697L21.9584 25.5838L20.84 28.1392C20.6532 28.5999 20.2312 28.8234 19.7967 28.8234C19.6458 28.8234 19.4765 28.7774 19.3713 28.7423L19.3538 28.7365L19.337 28.7287C18.7507 28.4581 18.5309 27.819 18.7496 27.2504L18.755 27.2363L19.878 24.6704Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5447 23.337C24.8153 22.7507 25.4545 22.5309 26.023 22.7496L26.0332 22.7535L26.043 22.7581C26.6294 23.0287 26.8491 23.6678 26.6305 24.2364L26.6251 24.2505L25.5067 26.8059C25.3199 27.2665 24.8978 27.4901 24.4634 27.4901C24.3124 27.4901 24.1432 27.444 24.0379 27.409L24.0204 27.4031L24.0037 27.3954C23.4173 27.1248 23.1976 26.4856 23.4162 25.9171L23.4217 25.903L24.5447 23.337Z" fill="currentColor"/>
<path d="M7.33333 27.9006C7.01447 27.6959 6.90522 27.2427 7.08931 26.8882L7.51197 26.0744H6.66663C6.29844 26.0744 5.99996 25.7426 5.99996 25.3333C5.99996 24.924 6.29844 24.5922 6.66663 24.5922H7.51196L7.08931 23.7784C6.90522 23.424 7.01447 22.9707 7.33333 22.7661C7.65219 22.5614 8.05992 22.6829 8.24401 23.0373L8.66667 23.8511L9.08931 23.0373C9.27341 22.6829 9.68114 22.5614 10 22.7661C10.3189 22.9707 10.4281 23.424 10.244 23.7784L9.82137 24.5922H10.6666C11.0348 24.5922 11.3333 24.924 11.3333 25.3333C11.3333 25.7426 11.0348 26.0744 10.6666 26.0744H9.82136L10.244 26.8882C10.4281 27.2427 10.3189 27.6959 10 27.9006C9.68114 28.1052 9.27341 27.9838 9.08931 27.6293L8.66667 26.8155L8.24402 27.6293C8.05992 27.9838 7.65219 28.1052 7.33333 27.9006Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6302 1.62937C11.4045 1.24899 10.8094 1.31501 10.6726 1.73559L9.93387 4.00639C9.83981 4.29555 9.50221 4.44272 9.21485 4.31985L6.9581 3.35492C6.54012 3.1762 6.09568 3.5634 6.24296 3.97794L7.03817 6.21614C7.13943 6.50114 6.95483 6.8089 6.64501 6.8716L4.21188 7.36403C3.76123 7.45524 3.63723 8.01571 4.01236 8.26588L6.03773 9.61656C6.29563 9.78855 6.33454 10.1393 6.1206 10.3637L4.44046 12.1254C4.12928 12.4516 4.37309 12.9713 4.83277 12.9616L7.31467 12.9088C7.33529 12.9084 7.35561 12.9091 7.37559 12.9108C7.32722 13.0596 7.2893 13.2064 7.25983 13.3487H6.66663C5.52695 13.3487 4.46207 13.7473 3.69549 14.5796C2.95372 15.385 2.66663 16.4054 2.66663 17.3487C2.66663 19.5579 4.45749 21.3487 6.66662 21.3487H12.0175C11.9729 21.0764 12.0137 20.7947 12.1374 20.5437L12.7266 19.3487H6.66663C5.56206 19.3487 4.66663 18.4533 4.66663 17.3487C4.66663 16.2442 5.33329 15.3487 6.66663 15.3487H9.33329C9.33329 15.3487 8.95829 14.2237 9.33329 13.38C9.45829 13.0987 9.66663 12.8487 9.99996 12.6821C10.3898 12.4871 10.7796 12.5202 11.1362 12.6646C11.999 13.014 12.6666 14.0154 12.6666 14.0154C12.6666 14.0154 13.0854 13.203 13.8692 12.309C14.8895 11.1453 16.5282 9.84334 18.6666 10.0154C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4497 15.8351 27.3333 17.3487C27.2486 18.4501 26.4379 19.3487 25.3333 19.3487H18.9461L19.243 19.491C19.5674 19.6465 19.8152 19.9265 19.9301 20.2674C20.045 20.6083 20.0173 20.9811 19.8533 21.3013L19.829 21.3487H25.3333C27.6727 21.3487 29.178 19.4449 29.3274 17.5021C29.4242 16.2439 28.733 15.3588 28.1495 14.8676C27.5831 14.3908 26.9122 14.0916 26.3986 13.9033C26.1852 13.8251 25.9743 13.7573 25.774 13.6989C25.645 13.1746 25.4389 12.5559 25.107 11.9189C24.1524 10.0866 22.242 8.29662 18.827 8.02185C18.6026 8.00379 18.3829 7.99706 18.1679 8.00059L19.5596 6.54135C19.8707 6.21506 19.6269 5.69538 19.1672 5.70515L16.6853 5.75791C16.3693 5.76462 16.1218 5.5048 16.1581 5.20454L16.4435 2.84648C16.4963 2.40973 15.9778 2.12935 15.6092 2.39533L13.6188 3.83136C13.3653 4.01422 13.0037 3.9446 12.8485 3.68309L11.6302 1.62937ZM9.10553 10.8932C8.81849 11.0367 8.57294 11.2042 8.36309 11.3875C8.07206 10.9161 7.8796 10.3786 7.81515 9.79755C7.5716 7.60187 9.24779 5.6141 11.559 5.35774C13.6897 5.1214 15.6162 6.43897 16.0951 8.36647C14.6977 8.8461 13.5967 9.71689 12.8272 10.4944C12.6503 10.6732 12.4855 10.8521 12.333 11.0276C11.5414 10.5915 10.3817 10.2551 9.10553 10.8932Z" style="fill: var(--element-active-color)"/>
<path d="M17.1791 13.3333L16.1632 19.4933L18.6666 20.6933L14.2403 29.3333L15.9093 22.3333L13.3333 21.1333L17.1791 13.3333Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.878 24.6704C20.1487 24.084 20.7878 23.8643 21.3564 24.083L21.3665 24.0869L21.3764 24.0914C21.9627 24.362 22.1825 25.0012 21.9638 25.5697L21.9584 25.5838L20.84 28.1392C20.6532 28.5999 20.2312 28.8234 19.7967 28.8234C19.6458 28.8234 19.4765 28.7774 19.3713 28.7423L19.3538 28.7365L19.337 28.7287C18.7507 28.4581 18.5309 27.819 18.7496 27.2504L18.755 27.2363L19.878 24.6704Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5447 23.337C24.8153 22.7507 25.4545 22.5309 26.023 22.7496L26.0332 22.7535L26.043 22.7581C26.6294 23.0287 26.8491 23.6678 26.6305 24.2364L26.6251 24.2505L25.5067 26.8059C25.3199 27.2665 24.8978 27.4901 24.4634 27.4901C24.3124 27.4901 24.1432 27.444 24.0379 27.409L24.0204 27.4031L24.0037 27.3954C23.4173 27.1248 23.1976 26.4856 23.4162 25.9171L23.4217 25.903L24.5447 23.337Z" style="fill: var(--element-active-color)"/>
<path d="M7.33333 27.9006C7.01447 27.6959 6.90522 27.2427 7.08931 26.8882L7.51197 26.0744H6.66663C6.29844 26.0744 5.99996 25.7426 5.99996 25.3333C5.99996 24.924 6.29844 24.5922 6.66663 24.5922H7.51196L7.08931 23.7784C6.90522 23.424 7.01447 22.9707 7.33333 22.7661C7.65219 22.5614 8.05992 22.6829 8.24401 23.0373L8.66667 23.8511L9.08931 23.0373C9.27341 22.6829 9.68114 22.5614 10 22.7661C10.3189 22.9707 10.4281 23.424 10.244 23.7784L9.82137 24.5922H10.6666C11.0348 24.5922 11.3333 24.924 11.3333 25.3333C11.3333 25.7426 11.0348 26.0744 10.6666 26.0744H9.82136L10.244 26.8882C10.4281 27.2427 10.3189 27.6959 10 27.9006C9.68114 28.1052 9.27341 27.9838 9.08931 27.6293L8.66667 26.8155L8.24402 27.6293C8.05992 27.9838 7.65219 28.1052 7.33333 27.9006Z" style="fill: var(--element-active-color)"/>
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
    'obi-lightning-sleet-showers-day': ObiLightningSleetShowersDay;
  }
}