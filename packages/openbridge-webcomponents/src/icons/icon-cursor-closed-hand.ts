import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-cursor-closed-hand')
export class ObiCursorClosedHand extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_3597_857)">
<path d="M10.4852 13.2854C10.9664 12.0919 12.1346 11.25 13.5004 11.25C14.0409 11.25 14.5515 11.3825 15.0004 11.6164C15.4493 11.3825 15.9599 11.25 16.5004 11.25C17.4505 11.25 18.3043 11.6578 18.8978 12.3059C19.0934 12.2692 19.2949 12.25 19.5004 12.25C20.4227 12.25 21.2549 12.6348 21.8455 13.25H22.0004C24.0505 13.25 25.7852 14.9189 25.7299 17.0455C25.668 19.4304 25.4279 22.0954 24.1936 24.177C23.5493 25.2634 22.6396 26.1862 21.3936 26.8218C20.1639 27.4491 18.6993 27.75 17.0004 27.75C13.1203 27.75 10.4936 26.5522 8.95996 24.2565C7.5448 22.1381 7.31828 19.4158 7.26558 17.0389C7.22256 15.0981 8.66834 13.5369 10.4852 13.2854Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2641 14.25C11.3885 13.125 12.3423 12.25 13.5004 12.25C14.0767 12.25 14.6023 12.4666 15.0004 12.8229C15.3985 12.4666 15.9241 12.25 16.5004 12.25C17.3761 12.25 18.135 12.7503 18.5068 13.4807C18.8065 13.333 19.1437 13.25 19.5004 13.25C20.2805 13.25 20.9679 13.647 21.3715 14.25H22.0004C23.511 14.25 24.7703 15.4779 24.7303 17.0195C24.6684 19.4009 24.4233 21.8289 23.3334 23.6669C22.7769 24.6055 22.0019 25.3889 20.9392 25.931C19.8835 26.4695 18.5834 26.75 17.0004 26.75C13.3316 26.75 11.0804 25.6304 9.79148 23.701C8.55306 21.8472 8.31805 19.3946 8.26533 17.0167C8.2312 15.4773 9.4897 14.25 11.0004 14.25H11.2641ZM11.2462 15.75V18C11.2462 18.41 11.5887 18.7505 11.9982 18.75C12.4078 18.7505 12.7504 18.4101 12.7504 18V14.5C12.7504 14.0858 13.0862 13.75 13.5004 13.75C13.9146 13.75 14.2504 14.0858 14.2504 14.5V16.75C14.2504 17.1643 14.5862 17.5 15.0004 17.5C15.4146 17.5 15.7504 17.1643 15.7504 16.75V14.5C15.7504 14.0858 16.0862 13.75 16.5004 13.75C16.9146 13.75 17.2504 14.0858 17.2504 14.5V16.75C17.2504 17.1643 17.5862 17.5 18.0004 17.5C18.4146 17.5 18.7504 17.1643 18.7504 16.75V15.5C18.7504 15.0858 19.0862 14.75 19.5004 14.75C19.8613 14.75 20.1626 15.0049 20.2343 15.3445V17.25C20.2343 17.667 20.5765 18.0044 20.9923 18C21.4082 18.0044 21.7504 17.667 21.7504 17.25V15.75H22.0004C22.699 15.75 23.2481 16.3137 23.2308 16.9805C23.169 19.3575 22.9163 21.4295 22.0432 22.9018C21.6182 23.6185 21.0454 24.1929 20.2576 24.5948C19.4628 25.0002 18.4096 25.25 17.0004 25.25C13.65 25.25 11.9613 24.2488 11.0388 22.8678C10.0657 21.4112 9.81773 19.3639 9.76496 16.9834C9.75012 16.3142 10.302 15.75 11.0004 15.75H11.2462Z" fill="currentColor"/>
<defs>
<filter id="filter0_d_3597_857" x="6.26465" y="11.25" width="20.4666" height="18.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3597_857"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3597_857" result="shape"/>
</filter>
</defs>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_3597_857)">
<path d="M10.4852 13.2854C10.9664 12.0919 12.1346 11.25 13.5004 11.25C14.0409 11.25 14.5515 11.3825 15.0004 11.6164C15.4493 11.3825 15.9599 11.25 16.5004 11.25C17.4505 11.25 18.3043 11.6578 18.8978 12.3059C19.0934 12.2692 19.2949 12.25 19.5004 12.25C20.4227 12.25 21.2549 12.6348 21.8455 13.25H22.0004C24.0505 13.25 25.7852 14.9189 25.7299 17.0455C25.668 19.4304 25.4279 22.0954 24.1936 24.177C23.5493 25.2634 22.6396 26.1862 21.3936 26.8218C20.1639 27.4491 18.6993 27.75 17.0004 27.75C13.1203 27.75 10.4936 26.5522 8.95996 24.2565C7.5448 22.1381 7.31828 19.4158 7.26558 17.0389C7.22256 15.0981 8.66834 13.5369 10.4852 13.2854Z" style="fill: var(--element-active-inverted-color)"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2641 14.25C11.3885 13.125 12.3423 12.25 13.5004 12.25C14.0767 12.25 14.6023 12.4666 15.0004 12.8229C15.3985 12.4666 15.9241 12.25 16.5004 12.25C17.3761 12.25 18.135 12.7503 18.5068 13.4807C18.8065 13.333 19.1437 13.25 19.5004 13.25C20.2805 13.25 20.9679 13.647 21.3715 14.25H22.0004C23.511 14.25 24.7703 15.4779 24.7303 17.0195C24.6684 19.4009 24.4233 21.8289 23.3334 23.6669C22.7769 24.6055 22.0019 25.3889 20.9392 25.931C19.8835 26.4695 18.5834 26.75 17.0004 26.75C13.3316 26.75 11.0804 25.6304 9.79148 23.701C8.55306 21.8472 8.31805 19.3946 8.26533 17.0167C8.2312 15.4773 9.4897 14.25 11.0004 14.25H11.2641ZM11.2462 15.75V18C11.2462 18.41 11.5887 18.7505 11.9982 18.75C12.4078 18.7505 12.7504 18.4101 12.7504 18V14.5C12.7504 14.0858 13.0862 13.75 13.5004 13.75C13.9146 13.75 14.2504 14.0858 14.2504 14.5V16.75C14.2504 17.1643 14.5862 17.5 15.0004 17.5C15.4146 17.5 15.7504 17.1643 15.7504 16.75V14.5C15.7504 14.0858 16.0862 13.75 16.5004 13.75C16.9146 13.75 17.2504 14.0858 17.2504 14.5V16.75C17.2504 17.1643 17.5862 17.5 18.0004 17.5C18.4146 17.5 18.7504 17.1643 18.7504 16.75V15.5C18.7504 15.0858 19.0862 14.75 19.5004 14.75C19.8613 14.75 20.1626 15.0049 20.2343 15.3445V17.25C20.2343 17.667 20.5765 18.0044 20.9923 18C21.4082 18.0044 21.7504 17.667 21.7504 17.25V15.75H22.0004C22.699 15.75 23.2481 16.3137 23.2308 16.9805C23.169 19.3575 22.9163 21.4295 22.0432 22.9018C21.6182 23.6185 21.0454 24.1929 20.2576 24.5948C19.4628 25.0002 18.4096 25.25 17.0004 25.25C13.65 25.25 11.9613 24.2488 11.0388 22.8678C10.0657 21.4112 9.81773 19.3639 9.76496 16.9834C9.75012 16.3142 10.302 15.75 11.0004 15.75H11.2462Z" style="fill: var(--element-active-color)"/>
<defs>
<filter id="filter0_d_3597_857" x="6.26465" y="11.25" width="20.4666" height="18.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="0.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3597_857"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3597_857" result="shape"/>
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
    'obi-cursor-closed-hand': ObiCursorClosedHand;
  }
}