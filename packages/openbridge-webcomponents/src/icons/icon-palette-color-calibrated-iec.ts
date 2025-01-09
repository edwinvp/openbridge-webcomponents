import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-palette-color-calibrated-iec')
export class ObiPaletteColorCalibratedIec extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.03075 15.3408C2.6493 14.2237 1.00012 11.8044 1.00012 9C1.00012 5.13401 4.13413 2 8.00012 2C9.48737 2 10.8663 2.46381 12.0001 3.25469C13.134 2.46381 14.5129 2 16.0001 2C19.8661 2 23.0001 5.13401 23.0001 9C23.0001 11.8044 21.3509 14.2237 18.9695 15.3408C18.9898 15.5578 19.0001 15.7777 19.0001 16C19.0001 19.866 15.8661 23 12.0001 23C8.13413 23 5.00012 19.866 5.00012 16C5.00012 15.7777 5.01048 15.5578 5.03075 15.3408ZM8.00012 14.5C9.03455 14.5 10.0023 14.2144 10.8288 13.7178C10.1688 12.9949 9.65849 12.133 9.34665 11.1813C8.11751 11.8595 7.1756 12.9944 6.74965 14.3572C7.15137 14.4506 7.56998 14.5 8.00012 14.5ZM5.34666 13.8187C3.64961 12.8823 2.50012 11.0754 2.50012 9C2.50012 5.96243 4.96256 3.5 8.00012 3.5C9.03455 3.5 10.0023 3.78557 10.8288 4.28218C9.69289 5.52656 9.00012 7.18238 9.00012 9C9.00012 9.2223 9.01048 9.44217 9.03075 9.65917C7.29605 10.4729 5.94989 11.9776 5.34666 13.8187ZM17.4978 15.8394C17.4994 15.8928 17.5001 15.9463 17.5001 16C17.5001 19.0376 15.0377 21.5 12.0001 21.5C8.96256 21.5 6.50012 19.0376 6.50012 16C6.50012 15.9463 6.50089 15.8928 6.50242 15.8394C6.98495 15.9446 7.48606 16 8.00012 16C9.48737 16 10.8663 15.5362 12.0001 14.7453C13.134 15.5362 14.5129 16 16.0001 16C16.5142 16 17.0153 15.9446 17.4978 15.8394ZM18.6536 13.8187C20.3506 12.8823 21.5001 11.0754 21.5001 9C21.5001 5.96243 19.0377 3.5 16.0001 3.5C14.9657 3.5 13.998 3.78557 13.1715 4.28218C14.3074 5.52656 15.0001 7.18238 15.0001 9C15.0001 9.2223 14.9898 9.44217 14.9695 9.65917C16.7042 10.4729 18.0504 11.9776 18.6536 13.8187ZM14.6536 11.1813C15.8827 11.8595 16.8246 12.9944 17.2506 14.3572C16.8489 14.4506 16.4303 14.5 16.0001 14.5C14.9657 14.5 13.998 14.2144 13.1715 13.7178C13.8314 12.9949 14.3418 12.133 14.6536 11.1813ZM13.4978 9.16059C13.4994 9.10725 13.5001 9.05371 13.5001 9C13.5001 7.53846 12.93 6.21007 12.0001 5.22506C11.0702 6.21007 10.5001 7.53846 10.5001 9C10.5001 9.05371 10.5009 9.10725 10.5024 9.16059C10.9849 9.05541 11.4861 9 12.0001 9C12.5142 9 13.0153 9.05541 13.4978 9.16059ZM10.7497 10.6428C11.1514 10.5494 11.57 10.5 12.0001 10.5C12.4303 10.5 12.8489 10.5494 13.2506 10.6428C12.9986 11.4491 12.566 12.1756 12.0001 12.7749C11.4343 12.1756 11.0017 11.4491 10.7497 10.6428Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.03075 15.3408C2.6493 14.2237 1.00012 11.8044 1.00012 9C1.00012 5.13401 4.13413 2 8.00012 2C9.48737 2 10.8663 2.46381 12.0001 3.25469C13.134 2.46381 14.5129 2 16.0001 2C19.8661 2 23.0001 5.13401 23.0001 9C23.0001 11.8044 21.3509 14.2237 18.9695 15.3408C18.9898 15.5578 19.0001 15.7777 19.0001 16C19.0001 19.866 15.8661 23 12.0001 23C8.13413 23 5.00012 19.866 5.00012 16C5.00012 15.7777 5.01048 15.5578 5.03075 15.3408ZM8.00012 14.5C9.03455 14.5 10.0023 14.2144 10.8288 13.7178C10.1688 12.9949 9.65849 12.133 9.34665 11.1813C8.11751 11.8595 7.1756 12.9944 6.74965 14.3572C7.15137 14.4506 7.56998 14.5 8.00012 14.5ZM5.34666 13.8187C3.64961 12.8823 2.50012 11.0754 2.50012 9C2.50012 5.96243 4.96256 3.5 8.00012 3.5C9.03455 3.5 10.0023 3.78557 10.8288 4.28218C9.69289 5.52656 9.00012 7.18238 9.00012 9C9.00012 9.2223 9.01048 9.44217 9.03075 9.65917C7.29605 10.4729 5.94989 11.9776 5.34666 13.8187ZM17.4978 15.8394C17.4994 15.8928 17.5001 15.9463 17.5001 16C17.5001 19.0376 15.0377 21.5 12.0001 21.5C8.96256 21.5 6.50012 19.0376 6.50012 16C6.50012 15.9463 6.50089 15.8928 6.50242 15.8394C6.98495 15.9446 7.48606 16 8.00012 16C9.48737 16 10.8663 15.5362 12.0001 14.7453C13.134 15.5362 14.5129 16 16.0001 16C16.5142 16 17.0153 15.9446 17.4978 15.8394ZM18.6536 13.8187C20.3506 12.8823 21.5001 11.0754 21.5001 9C21.5001 5.96243 19.0377 3.5 16.0001 3.5C14.9657 3.5 13.998 3.78557 13.1715 4.28218C14.3074 5.52656 15.0001 7.18238 15.0001 9C15.0001 9.2223 14.9898 9.44217 14.9695 9.65917C16.7042 10.4729 18.0504 11.9776 18.6536 13.8187ZM14.6536 11.1813C15.8827 11.8595 16.8246 12.9944 17.2506 14.3572C16.8489 14.4506 16.4303 14.5 16.0001 14.5C14.9657 14.5 13.998 14.2144 13.1715 13.7178C13.8314 12.9949 14.3418 12.133 14.6536 11.1813ZM13.4978 9.16059C13.4994 9.10725 13.5001 9.05371 13.5001 9C13.5001 7.53846 12.93 6.21007 12.0001 5.22506C11.0702 6.21007 10.5001 7.53846 10.5001 9C10.5001 9.05371 10.5009 9.10725 10.5024 9.16059C10.9849 9.05541 11.4861 9 12.0001 9C12.5142 9 13.0153 9.05541 13.4978 9.16059ZM10.7497 10.6428C11.1514 10.5494 11.57 10.5 12.0001 10.5C12.4303 10.5 12.8489 10.5494 13.2506 10.6428C12.9986 11.4491 12.566 12.1756 12.0001 12.7749C11.4343 12.1756 11.0017 11.4491 10.7497 10.6428Z" style="fill: var(--element-active-color)"/>
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
    'obi-palette-color-calibrated-iec': ObiPaletteColorCalibratedIec;
  }
}