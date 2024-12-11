import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-filter-2')
export class ObiFilter2 extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23 1L1 1L1 23L23 23L23 1ZM1 0C0.447715 0 0 0.447716 0 1L0 23C0 23.5523 0.447716 24 1 24L23 24C23.5523 24 24 23.5523 24 23L24 1C24 0.447715 23.5523 0 23 0L1 0Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.47 6.848C9.79218 5.79936 7.68266 5.72444 5.93468 6.6514L4.4685 7.42892L3.5315 5.66199L4.99767 4.88448C7.37628 3.62309 10.2469 3.72504 12.53 5.152C14.2078 6.20064 16.3173 6.27556 18.0653 5.3486L19.5315 4.57108L20.4685 6.33801L19.0023 7.11552C16.6237 8.37691 13.7531 8.27495 11.47 6.848Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.47 18.848C9.79218 17.7994 7.68266 17.7244 5.93468 18.6514L4.4685 19.4289L3.5315 17.662L4.99767 16.8845C7.37628 15.6231 10.2469 15.725 12.53 17.152C14.2078 18.2006 16.3173 18.2756 18.0653 17.3486L19.5315 16.5711L20.4685 18.338L19.0023 19.1155C16.6237 20.3769 13.7531 20.275 11.47 18.848Z" fill="currentColor"/>
<path d="M10.2937 12.2922L8.29289 14.293L9.70711 15.7072L12.1762 13.2381C14.326 14.2812 16.8631 14.2495 19.0023 13.1151L20.4685 12.3375L19.5315 10.5706L18.0653 11.3481C16.7068 12.0685 15.13 12.1838 13.7071 11.7072L15.7071 9.70718L14.2929 8.29297L11.8246 10.7613C9.67455 9.71786 7.13711 9.74946 4.99767 10.884L3.53149 11.6615L4.4685 13.4284L5.93467 12.6509C7.29342 11.9304 8.87062 11.8152 10.2937 12.2922Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23 1L1 1L1 23L23 23L23 1ZM1 0C0.447715 0 0 0.447716 0 1L0 23C0 23.5523 0.447716 24 1 24L23 24C23.5523 24 24 23.5523 24 23L24 1C24 0.447715 23.5523 0 23 0L1 0Z" style="fill: var(--automation-device-secondary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.47 6.848C9.79218 5.79936 7.68266 5.72444 5.93468 6.6514L4.4685 7.42892L3.5315 5.66199L4.99767 4.88448C7.37628 3.62309 10.2469 3.72504 12.53 5.152C14.2078 6.20064 16.3173 6.27556 18.0653 5.3486L19.5315 4.57108L20.4685 6.33801L19.0023 7.11552C16.6237 8.37691 13.7531 8.27495 11.47 6.848Z" style="fill: var(--automation-device-secondary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.47 18.848C9.79218 17.7994 7.68266 17.7244 5.93468 18.6514L4.4685 19.4289L3.5315 17.662L4.99767 16.8845C7.37628 15.6231 10.2469 15.725 12.53 17.152C14.2078 18.2006 16.3173 18.2756 18.0653 17.3486L19.5315 16.5711L20.4685 18.338L19.0023 19.1155C16.6237 20.3769 13.7531 20.275 11.47 18.848Z" style="fill: var(--automation-device-secondary-color)"/>
<path d="M10.2937 12.2922L8.29289 14.293L9.70711 15.7072L12.1762 13.2381C14.326 14.2812 16.8631 14.2495 19.0023 13.1151L20.4685 12.3375L19.5315 10.5706L18.0653 11.3481C16.7068 12.0685 15.13 12.1838 13.7071 11.7072L15.7071 9.70718L14.2929 8.29297L11.8246 10.7613C9.67455 9.71786 7.13711 9.74946 4.99767 10.884L3.53149 11.6615L4.4685 13.4284L5.93467 12.6509C7.29342 11.9304 8.87062 11.8152 10.2937 12.2922Z" style="fill: var(--automation-device-secondary-color)"/>
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
    'obi-filter-2': ObiFilter2;
  }
}