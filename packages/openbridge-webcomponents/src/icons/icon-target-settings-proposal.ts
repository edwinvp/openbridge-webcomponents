import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-target-settings-proposal')
export class ObiTargetSettingsProposal extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.9504 13.051C22.9832 12.7051 23 12.3545 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C12.3545 23 12.7051 22.9832 13.051 22.9504C12.4859 22.3856 12.017 21.7246 11.6708 20.9941C9.65542 20.9216 7.80892 20.1865 6.34267 19H11.0709C11.0242 18.6734 11 18.3395 11 18C11 17.6605 11.0242 17.3266 11.0709 17H8.886L12 8.696L13.4834 12.6518C14.0018 12.2137 14.5847 11.8495 15.2158 11.5756L12 3C16.8604 3 20.8209 6.85275 20.9941 11.6708C21.7246 12.017 22.3856 12.4859 22.9504 13.051ZM3 12C3 14.7049 4.19328 17.1311 6.08214 18.7809L12 3C7.02944 3 3 7.02944 3 12Z" fill="currentColor"/>
<path d="M16.9999 23L16.6999 21.5C16.4999 21.4167 16.3124 21.3292 16.1374 21.2375C15.9624 21.1458 15.7832 21.0333 15.5999 20.9L14.1499 21.35L13.1499 19.65L14.2999 18.65C14.2666 18.4167 14.2499 18.2 14.2499 18C14.2499 17.8 14.2666 17.5833 14.2999 17.35L13.1499 16.35L14.1499 14.65L15.5999 15.1C15.7832 14.9667 15.9624 14.8542 16.1374 14.7625C16.3124 14.6708 16.4999 14.5833 16.6999 14.5L16.9999 13H18.9999L19.2999 14.5C19.4999 14.5833 19.6874 14.675 19.8624 14.775C20.0374 14.875 20.2166 15 20.3999 15.15L21.8499 14.65L22.8499 16.4L21.6999 17.4C21.7332 17.6 21.7499 17.8083 21.7499 18.025C21.7499 18.2417 21.7332 18.45 21.6999 18.65L22.8499 19.65L21.8499 21.35L20.3999 20.9C20.2166 21.0333 20.0374 21.1458 19.8624 21.2375C19.6874 21.3292 19.4999 21.4167 19.2999 21.5L18.9999 23H16.9999ZM17.9999 20C18.5499 20 19.0207 19.8042 19.4124 19.4125C19.8041 19.0208 19.9999 18.55 19.9999 18C19.9999 17.45 19.8041 16.9792 19.4124 16.5875C19.0207 16.1958 18.5499 16 17.9999 16C17.4499 16 16.9791 16.1958 16.5874 16.5875C16.1957 16.9792 15.9999 17.45 15.9999 18C15.9999 18.55 16.1957 19.0208 16.5874 19.4125C16.9791 19.8042 17.4499 20 17.9999 20Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.9504 13.051C22.9832 12.7051 23 12.3545 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C12.3545 23 12.7051 22.9832 13.051 22.9504C12.4859 22.3856 12.017 21.7246 11.6708 20.9941C9.65542 20.9216 7.80892 20.1865 6.34267 19H11.0709C11.0242 18.6734 11 18.3395 11 18C11 17.6605 11.0242 17.3266 11.0709 17H8.886L12 8.696L13.4834 12.6518C14.0018 12.2137 14.5847 11.8495 15.2158 11.5756L12 3C16.8604 3 20.8209 6.85275 20.9941 11.6708C21.7246 12.017 22.3856 12.4859 22.9504 13.051ZM3 12C3 14.7049 4.19328 17.1311 6.08214 18.7809L12 3C7.02944 3 3 7.02944 3 12Z" style="fill: var(--element-active-color)"/>
<path d="M16.9999 23L16.6999 21.5C16.4999 21.4167 16.3124 21.3292 16.1374 21.2375C15.9624 21.1458 15.7832 21.0333 15.5999 20.9L14.1499 21.35L13.1499 19.65L14.2999 18.65C14.2666 18.4167 14.2499 18.2 14.2499 18C14.2499 17.8 14.2666 17.5833 14.2999 17.35L13.1499 16.35L14.1499 14.65L15.5999 15.1C15.7832 14.9667 15.9624 14.8542 16.1374 14.7625C16.3124 14.6708 16.4999 14.5833 16.6999 14.5L16.9999 13H18.9999L19.2999 14.5C19.4999 14.5833 19.6874 14.675 19.8624 14.775C20.0374 14.875 20.2166 15 20.3999 15.15L21.8499 14.65L22.8499 16.4L21.6999 17.4C21.7332 17.6 21.7499 17.8083 21.7499 18.025C21.7499 18.2417 21.7332 18.45 21.6999 18.65L22.8499 19.65L21.8499 21.35L20.3999 20.9C20.2166 21.0333 20.0374 21.1458 19.8624 21.2375C19.6874 21.3292 19.4999 21.4167 19.2999 21.5L18.9999 23H16.9999ZM17.9999 20C18.5499 20 19.0207 19.8042 19.4124 19.4125C19.8041 19.0208 19.9999 18.55 19.9999 18C19.9999 17.45 19.8041 16.9792 19.4124 16.5875C19.0207 16.1958 18.5499 16 17.9999 16C17.4499 16 16.9791 16.1958 16.5874 16.5875C16.1957 16.9792 15.9999 17.45 15.9999 18C15.9999 18.55 16.1957 19.0208 16.5874 19.4125C16.9791 19.8042 17.4499 20 17.9999 20Z" style="fill: var(--element-active-color)"/>
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
    'obi-target-settings-proposal': ObiTargetSettingsProposal;
  }
}