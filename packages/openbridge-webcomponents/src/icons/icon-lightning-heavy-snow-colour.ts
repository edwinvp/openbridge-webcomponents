import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-lightning-heavy-snow-colour')
export class ObiLightningHeavySnowColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.4966 13.4933L18.5124 7.33325L14.6666 15.1333L17.2426 16.3333L15.5737 23.3333L20 14.6933L17.4966 13.4933Z" fill="currentColor"/>
<path d="M12.4614 7.11736C13.5609 4.78582 15.7936 3.33325 18.2393 3.33325C21.3737 3.33325 24.1293 5.79117 24.6555 9.10942L24.7566 9.74697L25.3793 9.91734C26.8572 10.3217 28 11.7971 28 13.5765C28 15.6987 26.363 17.3333 24.4824 17.3333H20.1457L21.1867 15.3012C21.3507 14.9811 21.3784 14.6082 21.2635 14.2673C21.1486 13.9264 20.9008 13.6465 20.5764 13.491L18.975 12.7233L19.8281 7.55025C19.9356 6.89826 19.5494 6.26588 18.9202 6.06382C18.2911 5.86176 17.6089 6.15099 17.3166 6.74366L13.4708 14.5437C13.3122 14.8654 13.2899 15.2375 13.409 15.5759C13.5281 15.9143 13.7785 16.1904 14.1037 16.3419L15.6933 17.0825L15.6336 17.3333H7.00788C6.06001 17.3333 5.16232 16.9481 4.504 16.25L4.49175 16.2371L4.47904 16.2245C3.77303 15.5276 3.36175 14.5558 3.33337 13.4314V13.3769C3.33337 12.3653 3.70873 11.4069 4.39061 10.657C5.08296 9.89685 6.00825 9.4871 7.00789 9.4871C7.20215 9.4871 7.27659 9.48909 7.3672 9.5051L8.1991 9.65211L8.48304 8.85646C8.78596 8.00763 9.54947 7.45799 10.4275 7.45799C10.6813 7.45799 10.9179 7.50176 11.1528 7.60555L12.0452 7.99982L12.4614 7.11736Z" fill="currentColor"/>
<path d="M12.4614 7.11736C13.5609 4.78582 15.7936 3.33325 18.2393 3.33325C21.3737 3.33325 24.1293 5.79117 24.6555 9.10942L24.7566 9.74697L25.3793 9.91734C26.8572 10.3217 28 11.7971 28 13.5765C28 15.6987 26.363 17.3333 24.4824 17.3333H20.1457L19.1211 19.3333H24.4824C27.5587 19.3333 30 16.71 30 13.5765C30 11.1904 28.597 9.05046 26.5148 8.19534C25.6239 4.28953 22.2431 1.33325 18.2393 1.33325C15.2594 1.33325 12.5728 2.95032 11.0544 5.50734C10.8432 5.47326 10.6339 5.45799 10.4275 5.45799C8.93646 5.45799 7.63403 6.25968 6.92203 7.48775C5.38205 7.51112 3.95631 8.16348 2.91121 9.31116C1.89911 10.424 1.33337 11.8605 1.33337 13.3769V13.4549L1.33364 13.4664C1.37027 15.059 1.95818 16.5395 3.06133 17.6353C4.09608 18.7254 5.51463 19.3333 7.00788 19.3333H15.1567L15.6336 17.3333H7.00788C6.06001 17.3333 5.16232 16.9481 4.504 16.25L4.49175 16.2371L4.47904 16.2245C3.77303 15.5276 3.36175 14.5558 3.33337 13.4314V13.3769C3.33337 12.3653 3.70873 11.4069 4.39061 10.657C5.08296 9.89685 6.00825 9.4871 7.00789 9.4871C7.20215 9.4871 7.27659 9.48909 7.3672 9.5051L8.1991 9.65211L8.48304 8.85646C8.78596 8.00763 9.54947 7.45799 10.4275 7.45799C10.6813 7.45799 10.9179 7.50177 11.1528 7.60555L12.0452 7.99982L12.4614 7.11736Z" fill="currentColor"/>
<path d="M4 25.2339C3.68114 25.0293 3.57189 24.576 3.75598 24.2216L4.17863 23.4078H3.33329C2.9651 23.4078 2.66663 23.076 2.66663 22.6667C2.66663 22.2574 2.9651 21.9256 3.33329 21.9256H4.17863L3.75598 21.1118C3.57189 20.7573 3.68114 20.3041 4 20.0994C4.31886 19.8948 4.72659 20.0162 4.91068 20.3707L5.33333 21.1845L5.75598 20.3707C5.94008 20.0162 6.3478 19.8948 6.66666 20.0994C6.98553 20.3041 7.09478 20.7573 6.91068 21.1118L6.48804 21.9256H7.33329C7.70148 21.9256 7.99996 22.2574 7.99996 22.6667C7.99996 23.076 7.70148 23.4078 7.33329 23.4078H6.48803L6.91068 24.2216C7.09478 24.576 6.98553 25.0293 6.66666 25.2339C6.3478 25.4386 5.94008 25.3171 5.75598 24.9627L5.33333 24.1489L4.91068 24.9627C4.72659 25.3171 4.31886 25.4386 4 25.2339Z" fill="currentColor"/>
<path d="M9.33333 29.2339C9.01447 29.0293 8.90522 28.576 9.08931 28.2216L9.51197 27.4078H8.66663C8.29844 27.4078 7.99996 27.076 7.99996 26.6667C7.99996 26.2574 8.29844 25.9256 8.66663 25.9256H9.51196L9.08931 25.1118C8.90522 24.7573 9.01447 24.3041 9.33333 24.0994C9.65219 23.8948 10.0599 24.0162 10.244 24.3707L10.6667 25.1845L11.0893 24.3707C11.2734 24.0162 11.6811 23.8948 12 24.0994C12.3189 24.3041 12.4281 24.7573 12.244 25.1118L11.8214 25.9256H12.6666C13.0348 25.9256 13.3333 26.2574 13.3333 26.6667C13.3333 27.076 13.0348 27.4078 12.6666 27.4078H11.8214L12.244 28.2216C12.4281 28.576 12.3189 29.0293 12 29.2339C11.6811 29.4386 11.2734 29.3171 11.0893 28.9627L10.6667 28.1489L10.244 28.9627C10.0599 29.3171 9.65219 29.4386 9.33333 29.2339Z" fill="currentColor"/>
<path d="M18.6667 25.2339C18.3478 25.0293 18.2386 24.576 18.4226 24.2216L18.8453 23.4078H18C17.6318 23.4078 17.3333 23.076 17.3333 22.6667C17.3333 22.2574 17.6318 21.9256 18 21.9256H18.8453L18.4226 21.1118C18.2386 20.7573 18.3478 20.3041 18.6667 20.0994C18.9855 19.8948 19.3933 20.0162 19.5773 20.3707L20 21.1845L20.4226 20.3707C20.6067 20.0162 21.0145 19.8948 21.3333 20.0994C21.6522 20.3041 21.7614 20.7573 21.5773 21.1118L21.1547 21.9256H22C22.3681 21.9256 22.6666 22.2574 22.6666 22.6667C22.6666 23.076 22.3681 23.4078 22 23.4078H21.1547L21.5773 24.2216C21.7614 24.576 21.6522 25.0293 21.3333 25.2339C21.0145 25.4386 20.6067 25.3171 20.4226 24.9627L20 24.1489L19.5773 24.9627C19.3933 25.3171 18.9855 25.4386 18.6667 25.2339Z" fill="currentColor"/>
<path d="M22.6667 30.5673C22.3478 30.3626 22.2386 29.9094 22.4226 29.5549L22.8453 28.7411H22C21.6318 28.7411 21.3333 28.4093 21.3333 28C21.3333 27.5907 21.6318 27.2589 22 27.2589H22.8453L22.4226 26.4451C22.2386 26.0906 22.3478 25.6374 22.6667 25.4327C22.9855 25.2281 23.3933 25.3495 23.5773 25.704L24 26.5178L24.4226 25.704C24.6067 25.3495 25.0145 25.2281 25.3333 25.4327C25.6522 25.6374 25.7614 26.0906 25.5773 26.4451L25.1547 27.2589H26C26.3681 27.2589 26.6666 27.5907 26.6666 28C26.6666 28.4093 26.3681 28.7411 26 28.7411H25.1547L25.5773 29.5549C25.7614 29.9094 25.6522 30.3626 25.3333 30.5673C25.0145 30.7719 24.6067 30.6505 24.4226 30.296L24 29.4822L23.5773 30.296C23.3933 30.6505 22.9855 30.7719 22.6667 30.5673Z" fill="currentColor"/>
<path d="M27.3333 25.2339C27.0145 25.0293 26.9052 24.576 27.0893 24.2216L27.512 23.4078H26.6666C26.2984 23.4078 26 23.076 26 22.6667C26 22.2574 26.2984 21.9256 26.6666 21.9256H27.512L27.0893 21.1118C26.9052 20.7573 27.0145 20.3041 27.3333 20.0994C27.6522 19.8948 28.0599 20.0162 28.244 20.3707L28.6667 21.1845L29.0893 20.3707C29.2734 20.0162 29.6811 19.8948 30 20.0994C30.3189 20.3041 30.4281 20.7573 30.244 21.1118L29.8214 21.9256H30.6666C31.0348 21.9256 31.3333 22.2574 31.3333 22.6667C31.3333 23.076 31.0348 23.4078 30.6666 23.4078H29.8214L30.244 24.2216C30.4281 24.576 30.3189 25.0293 30 25.2339C29.6811 25.4386 29.2734 25.3171 29.0893 24.9627L28.6667 24.1489L28.244 24.9627C28.0599 25.3171 27.6522 25.4386 27.3333 25.2339Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.4966 13.4933L18.5124 7.33325L14.6666 15.1333L17.2426 16.3333L15.5737 23.3333L20 14.6933L17.4966 13.4933Z" style="fill: var(--data-weather-lightning-primary-color)"/>
<path d="M12.4614 7.11736C13.5609 4.78582 15.7936 3.33325 18.2393 3.33325C21.3737 3.33325 24.1293 5.79117 24.6555 9.10942L24.7566 9.74697L25.3793 9.91734C26.8572 10.3217 28 11.7971 28 13.5765C28 15.6987 26.363 17.3333 24.4824 17.3333H20.1457L21.1867 15.3012C21.3507 14.9811 21.3784 14.6082 21.2635 14.2673C21.1486 13.9264 20.9008 13.6465 20.5764 13.491L18.975 12.7233L19.8281 7.55025C19.9356 6.89826 19.5494 6.26588 18.9202 6.06382C18.2911 5.86176 17.6089 6.15099 17.3166 6.74366L13.4708 14.5437C13.3122 14.8654 13.2899 15.2375 13.409 15.5759C13.5281 15.9143 13.7785 16.1904 14.1037 16.3419L15.6933 17.0825L15.6336 17.3333H7.00788C6.06001 17.3333 5.16232 16.9481 4.504 16.25L4.49175 16.2371L4.47904 16.2245C3.77303 15.5276 3.36175 14.5558 3.33337 13.4314V13.3769C3.33337 12.3653 3.70873 11.4069 4.39061 10.657C5.08296 9.89685 6.00825 9.4871 7.00789 9.4871C7.20215 9.4871 7.27659 9.48909 7.3672 9.5051L8.1991 9.65211L8.48304 8.85646C8.78596 8.00763 9.54947 7.45799 10.4275 7.45799C10.6813 7.45799 10.9179 7.50176 11.1528 7.60555L12.0452 7.99982L12.4614 7.11736Z" style="fill: var(--data-weather-cloud-heavy-primary-color)"/>
<path d="M12.4614 7.11736C13.5609 4.78582 15.7936 3.33325 18.2393 3.33325C21.3737 3.33325 24.1293 5.79117 24.6555 9.10942L24.7566 9.74697L25.3793 9.91734C26.8572 10.3217 28 11.7971 28 13.5765C28 15.6987 26.363 17.3333 24.4824 17.3333H20.1457L19.1211 19.3333H24.4824C27.5587 19.3333 30 16.71 30 13.5765C30 11.1904 28.597 9.05046 26.5148 8.19534C25.6239 4.28953 22.2431 1.33325 18.2393 1.33325C15.2594 1.33325 12.5728 2.95032 11.0544 5.50734C10.8432 5.47326 10.6339 5.45799 10.4275 5.45799C8.93646 5.45799 7.63403 6.25968 6.92203 7.48775C5.38205 7.51112 3.95631 8.16348 2.91121 9.31116C1.89911 10.424 1.33337 11.8605 1.33337 13.3769V13.4549L1.33364 13.4664C1.37027 15.059 1.95818 16.5395 3.06133 17.6353C4.09608 18.7254 5.51463 19.3333 7.00788 19.3333H15.1567L15.6336 17.3333H7.00788C6.06001 17.3333 5.16232 16.9481 4.504 16.25L4.49175 16.2371L4.47904 16.2245C3.77303 15.5276 3.36175 14.5558 3.33337 13.4314V13.3769C3.33337 12.3653 3.70873 11.4069 4.39061 10.657C5.08296 9.89685 6.00825 9.4871 7.00789 9.4871C7.20215 9.4871 7.27659 9.48909 7.3672 9.5051L8.1991 9.65211L8.48304 8.85646C8.78596 8.00763 9.54947 7.45799 10.4275 7.45799C10.6813 7.45799 10.9179 7.50177 11.1528 7.60555L12.0452 7.99982L12.4614 7.11736Z" style="fill: var(--data-weather-cloud-heavy-primary-color)"/>
<path d="M4 25.2339C3.68114 25.0293 3.57189 24.576 3.75598 24.2216L4.17863 23.4078H3.33329C2.9651 23.4078 2.66663 23.076 2.66663 22.6667C2.66663 22.2574 2.9651 21.9256 3.33329 21.9256H4.17863L3.75598 21.1118C3.57189 20.7573 3.68114 20.3041 4 20.0994C4.31886 19.8948 4.72659 20.0162 4.91068 20.3707L5.33333 21.1845L5.75598 20.3707C5.94008 20.0162 6.3478 19.8948 6.66666 20.0994C6.98553 20.3041 7.09478 20.7573 6.91068 21.1118L6.48804 21.9256H7.33329C7.70148 21.9256 7.99996 22.2574 7.99996 22.6667C7.99996 23.076 7.70148 23.4078 7.33329 23.4078H6.48803L6.91068 24.2216C7.09478 24.576 6.98553 25.0293 6.66666 25.2339C6.3478 25.4386 5.94008 25.3171 5.75598 24.9627L5.33333 24.1489L4.91068 24.9627C4.72659 25.3171 4.31886 25.4386 4 25.2339Z" style="fill: var(--data-weather-snow-primary-color)"/>
<path d="M9.33333 29.2339C9.01447 29.0293 8.90522 28.576 9.08931 28.2216L9.51197 27.4078H8.66663C8.29844 27.4078 7.99996 27.076 7.99996 26.6667C7.99996 26.2574 8.29844 25.9256 8.66663 25.9256H9.51196L9.08931 25.1118C8.90522 24.7573 9.01447 24.3041 9.33333 24.0994C9.65219 23.8948 10.0599 24.0162 10.244 24.3707L10.6667 25.1845L11.0893 24.3707C11.2734 24.0162 11.6811 23.8948 12 24.0994C12.3189 24.3041 12.4281 24.7573 12.244 25.1118L11.8214 25.9256H12.6666C13.0348 25.9256 13.3333 26.2574 13.3333 26.6667C13.3333 27.076 13.0348 27.4078 12.6666 27.4078H11.8214L12.244 28.2216C12.4281 28.576 12.3189 29.0293 12 29.2339C11.6811 29.4386 11.2734 29.3171 11.0893 28.9627L10.6667 28.1489L10.244 28.9627C10.0599 29.3171 9.65219 29.4386 9.33333 29.2339Z" style="fill: var(--data-weather-snow-primary-color)"/>
<path d="M18.6667 25.2339C18.3478 25.0293 18.2386 24.576 18.4226 24.2216L18.8453 23.4078H18C17.6318 23.4078 17.3333 23.076 17.3333 22.6667C17.3333 22.2574 17.6318 21.9256 18 21.9256H18.8453L18.4226 21.1118C18.2386 20.7573 18.3478 20.3041 18.6667 20.0994C18.9855 19.8948 19.3933 20.0162 19.5773 20.3707L20 21.1845L20.4226 20.3707C20.6067 20.0162 21.0145 19.8948 21.3333 20.0994C21.6522 20.3041 21.7614 20.7573 21.5773 21.1118L21.1547 21.9256H22C22.3681 21.9256 22.6666 22.2574 22.6666 22.6667C22.6666 23.076 22.3681 23.4078 22 23.4078H21.1547L21.5773 24.2216C21.7614 24.576 21.6522 25.0293 21.3333 25.2339C21.0145 25.4386 20.6067 25.3171 20.4226 24.9627L20 24.1489L19.5773 24.9627C19.3933 25.3171 18.9855 25.4386 18.6667 25.2339Z" style="fill: var(--data-weather-snow-primary-color)"/>
<path d="M22.6667 30.5673C22.3478 30.3626 22.2386 29.9094 22.4226 29.5549L22.8453 28.7411H22C21.6318 28.7411 21.3333 28.4093 21.3333 28C21.3333 27.5907 21.6318 27.2589 22 27.2589H22.8453L22.4226 26.4451C22.2386 26.0906 22.3478 25.6374 22.6667 25.4327C22.9855 25.2281 23.3933 25.3495 23.5773 25.704L24 26.5178L24.4226 25.704C24.6067 25.3495 25.0145 25.2281 25.3333 25.4327C25.6522 25.6374 25.7614 26.0906 25.5773 26.4451L25.1547 27.2589H26C26.3681 27.2589 26.6666 27.5907 26.6666 28C26.6666 28.4093 26.3681 28.7411 26 28.7411H25.1547L25.5773 29.5549C25.7614 29.9094 25.6522 30.3626 25.3333 30.5673C25.0145 30.7719 24.6067 30.6505 24.4226 30.296L24 29.4822L23.5773 30.296C23.3933 30.6505 22.9855 30.7719 22.6667 30.5673Z" style="fill: var(--data-weather-snow-primary-color)"/>
<path d="M27.3333 25.2339C27.0145 25.0293 26.9052 24.576 27.0893 24.2216L27.512 23.4078H26.6666C26.2984 23.4078 26 23.076 26 22.6667C26 22.2574 26.2984 21.9256 26.6666 21.9256H27.512L27.0893 21.1118C26.9052 20.7573 27.0145 20.3041 27.3333 20.0994C27.6522 19.8948 28.0599 20.0162 28.244 20.3707L28.6667 21.1845L29.0893 20.3707C29.2734 20.0162 29.6811 19.8948 30 20.0994C30.3189 20.3041 30.4281 20.7573 30.244 21.1118L29.8214 21.9256H30.6666C31.0348 21.9256 31.3333 22.2574 31.3333 22.6667C31.3333 23.076 31.0348 23.4078 30.6666 23.4078H29.8214L30.244 24.2216C30.4281 24.576 30.3189 25.0293 30 25.2339C29.6811 25.4386 29.2734 25.3171 29.0893 24.9627L28.6667 24.1489L28.244 24.9627C28.0599 25.3171 27.6522 25.4386 27.3333 25.2339Z" style="fill: var(--data-weather-snow-primary-color)"/>
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
    'obi-lightning-heavy-snow-colour': ObiLightningHeavySnowColour;
  }
}