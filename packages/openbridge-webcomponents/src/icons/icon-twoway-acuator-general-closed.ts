import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-twoway-acuator-general-closed')
export class ObiTwowayAcuatorGeneralClosed extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.51462L3 5.94319V18.0568L8 14.4854V9.51462Z" fill="currentColor"/>
<path d="M16 14.4854V9.51462L21 5.94319L21 18.0568L16 14.4854Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9235 5L7.07707 5L16.9235 5ZM7.07798 4.99551C7.08099 4.98526 7.08828 4.96048 7.10115 4.91917C7.11833 4.86406 7.14114 4.79334 7.16704 4.71679C7.22195 4.55448 7.2791 4.40084 7.32055 4.30987C7.56636 3.77039 7.92962 3.27366 8.39471 2.85085C8.85997 2.42789 9.41736 2.08792 10.0372 1.85451C10.6571 1.62109 11.3243 1.5 12 1.5C12.6758 1.5 13.343 1.62109 13.9629 1.85451C14.5827 2.08791 15.1401 2.42789 15.6054 2.85085C16.0704 3.27366 16.4337 3.77038 16.6795 4.30986C16.721 4.40084 16.7781 4.55448 16.833 4.71678C16.8589 4.79334 16.8817 4.86406 16.8989 4.91917C16.9118 4.96048 16.9191 4.98526 16.9221 4.99551" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.278 2.11091C16.8398 2.62164 17.2855 3.22796 17.5895 3.89524C17.7162 4.17333 17.8706 4.66781 17.8921 4.75167C17.8996 4.78059 17.9182 4.8735 17.9395 5.00506C18.0278 5.55024 17.582 6 17.0297 6L13 6V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V6L6.97035 6C6.41807 6 5.97222 5.55024 6.06051 5.00506C6.08182 4.8735 6.10051 4.7806 6.10792 4.75168C6.12942 4.66781 6.28385 4.17334 6.41056 3.89524C6.71459 3.22797 7.16023 2.62165 7.72203 2.11091C8.28382 1.6002 8.95076 1.19507 9.68479 0.918662C10.4188 0.642263 11.2055 0.5 12 0.5C12.7945 0.5 13.5812 0.642261 14.3153 0.918661C15.0493 1.19507 15.7162 1.6002 16.278 2.11091ZM7.10115 4.91917C7.08828 4.96048 7.08099 4.98526 7.07799 4.99551L16.9221 4.99551C16.9191 4.98526 16.9118 4.96048 16.8989 4.91917C16.8817 4.86406 16.8589 4.79334 16.833 4.71678C16.7781 4.55448 16.721 4.40084 16.6795 4.30986C16.4337 3.77038 16.0704 3.27366 15.6054 2.85085C15.1401 2.42789 14.5827 2.08791 13.9629 1.85451C13.343 1.62109 12.6758 1.5 12 1.5C11.3243 1.5 10.6571 1.62109 10.0372 1.85451C9.41736 2.08792 8.85997 2.42789 8.39471 2.85085C7.92962 3.27366 7.56636 3.77039 7.32055 4.30987C7.2791 4.40084 7.22195 4.55448 7.16704 4.71679C7.14114 4.79334 7.11833 4.86406 7.10115 4.91917Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.58124 5.12945C2.91937 4.65669 2 5.12982 2 5.94319V18.0568C2 18.8702 2.91937 19.3433 3.58124 18.8705L9 15V9L3.58124 5.12945ZM8 9.51462L3 5.94319V18.0568L8 14.4854V9.51462Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 5.94319V18.0568C22 18.8702 21.0806 19.3433 20.4188 18.8705L15 15V9L20.4188 5.12945C21.0806 4.65669 22 5.12982 22 5.94319ZM16 9.51462V14.4854L21 18.0568L21 5.94319L16 9.51462Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.51462L3 5.94319V18.0568L8 14.4854V9.51462Z" style="fill: var(--automation-device-tertiary-color)"/>
<path d="M16 14.4854V9.51462L21 5.94319L21 18.0568L16 14.4854Z" style="fill: var(--automation-device-tertiary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9235 5L7.07707 5L16.9235 5ZM7.07798 4.99551C7.08099 4.98526 7.08828 4.96048 7.10115 4.91917C7.11833 4.86406 7.14114 4.79334 7.16704 4.71679C7.22195 4.55448 7.2791 4.40084 7.32055 4.30987C7.56636 3.77039 7.92962 3.27366 8.39471 2.85085C8.85997 2.42789 9.41736 2.08792 10.0372 1.85451C10.6571 1.62109 11.3243 1.5 12 1.5C12.6758 1.5 13.343 1.62109 13.9629 1.85451C14.5827 2.08791 15.1401 2.42789 15.6054 2.85085C16.0704 3.27366 16.4337 3.77038 16.6795 4.30986C16.721 4.40084 16.7781 4.55448 16.833 4.71678C16.8589 4.79334 16.8817 4.86406 16.8989 4.91917C16.9118 4.96048 16.9191 4.98526 16.9221 4.99551" style="fill: var(--automation-device-tertiary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.278 2.11091C16.8398 2.62164 17.2855 3.22796 17.5895 3.89524C17.7162 4.17333 17.8706 4.66781 17.8921 4.75167C17.8996 4.78059 17.9182 4.8735 17.9395 5.00506C18.0278 5.55024 17.582 6 17.0297 6L13 6V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V6L6.97035 6C6.41807 6 5.97222 5.55024 6.06051 5.00506C6.08182 4.8735 6.10051 4.7806 6.10792 4.75168C6.12942 4.66781 6.28385 4.17334 6.41056 3.89524C6.71459 3.22797 7.16023 2.62165 7.72203 2.11091C8.28382 1.6002 8.95076 1.19507 9.68479 0.918662C10.4188 0.642263 11.2055 0.5 12 0.5C12.7945 0.5 13.5812 0.642261 14.3153 0.918661C15.0493 1.19507 15.7162 1.6002 16.278 2.11091ZM7.10115 4.91917C7.08828 4.96048 7.08099 4.98526 7.07799 4.99551L16.9221 4.99551C16.9191 4.98526 16.9118 4.96048 16.8989 4.91917C16.8817 4.86406 16.8589 4.79334 16.833 4.71678C16.7781 4.55448 16.721 4.40084 16.6795 4.30986C16.4337 3.77038 16.0704 3.27366 15.6054 2.85085C15.1401 2.42789 14.5827 2.08791 13.9629 1.85451C13.343 1.62109 12.6758 1.5 12 1.5C11.3243 1.5 10.6571 1.62109 10.0372 1.85451C9.41736 2.08792 8.85997 2.42789 8.39471 2.85085C7.92962 3.27366 7.56636 3.77039 7.32055 4.30987C7.2791 4.40084 7.22195 4.55448 7.16704 4.71679C7.14114 4.79334 7.11833 4.86406 7.10115 4.91917Z" style="fill: var(--automation-device-secondary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.58124 5.12945C2.91937 4.65669 2 5.12982 2 5.94319V18.0568C2 18.8702 2.91937 19.3433 3.58124 18.8705L9 15V9L3.58124 5.12945ZM8 9.51462L3 5.94319V18.0568L8 14.4854V9.51462Z" style="fill: var(--automation-device-secondary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 5.94319V18.0568C22 18.8702 21.0806 19.3433 20.4188 18.8705L15 15V9L20.4188 5.12945C21.0806 4.65669 22 5.12982 22 5.94319ZM16 9.51462V14.4854L21 18.0568L21 5.94319L16 9.51462Z" style="fill: var(--automation-device-secondary-color)"/>
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
    'obi-twoway-acuator-general-closed': ObiTwowayAcuatorGeneralClosed;
  }
}