import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-hvac')
export class ObiHvac extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6237 1.80347C17.8581 2.30594 18.9604 3.03377 19.9307 3.98697L19.9566 4.01291L21.487 3.12932L20.4297 7.07526L16.4838 6.01795L18.1048 5.08207C17.5619 4.61064 16.962 4.21565 16.3051 3.8971C15.1987 3.36127 14.0242 3.09335 12.7817 3.09335C11.8455 3.09335 10.9604 3.23803 10.1263 3.5274C9.29228 3.81676 8.52632 4.22527 7.82844 4.75294L6.80715 2.96569C7.65822 2.36994 8.58181 1.90185 9.5779 1.56142C10.5733 1.221 11.6327 1.05078 12.7561 1.05078C14.1008 1.05078 15.39 1.30168 16.6237 1.80347Z" fill="currentColor"/>
<path d="M8.54334 20.5828C6.77311 19.7658 5.33038 18.5318 4.21513 16.8807C3.10057 15.2296 2.54329 13.3658 2.54329 11.2892C2.54329 10.8466 2.56883 10.4126 2.61989 9.98702C2.67095 9.56148 2.74755 9.14446 2.84968 8.73595L2.89704 8.59739L1.10352 8.0917L4.66764 6.09537L6.66397 9.6595L4.89053 9.15946C4.83659 9.35587 4.79052 9.55512 4.75233 9.75723C4.65837 10.2508 4.61139 10.7615 4.61139 11.2892C4.61139 12.9402 5.06246 14.4425 5.96459 15.7961C6.86673 17.1489 8.06674 18.1488 9.56462 18.7956L8.54334 20.5828Z" fill="currentColor"/>
<path d="M15.9673 20.9782L16.1982 22.6306L12.9377 20.1694L15.3988 16.9089L15.6829 18.9428C16.9329 18.4797 18.0214 17.7198 18.9482 16.6632C20.284 15.1401 20.9519 13.3487 20.9519 11.2892C20.9519 11.1019 20.9479 10.9232 20.9397 10.753C20.9308 10.5828 20.9094 10.4126 20.8753 10.2423H22.9434C22.9605 10.4126 22.9734 10.5787 22.9823 10.7407C22.9904 10.9021 22.9945 11.0764 22.9945 11.2636C22.9945 13.5615 22.3096 15.617 20.9397 17.4301C19.6485 19.1377 17.991 20.3204 15.9673 20.9782Z" fill="currentColor"/>
<path d="M16.9956 8.19974H8.82461C9.75623 6.95945 11.2395 6.15717 12.9101 6.15717C14.5808 6.15717 16.064 6.95945 16.9956 8.19974Z" fill="currentColor"/>
<path d="M17.9144 12.2849C17.9814 11.9549 18.0165 11.6133 18.0165 11.2636C18.0165 10.9138 17.9814 10.5723 17.9144 10.2423H7.90585C7.83886 10.5723 7.8037 10.9138 7.8037 11.2636C7.8037 11.6133 7.83886 11.9549 7.90585 12.2849H17.9144Z" fill="currentColor"/>
<path d="M16.9956 14.3274H8.82461C9.75623 15.5677 11.2395 16.37 12.9101 16.37C14.5808 16.37 16.064 15.5677 16.9956 14.3274Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6237 1.80347C17.8581 2.30594 18.9604 3.03377 19.9307 3.98697L19.9566 4.01291L21.487 3.12932L20.4297 7.07526L16.4838 6.01795L18.1048 5.08207C17.5619 4.61064 16.962 4.21565 16.3051 3.8971C15.1987 3.36127 14.0242 3.09335 12.7817 3.09335C11.8455 3.09335 10.9604 3.23803 10.1263 3.5274C9.29228 3.81676 8.52632 4.22527 7.82844 4.75294L6.80715 2.96569C7.65822 2.36994 8.58181 1.90185 9.5779 1.56142C10.5733 1.221 11.6327 1.05078 12.7561 1.05078C14.1008 1.05078 15.39 1.30168 16.6237 1.80347Z" style="fill: var(--element-active-color)"/>
<path d="M8.54334 20.5828C6.77311 19.7658 5.33038 18.5318 4.21513 16.8807C3.10057 15.2296 2.54329 13.3658 2.54329 11.2892C2.54329 10.8466 2.56883 10.4126 2.61989 9.98702C2.67095 9.56148 2.74755 9.14446 2.84968 8.73595L2.89704 8.59739L1.10352 8.0917L4.66764 6.09537L6.66397 9.6595L4.89053 9.15946C4.83659 9.35587 4.79052 9.55512 4.75233 9.75723C4.65837 10.2508 4.61139 10.7615 4.61139 11.2892C4.61139 12.9402 5.06246 14.4425 5.96459 15.7961C6.86673 17.1489 8.06674 18.1488 9.56462 18.7956L8.54334 20.5828Z" style="fill: var(--element-active-color)"/>
<path d="M15.9673 20.9782L16.1982 22.6306L12.9377 20.1694L15.3988 16.9089L15.6829 18.9428C16.9329 18.4797 18.0214 17.7198 18.9482 16.6632C20.284 15.1401 20.9519 13.3487 20.9519 11.2892C20.9519 11.1019 20.9479 10.9232 20.9397 10.753C20.9308 10.5828 20.9094 10.4126 20.8753 10.2423H22.9434C22.9605 10.4126 22.9734 10.5787 22.9823 10.7407C22.9904 10.9021 22.9945 11.0764 22.9945 11.2636C22.9945 13.5615 22.3096 15.617 20.9397 17.4301C19.6485 19.1377 17.991 20.3204 15.9673 20.9782Z" style="fill: var(--element-active-color)"/>
<path d="M16.9956 8.19974H8.82461C9.75623 6.95945 11.2395 6.15717 12.9101 6.15717C14.5808 6.15717 16.064 6.95945 16.9956 8.19974Z" style="fill: var(--element-active-color)"/>
<path d="M17.9144 12.2849C17.9814 11.9549 18.0165 11.6133 18.0165 11.2636C18.0165 10.9138 17.9814 10.5723 17.9144 10.2423H7.90585C7.83886 10.5723 7.8037 10.9138 7.8037 11.2636C7.8037 11.6133 7.83886 11.9549 7.90585 12.2849H17.9144Z" style="fill: var(--element-active-color)"/>
<path d="M16.9956 14.3274H8.82461C9.75623 15.5677 11.2395 16.37 12.9101 16.37C14.5808 16.37 16.064 15.5677 16.9956 14.3274Z" style="fill: var(--element-active-color)"/>
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
    'obi-hvac': ObiHvac;
  }
}