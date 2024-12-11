import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-radar-overlay-proposal')
export class ObiRadarOverlayProposal extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 2L2.10608 4.74025C1.7384 4.89783 1.5 5.25937 1.5 5.6594V20.4835C1.5 21.2014 2.23405 21.6854 2.89392 21.4026L6.9574 19.6611C6.73924 19.2141 6.55514 18.7474 6.40848 18.2644L3 19.7252V5.98909L7.75 3.95338V10.0044C8.18363 9.39396 8.68757 8.837 9.25 8.34528V3.77431L14.75 5.34574V6.02917C14.9975 6.00984 15.2476 6 15.5 6C15.7524 6 16.0025 6.00984 16.25 6.02917V5.34574L21 3.98859V7.7531C21.5456 8.14113 22.0484 8.58534 22.5 9.0773V3.32573C22.5 2.66135 21.8641 2.18169 21.2253 2.36421L15.5 4L8.5 2Z" fill="currentColor"/>
<path d="M15.4882 10.5C14.8356 10.5015 14.1895 10.6308 13.5865 10.8806C13.0858 11.088 12.6228 11.3751 12.2154 11.7301C12.129 11.8054 12.0453 11.8836 11.9644 11.9645L13.025 13.0251C13.35 12.7001 13.7359 12.4423 14.1605 12.2664C14.5851 12.0905 15.0403 12 15.4999 12C15.9595 12 16.4146 12.0905 16.8393 12.2664C17.0305 12.3456 17.2138 12.4414 17.3872 12.5525L15.8887 14.051C15.3882 13.9172 14.832 14.0467 14.4393 14.4393C13.8536 15.0251 13.8536 15.9749 14.4393 16.5606C15.0251 17.1464 15.9749 17.1464 16.5607 16.5606C16.9532 16.1681 17.0827 15.6122 16.9492 15.1118L19.5262 12.5348C19.3795 12.3359 19.2184 12.1482 19.0444 11.9734C19.0385 11.9674 19.0326 11.9615 19.0266 11.9556C18.8519 11.7817 18.6644 11.6207 18.4656 11.4741C18.141 11.2349 17.7876 11.0356 17.4133 10.8806C16.8067 10.6293 16.1566 10.5 15.5 10.5" fill="currentColor"/>
<path d="M15.4882 10.5C15.4921 10.5 15.4961 10.5 15.5 10.5L15.4882 10.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 23.5C19.9183 23.5 23.5 19.9183 23.5 15.5C23.5 11.0817 19.9183 7.5 15.5 7.5C11.0817 7.5 7.5 11.0817 7.5 15.5C7.5 19.9183 11.0817 23.5 15.5 23.5ZM22 15.5C22 19.0899 19.0899 22 15.5 22C11.9101 22 9 19.0899 9 15.5C9 11.9101 11.9101 9 15.5 9C19.0899 9 22 11.9101 22 15.5Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 2L2.10608 4.74025C1.7384 4.89783 1.5 5.25937 1.5 5.6594V20.4835C1.5 21.2014 2.23405 21.6854 2.89392 21.4026L6.9574 19.6611C6.73924 19.2141 6.55514 18.7474 6.40848 18.2644L3 19.7252V5.98909L7.75 3.95338V10.0044C8.18363 9.39396 8.68757 8.837 9.25 8.34528V3.77431L14.75 5.34574V6.02917C14.9975 6.00984 15.2476 6 15.5 6C15.7524 6 16.0025 6.00984 16.25 6.02917V5.34574L21 3.98859V7.7531C21.5456 8.14113 22.0484 8.58534 22.5 9.0773V3.32573C22.5 2.66135 21.8641 2.18169 21.2253 2.36421L15.5 4L8.5 2Z" style="fill: var(--element-active-color)"/>
<path d="M15.4882 10.5C14.8356 10.5015 14.1895 10.6308 13.5865 10.8806C13.0858 11.088 12.6228 11.3751 12.2154 11.7301C12.129 11.8054 12.0453 11.8836 11.9644 11.9645L13.025 13.0251C13.35 12.7001 13.7359 12.4423 14.1605 12.2664C14.5851 12.0905 15.0403 12 15.4999 12C15.9595 12 16.4146 12.0905 16.8393 12.2664C17.0305 12.3456 17.2138 12.4414 17.3872 12.5525L15.8887 14.051C15.3882 13.9172 14.832 14.0467 14.4393 14.4393C13.8536 15.0251 13.8536 15.9749 14.4393 16.5606C15.0251 17.1464 15.9749 17.1464 16.5607 16.5606C16.9532 16.1681 17.0827 15.6122 16.9492 15.1118L19.5262 12.5348C19.3795 12.3359 19.2184 12.1482 19.0444 11.9734C19.0385 11.9674 19.0326 11.9615 19.0266 11.9556C18.8519 11.7817 18.6644 11.6207 18.4656 11.4741C18.141 11.2349 17.7876 11.0356 17.4133 10.8806C16.8067 10.6293 16.1566 10.5 15.5 10.5" style="fill: var(--element-active-color)"/>
<path d="M15.4882 10.5C15.4921 10.5 15.4961 10.5 15.5 10.5L15.4882 10.5Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 23.5C19.9183 23.5 23.5 19.9183 23.5 15.5C23.5 11.0817 19.9183 7.5 15.5 7.5C11.0817 7.5 7.5 11.0817 7.5 15.5C7.5 19.9183 11.0817 23.5 15.5 23.5ZM22 15.5C22 19.0899 19.0899 22 15.5 22C11.9101 22 9 19.0899 9 15.5C9 11.9101 11.9101 9 15.5 9C19.0899 9 22 11.9101 22 15.5Z" style="fill: var(--element-active-color)"/>
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
    'obi-radar-overlay-proposal': ObiRadarOverlayProposal;
  }
}