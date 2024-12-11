import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-blower-on-horizontal')
export class ObiBlowerOnHorizontal extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4999 9.5C14.776 9.5 14.9999 9.72386 14.9999 10C14.9999 10.2761 14.776 10.5 14.4999 10.5L9.49988 10.5C9.22374 10.5 8.99988 10.2761 8.99988 10C8.99988 9.72386 9.22374 9.5 9.49988 9.5L14.4999 9.5Z" fill="currentColor"/>
<path d="M14.4999 11.5C14.776 11.5 14.9999 11.7239 14.9999 12C14.9999 12.2761 14.776 12.5 14.4999 12.5H9.49988C9.22374 12.5 8.99988 12.2761 8.99988 12C8.99988 11.7239 9.22374 11.5 9.49988 11.5L14.4999 11.5Z" fill="currentColor"/>
<path d="M14.9999 14C14.9999 13.7239 14.776 13.5 14.4999 13.5H9.49988C9.22374 13.5 8.99988 13.7239 8.99988 14C8.99988 14.2761 9.22374 14.5 9.49988 14.5H14.4999C14.776 14.5 14.9999 14.2761 14.9999 14Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.9999 8.33333V5C22.9999 4.44772 22.5522 4 21.9999 4L12.0999 4C7.62637 4 3.99988 7.58172 3.99988 12C3.99988 16.4183 7.62637 20 12.0999 20C16.5734 20 20.1999 16.4183 20.1999 12C20.1999 11.065 20.0375 10.1674 19.739 9.33333H21.9999C22.5522 9.33333 22.9999 8.88562 22.9999 8.33333ZM18.319 8.33333H21.9999V5L12.0999 5C8.16691 5 4.99988 8.14568 4.99988 12C4.99988 15.8543 8.16691 19 12.0999 19C16.0328 19 19.1999 15.8543 19.1999 12C19.1999 11.1816 19.0578 10.3979 18.7974 9.67028L18.319 8.33333Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 8.33333H18.3191L18.7976 9.67028C19.058 10.3979 19.2 11.1816 19.2 12C19.2 15.8543 16.033 19 12.1 19C8.16703 19 5 15.8543 5 12C5 8.14568 8.16703 5 12.1 5L22 5V8.33333ZM14.5 9.5C14.7761 9.5 15 9.72386 15 10C15 10.2761 14.7761 10.5 14.5 10.5L9.5 10.5C9.22386 10.5 9 10.2761 9 10C9 9.72386 9.22386 9.5 9.5 9.5L14.5 9.5ZM14.5 11.5C14.7761 11.5 15 11.7239 15 12C15 12.2761 14.7761 12.5 14.5 12.5H9.5C9.22386 12.5 9 12.2761 9 12C9 11.7239 9.22386 11.5 9.5 11.5L14.5 11.5ZM15 14C15 13.7239 14.7761 13.5 14.5 13.5H9.5C9.22386 13.5 9 13.7239 9 14C9 14.2761 9.22386 14.5 9.5 14.5H14.5C14.7761 14.5 15 14.2761 15 14Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.4999 9.5C14.776 9.5 14.9999 9.72386 14.9999 10C14.9999 10.2761 14.776 10.5 14.4999 10.5L9.49988 10.5C9.22374 10.5 8.99988 10.2761 8.99988 10C8.99988 9.72386 9.22374 9.5 9.49988 9.5L14.4999 9.5Z" style="fill: var(--automation-device-tertiary-color)"/>
<path d="M14.4999 11.5C14.776 11.5 14.9999 11.7239 14.9999 12C14.9999 12.2761 14.776 12.5 14.4999 12.5H9.49988C9.22374 12.5 8.99988 12.2761 8.99988 12C8.99988 11.7239 9.22374 11.5 9.49988 11.5L14.4999 11.5Z" style="fill: var(--automation-device-tertiary-color)"/>
<path d="M14.9999 14C14.9999 13.7239 14.776 13.5 14.4999 13.5H9.49988C9.22374 13.5 8.99988 13.7239 8.99988 14C8.99988 14.2761 9.22374 14.5 9.49988 14.5H14.4999C14.776 14.5 14.9999 14.2761 14.9999 14Z" style="fill: var(--automation-device-tertiary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.9999 8.33333V5C22.9999 4.44772 22.5522 4 21.9999 4L12.0999 4C7.62637 4 3.99988 7.58172 3.99988 12C3.99988 16.4183 7.62637 20 12.0999 20C16.5734 20 20.1999 16.4183 20.1999 12C20.1999 11.065 20.0375 10.1674 19.739 9.33333H21.9999C22.5522 9.33333 22.9999 8.88562 22.9999 8.33333ZM18.319 8.33333H21.9999V5L12.0999 5C8.16691 5 4.99988 8.14568 4.99988 12C4.99988 15.8543 8.16691 19 12.0999 19C16.0328 19 19.1999 15.8543 19.1999 12C19.1999 11.1816 19.0578 10.3979 18.7974 9.67028L18.319 8.33333Z" style="fill: var(--automation-device-tertiary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 8.33333H18.3191L18.7976 9.67028C19.058 10.3979 19.2 11.1816 19.2 12C19.2 15.8543 16.033 19 12.1 19C8.16703 19 5 15.8543 5 12C5 8.14568 8.16703 5 12.1 5L22 5V8.33333ZM14.5 9.5C14.7761 9.5 15 9.72386 15 10C15 10.2761 14.7761 10.5 14.5 10.5L9.5 10.5C9.22386 10.5 9 10.2761 9 10C9 9.72386 9.22386 9.5 9.5 9.5L14.5 9.5ZM14.5 11.5C14.7761 11.5 15 11.7239 15 12C15 12.2761 14.7761 12.5 14.5 12.5H9.5C9.22386 12.5 9 12.2761 9 12C9 11.7239 9.22386 11.5 9.5 11.5L14.5 11.5ZM15 14C15 13.7239 14.7761 13.5 14.5 13.5H9.5C9.22386 13.5 9 13.7239 9 14C9 14.2761 9.22386 14.5 9.5 14.5H14.5C14.7761 14.5 15 14.2761 15 14Z" style="fill: var(--automation-device-primary-color)"/>
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
    'obi-blower-on-horizontal': ObiBlowerOnHorizontal;
  }
}