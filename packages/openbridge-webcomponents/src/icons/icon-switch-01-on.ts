import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-switch-01-on')
export class ObiSwitch01On extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2677 13.0002L4.73238 13.0002C4.38656 13.5979 3.74024 14.0001 3 14.0001C1.89543 14.0001 1 13.1046 1 12.0001C1 10.8955 1.89543 10.0001 3 10.0001C3.74032 10.0001 4.38669 10.4023 4.73249 11.0002L19.2675 11.0002C19.6133 10.4023 20.2597 10 21 10C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14C20.2598 14 19.6135 13.5979 19.2677 13.0002Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.23586 14.0002C4.68738 14.6128 3.88929 15.0001 3 15.0001C1.34315 15.0001 0 13.6569 0 12.0001C0 10.3432 1.34315 9.00006 3 9.00006C3.88938 9.00006 4.68754 9.38741 5.23603 10.0002L18.7639 10.0002C19.3124 9.38737 20.1106 9 21 9C22.6569 9 24 10.3431 24 12C24 13.6569 22.6569 15 21 15C20.1107 15 19.3127 14.6128 18.7642 14.0002L5.23586 14.0002ZM19.2677 13.0002L4.73238 13.0002C4.38656 13.5979 3.74024 14.0001 3 14.0001C1.89543 14.0001 1 13.1046 1 12.0001C1 10.8955 1.89543 10.0001 3 10.0001C3.74032 10.0001 4.38669 10.4023 4.73249 11.0002L19.2675 11.0002C19.6133 10.4023 20.2597 10 21 10C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14C20.2598 14 19.6135 13.5979 19.2677 13.0002Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2677 13.0002L4.73238 13.0002C4.38656 13.5979 3.74024 14.0001 3 14.0001C1.89543 14.0001 1 13.1046 1 12.0001C1 10.8955 1.89543 10.0001 3 10.0001C3.74032 10.0001 4.38669 10.4023 4.73249 11.0002L19.2675 11.0002C19.6133 10.4023 20.2597 10 21 10C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14C20.2598 14 19.6135 13.5979 19.2677 13.0002Z" style="fill: var(--automation-device-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.23586 14.0002C4.68738 14.6128 3.88929 15.0001 3 15.0001C1.34315 15.0001 0 13.6569 0 12.0001C0 10.3432 1.34315 9.00006 3 9.00006C3.88938 9.00006 4.68754 9.38741 5.23603 10.0002L18.7639 10.0002C19.3124 9.38737 20.1106 9 21 9C22.6569 9 24 10.3431 24 12C24 13.6569 22.6569 15 21 15C20.1107 15 19.3127 14.6128 18.7642 14.0002L5.23586 14.0002ZM19.2677 13.0002L4.73238 13.0002C4.38656 13.5979 3.74024 14.0001 3 14.0001C1.89543 14.0001 1 13.1046 1 12.0001C1 10.8955 1.89543 10.0001 3 10.0001C3.74032 10.0001 4.38669 10.4023 4.73249 11.0002L19.2675 11.0002C19.6133 10.4023 20.2597 10 21 10C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14C20.2598 14 19.6135 13.5979 19.2677 13.0002Z" style="fill: var(--automation-device-tertiary-color)"/>
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
    'obi-switch-01-on': ObiSwitch01On;
  }
}