import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-threeway-acuator-piston-inleft-left-75')
export class ObiThreewayAcuatorPistonInleftLeft75 extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.49854 1C6.94625 1 6.49854 1.44772 6.49854 2V5.00366C6.49854 5.55595 6.94625 6.00366 7.49854 6.00366H11V10H10L3.53 5.95625C2.86395 5.53997 2 6.01881 2 6.80425V17.1958C2 17.9812 2.86395 18.46 3.53 18.0438L10 14L5.95625 20.47C5.53997 21.136 6.01881 22 6.80425 22H17.1958C17.9812 22 18.46 21.136 18.0437 20.47L14 14L20.47 18.0438C21.136 18.46 22 17.9812 22 17.1958V6.80425C22 6.01881 21.136 5.53997 20.47 5.95625L14.1216 9.924C14.0421 9.97367 13.9503 10 13.8566 10H13V6.00366H16.5015C17.0537 6.00366 17.5015 5.55595 17.5015 5.00366V2C17.5015 1.44772 17.0538 1 16.5015 1H7.49854ZM16.5015 2H7.49854V5.00366H16.5015V2ZM8.71831 17.9375L6.80425 21H17.1958L15.2817 17.9375H8.71831ZM19 8.05425L14.6516 10.772C14.4132 10.921 14.1377 11 13.8566 11H10C9.81258 11 9.62893 10.9473 9.47 10.848L3 6.80425L3 17.1958L9.47 13.152C9.86488 12.9052 10.3778 12.9636 10.7071 13.2929C11.0364 13.6222 11.0948 14.1351 10.848 14.53L9.34331 16.9375H14.6567L13.152 14.53C12.9052 14.1351 12.9636 13.6222 13.2929 13.2929C13.6222 12.9636 14.1351 12.9052 14.53 13.152L19 15.9458V8.05425ZM20 7.42925L21 6.80425V17.1958L20 16.5708V7.42925Z" fill="currentColor"/>
<path d="M17.1957 21.0004H6.8042L8.71826 17.9379H15.2816L17.1957 21.0004Z" fill="currentColor"/>
<path d="M21 17.1962V6.80469L20 7.42969V16.5712L21 17.1962Z" fill="currentColor"/>
<path d="M14.6516 10.772L19 8.05425V15.9458L14.53 13.152C14.1351 12.9052 13.6222 12.9636 13.2929 13.2929C12.9636 13.6222 12.9052 14.1351 13.152 14.53L14.6567 16.9375H9.34331L10.848 14.53C11.0948 14.1351 11.0364 13.6222 10.7071 13.2929C10.3778 12.9636 9.86488 12.9052 9.47 13.152L3 17.1958L3 6.80425L9.47 10.848C9.62893 10.9473 9.81258 11 10 11H13.8566C14.1377 11 14.4132 10.921 14.6516 10.772Z" fill="currentColor"/>
<path d="M7.49854 2H16.5015V5.00366H7.49854V2Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.49854 1C6.94625 1 6.49854 1.44772 6.49854 2V5.00366C6.49854 5.55595 6.94625 6.00366 7.49854 6.00366H11V10H10L3.53 5.95625C2.86395 5.53997 2 6.01881 2 6.80425V17.1958C2 17.9812 2.86395 18.46 3.53 18.0438L10 14L5.95625 20.47C5.53997 21.136 6.01881 22 6.80425 22H17.1958C17.9812 22 18.46 21.136 18.0437 20.47L14 14L20.47 18.0438C21.136 18.46 22 17.9812 22 17.1958V6.80425C22 6.01881 21.136 5.53997 20.47 5.95625L14.1216 9.924C14.0421 9.97367 13.9503 10 13.8566 10H13V6.00366H16.5015C17.0537 6.00366 17.5015 5.55595 17.5015 5.00366V2C17.5015 1.44772 17.0538 1 16.5015 1H7.49854ZM16.5015 2H7.49854V5.00366H16.5015V2ZM8.71831 17.9375L6.80425 21H17.1958L15.2817 17.9375H8.71831ZM19 8.05425L14.6516 10.772C14.4132 10.921 14.1377 11 13.8566 11H10C9.81258 11 9.62893 10.9473 9.47 10.848L3 6.80425L3 17.1958L9.47 13.152C9.86488 12.9052 10.3778 12.9636 10.7071 13.2929C11.0364 13.6222 11.0948 14.1351 10.848 14.53L9.34331 16.9375H14.6567L13.152 14.53C12.9052 14.1351 12.9636 13.6222 13.2929 13.2929C13.6222 12.9636 14.1351 12.9052 14.53 13.152L19 15.9458V8.05425ZM20 7.42925L21 6.80425V17.1958L20 16.5708V7.42925Z" style="fill: var(--automation-device-tertiary-color)"/>
<path d="M17.1957 21.0004H6.8042L8.71826 17.9379H15.2816L17.1957 21.0004Z" style="fill: var(--automation-device-secondary-color)"/>
<path d="M21 17.1962V6.80469L20 7.42969V16.5712L21 17.1962Z" style="fill: var(--automation-device-secondary-color)"/>
<path d="M14.6516 10.772L19 8.05425V15.9458L14.53 13.152C14.1351 12.9052 13.6222 12.9636 13.2929 13.2929C12.9636 13.6222 12.9052 14.1351 13.152 14.53L14.6567 16.9375H9.34331L10.848 14.53C11.0948 14.1351 11.0364 13.6222 10.7071 13.2929C10.3778 12.9636 9.86488 12.9052 9.47 13.152L3 17.1958L3 6.80425L9.47 10.848C9.62893 10.9473 9.81258 11 10 11H13.8566C14.1377 11 14.4132 10.921 14.6516 10.772Z" style="fill: var(--automation-device-primary-color)"/>
<path d="M7.49854 2H16.5015V5.00366H7.49854V2Z" style="fill: var(--automation-device-primary-color)"/>
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
    'obi-threeway-acuator-piston-inleft-left-75': ObiThreewayAcuatorPistonInleftLeft75;
  }
}