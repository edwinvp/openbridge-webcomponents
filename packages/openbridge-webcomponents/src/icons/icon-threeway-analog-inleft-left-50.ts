import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-threeway-analog-inleft-left-50')
export class ObiThreewayAnalogInleftLeft50 extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.05425 19L6.80425 21H17.1958L15.9458 19H8.05425ZM5.95625 20.47C5.53997 21.136 6.01881 22 6.80425 22H17.1958C17.9812 22 18.46 21.136 18.0438 20.47L14 14L20.47 18.0438C21.136 18.46 22 17.9812 22 17.1958V6.80425C22 6.01881 21.136 5.53997 20.47 5.95625L14.1216 9.924C14.0421 9.97367 13.9503 10 13.8566 10H10L3.53 5.95625C2.86395 5.53997 2 6.01881 2 6.80425V17.1958C2 17.9812 2.86395 18.46 3.53 18.0438L10 14L5.95625 20.47ZM19 8.05425L21 6.80425V17.1958L19 15.9458V8.05425ZM18 15.3208V8.67925L14.6516 10.772C14.4132 10.921 14.1377 11 13.8566 11H10C9.81258 11 9.62893 10.9473 9.47 10.848L3 6.80425L3 17.1958L9.47 13.152C9.86488 12.9052 10.3778 12.9636 10.7071 13.2929C11.0364 13.6222 11.0948 14.1351 10.848 14.53L8.67925 18H15.3208L13.152 14.53C12.9052 14.1351 12.9636 13.6222 13.2929 13.2929C13.6222 12.9636 14.1351 12.9052 14.53 13.152L18 15.3208ZM17.6198 20.735L17.1958 21L17.6198 20.735Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4393 7.0962L9.90381 3.56066C9.31802 2.97487 9.31802 2.02513 9.90381 1.43934C10.4896 0.853554 11.4393 0.853553 12.0251 1.43934L15.5607 4.97487C16.1464 5.56066 16.1464 6.51041 15.5607 7.0962C14.9749 7.68198 14.0251 7.68198 13.4393 7.0962ZM14.1464 6.38909L10.6109 2.85355C10.4157 2.65829 10.4157 2.34171 10.6109 2.14645C10.8062 1.95118 11.1228 1.95118 11.318 2.14645L14.8536 5.68198C15.0488 5.87724 15.0488 6.19383 14.8536 6.38909C14.6583 6.58435 14.3417 6.58435 14.1464 6.38909Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.0542 19L6.8042 21L17.1957 21L15.9457 19H8.0542ZM19 8.05425L21 6.80425V17.1958L19 15.9458V8.05425Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 15.3208V8.67925L14.6516 10.772C14.4132 10.921 14.1377 11 13.8566 11H10C9.81258 11 9.62893 10.9473 9.47 10.848L3 6.80425L3 17.1958L9.47 13.152C9.86488 12.9052 10.3778 12.9636 10.7071 13.2929C11.0364 13.6222 11.0948 14.1351 10.848 14.53L8.67925 18H15.3208L13.152 14.53C12.9052 14.1351 12.9636 13.6222 13.2929 13.2929C13.6222 12.9636 14.1351 12.9052 14.53 13.152L18 15.3208Z" fill="currentColor"/>
<path d="M14.8536 5.68198C15.0488 5.87724 15.0488 6.19383 14.8536 6.38909C14.6583 6.58435 14.3417 6.58435 14.1464 6.38909L10.6109 2.85355C10.4157 2.65829 10.4157 2.34171 10.6109 2.14645C10.8062 1.95118 11.1228 1.95118 11.318 2.14645L14.8536 5.68198Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1464 6.38909L10.6109 2.85355C10.4157 2.65829 10.4157 2.34171 10.6109 2.14645C10.8062 1.95118 11.1228 1.95118 11.318 2.14645L14.8536 5.68198C15.0488 5.87724 15.0488 6.19383 14.8536 6.38909C14.6583 6.58435 14.3417 6.58435 14.1464 6.38909Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.05425 19L6.80425 21H17.1958L15.9458 19H8.05425ZM5.95625 20.47C5.53997 21.136 6.01881 22 6.80425 22H17.1958C17.9812 22 18.46 21.136 18.0438 20.47L14 14L20.47 18.0438C21.136 18.46 22 17.9812 22 17.1958V6.80425C22 6.01881 21.136 5.53997 20.47 5.95625L14.1216 9.924C14.0421 9.97367 13.9503 10 13.8566 10H10L3.53 5.95625C2.86395 5.53997 2 6.01881 2 6.80425V17.1958C2 17.9812 2.86395 18.46 3.53 18.0438L10 14L5.95625 20.47ZM19 8.05425L21 6.80425V17.1958L19 15.9458V8.05425ZM18 15.3208V8.67925L14.6516 10.772C14.4132 10.921 14.1377 11 13.8566 11H10C9.81258 11 9.62893 10.9473 9.47 10.848L3 6.80425L3 17.1958L9.47 13.152C9.86488 12.9052 10.3778 12.9636 10.7071 13.2929C11.0364 13.6222 11.0948 14.1351 10.848 14.53L8.67925 18H15.3208L13.152 14.53C12.9052 14.1351 12.9636 13.6222 13.2929 13.2929C13.6222 12.9636 14.1351 12.9052 14.53 13.152L18 15.3208ZM17.6198 20.735L17.1958 21L17.6198 20.735Z" style="fill: var(--automation-device-tertiary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4393 7.0962L9.90381 3.56066C9.31802 2.97487 9.31802 2.02513 9.90381 1.43934C10.4896 0.853554 11.4393 0.853553 12.0251 1.43934L15.5607 4.97487C16.1464 5.56066 16.1464 6.51041 15.5607 7.0962C14.9749 7.68198 14.0251 7.68198 13.4393 7.0962ZM14.1464 6.38909L10.6109 2.85355C10.4157 2.65829 10.4157 2.34171 10.6109 2.14645C10.8062 1.95118 11.1228 1.95118 11.318 2.14645L14.8536 5.68198C15.0488 5.87724 15.0488 6.19383 14.8536 6.38909C14.6583 6.58435 14.3417 6.58435 14.1464 6.38909Z" style="fill: var(--automation-device-tertiary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.0542 19L6.8042 21L17.1957 21L15.9457 19H8.0542ZM19 8.05425L21 6.80425V17.1958L19 15.9458V8.05425Z" style="fill: var(--automation-device-secondary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 15.3208V8.67925L14.6516 10.772C14.4132 10.921 14.1377 11 13.8566 11H10C9.81258 11 9.62893 10.9473 9.47 10.848L3 6.80425L3 17.1958L9.47 13.152C9.86488 12.9052 10.3778 12.9636 10.7071 13.2929C11.0364 13.6222 11.0948 14.1351 10.848 14.53L8.67925 18H15.3208L13.152 14.53C12.9052 14.1351 12.9636 13.6222 13.2929 13.2929C13.6222 12.9636 14.1351 12.9052 14.53 13.152L18 15.3208Z" style="fill: var(--automation-device-primary-color)"/>
<path d="M14.8536 5.68198C15.0488 5.87724 15.0488 6.19383 14.8536 6.38909C14.6583 6.58435 14.3417 6.58435 14.1464 6.38909L10.6109 2.85355C10.4157 2.65829 10.4157 2.34171 10.6109 2.14645C10.8062 1.95118 11.1228 1.95118 11.318 2.14645L14.8536 5.68198Z" style="fill: var(--automation-device-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1464 6.38909L10.6109 2.85355C10.4157 2.65829 10.4157 2.34171 10.6109 2.14645C10.8062 1.95118 11.1228 1.95118 11.318 2.14645L14.8536 5.68198C15.0488 5.87724 15.0488 6.19383 14.8536 6.38909C14.6583 6.58435 14.3417 6.58435 14.1464 6.38909Z" style="fill: var(--automation-device-primary-color)"/>
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
    'obi-threeway-analog-inleft-left-50': ObiThreewayAnalogInleftLeft50;
  }
}