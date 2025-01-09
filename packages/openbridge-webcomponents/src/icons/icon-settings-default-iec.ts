import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-settings-default-iec')
export class ObiSettingsDefaultIec extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M5.85 13L5.55 14.5C5.35 14.5833 5.1625 14.6708 4.9875 14.7625C4.8125 14.8542 4.63333 14.9667 4.45 15.1L3 14.65L2 16.35L3.15 17.35C3.11667 17.5667 3.1 17.7833 3.1 18C3.1 18.2167 3.11667 18.4333 3.15 18.65L2 19.65L3 21.35L4.45 20.9C4.63333 21.0333 4.8125 21.1458 4.9875 21.2375C5.1625 21.3292 5.35 21.4167 5.55 21.5L5.85 23H7.85L8.15 21.5C8.35 21.4167 8.5375 21.3292 8.7125 21.2375C8.8875 21.1458 9.06667 21.0333 9.25 20.9L10.7 21.35L11.7 19.65L10.55 18.65C10.5833 18.4333 10.6 18.2167 10.6 18C10.6 17.7833 10.5833 17.5667 10.55 17.35L11.7 16.35L10.7 14.65L9.25 15.1C9.06667 14.9667 8.8875 14.8542 8.7125 14.7625C8.5375 14.6708 8.35 14.5833 8.15 14.5L7.85 13H5.85ZM6.85 16C7.4 16 7.87083 16.1958 8.2625 16.5875C8.65417 16.9792 8.85 17.45 8.85 18C8.85 18.55 8.65417 19.0208 8.2625 19.4125C7.87083 19.8042 7.4 20 6.85 20C6.3 20 5.82917 19.8042 5.4375 19.4125C5.04583 19.0208 4.85 18.55 4.85 18C4.85 17.45 5.04583 16.9792 5.4375 16.5875C5.82917 16.1958 6.3 16 6.85 16ZM14.8 2L14.35 4.1C14.0667 4.2 13.8042 4.32083 13.5625 4.4625C13.3208 4.60417 13.0833 4.76667 12.85 4.95L10.85 4.3L9.45 6.7L11.05 8.1C11.0167 8.4 11 8.7 11 9C11 9.3 11.0167 9.6 11.05 9.9L9.45 11.3L10.85 13.7L12.85 13.05C13.0833 13.2333 13.3208 13.3958 13.5625 13.5375C13.8042 13.6792 14.0667 13.8 14.35 13.9L14.8 16H17.6L18.05 13.9C18.3333 13.8 18.5958 13.6792 18.8375 13.5375C19.0792 13.3958 19.3167 13.2333 19.55 13.05L21.55 13.7L22.95 11.3L21.35 9.9C21.3833 9.6 21.4 9.3 21.4 9C21.4 8.7 21.3833 8.4 21.35 8.1L22.95 6.7L21.55 4.3L19.55 4.95C19.3167 4.76667 19.0792 4.60417 18.8375 4.4625C18.5958 4.32083 18.3333 4.2 18.05 4.1L17.6 2H14.8ZM16.2 6C17.0333 6 17.7417 6.29167 18.325 6.875C18.9083 7.45833 19.2 8.16667 19.2 9C19.2 9.83333 18.9083 10.5417 18.325 11.125C17.7417 11.7083 17.0333 12 16.2 12C15.3667 12 14.6583 11.7083 14.075 11.125C13.4917 10.5417 13.2 9.83333 13.2 9C13.2 8.16667 13.4917 7.45833 14.075 6.875C14.6583 6.29167 15.3667 6 16.2 6Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.85 13L5.55 14.5C5.35 14.5833 5.1625 14.6708 4.9875 14.7625C4.8125 14.8542 4.63333 14.9667 4.45 15.1L3 14.65L2 16.35L3.15 17.35C3.11667 17.5667 3.1 17.7833 3.1 18C3.1 18.2167 3.11667 18.4333 3.15 18.65L2 19.65L3 21.35L4.45 20.9C4.63333 21.0333 4.8125 21.1458 4.9875 21.2375C5.1625 21.3292 5.35 21.4167 5.55 21.5L5.85 23H7.85L8.15 21.5C8.35 21.4167 8.5375 21.3292 8.7125 21.2375C8.8875 21.1458 9.06667 21.0333 9.25 20.9L10.7 21.35L11.7 19.65L10.55 18.65C10.5833 18.4333 10.6 18.2167 10.6 18C10.6 17.7833 10.5833 17.5667 10.55 17.35L11.7 16.35L10.7 14.65L9.25 15.1C9.06667 14.9667 8.8875 14.8542 8.7125 14.7625C8.5375 14.6708 8.35 14.5833 8.15 14.5L7.85 13H5.85ZM6.85 16C7.4 16 7.87083 16.1958 8.2625 16.5875C8.65417 16.9792 8.85 17.45 8.85 18C8.85 18.55 8.65417 19.0208 8.2625 19.4125C7.87083 19.8042 7.4 20 6.85 20C6.3 20 5.82917 19.8042 5.4375 19.4125C5.04583 19.0208 4.85 18.55 4.85 18C4.85 17.45 5.04583 16.9792 5.4375 16.5875C5.82917 16.1958 6.3 16 6.85 16ZM14.8 2L14.35 4.1C14.0667 4.2 13.8042 4.32083 13.5625 4.4625C13.3208 4.60417 13.0833 4.76667 12.85 4.95L10.85 4.3L9.45 6.7L11.05 8.1C11.0167 8.4 11 8.7 11 9C11 9.3 11.0167 9.6 11.05 9.9L9.45 11.3L10.85 13.7L12.85 13.05C13.0833 13.2333 13.3208 13.3958 13.5625 13.5375C13.8042 13.6792 14.0667 13.8 14.35 13.9L14.8 16H17.6L18.05 13.9C18.3333 13.8 18.5958 13.6792 18.8375 13.5375C19.0792 13.3958 19.3167 13.2333 19.55 13.05L21.55 13.7L22.95 11.3L21.35 9.9C21.3833 9.6 21.4 9.3 21.4 9C21.4 8.7 21.3833 8.4 21.35 8.1L22.95 6.7L21.55 4.3L19.55 4.95C19.3167 4.76667 19.0792 4.60417 18.8375 4.4625C18.5958 4.32083 18.3333 4.2 18.05 4.1L17.6 2H14.8ZM16.2 6C17.0333 6 17.7417 6.29167 18.325 6.875C18.9083 7.45833 19.2 8.16667 19.2 9C19.2 9.83333 18.9083 10.5417 18.325 11.125C17.7417 11.7083 17.0333 12 16.2 12C15.3667 12 14.6583 11.7083 14.075 11.125C13.4917 10.5417 13.2 9.83333 13.2 9C13.2 8.16667 13.4917 7.45833 14.075 6.875C14.6583 6.29167 15.3667 6 16.2 6Z" style="fill: var(--element-active-color)"/>
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
    'obi-settings-default-iec': ObiSettingsDefaultIec;
  }
}