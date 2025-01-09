import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-propulsion-azimuth-thruster')
export class ObiPropulsionAzimuthThruster extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.4853 7.75736C20.8758 7.36684 20.8758 6.73367 20.4853 6.34315L17.6569 3.51472C17.2663 3.12419 16.6332 3.12419 16.2426 3.51472L10.5858 9.17157L9.52513 8.11091C9.32986 7.91565 9.01328 7.91565 8.81802 8.11091L8.11091 8.81802C7.91565 9.01328 7.91565 9.32986 8.11091 9.52513L9.17157 10.5858L3.51472 16.2426C3.12419 16.6332 3.12419 17.2663 3.51472 17.6569L6.34315 20.4853C6.73367 20.8758 7.36684 20.8758 7.75736 20.4853L13.4142 14.8284L14.4749 15.8891C14.6701 16.0843 14.9867 16.0843 15.182 15.8891L15.8891 15.182C16.0843 14.9867 16.0843 14.6701 15.8891 14.4749L14.8284 13.4142L20.4853 7.75736ZM16.9497 5.63604L18.364 7.05025L16.2426 9.17157L14.8284 7.75736L16.9497 5.63604ZM12 13.4142L10.5858 12L5.63604 16.9497L7.05025 18.364L12 13.4142Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0303 3.56267C11.7361 3.40464 10.4229 3.54644 9.19231 3.97711C7.96169 4.40777 6.84665 5.11576 5.93342 6.0463C5.0202 6.97684 4.33327 8.10498 3.92579 9.34347C3.51831 10.5819 3.4012 11.8976 3.58351 13.1886C3.64143 13.5987 3.35589 13.9781 2.94575 14.0361C2.53561 14.094 2.15617 13.8084 2.09825 13.3983C1.88376 11.8795 2.02155 10.3317 2.50093 8.87467C2.98032 7.41763 3.78847 6.09039 4.86285 4.99564C5.93723 3.90089 7.24905 3.06797 8.69683 2.5613C10.1446 2.05464 11.6895 1.88781 13.2121 2.07373C13.6233 2.12394 13.9159 2.49795 13.8657 2.90911C13.8155 3.32027 13.4415 3.61288 13.0303 3.56267Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9697 20.4373C12.2639 20.5954 13.5771 20.4536 14.8077 20.0229C16.0383 19.5922 17.1534 18.8842 18.0666 17.9537C18.9798 17.0232 19.6667 15.895 20.0742 14.6565C20.4817 13.418 20.5988 12.1024 20.4165 10.8114C20.3586 10.4013 20.6441 10.0219 21.0543 9.96394C21.4644 9.90602 21.8438 10.1916 21.9018 10.6017C22.1162 12.1205 21.9785 13.6683 21.4991 15.1253C21.0197 16.5824 20.2115 17.9096 19.1372 19.0044C18.0628 20.0991 16.7509 20.932 15.3032 21.4387C13.8554 21.9454 12.3105 22.1122 10.7879 21.9263C10.3767 21.8761 10.0841 21.502 10.1343 21.0909C10.1845 20.6797 10.5585 20.3871 10.9697 20.4373Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.4853 7.75736C20.8758 7.36684 20.8758 6.73367 20.4853 6.34315L17.6569 3.51472C17.2663 3.12419 16.6332 3.12419 16.2426 3.51472L10.5858 9.17157L9.52513 8.11091C9.32986 7.91565 9.01328 7.91565 8.81802 8.11091L8.11091 8.81802C7.91565 9.01328 7.91565 9.32986 8.11091 9.52513L9.17157 10.5858L3.51472 16.2426C3.12419 16.6332 3.12419 17.2663 3.51472 17.6569L6.34315 20.4853C6.73367 20.8758 7.36684 20.8758 7.75736 20.4853L13.4142 14.8284L14.4749 15.8891C14.6701 16.0843 14.9867 16.0843 15.182 15.8891L15.8891 15.182C16.0843 14.9867 16.0843 14.6701 15.8891 14.4749L14.8284 13.4142L20.4853 7.75736ZM16.9497 5.63604L18.364 7.05025L16.2426 9.17157L14.8284 7.75736L16.9497 5.63604ZM12 13.4142L10.5858 12L5.63604 16.9497L7.05025 18.364L12 13.4142Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0303 3.56267C11.7361 3.40464 10.4229 3.54644 9.19231 3.97711C7.96169 4.40777 6.84665 5.11576 5.93342 6.0463C5.0202 6.97684 4.33327 8.10498 3.92579 9.34347C3.51831 10.5819 3.4012 11.8976 3.58351 13.1886C3.64143 13.5987 3.35589 13.9781 2.94575 14.0361C2.53561 14.094 2.15617 13.8084 2.09825 13.3983C1.88376 11.8795 2.02155 10.3317 2.50093 8.87467C2.98032 7.41763 3.78847 6.09039 4.86285 4.99564C5.93723 3.90089 7.24905 3.06797 8.69683 2.5613C10.1446 2.05464 11.6895 1.88781 13.2121 2.07373C13.6233 2.12394 13.9159 2.49795 13.8657 2.90911C13.8155 3.32027 13.4415 3.61288 13.0303 3.56267Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9697 20.4373C12.2639 20.5954 13.5771 20.4536 14.8077 20.0229C16.0383 19.5922 17.1534 18.8842 18.0666 17.9537C18.9798 17.0232 19.6667 15.895 20.0742 14.6565C20.4817 13.418 20.5988 12.1024 20.4165 10.8114C20.3586 10.4013 20.6441 10.0219 21.0543 9.96394C21.4644 9.90602 21.8438 10.1916 21.9018 10.6017C22.1162 12.1205 21.9785 13.6683 21.4991 15.1253C21.0197 16.5824 20.2115 17.9096 19.1372 19.0044C18.0628 20.0991 16.7509 20.932 15.3032 21.4387C13.8554 21.9454 12.3105 22.1122 10.7879 21.9263C10.3767 21.8761 10.0841 21.502 10.1343 21.0909C10.1845 20.6797 10.5585 20.3871 10.9697 20.4373Z" style="fill: var(--element-active-color)"/>
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
    'obi-propulsion-azimuth-thruster': ObiPropulsionAzimuthThruster;
  }
}