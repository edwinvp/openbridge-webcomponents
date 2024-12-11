import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-light-sleet-showers-polartwilight')
export class ObiLightSleetShowersPolartwilight extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.33329 4.66675C2.9651 4.66675 2.66663 4.96522 2.66663 5.33341C2.66663 5.7016 2.9651 6.00008 3.33329 6.00008H4.88749C4.88749 6.13816 4.82815 6.27623 4.70947 6.37592L2.84536 7.94165C2.50009 8.23165 2.68513 8.77504 3.14308 8.81601L5.61567 9.0372C5.93051 9.06536 6.14792 9.35089 6.0787 9.64532L5.53509 11.9575C5.4344 12.3858 5.91882 12.7216 6.31455 12.4979L8.45116 11.2901C8.47483 11.2767 8.49911 11.2653 8.52378 11.2558C7.74847 11.8519 7.40351 12.6549 7.25983 13.3488H6.66663C5.52695 13.3488 4.46207 13.7474 3.69549 14.5797C2.95372 15.3851 2.66663 16.4055 2.66663 17.3488C2.66663 19.558 4.45749 21.3488 6.66662 21.3488H25.3333C27.6727 21.3488 29.178 19.445 29.3274 17.5022C29.4242 16.244 28.733 15.3588 28.1495 14.8677C27.5831 14.3909 26.9122 14.0917 26.3986 13.9034C26.1852 13.8252 25.9743 13.7574 25.774 13.699C25.645 13.1747 25.4389 12.556 25.107 11.919C24.1524 10.0867 22.242 8.29671 18.827 8.02193C18.7346 8.01449 18.6429 8.00897 18.5521 8.0053C18.5332 7.98304 18.5118 7.96174 18.4879 7.94166L16.6238 6.37592C16.5051 6.27623 16.4458 6.13816 16.4458 6.00008H18C18.3681 6.00008 18.6666 5.7016 18.6666 5.33341C18.6666 4.96522 18.3681 4.66675 18 4.66675H3.33329ZM14.8772 6.00008H6.4561C6.4561 8.20922 8.34122 10.0001 10.6666 10.0001C12.992 10.0001 14.8772 8.20922 14.8772 6.00008ZM24 15.3488C24 15.3488 27.4497 15.8352 27.3333 17.3488C27.2486 18.4501 26.4379 19.3488 25.3333 19.3488H6.66663C5.56206 19.3488 4.66663 18.4534 4.66663 17.3488C4.66663 16.2442 5.33329 15.3488 6.66663 15.3488H9.33329C9.33329 15.3488 8.95829 14.2238 9.33329 13.3801C9.45829 13.0988 9.66663 12.8488 9.99996 12.6822C10.3898 12.4872 10.7796 12.5203 11.1362 12.6646C11.999 13.014 12.6666 14.0155 12.6666 14.0155C12.6666 14.0155 13.0854 13.2031 13.8692 12.3091C14.8895 11.1454 16.5282 9.84342 18.6666 10.0155C24 10.4446 24 15.3488 24 15.3488Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2114 23.3371C19.482 22.7508 20.1211 22.531 20.6897 22.7497L20.6998 22.7536L20.7097 22.7582C21.2961 23.0288 21.5158 23.6679 21.2971 24.2365L21.2917 24.2506L20.1734 26.8059C19.9866 27.2666 19.5645 27.4901 19.13 27.4901C18.9791 27.4901 18.8098 27.4441 18.7046 27.409L18.6871 27.4032L18.6703 27.3955C18.084 27.1248 17.8642 26.4857 18.0829 25.9172L18.0883 25.9031L19.2114 23.3371Z" fill="currentColor"/>
<path d="M11.3333 29.234C11.0145 29.0294 10.9052 28.5761 11.0893 28.2216L11.512 27.4078H10.6666C10.2984 27.4078 9.99996 27.076 9.99996 26.6667C9.99996 26.2574 10.2984 25.9256 10.6666 25.9256H11.512L11.0893 25.1119C10.9052 24.7574 11.0145 24.3041 11.3333 24.0995C11.6522 23.8948 12.0599 24.0163 12.244 24.3708L12.6667 25.1845L13.0893 24.3708C13.2734 24.0163 13.6811 23.8948 14 24.0995C14.3189 24.3041 14.4281 24.7574 14.244 25.1119L13.8214 25.9256H14.6666C15.0348 25.9256 15.3333 26.2574 15.3333 26.6667C15.3333 27.076 15.0348 27.4078 14.6666 27.4078H13.8214L14.244 28.2216C14.4281 28.5761 14.3189 29.0294 14 29.234C13.6811 29.4387 13.2734 29.3172 13.0893 28.9627L12.6667 28.149L12.244 28.9627C12.0599 29.3172 11.6522 29.4387 11.3333 29.234Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.33329 4.66675C2.9651 4.66675 2.66663 4.96522 2.66663 5.33341C2.66663 5.7016 2.9651 6.00008 3.33329 6.00008H4.88749C4.88749 6.13816 4.82815 6.27623 4.70947 6.37592L2.84536 7.94165C2.50009 8.23165 2.68513 8.77504 3.14308 8.81601L5.61567 9.0372C5.93051 9.06536 6.14792 9.35089 6.0787 9.64532L5.53509 11.9575C5.4344 12.3858 5.91882 12.7216 6.31455 12.4979L8.45116 11.2901C8.47483 11.2767 8.49911 11.2653 8.52378 11.2558C7.74847 11.8519 7.40351 12.6549 7.25983 13.3488H6.66663C5.52695 13.3488 4.46207 13.7474 3.69549 14.5797C2.95372 15.3851 2.66663 16.4055 2.66663 17.3488C2.66663 19.558 4.45749 21.3488 6.66662 21.3488H25.3333C27.6727 21.3488 29.178 19.445 29.3274 17.5022C29.4242 16.244 28.733 15.3588 28.1495 14.8677C27.5831 14.3909 26.9122 14.0917 26.3986 13.9034C26.1852 13.8252 25.9743 13.7574 25.774 13.699C25.645 13.1747 25.4389 12.556 25.107 11.919C24.1524 10.0867 22.242 8.29671 18.827 8.02193C18.7346 8.01449 18.6429 8.00897 18.5521 8.0053C18.5332 7.98304 18.5118 7.96174 18.4879 7.94166L16.6238 6.37592C16.5051 6.27623 16.4458 6.13816 16.4458 6.00008H18C18.3681 6.00008 18.6666 5.7016 18.6666 5.33341C18.6666 4.96522 18.3681 4.66675 18 4.66675H3.33329ZM14.8772 6.00008H6.4561C6.4561 8.20922 8.34122 10.0001 10.6666 10.0001C12.992 10.0001 14.8772 8.20922 14.8772 6.00008ZM24 15.3488C24 15.3488 27.4497 15.8352 27.3333 17.3488C27.2486 18.4501 26.4379 19.3488 25.3333 19.3488H6.66663C5.56206 19.3488 4.66663 18.4534 4.66663 17.3488C4.66663 16.2442 5.33329 15.3488 6.66663 15.3488H9.33329C9.33329 15.3488 8.95829 14.2238 9.33329 13.3801C9.45829 13.0988 9.66663 12.8488 9.99996 12.6822C10.3898 12.4872 10.7796 12.5203 11.1362 12.6646C11.999 13.014 12.6666 14.0155 12.6666 14.0155C12.6666 14.0155 13.0854 13.2031 13.8692 12.3091C14.8895 11.1454 16.5282 9.84342 18.6666 10.0155C24 10.4446 24 15.3488 24 15.3488Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2114 23.3371C19.482 22.7508 20.1211 22.531 20.6897 22.7497L20.6998 22.7536L20.7097 22.7582C21.2961 23.0288 21.5158 23.6679 21.2971 24.2365L21.2917 24.2506L20.1734 26.8059C19.9866 27.2666 19.5645 27.4901 19.13 27.4901C18.9791 27.4901 18.8098 27.4441 18.7046 27.409L18.6871 27.4032L18.6703 27.3955C18.084 27.1248 17.8642 26.4857 18.0829 25.9172L18.0883 25.9031L19.2114 23.3371Z" style="fill: var(--element-active-color)"/>
<path d="M11.3333 29.234C11.0145 29.0294 10.9052 28.5761 11.0893 28.2216L11.512 27.4078H10.6666C10.2984 27.4078 9.99996 27.076 9.99996 26.6667C9.99996 26.2574 10.2984 25.9256 10.6666 25.9256H11.512L11.0893 25.1119C10.9052 24.7574 11.0145 24.3041 11.3333 24.0995C11.6522 23.8948 12.0599 24.0163 12.244 24.3708L12.6667 25.1845L13.0893 24.3708C13.2734 24.0163 13.6811 23.8948 14 24.0995C14.3189 24.3041 14.4281 24.7574 14.244 25.1119L13.8214 25.9256H14.6666C15.0348 25.9256 15.3333 26.2574 15.3333 26.6667C15.3333 27.076 15.0348 27.4078 14.6666 27.4078H13.8214L14.244 28.2216C14.4281 28.5761 14.3189 29.0294 14 29.234C13.6811 29.4387 13.2734 29.3172 13.0893 28.9627L12.6667 28.149L12.244 28.9627C12.0599 29.3172 11.6522 29.4387 11.3333 29.234Z" style="fill: var(--element-active-color)"/>
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
    'obi-light-sleet-showers-polartwilight': ObiLightSleetShowersPolartwilight;
  }
}