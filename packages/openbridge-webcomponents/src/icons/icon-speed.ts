import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-speed')
export class ObiSpeed extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6C7.58172 6 4 9.58172 4 14C4 15.4597 4.38939 16.8247 5.0704 18.001H18.9296C19.6106 16.8247 20 15.4597 20 14C20 12.5344 19.6059 11.1608 18.9179 9.97954C19.3078 9.36537 19.7118 8.72919 20.0944 8.1267C21.293 9.77579 22 11.8053 22 14C22 14.0041 22 14.0081 22 14.0122C22 14.0163 22 14.0203 22 14.0244C22 16.2647 21.2633 18.3329 20.019 20H20.0007L20 20.001H4L3.99927 20H3.98099C2.73667 18.3329 2 16.2647 2 14.0244C2 14.0198 2 14.0153 2.00001 14.0107C2 14.0071 2 14.0036 2 14C2 8.47715 6.47715 4 12 4C14.196 4 16.2266 4.70783 17.8762 5.90778C17.2669 6.29419 16.6384 6.69276 16.0225 7.08332C14.8407 6.39456 13.4664 6 12 6Z" fill="currentColor"/>
<path d="M13.4136 15.4141C12.6326 16.1952 11.3662 16.1952 10.5852 15.4141C9.80413 14.6331 9.80413 13.3668 10.5852 12.5857C11.1969 11.974 16.0551 8.85071 18.133 7.52507C18.3579 7.38163 18.6177 7.64147 18.4743 7.86632C17.1486 9.94426 14.0253 14.8024 13.4136 15.4141Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6C7.58172 6 4 9.58172 4 14C4 15.4597 4.38939 16.8247 5.0704 18.001H18.9296C19.6106 16.8247 20 15.4597 20 14C20 12.5344 19.6059 11.1608 18.9179 9.97954C19.3078 9.36537 19.7118 8.72919 20.0944 8.1267C21.293 9.77579 22 11.8053 22 14C22 14.0041 22 14.0081 22 14.0122C22 14.0163 22 14.0203 22 14.0244C22 16.2647 21.2633 18.3329 20.019 20H20.0007L20 20.001H4L3.99927 20H3.98099C2.73667 18.3329 2 16.2647 2 14.0244C2 14.0198 2 14.0153 2.00001 14.0107C2 14.0071 2 14.0036 2 14C2 8.47715 6.47715 4 12 4C14.196 4 16.2266 4.70783 17.8762 5.90778C17.2669 6.29419 16.6384 6.69276 16.0225 7.08332C14.8407 6.39456 13.4664 6 12 6Z" style="fill: var(--element-active-color)"/>
<path d="M13.4136 15.4141C12.6326 16.1952 11.3662 16.1952 10.5852 15.4141C9.80413 14.6331 9.80413 13.3668 10.5852 12.5857C11.1969 11.974 16.0551 8.85071 18.133 7.52507C18.3579 7.38163 18.6177 7.64147 18.4743 7.86632C17.1486 9.94426 14.0253 14.8024 13.4136 15.4141Z" style="fill: var(--element-active-color)"/>
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
    'obi-speed': ObiSpeed;
  }
}