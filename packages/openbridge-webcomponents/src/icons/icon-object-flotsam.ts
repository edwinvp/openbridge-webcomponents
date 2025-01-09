import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-object-flotsam')
export class ObiObjectFlotsam extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M21 17C19.97 17 18.94 16.75 18 16.25C16.11 17.25 13.89 17.25 12 16.25C10.11 17.25 7.89 17.25 6 16.25C5.05 16.75 4.03 17 3 17H2V15.5H3C3.68364 15.5 4.36195 15.3488 5.01151 15.0605C5.31146 14.9313 6 14.5 6 14.5C6 14.5 6.6857 14.928 6.98565 15.0572C8.27971 15.6155 9.71724 15.6147 11.0115 15.0572C11.3115 14.928 12 14.5 12 14.5C12 14.5 12.6885 14.928 12.9885 15.0572C14.2809 15.6139 15.7161 15.6143 17.0086 15.0585C17.3086 14.9293 17.9994 14.5074 17.9994 14.5074C17.9994 14.5074 18.6879 14.9354 18.9878 15.0646C19.6348 15.3502 20.3196 15.5 21 15.5H22V17H21Z" fill="currentColor"/>
<path d="M7.3019 7.54751C6.76842 7.40456 6.2201 7.72113 6.07715 8.25461L4.61301 13.7189C4.7469 13.6718 4.8798 13.619 5.01152 13.5605C5.31147 13.4313 6.00001 13 6.00001 13C6.00001 13 6.42939 13.2681 6.75723 13.4439L7.75019 9.73818L9.68204 10.2558L8.68788 13.9661C9.417 14.0112 10.1524 13.8969 10.8502 13.6236L11.6139 10.7735L13.5457 11.2911L12.9439 13.5372C12.9595 13.5445 12.9745 13.5512 12.9885 13.5572C13.6028 13.8218 14.2493 13.9607 14.8974 13.974L15.4776 11.8087L17.4094 12.3264L17.0892 13.5214C17.4167 13.3633 17.9994 13.0074 17.9994 13.0074C17.9994 13.0074 18.6879 13.4354 18.9879 13.5646C19.0357 13.5857 19.0837 13.606 19.1319 13.6257L19.6001 11.8781C19.7431 11.3446 19.4265 10.7963 18.893 10.6533L7.3019 7.54751Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 17C19.97 17 18.94 16.75 18 16.25C16.11 17.25 13.89 17.25 12 16.25C10.11 17.25 7.89 17.25 6 16.25C5.05 16.75 4.03 17 3 17H2V15.5H3C3.68364 15.5 4.36195 15.3488 5.01151 15.0605C5.31146 14.9313 6 14.5 6 14.5C6 14.5 6.6857 14.928 6.98565 15.0572C8.27971 15.6155 9.71724 15.6147 11.0115 15.0572C11.3115 14.928 12 14.5 12 14.5C12 14.5 12.6885 14.928 12.9885 15.0572C14.2809 15.6139 15.7161 15.6143 17.0086 15.0585C17.3086 14.9293 17.9994 14.5074 17.9994 14.5074C17.9994 14.5074 18.6879 14.9354 18.9878 15.0646C19.6348 15.3502 20.3196 15.5 21 15.5H22V17H21Z" style="fill: var(--element-active-color)"/>
<path d="M7.3019 7.54751C6.76842 7.40456 6.2201 7.72113 6.07715 8.25461L4.61301 13.7189C4.7469 13.6718 4.8798 13.619 5.01152 13.5605C5.31147 13.4313 6.00001 13 6.00001 13C6.00001 13 6.42939 13.2681 6.75723 13.4439L7.75019 9.73818L9.68204 10.2558L8.68788 13.9661C9.417 14.0112 10.1524 13.8969 10.8502 13.6236L11.6139 10.7735L13.5457 11.2911L12.9439 13.5372C12.9595 13.5445 12.9745 13.5512 12.9885 13.5572C13.6028 13.8218 14.2493 13.9607 14.8974 13.974L15.4776 11.8087L17.4094 12.3264L17.0892 13.5214C17.4167 13.3633 17.9994 13.0074 17.9994 13.0074C17.9994 13.0074 18.6879 13.4354 18.9879 13.5646C19.0357 13.5857 19.0837 13.606 19.1319 13.6257L19.6001 11.8781C19.7431 11.3446 19.4265 10.7963 18.893 10.6533L7.3019 7.54751Z" style="fill: var(--element-active-color)"/>
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
    'obi-object-flotsam': ObiObjectFlotsam;
  }
}