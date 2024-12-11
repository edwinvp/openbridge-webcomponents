import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-standby-iec')
export class ObiStandbyIec extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2H11V14H13V2Z" fill="currentColor"/>
<path d="M4.15372 10.4393C4.4624 8.88745 5.22433 7.46199 6.34315 6.34317L4.92894 4.92896C3.53041 6.32748 2.57801 8.10931 2.19215 10.0491C1.8063 11.9889 2.00433 13.9996 2.76121 15.8269C3.51808 17.6541 4.79981 19.2159 6.4443 20.3147C8.08879 21.4135 10.0222 22 12 22C13.9778 22 15.9112 21.4135 17.5557 20.3147C19.2002 19.2159 20.4819 17.6541 21.2388 15.8269C21.9957 13.9996 22.1937 11.9889 21.8079 10.0491C21.422 8.10931 20.4696 6.32748 19.0711 4.92896L17.6569 6.34317C18.7757 7.46199 19.5376 8.88745 19.8463 10.4393C20.155 11.9911 19.9965 13.5997 19.391 15.0615C18.7855 16.5233 17.7602 17.7727 16.4446 18.6518C15.129 19.5308 13.5823 20 12 20C10.4178 20 8.87103 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2H11V14H13V2Z" style="fill: var(--element-active-color)"/>
<path d="M4.15372 10.4393C4.4624 8.88745 5.22433 7.46199 6.34315 6.34317L4.92894 4.92896C3.53041 6.32748 2.57801 8.10931 2.19215 10.0491C1.8063 11.9889 2.00433 13.9996 2.76121 15.8269C3.51808 17.6541 4.79981 19.2159 6.4443 20.3147C8.08879 21.4135 10.0222 22 12 22C13.9778 22 15.9112 21.4135 17.5557 20.3147C19.2002 19.2159 20.4819 17.6541 21.2388 15.8269C21.9957 13.9996 22.1937 11.9889 21.8079 10.0491C21.422 8.10931 20.4696 6.32748 19.0711 4.92896L17.6569 6.34317C18.7757 7.46199 19.5376 8.88745 19.8463 10.4393C20.155 11.9911 19.9965 13.5997 19.391 15.0615C18.7855 16.5233 17.7602 17.7727 16.4446 18.6518C15.129 19.5308 13.5823 20 12 20C10.4178 20 8.87103 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393Z" style="fill: var(--element-active-color)"/>
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
    'obi-standby-iec': ObiStandbyIec;
  }
}