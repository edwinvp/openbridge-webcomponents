import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-ship-highspeed')
export class ObiShipHighspeed extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M18 17.2504C18.94 17.7504 19.97 18.0004 21 18.0004H22V16.0004H21C20.3196 16.0004 19.6348 15.8506 18.9878 15.5649C18.6879 15.4357 17.9996 15.0073 17.9996 15.0073C17.9996 15.0073 17.3086 15.4296 17.0086 15.5588C15.7161 16.1147 14.2809 16.1143 12.9885 15.5576C12.6885 15.4284 12.0002 15 12.0002 15C12.0002 15 11.3115 15.4284 11.0115 15.5576C9.71724 16.1151 8.27971 16.1147 6.98565 15.5564C6.6857 15.4272 6.00021 15 6.00021 15C6.00021 15 5.31167 15.4313 5.01172 15.5605C4.36216 15.8488 3.68364 16.0004 3 16.0004H2V18.0004H3C4.03 18.0004 5.05 17.7504 6 17.2504C7.89 18.2504 10.11 18.2504 12 17.2504C13.89 18.2504 16.11 18.2504 18 17.2504Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.01172 14.0605C4.44032 14.3141 3.84767 14.462 3.24673 14.4939L2 12.0004L5 11.5004L5.59764 10.0063C5.84865 9.37878 6.39962 8.92048 7.06236 8.78793L10.1877 8.16287C10.7078 8.05884 11.2479 8.1657 11.6893 8.45993L14 10.0004L22 9.0004C21.4476 10.9339 20.2848 12.8674 19.3546 14.2109C19.2312 14.167 19.1089 14.1184 18.9878 14.0649C18.6879 13.9357 17.9996 13.5073 17.9996 13.5073C17.9996 13.5073 17.3086 13.9296 17.0086 14.0588C15.7161 14.6147 14.2808 14.6142 12.9885 14.0576C12.6885 13.9284 12.0002 13.5 12.0002 13.5C12.0002 13.5 11.3115 13.9284 11.0115 14.0576C9.71724 14.6151 8.27971 14.6147 6.98565 14.0564C6.6857 13.9272 6.00021 13.5 6.00021 13.5C6.00021 13.5 5.31167 13.9313 5.01172 14.0605ZM6.15396 11.308L6.72729 9.8747L8.5 9.52016L10.1762 10.6376L6.15396 11.308ZM12.5578 10.2407L10.7899 9.06217L9.5 9.32016L11.2162 10.4643L12.5578 10.2407Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 17.2504C18.94 17.7504 19.97 18.0004 21 18.0004H22V16.0004H21C20.3196 16.0004 19.6348 15.8506 18.9878 15.5649C18.6879 15.4357 17.9996 15.0073 17.9996 15.0073C17.9996 15.0073 17.3086 15.4296 17.0086 15.5588C15.7161 16.1147 14.2809 16.1143 12.9885 15.5576C12.6885 15.4284 12.0002 15 12.0002 15C12.0002 15 11.3115 15.4284 11.0115 15.5576C9.71724 16.1151 8.27971 16.1147 6.98565 15.5564C6.6857 15.4272 6.00021 15 6.00021 15C6.00021 15 5.31167 15.4313 5.01172 15.5605C4.36216 15.8488 3.68364 16.0004 3 16.0004H2V18.0004H3C4.03 18.0004 5.05 17.7504 6 17.2504C7.89 18.2504 10.11 18.2504 12 17.2504C13.89 18.2504 16.11 18.2504 18 17.2504Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.01172 14.0605C4.44032 14.3141 3.84767 14.462 3.24673 14.4939L2 12.0004L5 11.5004L5.59764 10.0063C5.84865 9.37878 6.39962 8.92048 7.06236 8.78793L10.1877 8.16287C10.7078 8.05884 11.2479 8.1657 11.6893 8.45993L14 10.0004L22 9.0004C21.4476 10.9339 20.2848 12.8674 19.3546 14.2109C19.2312 14.167 19.1089 14.1184 18.9878 14.0649C18.6879 13.9357 17.9996 13.5073 17.9996 13.5073C17.9996 13.5073 17.3086 13.9296 17.0086 14.0588C15.7161 14.6147 14.2808 14.6142 12.9885 14.0576C12.6885 13.9284 12.0002 13.5 12.0002 13.5C12.0002 13.5 11.3115 13.9284 11.0115 14.0576C9.71724 14.6151 8.27971 14.6147 6.98565 14.0564C6.6857 13.9272 6.00021 13.5 6.00021 13.5C6.00021 13.5 5.31167 13.9313 5.01172 14.0605ZM6.15396 11.308L6.72729 9.8747L8.5 9.52016L10.1762 10.6376L6.15396 11.308ZM12.5578 10.2407L10.7899 9.06217L9.5 9.32016L11.2162 10.4643L12.5578 10.2407Z" style="fill: var(--element-active-color)"/>
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
    'obi-ship-highspeed': ObiShipHighspeed;
  }
}