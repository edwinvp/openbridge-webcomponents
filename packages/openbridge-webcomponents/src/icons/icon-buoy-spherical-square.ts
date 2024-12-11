import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-buoy-spherical-square')
export class ObiBuoySphericalSquare extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7478 2.5L14.0811 7.5H16.2522L17.9189 2.5H15.7478ZM15.3874 1C14.957 1 14.5749 1.27543 14.4387 1.68377L12.4387 7.68377C12.2229 8.3313 12.7049 9 13.3874 9H16.6126C17.043 9 17.4251 8.72457 17.5613 8.31623L19.5613 2.31623C19.7771 1.6687 19.2951 1 18.6126 1H15.3874Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 20H15C15 21.6569 13.6569 23 12 23C10.3431 23 9 21.6569 9 20H4V18.5H6.54404C6.19474 17.7389 6 16.8922 6 16C6 12.6863 8.68629 10 12 10C15.3137 10 18 12.6863 18 16C18 16.8922 17.8053 17.7389 17.456 18.5H20V20ZM9.40135 18.5C9.92006 17.6033 10.8896 17 12 17C13.1104 17 14.0799 17.6033 14.5987 18.5H15.7425C16.2215 17.7849 16.5 16.9261 16.5 16C16.5 13.5147 14.4853 11.5 12 11.5C9.51472 11.5 7.5 13.5147 7.5 16C7.5 16.9261 7.7785 17.7849 8.25754 18.5H9.40135ZM13.5 20C13.5 20.8284 12.8284 21.5 12 21.5C11.1716 21.5 10.5 20.8284 10.5 20C10.5 19.1716 11.1716 18.5 12 18.5C12.8284 18.5 13.5 19.1716 13.5 20Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7478 2.5L14.0811 7.5H16.2522L17.9189 2.5H15.7478ZM15.3874 1C14.957 1 14.5749 1.27543 14.4387 1.68377L12.4387 7.68377C12.2229 8.3313 12.7049 9 13.3874 9H16.6126C17.043 9 17.4251 8.72457 17.5613 8.31623L19.5613 2.31623C19.7771 1.6687 19.2951 1 18.6126 1H15.3874Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 20H15C15 21.6569 13.6569 23 12 23C10.3431 23 9 21.6569 9 20H4V18.5H6.54404C6.19474 17.7389 6 16.8922 6 16C6 12.6863 8.68629 10 12 10C15.3137 10 18 12.6863 18 16C18 16.8922 17.8053 17.7389 17.456 18.5H20V20ZM9.40135 18.5C9.92006 17.6033 10.8896 17 12 17C13.1104 17 14.0799 17.6033 14.5987 18.5H15.7425C16.2215 17.7849 16.5 16.9261 16.5 16C16.5 13.5147 14.4853 11.5 12 11.5C9.51472 11.5 7.5 13.5147 7.5 16C7.5 16.9261 7.7785 17.7849 8.25754 18.5H9.40135ZM13.5 20C13.5 20.8284 12.8284 21.5 12 21.5C11.1716 21.5 10.5 20.8284 10.5 20C10.5 19.1716 11.1716 18.5 12 18.5C12.8284 18.5 13.5 19.1716 13.5 20Z" style="fill: var(--element-active-color)"/>
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
    'obi-buoy-spherical-square': ObiBuoySphericalSquare;
  }
}