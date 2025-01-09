import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-logic-05-on')
export class ObiLogic05On extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M5.64881 14.408L9.65681 12.764L5.64881 10.904V9.5L11.4688 12.404V13.244L5.64881 15.812L5.64881 14.408Z" fill="currentColor"/>
<path d="M16.956 17H15.144L15.144 12.044C15.144 11.908 15.144 11.74 15.144 11.54C15.152 11.34 15.16 11.132 15.168 10.916C15.176 10.7 15.184 10.508 15.192 10.34C15.152 10.388 15.064 10.476 14.928 10.604C14.8 10.724 14.68 10.832 14.568 10.928L13.584 11.72L12.708 10.628L15.468 8.432H16.956L16.956 17Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 14.45V23C21 23.5523 20.5523 24 20 24L4 24C3.44772 24 3 23.5523 3 23L3 1C3 0.447716 3.44772 0 4 0L20 0C20.5523 0 21 0.447715 21 1V9.55001C21.1616 9.51721 21.3288 9.5 21.5 9.5C22.8807 9.5 24 10.6193 24 12C24 13.3807 22.8807 14.5 21.5 14.5C21.3288 14.5 21.1616 14.4828 21 14.45ZM4 1L20 1V9.99982C19.3928 10.4559 19 11.1821 19 12C19 12.8179 19.3928 13.5441 20 14.0002V23L4 23L4 1Z" fill="currentColor"/>
<path d="M5.65 16L11.5 16L11.5 17H5.65V16Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 1L4 1L4 23L20 23V14.0002C19.3928 13.5441 19 12.8179 19 12C19 11.1821 19.3928 10.4559 20 9.99982V1ZM9.65681 12.764L5.64881 14.408L5.64881 15.812L11.4688 13.244V12.404L5.64881 9.5V10.904L9.65681 12.764ZM5.65 16L11.5 16V17H5.65V16ZM15.144 17H16.956V8.432H15.468L12.708 10.628L13.584 11.72L14.568 10.928C14.68 10.832 14.8 10.724 14.928 10.604C15.064 10.476 15.152 10.388 15.192 10.34C15.184 10.508 15.176 10.7 15.168 10.916C15.16 11.132 15.152 11.34 15.144 11.54V12.044V17Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.64881 14.408L9.65681 12.764L5.64881 10.904V9.5L11.4688 12.404V13.244L5.64881 15.812L5.64881 14.408Z" style="fill: var(--automation-device-tertiary-color)"/>
<path d="M16.956 17H15.144L15.144 12.044C15.144 11.908 15.144 11.74 15.144 11.54C15.152 11.34 15.16 11.132 15.168 10.916C15.176 10.7 15.184 10.508 15.192 10.34C15.152 10.388 15.064 10.476 14.928 10.604C14.8 10.724 14.68 10.832 14.568 10.928L13.584 11.72L12.708 10.628L15.468 8.432H16.956L16.956 17Z" style="fill: var(--automation-device-tertiary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 14.45V23C21 23.5523 20.5523 24 20 24L4 24C3.44772 24 3 23.5523 3 23L3 1C3 0.447716 3.44772 0 4 0L20 0C20.5523 0 21 0.447715 21 1V9.55001C21.1616 9.51721 21.3288 9.5 21.5 9.5C22.8807 9.5 24 10.6193 24 12C24 13.3807 22.8807 14.5 21.5 14.5C21.3288 14.5 21.1616 14.4828 21 14.45ZM4 1L20 1V9.99982C19.3928 10.4559 19 11.1821 19 12C19 12.8179 19.3928 13.5441 20 14.0002V23L4 23L4 1Z" style="fill: var(--automation-device-tertiary-color)"/>
<path d="M5.65 16L11.5 16L11.5 17H5.65V16Z" style="fill: var(--automation-device-tertiary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 1L4 1L4 23L20 23V14.0002C19.3928 13.5441 19 12.8179 19 12C19 11.1821 19.3928 10.4559 20 9.99982V1ZM9.65681 12.764L5.64881 14.408L5.64881 15.812L11.4688 13.244V12.404L5.64881 9.5V10.904L9.65681 12.764ZM5.65 16L11.5 16V17H5.65V16ZM15.144 17H16.956V8.432H15.468L12.708 10.628L13.584 11.72L14.568 10.928C14.68 10.832 14.8 10.724 14.928 10.604C15.064 10.476 15.152 10.388 15.192 10.34C15.184 10.508 15.176 10.7 15.168 10.916C15.16 11.132 15.152 11.34 15.144 11.54V12.044V17Z" style="fill: var(--automation-device-primary-color)"/>
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
    'obi-logic-05-on': ObiLogic05On;
  }
}