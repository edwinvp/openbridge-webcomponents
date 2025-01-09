import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-capacitor-03-off')
export class ObiCapacitor03Off extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M10 7L10 19C10 19.5523 9.55228 20 9 20C8.44772 20 8 19.5523 8 19V7C8 6.44772 8.44772 6 9 6C9.55228 6 10 6.44772 10 7Z" fill="currentColor"/>
<path d="M16 7L16 19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19L14 7C14 6.44772 14.4477 6 15 6C15.5523 6 16 6.44772 16 7Z" fill="currentColor"/>
<path d="M23.3141 0.686523L21.8999 7.75759L16.243 2.10074L23.3141 0.686523Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.677 5.90965L18.3643 4.22228L19.7785 5.6365L17 8.41501L17 19C17 20.1046 16.1046 21 15 21C13.8955 21 13 20.1046 13 19V12.415L11 14.415V19C11 20.1046 10.1046 21 9.00004 21C7.89547 21 7.00004 20.1046 7.00004 19V18.415L4.2222 21.1928L2.80798 19.7786L7.00004 15.5866V6.99998C7.00004 5.89541 7.89547 4.99998 9.00004 4.99998C10.1046 4.99998 11 5.89541 11 6.99998V11.5866L13 9.58658V6.99998C13 5.89541 13.8955 4.99998 15 4.99998C15.7024 4.99998 16.3202 5.36202 16.677 5.90965ZM15.937 6.64966C15.795 6.27016 15.4291 5.99998 15 5.99998C14.4478 5.99998 14 6.4477 14 6.99998V8.58658L15.937 6.64966ZM14 11.415V19C14 19.5523 14.4478 20 15 20C15.5523 20 16 19.5523 16 19L16 9.41501L14 11.415ZM10 12.5866L10 6.99998C10 6.4477 9.55232 5.99998 9.00004 5.99998C8.44775 5.99998 8.00004 6.4477 8.00004 6.99998L8.00004 14.5866L10 12.5866ZM8.00004 17.415V19C8.00004 19.5523 8.44775 20 9.00004 20C9.55232 20 10 19.5523 10 19L10 15.415L8.00004 17.415Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 7L10 19C10 19.5523 9.55228 20 9 20C8.44772 20 8 19.5523 8 19V7C8 6.44772 8.44772 6 9 6C9.55228 6 10 6.44772 10 7Z" style="fill: var(--automation-device-primary-inverted-color)"/>
<path d="M16 7L16 19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19L14 7C14 6.44772 14.4477 6 15 6C15.5523 6 16 6.44772 16 7Z" style="fill: var(--automation-device-primary-inverted-color)"/>
<path d="M23.3141 0.686523L21.8999 7.75759L16.243 2.10074L23.3141 0.686523Z" style="fill: var(--automation-device-tertiary-inverted-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.677 5.90965L18.3643 4.22228L19.7785 5.6365L17 8.41501L17 19C17 20.1046 16.1046 21 15 21C13.8955 21 13 20.1046 13 19V12.415L11 14.415V19C11 20.1046 10.1046 21 9.00004 21C7.89547 21 7.00004 20.1046 7.00004 19V18.415L4.2222 21.1928L2.80798 19.7786L7.00004 15.5866V6.99998C7.00004 5.89541 7.89547 4.99998 9.00004 4.99998C10.1046 4.99998 11 5.89541 11 6.99998V11.5866L13 9.58658V6.99998C13 5.89541 13.8955 4.99998 15 4.99998C15.7024 4.99998 16.3202 5.36202 16.677 5.90965ZM15.937 6.64966C15.795 6.27016 15.4291 5.99998 15 5.99998C14.4478 5.99998 14 6.4477 14 6.99998V8.58658L15.937 6.64966ZM14 11.415V19C14 19.5523 14.4478 20 15 20C15.5523 20 16 19.5523 16 19L16 9.41501L14 11.415ZM10 12.5866L10 6.99998C10 6.4477 9.55232 5.99998 9.00004 5.99998C8.44775 5.99998 8.00004 6.4477 8.00004 6.99998L8.00004 14.5866L10 12.5866ZM8.00004 17.415V19C8.00004 19.5523 8.44775 20 9.00004 20C9.55232 20 10 19.5523 10 19L10 15.415L8.00004 17.415Z" style="fill: var(--automation-device-tertiary-inverted-color)"/>
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
    'obi-capacitor-03-off': ObiCapacitor03Off;
  }
}