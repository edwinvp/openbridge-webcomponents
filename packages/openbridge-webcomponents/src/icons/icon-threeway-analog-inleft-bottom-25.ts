import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-threeway-analog-inleft-bottom-25')
export class ObiThreewayAnalogInleftBottom25 extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1216 9.924C14.0421 9.97367 13.9503 10 13.8566 10H10L3.53 5.95625C2.86395 5.53997 2 6.01881 2 6.80425V17.1958C2 17.9812 2.86395 18.46 3.53 18.0438L10 14L5.95625 20.47C5.53997 21.136 6.01881 22 6.80425 22H17.1958C17.9812 22 18.46 21.136 18.0438 20.47L14 14L20.47 18.0438C21.136 18.46 22 17.9812 22 17.1958V6.80425C22 6.01881 21.136 5.53997 20.47 5.95625L14.1216 9.924ZM19 15.9458L14.53 13.152C14.1351 12.9052 13.6222 12.9636 13.2929 13.2929C12.9636 13.6222 12.9052 14.1351 13.152 14.53L17.1958 21L6.80425 21L10.848 14.53C11.0948 14.1351 11.0364 13.6222 10.7071 13.2929C10.3778 12.9636 9.86488 12.9052 9.47 13.152L7 14.6958V9.30425L9.47 10.848C9.62893 10.9473 9.81258 11 10 11H13.8566C14.1377 11 14.4132 10.921 14.6516 10.772L19 8.05425V15.9458ZM20 7.42925V16.5708L21 17.1958V6.80425L20 7.42925ZM6 8.67925L3 6.80425L3 17.1958L6 15.3208V8.67925Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.972 7.69382L13.8854 3.07442C14.2025 2.30905 13.839 1.4316 13.0736 1.11457C12.3083 0.797548 11.4308 1.161 11.1138 1.92637L9.20037 6.54577C8.88335 7.31113 9.2468 8.18858 10.0122 8.50561C10.7775 8.82264 11.655 8.45918 11.972 7.69382ZM11.0481 7.31113L12.9615 2.69173C13.0672 2.43661 12.9461 2.14413 12.6909 2.03845C12.4358 1.93278 12.1433 2.05393 12.0377 2.30905L10.1242 6.92845C10.0186 7.18357 10.1397 7.47605 10.3948 7.58173C10.65 7.6874 10.9425 7.56625 11.0481 7.31113Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 7.42881V16.5703L21 17.1953V6.80381L20 7.42881ZM6 8.67881L3 6.80381L3 17.1953L6 15.3203L6 8.67881Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 15.9455L14.53 13.1517C14.1351 12.9049 13.6221 12.9634 13.2928 13.2926C12.9636 13.6219 12.9052 14.1349 13.152 14.5297L17.1957 20.9997H6.8042L10.848 14.5297C11.0947 14.1349 11.0363 13.6219 10.7071 13.2926C10.3778 12.9634 9.86483 12.9049 9.46995 13.1517L6.99995 14.6955V9.30399L9.46995 10.8477C9.62888 10.9471 9.81253 10.9997 9.99995 10.9997H13.8566C14.1377 10.9997 14.4132 10.9207 14.6516 10.7717L19 8.05399V15.9455Z" fill="currentColor"/>
<path d="M10.1242 6.92819C10.0185 7.18331 10.1397 7.47579 10.3948 7.58147C10.6499 7.68714 10.9424 7.56599 11.0481 7.31087L12.9615 2.69147C13.0672 2.43635 12.946 2.14387 12.6909 2.03819C12.4358 1.93252 12.1433 2.05367 12.0376 2.30879L10.1242 6.92819Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1216 9.924C14.0421 9.97367 13.9503 10 13.8566 10H10L3.53 5.95625C2.86395 5.53997 2 6.01881 2 6.80425V17.1958C2 17.9812 2.86395 18.46 3.53 18.0438L10 14L5.95625 20.47C5.53997 21.136 6.01881 22 6.80425 22H17.1958C17.9812 22 18.46 21.136 18.0438 20.47L14 14L20.47 18.0438C21.136 18.46 22 17.9812 22 17.1958V6.80425C22 6.01881 21.136 5.53997 20.47 5.95625L14.1216 9.924ZM19 15.9458L14.53 13.152C14.1351 12.9052 13.6222 12.9636 13.2929 13.2929C12.9636 13.6222 12.9052 14.1351 13.152 14.53L17.1958 21L6.80425 21L10.848 14.53C11.0948 14.1351 11.0364 13.6222 10.7071 13.2929C10.3778 12.9636 9.86488 12.9052 9.47 13.152L7 14.6958V9.30425L9.47 10.848C9.62893 10.9473 9.81258 11 10 11H13.8566C14.1377 11 14.4132 10.921 14.6516 10.772L19 8.05425V15.9458ZM20 7.42925V16.5708L21 17.1958V6.80425L20 7.42925ZM6 8.67925L3 6.80425L3 17.1958L6 15.3208V8.67925Z" style="fill: var(--automation-device-tertiary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.972 7.69382L13.8854 3.07442C14.2025 2.30905 13.839 1.4316 13.0736 1.11457C12.3083 0.797548 11.4308 1.161 11.1138 1.92637L9.20037 6.54577C8.88335 7.31113 9.2468 8.18858 10.0122 8.50561C10.7775 8.82264 11.655 8.45918 11.972 7.69382ZM11.0481 7.31113L12.9615 2.69173C13.0672 2.43661 12.9461 2.14413 12.6909 2.03845C12.4358 1.93278 12.1433 2.05393 12.0377 2.30905L10.1242 6.92845C10.0186 7.18357 10.1397 7.47605 10.3948 7.58173C10.65 7.6874 10.9425 7.56625 11.0481 7.31113Z" style="fill: var(--automation-device-tertiary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 7.42881V16.5703L21 17.1953V6.80381L20 7.42881ZM6 8.67881L3 6.80381L3 17.1953L6 15.3203L6 8.67881Z" style="fill: var(--automation-device-secondary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 15.9455L14.53 13.1517C14.1351 12.9049 13.6221 12.9634 13.2928 13.2926C12.9636 13.6219 12.9052 14.1349 13.152 14.5297L17.1957 20.9997H6.8042L10.848 14.5297C11.0947 14.1349 11.0363 13.6219 10.7071 13.2926C10.3778 12.9634 9.86483 12.9049 9.46995 13.1517L6.99995 14.6955V9.30399L9.46995 10.8477C9.62888 10.9471 9.81253 10.9997 9.99995 10.9997H13.8566C14.1377 10.9997 14.4132 10.9207 14.6516 10.7717L19 8.05399V15.9455Z" style="fill: var(--automation-device-primary-color)"/>
<path d="M10.1242 6.92819C10.0185 7.18331 10.1397 7.47579 10.3948 7.58147C10.6499 7.68714 10.9424 7.56599 11.0481 7.31087L12.9615 2.69147C13.0672 2.43635 12.946 2.14387 12.6909 2.03819C12.4358 1.93252 12.1433 2.05367 12.0376 2.30879L10.1242 6.92819Z" style="fill: var(--automation-device-primary-color)"/>
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
    'obi-threeway-analog-inleft-bottom-25': ObiThreewayAnalogInleftBottom25;
  }
}