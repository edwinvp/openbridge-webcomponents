import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-energy_petrol')
export class ObiEnergy_petrol extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4604 10.1516C13.9564 9.67164 13.1524 9.43164 12.0484 9.43164H9.31238V17.9996H11.1244V14.9516H11.9044C12.5284 14.9516 13.0524 14.8756 13.4764 14.7236C13.9004 14.5716 14.2404 14.3636 14.4964 14.0996C14.7604 13.8276 14.9484 13.5236 15.0604 13.1876C15.1724 12.8436 15.2284 12.4836 15.2284 12.1076C15.2284 11.2756 14.9724 10.6236 14.4604 10.1516ZM11.1244 10.9196H11.9524C12.4484 10.9196 12.8124 11.0236 13.0444 11.2316C13.2764 11.4316 13.3924 11.7436 13.3924 12.1676C13.3924 12.4716 13.3244 12.7196 13.1884 12.9116C13.0524 13.1036 12.8604 13.2436 12.6124 13.3316C12.3644 13.4196 12.0684 13.4636 11.7244 13.4636H11.1244V10.9196Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.9375 7.42632L12 1L19.0625 7.42632C20 8.27544 20.724 9.25483 21.2344 10.3645C21.7448 11.4741 22 12.6368 22 13.8526C22 16.4 21.026 18.5614 19.0781 20.3368C17.1302 22.1123 14.7708 23 12 23C9.22917 23 6.86979 22.1123 4.92188 20.3368C2.97396 18.5614 2 16.4 2 13.8526C2 12.6368 2.25521 11.4741 2.76562 10.3645C3.27604 9.25483 4 8.27544 4.9375 7.42632ZM4.58262 11.2003C4.97615 10.3447 5.5355 9.58311 6.28012 8.90868L12 3.70404L17.7165 8.90559L17.7199 8.90867C18.4645 9.5831 19.0238 10.3447 19.4174 11.2003C19.8078 12.049 20 12.9268 20 13.8526C20 15.8157 19.2793 17.4473 17.7309 18.8587C16.1715 20.28 14.3005 21 12 21C9.69954 21 7.82846 20.28 6.26913 18.8587C4.72067 17.4473 4 15.8157 4 13.8526C4 12.9268 4.1922 12.049 4.58262 11.2003Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4604 10.1516C13.9564 9.67164 13.1524 9.43164 12.0484 9.43164H9.31238V17.9996H11.1244V14.9516H11.9044C12.5284 14.9516 13.0524 14.8756 13.4764 14.7236C13.9004 14.5716 14.2404 14.3636 14.4964 14.0996C14.7604 13.8276 14.9484 13.5236 15.0604 13.1876C15.1724 12.8436 15.2284 12.4836 15.2284 12.1076C15.2284 11.2756 14.9724 10.6236 14.4604 10.1516ZM11.1244 10.9196H11.9524C12.4484 10.9196 12.8124 11.0236 13.0444 11.2316C13.2764 11.4316 13.3924 11.7436 13.3924 12.1676C13.3924 12.4716 13.3244 12.7196 13.1884 12.9116C13.0524 13.1036 12.8604 13.2436 12.6124 13.3316C12.3644 13.4196 12.0684 13.4636 11.7244 13.4636H11.1244V10.9196Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.9375 7.42632L12 1L19.0625 7.42632C20 8.27544 20.724 9.25483 21.2344 10.3645C21.7448 11.4741 22 12.6368 22 13.8526C22 16.4 21.026 18.5614 19.0781 20.3368C17.1302 22.1123 14.7708 23 12 23C9.22917 23 6.86979 22.1123 4.92188 20.3368C2.97396 18.5614 2 16.4 2 13.8526C2 12.6368 2.25521 11.4741 2.76562 10.3645C3.27604 9.25483 4 8.27544 4.9375 7.42632ZM4.58262 11.2003C4.97615 10.3447 5.5355 9.58311 6.28012 8.90868L12 3.70404L17.7165 8.90559L17.7199 8.90867C18.4645 9.5831 19.0238 10.3447 19.4174 11.2003C19.8078 12.049 20 12.9268 20 13.8526C20 15.8157 19.2793 17.4473 17.7309 18.8587C16.1715 20.28 14.3005 21 12 21C9.69954 21 7.82846 20.28 6.26913 18.8587C4.72067 17.4473 4 15.8157 4 13.8526C4 12.9268 4.1922 12.049 4.58262 11.2003Z" style="fill: var(--element-active-color)"/>
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
    'obi-energy_petrol': ObiEnergy_petrol;
  }
}