import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-simplified-beacon-cardinal-north')
export class ObiSimplifiedBeaconCardinalNorth extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11L18 11L12 3L6 11Z" fill="currentColor"/>
<path d="M12 13L18 21H6L12 13Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11L12 3L6 11L18 11ZM16 10L12 4.66667L8 10L16 10ZM12 13L6 21H18L12 13ZM12 14.6667L8 20H16L12 14.6667Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11L18 11L12 3L6 11Z" style="fill: var(--navigation-light-yellow-color)"/>
<path d="M12 13L18 21H6L12 13Z" style="fill: var(--navigation-light-yellow-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11L12 3L6 11L18 11ZM16 10L12 4.66667L8 10L16 10ZM12 13L6 21H18L12 13ZM12 14.6667L8 20H16L12 14.6667Z" style="fill: var(--element-active-color)"/>
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
    'obi-simplified-beacon-cardinal-north': ObiSimplifiedBeaconCardinalNorth;
  }
}