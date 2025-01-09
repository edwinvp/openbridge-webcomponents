import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-fuse-02-off')
export class ObiFuse02Off extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.99997 15.4636L3.9978 15.4648L3.99997 15.4686L3.99997 21C3.99997 21.5523 4.44768 22 4.99997 22L19 22C19.5523 22 20 21.5523 20 21L20 8.53539L20.0018 8.53434L20 8.53119V3C20 2.44772 19.5523 2 19 2L4.99997 2C4.44768 2 3.99997 2.44772 3.99997 3L3.99997 15.4636ZM4.99997 3L19 3V6.80334L4.99997 14.8862L4.99997 3ZM19 9.11274L19 21L4.99997 21L4.99997 17.1956L19 9.11274Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3L19 3V6.80334L5 14.8862L5 3ZM19 9.11274L19 21L5 21V17.1956L19 9.11274Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.99997 15.4636L3.9978 15.4648L3.99997 15.4686L3.99997 21C3.99997 21.5523 4.44768 22 4.99997 22L19 22C19.5523 22 20 21.5523 20 21L20 8.53539L20.0018 8.53434L20 8.53119V3C20 2.44772 19.5523 2 19 2L4.99997 2C4.44768 2 3.99997 2.44772 3.99997 3L3.99997 15.4636ZM4.99997 3L19 3V6.80334L4.99997 14.8862L4.99997 3ZM19 9.11274L19 21L4.99997 21L4.99997 17.1956L19 9.11274Z" style="fill: var(--automation-device-tertiary-inverted-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 3L19 3V6.80334L5 14.8862L5 3ZM19 9.11274L19 21L5 21V17.1956L19 9.11274Z" style="fill: var(--automation-device-primary-inverted-color)"/>
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
    'obi-fuse-02-off': ObiFuse02Off;
  }
}