import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-alert-off-google')
export class ObiAlertOffGoogle extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M4.00002 19V17H6.00002V10C6.00002 9.45 6.07086 8.90833 6.21252 8.375C6.35419 7.84167 6.56669 7.33333 6.85002 6.85L8.35003 8.35C8.23336 8.61667 8.14586 8.8875 8.08752 9.1625C8.02919 9.4375 8.00002 9.71667 8.00002 10V17H14.2L1.40002 4.2L2.80002 2.8L21.2 21.2L19.8 22.6L16.15 19H4.00002ZM18 15.15L16 13.15V10C16 8.9 15.6084 7.95833 14.825 7.175C14.0417 6.39167 13.1 6 12 6C11.5667 6 11.15 6.06667 10.75 6.2C10.35 6.33333 9.98336 6.53333 9.65003 6.8L8.20003 5.35C8.53336 5.08333 8.89169 4.85 9.27502 4.65C9.65836 4.45 10.0667 4.3 10.5 4.2V3.5C10.5 3.08333 10.6459 2.72917 10.9375 2.4375C11.2292 2.14583 11.5834 2 12 2C12.4167 2 12.7709 2.14583 13.0625 2.4375C13.3542 2.72917 13.5 3.08333 13.5 3.5V4.2C14.8334 4.53333 15.9167 5.2375 16.75 6.3125C17.5834 7.3875 18 8.61667 18 10V15.15ZM12 22C11.45 22 10.9792 21.8042 10.5875 21.4125C10.1959 21.0208 10 20.55 10 20H14C14 20.55 13.8042 21.0208 13.4125 21.4125C13.0209 21.8042 12.55 22 12 22Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.00002 19V17H6.00002V10C6.00002 9.45 6.07086 8.90833 6.21252 8.375C6.35419 7.84167 6.56669 7.33333 6.85002 6.85L8.35003 8.35C8.23336 8.61667 8.14586 8.8875 8.08752 9.1625C8.02919 9.4375 8.00002 9.71667 8.00002 10V17H14.2L1.40002 4.2L2.80002 2.8L21.2 21.2L19.8 22.6L16.15 19H4.00002ZM18 15.15L16 13.15V10C16 8.9 15.6084 7.95833 14.825 7.175C14.0417 6.39167 13.1 6 12 6C11.5667 6 11.15 6.06667 10.75 6.2C10.35 6.33333 9.98336 6.53333 9.65003 6.8L8.20003 5.35C8.53336 5.08333 8.89169 4.85 9.27502 4.65C9.65836 4.45 10.0667 4.3 10.5 4.2V3.5C10.5 3.08333 10.6459 2.72917 10.9375 2.4375C11.2292 2.14583 11.5834 2 12 2C12.4167 2 12.7709 2.14583 13.0625 2.4375C13.3542 2.72917 13.5 3.08333 13.5 3.5V4.2C14.8334 4.53333 15.9167 5.2375 16.75 6.3125C17.5834 7.3875 18 8.61667 18 10V15.15ZM12 22C11.45 22 10.9792 21.8042 10.5875 21.4125C10.1959 21.0208 10 20.55 10 20H14C14 20.55 13.8042 21.0208 13.4125 21.4125C13.0209 21.8042 12.55 22 12 22Z" style="fill: var(--element-active-color)"/>
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
    'obi-alert-off-google': ObiAlertOffGoogle;
  }
}