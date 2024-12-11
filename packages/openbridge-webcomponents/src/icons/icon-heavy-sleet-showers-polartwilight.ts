import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-heavy-sleet-showers-polartwilight')
export class ObiHeavySleetShowersPolartwilight extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.33329 4.66675C2.9651 4.66675 2.66663 4.96522 2.66663 5.33341C2.66663 5.7016 2.9651 6.00008 3.33329 6.00008H4.88749C4.88749 6.13816 4.82815 6.27623 4.70947 6.37592L2.84536 7.94165C2.50009 8.23165 2.68513 8.77504 3.14308 8.81601L5.61567 9.0372C5.93051 9.06536 6.14792 9.35089 6.0787 9.64532L5.53509 11.9575C5.4344 12.3858 5.91882 12.7216 6.31455 12.4979L8.45116 11.2901C8.47483 11.2767 8.49911 11.2653 8.52378 11.2558C7.74847 11.8519 7.40351 12.6549 7.25983 13.3488H6.66663C5.52695 13.3488 4.46207 13.7474 3.69549 14.5797C2.95372 15.3851 2.66663 16.4055 2.66663 17.3488C2.66663 19.558 4.45749 21.3488 6.66662 21.3488H25.3333C27.6727 21.3488 29.178 19.445 29.3274 17.5022C29.4242 16.244 28.733 15.3588 28.1495 14.8677C27.5831 14.3909 26.9122 14.0917 26.3986 13.9034C26.1852 13.8252 25.9743 13.7574 25.774 13.699C25.645 13.1747 25.4389 12.556 25.107 11.919C24.1524 10.0867 22.242 8.29671 18.827 8.02193C18.7346 8.01449 18.6429 8.00897 18.5521 8.0053C18.5332 7.98304 18.5118 7.96174 18.4879 7.94166L16.6238 6.37592C16.5051 6.27623 16.4458 6.13816 16.4458 6.00008H18C18.3681 6.00008 18.6666 5.7016 18.6666 5.33341C18.6666 4.96522 18.3681 4.66675 18 4.66675H3.33329ZM14.8772 6.00008H6.4561C6.4561 8.20922 8.34122 10.0001 10.6666 10.0001C12.992 10.0001 14.8772 8.20922 14.8772 6.00008ZM24 15.3488C24 15.3488 27.4497 15.8352 27.3333 17.3488C27.2486 18.4501 26.4379 19.3488 25.3333 19.3488H6.66663C5.56206 19.3488 4.66663 18.4534 4.66663 17.3488C4.66663 16.2442 5.33329 15.3488 6.66663 15.3488H9.33329C9.33329 15.3488 8.95829 14.2238 9.33329 13.3801C9.45829 13.0988 9.66663 12.8488 9.99996 12.6822C10.3898 12.4872 10.7796 12.5203 11.1362 12.6646C11.999 13.014 12.6666 14.0155 12.6666 14.0155C12.6666 14.0155 13.0854 13.2031 13.8692 12.3091C14.8895 11.1454 16.5282 9.84342 18.6666 10.0155C24 10.4446 24 15.3488 24 15.3488Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.878 23.3371C26.1487 22.7508 26.7878 22.531 27.3564 22.7497L27.3665 22.7536L27.3764 22.7582C27.9627 23.0288 28.1825 23.6679 27.9638 24.2365L27.9584 24.2506L26.84 26.8059C26.6532 27.2666 26.2312 27.4901 25.7967 27.4901C25.6458 27.4901 25.4765 27.4441 25.3713 27.409L25.3538 27.4032L25.337 27.3955C24.7507 27.1248 24.5309 26.4857 24.7496 25.9172L24.755 25.9031L25.878 23.3371Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2114 23.3371C15.482 22.7508 16.1211 22.531 16.6897 22.7497L16.6998 22.7536L16.7097 22.7582C17.2961 23.0288 17.5158 23.6679 17.2971 24.2365L17.2917 24.2506L16.1734 26.8059C15.9866 27.2666 15.5645 27.4901 15.13 27.4901C14.9791 27.4901 14.8098 27.4441 14.7046 27.409L14.6871 27.4032L14.6703 27.3955C14.084 27.1248 13.8642 26.4857 14.0829 25.9172L14.0883 25.9031L15.2114 23.3371Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.87804 26.0038C10.1487 25.4174 10.7878 25.1977 11.3564 25.4164L11.3665 25.4203L11.3764 25.4248C11.9627 25.6955 12.1825 26.3346 11.9638 26.9031L11.9584 26.9172L10.84 29.4726C10.6532 29.9333 10.2312 30.1568 9.79669 30.1568C9.64576 30.1568 9.47651 30.1108 9.37128 30.0757L9.35377 30.0699L9.33701 30.0621C8.75065 29.7915 8.53091 29.1524 8.74958 28.5838L8.75499 28.5697L9.87804 26.0038Z" fill="currentColor"/>
<path d="M4 27.9007C3.68114 27.696 3.57189 27.2428 3.75598 26.8883L4.17863 26.0745H3.33329C2.9651 26.0745 2.66663 25.7427 2.66663 25.3334C2.66663 24.9241 2.9651 24.5923 3.33329 24.5923H4.17863L3.75598 23.7785C3.57189 23.4241 3.68114 22.9708 4 22.7662C4.31886 22.5615 4.72659 22.683 4.91068 23.0374L5.33333 23.8512L5.75598 23.0374C5.94008 22.683 6.3478 22.5615 6.66666 22.7662C6.98553 22.9708 7.09478 23.4241 6.91068 23.7785L6.48804 24.5923H7.33329C7.70148 24.5923 7.99996 24.9241 7.99996 25.3334C7.99996 25.7427 7.70148 26.0745 7.33329 26.0745H6.48803L6.91068 26.8883C7.09478 27.2428 6.98553 27.696 6.66666 27.9007C6.3478 28.1053 5.94008 27.9839 5.75598 27.6294L5.33333 26.8156L4.91068 27.6294C4.72659 27.9839 4.31886 28.1053 4 27.9007Z" fill="currentColor"/>
<path d="M19.3333 30.5673C19.0145 30.3627 18.9052 29.9094 19.0893 29.555L19.512 28.7412H18.6666C18.2984 28.7412 18 28.4094 18 28.0001C18 27.5908 18.2984 27.259 18.6666 27.259H19.512L19.0893 26.4452C18.9052 26.0907 19.0145 25.6375 19.3333 25.4328C19.6522 25.2282 20.0599 25.3496 20.244 25.7041L20.6667 26.5179L21.0893 25.7041C21.2734 25.3496 21.6811 25.2282 22 25.4328C22.3189 25.6375 22.4281 26.0907 22.244 26.4452L21.8214 27.259H22.6666C23.0348 27.259 23.3333 27.5908 23.3333 28.0001C23.3333 28.4094 23.0348 28.7412 22.6666 28.7412H21.8214L22.244 29.555C22.4281 29.9094 22.3189 30.3627 22 30.5673C21.6811 30.772 21.2734 30.6505 21.0893 30.2961L20.6667 29.4823L20.244 30.2961C20.0599 30.6505 19.6522 30.772 19.3333 30.5673Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.33329 4.66675C2.9651 4.66675 2.66663 4.96522 2.66663 5.33341C2.66663 5.7016 2.9651 6.00008 3.33329 6.00008H4.88749C4.88749 6.13816 4.82815 6.27623 4.70947 6.37592L2.84536 7.94165C2.50009 8.23165 2.68513 8.77504 3.14308 8.81601L5.61567 9.0372C5.93051 9.06536 6.14792 9.35089 6.0787 9.64532L5.53509 11.9575C5.4344 12.3858 5.91882 12.7216 6.31455 12.4979L8.45116 11.2901C8.47483 11.2767 8.49911 11.2653 8.52378 11.2558C7.74847 11.8519 7.40351 12.6549 7.25983 13.3488H6.66663C5.52695 13.3488 4.46207 13.7474 3.69549 14.5797C2.95372 15.3851 2.66663 16.4055 2.66663 17.3488C2.66663 19.558 4.45749 21.3488 6.66662 21.3488H25.3333C27.6727 21.3488 29.178 19.445 29.3274 17.5022C29.4242 16.244 28.733 15.3588 28.1495 14.8677C27.5831 14.3909 26.9122 14.0917 26.3986 13.9034C26.1852 13.8252 25.9743 13.7574 25.774 13.699C25.645 13.1747 25.4389 12.556 25.107 11.919C24.1524 10.0867 22.242 8.29671 18.827 8.02193C18.7346 8.01449 18.6429 8.00897 18.5521 8.0053C18.5332 7.98304 18.5118 7.96174 18.4879 7.94166L16.6238 6.37592C16.5051 6.27623 16.4458 6.13816 16.4458 6.00008H18C18.3681 6.00008 18.6666 5.7016 18.6666 5.33341C18.6666 4.96522 18.3681 4.66675 18 4.66675H3.33329ZM14.8772 6.00008H6.4561C6.4561 8.20922 8.34122 10.0001 10.6666 10.0001C12.992 10.0001 14.8772 8.20922 14.8772 6.00008ZM24 15.3488C24 15.3488 27.4497 15.8352 27.3333 17.3488C27.2486 18.4501 26.4379 19.3488 25.3333 19.3488H6.66663C5.56206 19.3488 4.66663 18.4534 4.66663 17.3488C4.66663 16.2442 5.33329 15.3488 6.66663 15.3488H9.33329C9.33329 15.3488 8.95829 14.2238 9.33329 13.3801C9.45829 13.0988 9.66663 12.8488 9.99996 12.6822C10.3898 12.4872 10.7796 12.5203 11.1362 12.6646C11.999 13.014 12.6666 14.0155 12.6666 14.0155C12.6666 14.0155 13.0854 13.2031 13.8692 12.3091C14.8895 11.1454 16.5282 9.84342 18.6666 10.0155C24 10.4446 24 15.3488 24 15.3488Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.878 23.3371C26.1487 22.7508 26.7878 22.531 27.3564 22.7497L27.3665 22.7536L27.3764 22.7582C27.9627 23.0288 28.1825 23.6679 27.9638 24.2365L27.9584 24.2506L26.84 26.8059C26.6532 27.2666 26.2312 27.4901 25.7967 27.4901C25.6458 27.4901 25.4765 27.4441 25.3713 27.409L25.3538 27.4032L25.337 27.3955C24.7507 27.1248 24.5309 26.4857 24.7496 25.9172L24.755 25.9031L25.878 23.3371Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2114 23.3371C15.482 22.7508 16.1211 22.531 16.6897 22.7497L16.6998 22.7536L16.7097 22.7582C17.2961 23.0288 17.5158 23.6679 17.2971 24.2365L17.2917 24.2506L16.1734 26.8059C15.9866 27.2666 15.5645 27.4901 15.13 27.4901C14.9791 27.4901 14.8098 27.4441 14.7046 27.409L14.6871 27.4032L14.6703 27.3955C14.084 27.1248 13.8642 26.4857 14.0829 25.9172L14.0883 25.9031L15.2114 23.3371Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.87804 26.0038C10.1487 25.4174 10.7878 25.1977 11.3564 25.4164L11.3665 25.4203L11.3764 25.4248C11.9627 25.6955 12.1825 26.3346 11.9638 26.9031L11.9584 26.9172L10.84 29.4726C10.6532 29.9333 10.2312 30.1568 9.79669 30.1568C9.64576 30.1568 9.47651 30.1108 9.37128 30.0757L9.35377 30.0699L9.33701 30.0621C8.75065 29.7915 8.53091 29.1524 8.74958 28.5838L8.75499 28.5697L9.87804 26.0038Z" style="fill: var(--element-active-color)"/>
<path d="M4 27.9007C3.68114 27.696 3.57189 27.2428 3.75598 26.8883L4.17863 26.0745H3.33329C2.9651 26.0745 2.66663 25.7427 2.66663 25.3334C2.66663 24.9241 2.9651 24.5923 3.33329 24.5923H4.17863L3.75598 23.7785C3.57189 23.4241 3.68114 22.9708 4 22.7662C4.31886 22.5615 4.72659 22.683 4.91068 23.0374L5.33333 23.8512L5.75598 23.0374C5.94008 22.683 6.3478 22.5615 6.66666 22.7662C6.98553 22.9708 7.09478 23.4241 6.91068 23.7785L6.48804 24.5923H7.33329C7.70148 24.5923 7.99996 24.9241 7.99996 25.3334C7.99996 25.7427 7.70148 26.0745 7.33329 26.0745H6.48803L6.91068 26.8883C7.09478 27.2428 6.98553 27.696 6.66666 27.9007C6.3478 28.1053 5.94008 27.9839 5.75598 27.6294L5.33333 26.8156L4.91068 27.6294C4.72659 27.9839 4.31886 28.1053 4 27.9007Z" style="fill: var(--element-active-color)"/>
<path d="M19.3333 30.5673C19.0145 30.3627 18.9052 29.9094 19.0893 29.555L19.512 28.7412H18.6666C18.2984 28.7412 18 28.4094 18 28.0001C18 27.5908 18.2984 27.259 18.6666 27.259H19.512L19.0893 26.4452C18.9052 26.0907 19.0145 25.6375 19.3333 25.4328C19.6522 25.2282 20.0599 25.3496 20.244 25.7041L20.6667 26.5179L21.0893 25.7041C21.2734 25.3496 21.6811 25.2282 22 25.4328C22.3189 25.6375 22.4281 26.0907 22.244 26.4452L21.8214 27.259H22.6666C23.0348 27.259 23.3333 27.5908 23.3333 28.0001C23.3333 28.4094 23.0348 28.7412 22.6666 28.7412H21.8214L22.244 29.555C22.4281 29.9094 22.3189 30.3627 22 30.5673C21.6811 30.772 21.2734 30.6505 21.0893 30.2961L20.6667 29.4823L20.244 30.2961C20.0599 30.6505 19.6522 30.772 19.3333 30.5673Z" style="fill: var(--element-active-color)"/>
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
    'obi-heavy-sleet-showers-polartwilight': ObiHeavySleetShowersPolartwilight;
  }
}