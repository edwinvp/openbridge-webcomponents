import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-cursor-pointing-hand')
export class ObiCursorPointingHand extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_3597_854)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7498 11.2595C17.599 11.3241 18.3562 11.7152 18.8972 12.3059C19.0928 12.2692 19.2943 12.25 19.4998 12.25C20.4221 12.25 21.2543 12.6348 21.8448 13.25H21.9998C24.0502 13.25 25.7835 14.919 25.7303 17.0439C25.6705 19.4264 25.4365 22.0929 24.2039 24.1757C23.5602 25.2633 22.6499 26.1866 21.4019 26.8223C20.1705 27.4495 18.703 27.75 16.9998 27.75C13.4943 27.75 10.9984 26.7827 9.19871 24.6929C7.53581 22.7619 6.64217 20.0391 5.77883 17.0858C5.25282 15.2864 6.25279 13.4044 8.0177 12.8154C8.76703 12.5653 9.54809 12.5837 10.2498 12.8246L10.2498 9.5C10.2498 7.70507 11.7048 6.25 13.4998 6.25C15.2947 6.25 16.7498 7.70508 16.7498 9.5V11.2595Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2504 9.5C11.2504 8.25736 12.2578 7.25 13.5004 7.25C14.743 7.25 15.7504 8.25736 15.7504 9.5L15.7504 12.378C15.985 12.2951 16.2374 12.25 16.5004 12.25C17.3761 12.25 18.135 12.7503 18.5068 13.4807C18.8065 13.333 19.1437 13.25 19.5004 13.25C20.2805 13.25 20.9679 13.647 21.3715 14.25H22.0004C23.5111 14.25 24.7699 15.4779 24.7312 17.0188C24.6715 19.3991 24.432 21.8278 23.344 23.6664C22.7882 24.6055 22.0131 25.3891 20.9487 25.9312C19.8914 26.4697 18.5884 26.75 17.0004 26.75C13.6973 26.75 11.5157 25.8502 9.9571 24.0403C8.45691 22.2983 7.61112 19.7875 6.7393 16.8052C6.36531 15.5258 7.07601 14.1841 8.33492 13.7639C9.44697 13.3928 10.6575 13.8514 11.2504 14.8436L11.2504 9.5ZM21.7504 15.75V16.5C21.7504 16.9142 21.4146 17.25 21.0004 17.25C20.5862 17.25 20.2504 16.9142 20.2504 16.5V15.5C20.2504 15.0858 19.9146 14.75 19.5004 14.75C19.0862 14.75 18.7504 15.0858 18.7504 15.5V16C18.7504 16.4142 18.4146 16.75 18.0004 16.75C17.5862 16.75 17.2504 16.4142 17.2504 16V14.5C17.2504 14.0858 16.9146 13.75 16.5004 13.75C16.0862 13.75 15.7504 14.0858 15.7504 14.5V16C15.7504 16.4142 15.4146 16.75 15.0004 16.75C14.5862 16.75 14.2504 16.4142 14.2504 16L14.2504 9.5C14.2504 9.08579 13.9146 8.75 13.5004 8.75C13.0862 8.75 12.7504 9.08579 12.7504 9.5L12.7504 18C12.7504 18.3477 12.5114 18.6499 12.173 18.7299C11.8346 18.8099 11.4856 18.6468 11.3298 18.3359L9.99867 15.6785C9.77986 15.2417 9.27321 15.0321 8.80978 15.1868C8.31035 15.3535 8.03293 15.8845 8.17905 16.3843C9.06394 19.4114 9.8379 21.6032 11.0937 23.0615C12.2911 24.4519 14.0017 25.25 17.0004 25.25C18.4155 25.25 19.4717 25.0001 20.2679 24.5946C21.0569 24.1927 21.6293 23.6185 22.0531 22.9024C22.9242 21.4306 23.1721 19.3592 23.2317 16.9812C23.2484 16.3137 22.6988 15.75 22.0004 15.75H21.7504Z" fill="currentColor"/>
<defs>
<filter id="filter0_d_3597_854" x="4.63867" y="6.25" width="22.0928" height="23.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3597_854"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3597_854" result="shape"/>
</filter>
</defs>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_3597_854)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7498 11.2595C17.599 11.3241 18.3562 11.7152 18.8972 12.3059C19.0928 12.2692 19.2943 12.25 19.4998 12.25C20.4221 12.25 21.2543 12.6348 21.8448 13.25H21.9998C24.0502 13.25 25.7835 14.919 25.7303 17.0439C25.6705 19.4264 25.4365 22.0929 24.2039 24.1757C23.5602 25.2633 22.6499 26.1866 21.4019 26.8223C20.1705 27.4495 18.703 27.75 16.9998 27.75C13.4943 27.75 10.9984 26.7827 9.19871 24.6929C7.53581 22.7619 6.64217 20.0391 5.77883 17.0858C5.25282 15.2864 6.25279 13.4044 8.0177 12.8154C8.76703 12.5653 9.54809 12.5837 10.2498 12.8246L10.2498 9.5C10.2498 7.70507 11.7048 6.25 13.4998 6.25C15.2947 6.25 16.7498 7.70508 16.7498 9.5V11.2595Z" style="fill: var(--element-active-inverted-color)"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2504 9.5C11.2504 8.25736 12.2578 7.25 13.5004 7.25C14.743 7.25 15.7504 8.25736 15.7504 9.5L15.7504 12.378C15.985 12.2951 16.2374 12.25 16.5004 12.25C17.3761 12.25 18.135 12.7503 18.5068 13.4807C18.8065 13.333 19.1437 13.25 19.5004 13.25C20.2805 13.25 20.9679 13.647 21.3715 14.25H22.0004C23.5111 14.25 24.7699 15.4779 24.7312 17.0188C24.6715 19.3991 24.432 21.8278 23.344 23.6664C22.7882 24.6055 22.0131 25.3891 20.9487 25.9312C19.8914 26.4697 18.5884 26.75 17.0004 26.75C13.6973 26.75 11.5157 25.8502 9.9571 24.0403C8.45691 22.2983 7.61112 19.7875 6.7393 16.8052C6.36531 15.5258 7.07601 14.1841 8.33492 13.7639C9.44697 13.3928 10.6575 13.8514 11.2504 14.8436L11.2504 9.5ZM21.7504 15.75V16.5C21.7504 16.9142 21.4146 17.25 21.0004 17.25C20.5862 17.25 20.2504 16.9142 20.2504 16.5V15.5C20.2504 15.0858 19.9146 14.75 19.5004 14.75C19.0862 14.75 18.7504 15.0858 18.7504 15.5V16C18.7504 16.4142 18.4146 16.75 18.0004 16.75C17.5862 16.75 17.2504 16.4142 17.2504 16V14.5C17.2504 14.0858 16.9146 13.75 16.5004 13.75C16.0862 13.75 15.7504 14.0858 15.7504 14.5V16C15.7504 16.4142 15.4146 16.75 15.0004 16.75C14.5862 16.75 14.2504 16.4142 14.2504 16L14.2504 9.5C14.2504 9.08579 13.9146 8.75 13.5004 8.75C13.0862 8.75 12.7504 9.08579 12.7504 9.5L12.7504 18C12.7504 18.3477 12.5114 18.6499 12.173 18.7299C11.8346 18.8099 11.4856 18.6468 11.3298 18.3359L9.99867 15.6785C9.77986 15.2417 9.27321 15.0321 8.80978 15.1868C8.31035 15.3535 8.03293 15.8845 8.17905 16.3843C9.06394 19.4114 9.8379 21.6032 11.0937 23.0615C12.2911 24.4519 14.0017 25.25 17.0004 25.25C18.4155 25.25 19.4717 25.0001 20.2679 24.5946C21.0569 24.1927 21.6293 23.6185 22.0531 22.9024C22.9242 21.4306 23.1721 19.3592 23.2317 16.9812C23.2484 16.3137 22.6988 15.75 22.0004 15.75H21.7504Z" style="fill: var(--element-active-color)"/>
<defs>
<filter id="filter0_d_3597_854" x="4.63867" y="6.25" width="22.0928" height="23.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3597_854"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3597_854" result="shape"/>
</filter>
</defs>
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
    'obi-cursor-pointing-hand': ObiCursorPointingHand;
  }
}