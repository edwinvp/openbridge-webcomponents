import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-location-2')
export class ObiLocation2 extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0104 15H9.05841V13.788L11.2184 11.604C11.6504 11.156 11.9984 10.78 12.2624 10.476C12.5344 10.172 12.7304 9.896 12.8504 9.648C12.9784 9.392 13.0424 9.116 13.0424 8.82C13.0424 8.46 12.9424 8.192 12.7424 8.016C12.5424 7.84 12.2744 7.752 11.9384 7.752C11.6024 7.752 11.2784 7.828 10.9664 7.98C10.6544 8.132 10.3264 8.348 9.98241 8.628L9.04641 7.512C9.29441 7.296 9.55441 7.1 9.82641 6.924C10.0984 6.74 10.4144 6.592 10.7744 6.48C11.1344 6.368 11.5624 6.312 12.0584 6.312C12.6184 6.312 13.0984 6.412 13.4984 6.612C13.8984 6.812 14.2064 7.088 14.4224 7.44C14.6464 7.784 14.7584 8.18 14.7584 8.628C14.7584 8.98 14.7024 9.308 14.5904 9.612C14.4864 9.916 14.3304 10.212 14.1224 10.5C13.9224 10.78 13.6744 11.072 13.3784 11.376C13.0904 11.672 12.7624 11.996 12.3944 12.348L11.2064 13.464V13.536H15.0104V15Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22ZM16.525 14.2625C15.5417 15.7875 14.0333 17.4833 12 19.35C9.96667 17.4833 8.45833 15.7875 7.475 14.2625C6.49167 12.7375 6 11.3833 6 10.2C6 8.38333 6.57917 6.89583 7.7375 5.7375C8.89583 4.57917 10.3167 4 12 4C13.6833 4 15.1042 4.57917 16.2625 5.7375C17.4208 6.89583 18 8.38333 18 10.2C18 11.3833 17.5083 12.7375 16.525 14.2625Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0104 15H9.05841V13.788L11.2184 11.604C11.6504 11.156 11.9984 10.78 12.2624 10.476C12.5344 10.172 12.7304 9.896 12.8504 9.648C12.9784 9.392 13.0424 9.116 13.0424 8.82C13.0424 8.46 12.9424 8.192 12.7424 8.016C12.5424 7.84 12.2744 7.752 11.9384 7.752C11.6024 7.752 11.2784 7.828 10.9664 7.98C10.6544 8.132 10.3264 8.348 9.98241 8.628L9.04641 7.512C9.29441 7.296 9.55441 7.1 9.82641 6.924C10.0984 6.74 10.4144 6.592 10.7744 6.48C11.1344 6.368 11.5624 6.312 12.0584 6.312C12.6184 6.312 13.0984 6.412 13.4984 6.612C13.8984 6.812 14.2064 7.088 14.4224 7.44C14.6464 7.784 14.7584 8.18 14.7584 8.628C14.7584 8.98 14.7024 9.308 14.5904 9.612C14.4864 9.916 14.3304 10.212 14.1224 10.5C13.9224 10.78 13.6744 11.072 13.3784 11.376C13.0904 11.672 12.7624 11.996 12.3944 12.348L11.2064 13.464V13.536H15.0104V15Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22ZM16.525 14.2625C15.5417 15.7875 14.0333 17.4833 12 19.35C9.96667 17.4833 8.45833 15.7875 7.475 14.2625C6.49167 12.7375 6 11.3833 6 10.2C6 8.38333 6.57917 6.89583 7.7375 5.7375C8.89583 4.57917 10.3167 4 12 4C13.6833 4 15.1042 4.57917 16.2625 5.7375C17.4208 6.89583 18 8.38333 18 10.2C18 11.3833 17.5083 12.7375 16.525 14.2625Z" style="fill: var(--element-active-color)"/>
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
    'obi-location-2': ObiLocation2;
  }
}