import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-lightning-heavy-rain')
export class ObiLightningHeavyRain extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.4966 13.4933L18.5125 7.33325L14.6667 15.1333L17.2427 16.3333L15.5737 23.3333L20 14.6933L17.4966 13.4933Z" fill="currentColor"/>
<path d="M12.4614 7.11736C13.5609 4.78582 15.7936 3.33325 18.2393 3.33325C21.3737 3.33325 24.1293 5.79117 24.6555 9.10942L24.7566 9.74697L25.3793 9.91734C26.8572 10.3217 28 11.7971 28 13.5765C28 15.6987 26.363 17.3333 24.4824 17.3333H20.1457L19.1211 19.3333H24.4824C27.5587 19.3333 30 16.71 30 13.5765C30 11.1904 28.597 9.05046 26.5148 8.19534C25.6239 4.28953 22.2431 1.33325 18.2393 1.33325C15.2594 1.33325 12.5728 2.95032 11.0544 5.50734C10.8432 5.47326 10.6339 5.45799 10.4275 5.45799C8.93646 5.45799 7.63403 6.25968 6.92203 7.48775C5.38205 7.51112 3.95631 8.16348 2.91121 9.31116C1.89911 10.424 1.33337 11.8605 1.33337 13.3769V13.4549L1.33364 13.4664C1.37027 15.059 1.95818 16.5395 3.06133 17.6353C4.09608 18.7254 5.51463 19.3333 7.00788 19.3333H15.1567L15.6336 17.3333H7.00788C6.06001 17.3333 5.16232 16.9481 4.504 16.25L4.49175 16.2371L4.47904 16.2245C3.77303 15.5276 3.36175 14.5558 3.33337 13.4314V13.3769C3.33337 12.3653 3.70873 11.4069 4.39061 10.657C5.08296 9.89685 6.00825 9.4871 7.00789 9.4871C7.20215 9.4871 7.27659 9.48909 7.3672 9.5051L8.1991 9.65211L8.48304 8.85646C8.78596 8.00763 9.54947 7.45799 10.4275 7.45799C10.6813 7.45799 10.9179 7.50177 11.1528 7.60555L12.0452 7.99982L12.4614 7.11736Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.87812 21.337C6.14874 20.7506 6.78789 20.5309 7.35643 20.7495L7.36658 20.7534L7.37646 20.758C7.96282 21.0286 8.18256 21.6678 7.96389 22.2363L7.95847 22.2504L6.84012 24.8058C6.65331 25.2664 6.23126 25.49 5.79677 25.49C5.64584 25.49 5.4766 25.444 5.37136 25.4089L5.35385 25.403L5.33709 25.3953C4.75073 25.1247 4.53099 24.4855 4.74966 23.917L4.75507 23.9029L5.87812 21.337Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.87812 24.0036C10.1487 23.4173 10.7879 23.1975 11.3564 23.4162L11.3666 23.4201L11.3765 23.4247C11.9628 23.6953 12.1826 24.3344 11.9639 24.903L11.9585 24.9171L10.8401 27.4724C10.6533 27.9331 10.2313 28.1567 9.79677 28.1567C9.64584 28.1567 9.47659 28.1106 9.37136 28.0755L9.35385 28.0697L9.33709 28.062C8.75073 27.7913 8.53099 27.1522 8.74966 26.5837L8.75507 26.5696L9.87812 24.0036Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.8781 21.337C24.1487 20.7506 24.7879 20.5309 25.3564 20.7495L25.3666 20.7534L25.3765 20.758C25.9628 21.0286 26.1826 21.6678 25.9639 22.2363L25.9585 22.2504L24.8401 24.8058C24.6533 25.2664 24.2313 25.49 23.7968 25.49C23.6458 25.49 23.4766 25.444 23.3714 25.4089L23.3538 25.403L23.3371 25.3953C22.7507 25.1247 22.531 24.4855 22.7497 23.917L22.7551 23.9029L23.8781 21.337Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.2115 26.0036C27.4821 25.4173 28.1212 25.1975 28.6898 25.4162L28.6999 25.4201L28.7098 25.4247C29.2961 25.6953 29.5159 26.3344 29.2972 26.903L29.2918 26.9171L28.1735 29.4724C27.9866 29.9331 27.5646 30.1567 27.1301 30.1567C26.9792 30.1567 26.8099 30.1106 26.7047 30.0755L26.6872 30.0697L26.6704 30.062C26.0841 29.7913 25.8643 29.1522 26.083 28.5837L26.0884 28.5696L27.2115 26.0036Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5448 22.6703C18.8154 22.0839 19.4546 21.8642 20.0231 22.0829L20.0333 22.0868L20.0431 22.0913C20.6295 22.362 20.8492 23.0011 20.6306 23.5696L20.6251 23.5837L19.5068 26.1391C19.32 26.5998 18.8979 26.8233 18.4634 26.8233C18.3125 26.8233 18.1433 26.7773 18.038 26.7422L18.0205 26.7364L18.0038 26.7286C17.4174 26.458 17.1977 25.8189 17.4163 25.2503L17.4217 25.2362L18.5448 22.6703Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.4966 13.4933L18.5125 7.33325L14.6667 15.1333L17.2427 16.3333L15.5737 23.3333L20 14.6933L17.4966 13.4933Z" style="fill: var(--element-active-color)"/>
<path d="M12.4614 7.11736C13.5609 4.78582 15.7936 3.33325 18.2393 3.33325C21.3737 3.33325 24.1293 5.79117 24.6555 9.10942L24.7566 9.74697L25.3793 9.91734C26.8572 10.3217 28 11.7971 28 13.5765C28 15.6987 26.363 17.3333 24.4824 17.3333H20.1457L19.1211 19.3333H24.4824C27.5587 19.3333 30 16.71 30 13.5765C30 11.1904 28.597 9.05046 26.5148 8.19534C25.6239 4.28953 22.2431 1.33325 18.2393 1.33325C15.2594 1.33325 12.5728 2.95032 11.0544 5.50734C10.8432 5.47326 10.6339 5.45799 10.4275 5.45799C8.93646 5.45799 7.63403 6.25968 6.92203 7.48775C5.38205 7.51112 3.95631 8.16348 2.91121 9.31116C1.89911 10.424 1.33337 11.8605 1.33337 13.3769V13.4549L1.33364 13.4664C1.37027 15.059 1.95818 16.5395 3.06133 17.6353C4.09608 18.7254 5.51463 19.3333 7.00788 19.3333H15.1567L15.6336 17.3333H7.00788C6.06001 17.3333 5.16232 16.9481 4.504 16.25L4.49175 16.2371L4.47904 16.2245C3.77303 15.5276 3.36175 14.5558 3.33337 13.4314V13.3769C3.33337 12.3653 3.70873 11.4069 4.39061 10.657C5.08296 9.89685 6.00825 9.4871 7.00789 9.4871C7.20215 9.4871 7.27659 9.48909 7.3672 9.5051L8.1991 9.65211L8.48304 8.85646C8.78596 8.00763 9.54947 7.45799 10.4275 7.45799C10.6813 7.45799 10.9179 7.50177 11.1528 7.60555L12.0452 7.99982L12.4614 7.11736Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.87812 21.337C6.14874 20.7506 6.78789 20.5309 7.35643 20.7495L7.36658 20.7534L7.37646 20.758C7.96282 21.0286 8.18256 21.6678 7.96389 22.2363L7.95847 22.2504L6.84012 24.8058C6.65331 25.2664 6.23126 25.49 5.79677 25.49C5.64584 25.49 5.4766 25.444 5.37136 25.4089L5.35385 25.403L5.33709 25.3953C4.75073 25.1247 4.53099 24.4855 4.74966 23.917L4.75507 23.9029L5.87812 21.337Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.87812 24.0036C10.1487 23.4173 10.7879 23.1975 11.3564 23.4162L11.3666 23.4201L11.3765 23.4247C11.9628 23.6953 12.1826 24.3344 11.9639 24.903L11.9585 24.9171L10.8401 27.4724C10.6533 27.9331 10.2313 28.1567 9.79677 28.1567C9.64584 28.1567 9.47659 28.1106 9.37136 28.0755L9.35385 28.0697L9.33709 28.062C8.75073 27.7913 8.53099 27.1522 8.74966 26.5837L8.75507 26.5696L9.87812 24.0036Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.8781 21.337C24.1487 20.7506 24.7879 20.5309 25.3564 20.7495L25.3666 20.7534L25.3765 20.758C25.9628 21.0286 26.1826 21.6678 25.9639 22.2363L25.9585 22.2504L24.8401 24.8058C24.6533 25.2664 24.2313 25.49 23.7968 25.49C23.6458 25.49 23.4766 25.444 23.3714 25.4089L23.3538 25.403L23.3371 25.3953C22.7507 25.1247 22.531 24.4855 22.7497 23.917L22.7551 23.9029L23.8781 21.337Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.2115 26.0036C27.4821 25.4173 28.1212 25.1975 28.6898 25.4162L28.6999 25.4201L28.7098 25.4247C29.2961 25.6953 29.5159 26.3344 29.2972 26.903L29.2918 26.9171L28.1735 29.4724C27.9866 29.9331 27.5646 30.1567 27.1301 30.1567C26.9792 30.1567 26.8099 30.1106 26.7047 30.0755L26.6872 30.0697L26.6704 30.062C26.0841 29.7913 25.8643 29.1522 26.083 28.5837L26.0884 28.5696L27.2115 26.0036Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5448 22.6703C18.8154 22.0839 19.4546 21.8642 20.0231 22.0829L20.0333 22.0868L20.0431 22.0913C20.6295 22.362 20.8492 23.0011 20.6306 23.5696L20.6251 23.5837L19.5068 26.1391C19.32 26.5998 18.8979 26.8233 18.4634 26.8233C18.3125 26.8233 18.1433 26.7773 18.038 26.7422L18.0205 26.7364L18.0038 26.7286C17.4174 26.458 17.1977 25.8189 17.4163 25.2503L17.4217 25.2362L18.5448 22.6703Z" style="fill: var(--element-active-color)"/>
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
    'obi-lightning-heavy-rain': ObiLightningHeavyRain;
  }
}