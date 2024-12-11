import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-wire-corner')
export class ObiWireCorner extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M24 10V14H18.4C17.2469 14 16.5023 14.0016 15.9357 14.0479C15.3923 14.0922 15.1909 14.1676 15.092 14.218C14.7157 14.4097 14.4097 14.7157 14.218 15.092C14.1676 15.1909 14.0922 15.3923 14.0479 15.9357C14.0016 16.5023 14 17.2469 14 18.4V24H10L10 18.3229V18.3228C9.99997 17.2686 9.99994 16.3591 10.0611 15.6099C10.1257 14.8193 10.2684 14.0328 10.654 13.2761C11.2292 12.1471 12.1471 11.2292 13.2761 10.654C14.0328 10.2684 14.8193 10.1257 15.6099 10.0611C16.3591 9.99994 17.2686 9.99997 18.3228 10H18.3229L24 10Z" fill="currentColor"/>
<path d="M18.3229 11C17.2546 11 16.391 11.0007 15.6914 11.0578C14.9628 11.1173 14.3225 11.2431 13.7301 11.545C12.7892 12.0243 12.0243 12.7892 11.545 13.7301C11.2431 14.3225 11.1173 14.9628 11.0578 15.6914C11.0007 16.391 11 17.2546 11 18.3229V24H10L10 18.3229V18.3228C9.99997 17.2686 9.99994 16.3591 10.0611 15.6099C10.1257 14.8193 10.2684 14.0328 10.654 13.2761C11.2292 12.1471 12.1471 11.2292 13.2761 10.654C14.0328 10.2684 14.8193 10.1257 15.6099 10.0611C16.3591 9.99994 17.2685 9.99997 18.3228 10H18.3228L24 10V11L18.3229 11Z" fill="currentColor"/>
<path d="M13 18.4C13 17.2641 13.0008 16.4712 13.0512 15.8542C13.1005 15.25 13.1925 14.9019 13.327 14.638C13.6146 14.0735 14.0735 13.6146 14.638 13.327C14.9019 13.1925 15.25 13.1005 15.8542 13.0512C16.4712 13.0008 17.2641 13 18.4 13L24 13V14H18.4C17.2469 14 16.5024 14.0016 15.9357 14.0479C15.3923 14.0923 15.1909 14.1676 15.092 14.218C14.7157 14.4097 14.4097 14.7157 14.218 15.092C14.1676 15.1909 14.0923 15.3923 14.0479 15.9357C14.0016 16.5024 14 17.2469 14 18.4V24H13L13 18.4Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 10V14H18.4C17.2469 14 16.5023 14.0016 15.9357 14.0479C15.3923 14.0922 15.1909 14.1676 15.092 14.218C14.7157 14.4097 14.4097 14.7157 14.218 15.092C14.1676 15.1909 14.0922 15.3923 14.0479 15.9357C14.0016 16.5023 14 17.2469 14 18.4V24H10L10 18.3229V18.3228C9.99997 17.2686 9.99994 16.3591 10.0611 15.6099C10.1257 14.8193 10.2684 14.0328 10.654 13.2761C11.2292 12.1471 12.1471 11.2292 13.2761 10.654C14.0328 10.2684 14.8193 10.1257 15.6099 10.0611C16.3591 9.99994 17.2686 9.99997 18.3228 10H18.3229L24 10Z" style="fill: var(--automation-pipes-primary-color)"/>
<path d="M18.3229 11C17.2546 11 16.391 11.0007 15.6914 11.0578C14.9628 11.1173 14.3225 11.2431 13.7301 11.545C12.7892 12.0243 12.0243 12.7892 11.545 13.7301C11.2431 14.3225 11.1173 14.9628 11.0578 15.6914C11.0007 16.391 11 17.2546 11 18.3229V24H10L10 18.3229V18.3228C9.99997 17.2686 9.99994 16.3591 10.0611 15.6099C10.1257 14.8193 10.2684 14.0328 10.654 13.2761C11.2292 12.1471 12.1471 11.2292 13.2761 10.654C14.0328 10.2684 14.8193 10.1257 15.6099 10.0611C16.3591 9.99994 17.2685 9.99997 18.3228 10H18.3228L24 10V11L18.3229 11Z" style="fill: var(--automation-pipes-tertiary-color)"/>
<path d="M13 18.4C13 17.2641 13.0008 16.4712 13.0512 15.8542C13.1005 15.25 13.1925 14.9019 13.327 14.638C13.6146 14.0735 14.0735 13.6146 14.638 13.327C14.9019 13.1925 15.25 13.1005 15.8542 13.0512C16.4712 13.0008 17.2641 13 18.4 13L24 13V14H18.4C17.2469 14 16.5024 14.0016 15.9357 14.0479C15.3923 14.0923 15.1909 14.1676 15.092 14.218C14.7157 14.4097 14.4097 14.7157 14.218 15.092C14.1676 15.1909 14.0923 15.3923 14.0479 15.9357C14.0016 16.5024 14 17.2469 14 18.4V24H13L13 18.4Z" style="fill: var(--automation-pipes-tertiary-color)"/>
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
    'obi-wire-corner': ObiWireCorner;
  }
}