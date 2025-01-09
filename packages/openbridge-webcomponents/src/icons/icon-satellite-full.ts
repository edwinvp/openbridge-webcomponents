import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-satellite-full')
export class ObiSatelliteFull extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4442 3.68484C16.5361 4.13713 17.5282 4.80007 18.364 5.63579C19.1997 6.47152 19.8626 7.46367 20.3149 8.5556C20.7672 9.64753 21 10.8179 21 11.9998H23C23 10.5552 22.7155 9.12482 22.1627 7.79024C21.6099 6.45565 20.7996 5.24302 19.7782 4.22158C18.7567 3.20013 17.5441 2.38988 16.2095 1.83708C14.8749 1.28428 13.4445 0.999756 12 0.999756V2.99976C13.1819 2.99976 14.3522 3.23255 15.4442 3.68484Z" fill="currentColor"/>
<path d="M13.9137 7.38024C14.5203 7.63151 15.0715 7.99981 15.5358 8.4641C16.0001 8.92839 16.3684 9.47959 16.6197 10.0862C16.871 10.6928 17.0003 11.343 17.0003 11.9996H19.0003C19.0003 11.0804 18.8192 10.1701 18.4675 9.32085C18.1157 8.47157 17.6001 7.6999 16.9501 7.04989C16.3 6.39988 15.5284 5.88426 14.6791 5.53248C13.8298 5.1807 12.9196 4.99964 12.0003 4.99964L12.0003 6.99964C12.6569 6.99964 13.3071 7.12896 13.9137 7.38024Z" fill="currentColor"/>
<path d="M16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12C5 10.1435 5.7375 8.36299 7.05025 7.05023L11.707 11.707L12.0633 11.3508C12.0224 11.2416 12 11.1234 12 11C12 10.4477 12.4477 10 13 10C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12C12.9458 12 12.8927 11.9957 12.8409 11.9874L12.4141 12.4141L16.9497 16.9497Z" fill="currentColor"/>
<path d="M2 23L5.58481 18.3122L5.63604 18.3638C7.32387 20.0516 9.61305 20.9999 12 20.9999C12.689 20.9999 13.3699 20.9208 14.0305 20.7679L16 23H2Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4442 3.68484C16.5361 4.13713 17.5282 4.80007 18.364 5.63579C19.1997 6.47152 19.8626 7.46367 20.3149 8.5556C20.7672 9.64753 21 10.8179 21 11.9998H23C23 10.5552 22.7155 9.12482 22.1627 7.79024C21.6099 6.45565 20.7996 5.24302 19.7782 4.22158C18.7567 3.20013 17.5441 2.38988 16.2095 1.83708C14.8749 1.28428 13.4445 0.999756 12 0.999756V2.99976C13.1819 2.99976 14.3522 3.23255 15.4442 3.68484Z" style="fill: var(--element-active-color)"/>
<path d="M13.9137 7.38024C14.5203 7.63151 15.0715 7.99981 15.5358 8.4641C16.0001 8.92839 16.3684 9.47959 16.6197 10.0862C16.871 10.6928 17.0003 11.343 17.0003 11.9996H19.0003C19.0003 11.0804 18.8192 10.1701 18.4675 9.32085C18.1157 8.47157 17.6001 7.6999 16.9501 7.04989C16.3 6.39988 15.5284 5.88426 14.6791 5.53248C13.8298 5.1807 12.9196 4.99964 12.0003 4.99964L12.0003 6.99964C12.6569 6.99964 13.3071 7.12896 13.9137 7.38024Z" style="fill: var(--element-active-color)"/>
<path d="M16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12C5 10.1435 5.7375 8.36299 7.05025 7.05023L11.707 11.707L12.0633 11.3508C12.0224 11.2416 12 11.1234 12 11C12 10.4477 12.4477 10 13 10C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12C12.9458 12 12.8927 11.9957 12.8409 11.9874L12.4141 12.4141L16.9497 16.9497Z" style="fill: var(--element-active-color)"/>
<path d="M2 23L5.58481 18.3122L5.63604 18.3638C7.32387 20.0516 9.61305 20.9999 12 20.9999C12.689 20.9999 13.3699 20.9208 14.0305 20.7679L16 23H2Z" style="fill: var(--element-active-color)"/>
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
    'obi-satellite-full': ObiSatelliteFull;
  }
}