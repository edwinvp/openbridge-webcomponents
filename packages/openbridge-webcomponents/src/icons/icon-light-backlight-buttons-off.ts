import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-light-backlight-buttons-off')
export class ObiLightBacklightButtonsOff extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M1.39441 4.22183L2.80862 2.80762L21.1934 21.1924L19.7792 22.6066L15.1726 18H7.00034V15H12.1726L1.39441 4.22183Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.39441 4.22183L2.80862 2.80762L21.1934 21.1924L19.7792 22.6066L15.1726 18H7.00034V15H12.1726L1.39441 4.22183Z" style="fill: var(--element-active-color)"/>
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
    'obi-light-backlight-buttons-off': ObiLightBacklightButtonsOff;
  }
}