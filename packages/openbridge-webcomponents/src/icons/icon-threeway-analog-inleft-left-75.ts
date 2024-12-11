import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-threeway-analog-inleft-left-75')
export class ObiThreewayAnalogInleftLeft75 extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 7.42925V16.5708L21 17.1958V6.80425L20 7.42925ZM8.71826 17.9375H15.2816L17.1957 21L6.8042 21L8.71826 17.9375Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1216 9.924C14.0421 9.97367 13.9503 10 13.8566 10H10L3.53 5.95625C2.86395 5.53997 2 6.01881 2 6.80425V17.1958C2 17.9812 2.86395 18.46 3.53 18.0438L10 14L5.95625 20.47C5.53997 21.136 6.01881 22 6.80425 22H17.1958C17.9812 22 18.46 21.136 18.0437 20.47L14 14L20.47 18.0438C21.136 18.46 22 17.9812 22 17.1958V6.80425C22 6.01881 21.136 5.53997 20.47 5.95625L14.1216 9.924ZM19 15.9458L14.53 13.152C14.1351 12.9052 13.6222 12.9636 13.2929 13.2929C12.9636 13.6222 12.9052 14.1351 13.152 14.53L14.6567 16.9375H9.34331L10.848 14.53C11.0948 14.1351 11.0364 13.6222 10.7071 13.2929C10.3778 12.9636 9.86488 12.9052 9.47 13.152L3 17.1958L3 6.80425L9.47 10.848C9.62893 10.9473 9.81258 11 10 11H13.8566C14.1377 11 14.4132 10.921 14.6516 10.772L19 8.05425V15.9458ZM20 7.42925V16.5708L21 17.1958V6.80425L20 7.42925ZM8.71831 17.9375H15.2817L17.1958 21L6.80425 21L8.71831 17.9375Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9256 6.79963L9.30618 4.88621C8.54082 4.56919 8.17737 3.69173 8.49439 2.92637C8.81142 2.161 9.68887 1.79755 10.4542 2.11457L15.0736 4.02799C15.839 4.34502 16.2025 5.22247 15.8854 5.98783C15.5684 6.7532 14.6909 7.11665 13.9256 6.79963ZM14.3083 5.87575L9.68887 3.96233C9.43374 3.85666 9.31259 3.56417 9.41827 3.30905C9.52395 3.05393 9.81643 2.93278 10.0716 3.03845L14.6909 4.95187C14.9461 5.05754 15.0672 5.35003 14.9615 5.60515C14.8559 5.86027 14.5634 5.98142 14.3083 5.87575Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 15.9455L14.53 13.1517C14.1351 12.9049 13.6222 12.9634 13.2929 13.2926C12.9636 13.6219 12.9052 14.1349 13.152 14.5297L14.6567 16.9372H9.34331L10.848 14.5297C11.0948 14.1349 11.0364 13.6219 10.7071 13.2926C10.3778 12.9634 9.86488 12.9049 9.47 13.1517L3 17.1955L3 6.80399L9.47 10.8477C9.62893 10.9471 9.81258 10.9997 10 10.9997H13.8566C14.1377 10.9997 14.4132 10.9207 14.6516 10.7717L19 8.05399V15.9455Z" fill="currentColor"/>
<path d="M14.691 4.95161C14.9461 5.05728 15.0672 5.34977 14.9615 5.60489C14.8559 5.86001 14.5634 5.98116 14.3083 5.87549L9.68887 3.96207C9.43375 3.8564 9.3126 3.56391 9.41827 3.30879C9.52395 3.05367 9.81643 2.93252 10.0716 3.03819L14.691 4.95161Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3083 5.87549L9.68887 3.96207C9.43375 3.8564 9.3126 3.56391 9.41827 3.30879C9.52395 3.05367 9.81643 2.93252 10.0716 3.03819L14.691 4.95161C14.9461 5.05728 15.0672 5.34977 14.9615 5.60489C14.8559 5.86001 14.5634 5.98116 14.3083 5.87549Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 7.42925V16.5708L21 17.1958V6.80425L20 7.42925ZM8.71826 17.9375H15.2816L17.1957 21L6.8042 21L8.71826 17.9375Z" style="fill: var(--automation-device-secondary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1216 9.924C14.0421 9.97367 13.9503 10 13.8566 10H10L3.53 5.95625C2.86395 5.53997 2 6.01881 2 6.80425V17.1958C2 17.9812 2.86395 18.46 3.53 18.0438L10 14L5.95625 20.47C5.53997 21.136 6.01881 22 6.80425 22H17.1958C17.9812 22 18.46 21.136 18.0437 20.47L14 14L20.47 18.0438C21.136 18.46 22 17.9812 22 17.1958V6.80425C22 6.01881 21.136 5.53997 20.47 5.95625L14.1216 9.924ZM19 15.9458L14.53 13.152C14.1351 12.9052 13.6222 12.9636 13.2929 13.2929C12.9636 13.6222 12.9052 14.1351 13.152 14.53L14.6567 16.9375H9.34331L10.848 14.53C11.0948 14.1351 11.0364 13.6222 10.7071 13.2929C10.3778 12.9636 9.86488 12.9052 9.47 13.152L3 17.1958L3 6.80425L9.47 10.848C9.62893 10.9473 9.81258 11 10 11H13.8566C14.1377 11 14.4132 10.921 14.6516 10.772L19 8.05425V15.9458ZM20 7.42925V16.5708L21 17.1958V6.80425L20 7.42925ZM8.71831 17.9375H15.2817L17.1958 21L6.80425 21L8.71831 17.9375Z" style="fill: var(--automation-device-tertiary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9256 6.79963L9.30618 4.88621C8.54082 4.56919 8.17737 3.69173 8.49439 2.92637C8.81142 2.161 9.68887 1.79755 10.4542 2.11457L15.0736 4.02799C15.839 4.34502 16.2025 5.22247 15.8854 5.98783C15.5684 6.7532 14.6909 7.11665 13.9256 6.79963ZM14.3083 5.87575L9.68887 3.96233C9.43374 3.85666 9.31259 3.56417 9.41827 3.30905C9.52395 3.05393 9.81643 2.93278 10.0716 3.03845L14.6909 4.95187C14.9461 5.05754 15.0672 5.35003 14.9615 5.60515C14.8559 5.86027 14.5634 5.98142 14.3083 5.87575Z" style="fill: var(--automation-device-tertiary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 15.9455L14.53 13.1517C14.1351 12.9049 13.6222 12.9634 13.2929 13.2926C12.9636 13.6219 12.9052 14.1349 13.152 14.5297L14.6567 16.9372H9.34331L10.848 14.5297C11.0948 14.1349 11.0364 13.6219 10.7071 13.2926C10.3778 12.9634 9.86488 12.9049 9.47 13.1517L3 17.1955L3 6.80399L9.47 10.8477C9.62893 10.9471 9.81258 10.9997 10 10.9997H13.8566C14.1377 10.9997 14.4132 10.9207 14.6516 10.7717L19 8.05399V15.9455Z" style="fill: var(--automation-device-primary-color)"/>
<path d="M14.691 4.95161C14.9461 5.05728 15.0672 5.34977 14.9615 5.60489C14.8559 5.86001 14.5634 5.98116 14.3083 5.87549L9.68887 3.96207C9.43375 3.8564 9.3126 3.56391 9.41827 3.30879C9.52395 3.05367 9.81643 2.93252 10.0716 3.03819L14.691 4.95161Z" style="fill: var(--automation-device-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3083 5.87549L9.68887 3.96207C9.43375 3.8564 9.3126 3.56391 9.41827 3.30879C9.52395 3.05367 9.81643 2.93252 10.0716 3.03819L14.691 4.95161C14.9461 5.05728 15.0672 5.34977 14.9615 5.60489C14.8559 5.86001 14.5634 5.98116 14.3083 5.87549Z" style="fill: var(--automation-device-primary-color)"/>
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
    'obi-threeway-analog-inleft-left-75': ObiThreewayAnalogInleftLeft75;
  }
}