import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-buoy-can-t-shape')
export class ObiBuoyCanTShape extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.992 3.75H13V2.25L19 2.25V3.75L16.558 3.75L15.2184 8.21551L13.7816 7.78449L14.992 3.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.17071 21H2V19.5H4.27273L6 10H22L20.2727 19.5H22V21H14.8293C14.4175 22.1652 13.3062 23 12 23C10.6938 23 9.58254 22.1652 9.17071 21ZM20.2027 11.5L18.7481 19.5H14.9585C14.7205 18.0811 13.4865 17 12 17C10.5135 17 9.27952 18.0811 9.04148 19.5H5.79732L7.25186 11.5H20.2027ZM13.5 20C13.5 20.8284 12.8284 21.5 12 21.5C11.1716 21.5 10.5 20.8284 10.5 20C10.5 19.1716 11.1716 18.5 12 18.5C12.8284 18.5 13.5 19.1716 13.5 20Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.992 3.75H13V2.25L19 2.25V3.75L16.558 3.75L15.2184 8.21551L13.7816 7.78449L14.992 3.75Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.17071 21H2V19.5H4.27273L6 10H22L20.2727 19.5H22V21H14.8293C14.4175 22.1652 13.3062 23 12 23C10.6938 23 9.58254 22.1652 9.17071 21ZM20.2027 11.5L18.7481 19.5H14.9585C14.7205 18.0811 13.4865 17 12 17C10.5135 17 9.27952 18.0811 9.04148 19.5H5.79732L7.25186 11.5H20.2027ZM13.5 20C13.5 20.8284 12.8284 21.5 12 21.5C11.1716 21.5 10.5 20.8284 10.5 20C10.5 19.1716 11.1716 18.5 12 18.5C12.8284 18.5 13.5 19.1716 13.5 20Z" style="fill: var(--element-active-color)"/>
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
    'obi-buoy-can-t-shape': ObiBuoyCanTShape;
  }
}