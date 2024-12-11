import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-slightlycloudy-night-colour')
export class ObiSlightlycloudyNightColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9294 18C19.1975 18 17.6079 19.0285 16.8221 20.6947L16.406 21.5772L15.5135 21.1829C15.3727 21.1207 15.2302 21.0936 15.0706 21.0936C14.522 21.0936 14.0408 21.4353 13.8477 21.9764L13.5638 22.7721L12.7319 22.6251C12.6883 22.6174 12.6531 22.6154 12.5059 22.6154C11.8278 22.6154 11.2006 22.8921 10.7278 23.4111C10.2577 23.9281 10 24.5872 10 25.2827V25.3204C10.0205 26.1038 10.3062 26.768 10.7849 27.2405L10.7976 27.2531L10.8098 27.2661C11.2564 27.7395 11.8639 28 12.5059 28H25.6118C26.8728 28 28 26.8977 28 25.4324C28 24.2019 27.2101 23.2005 26.2184 22.9292L25.5958 22.7588L25.4947 22.1213C25.1175 19.7427 23.1462 18 20.9294 18ZM15.4122 19.1113C16.6076 17.2038 18.6569 16 20.9294 16C24.0167 16 26.6153 18.2451 27.3502 21.2163C28.9443 21.9289 30 23.5932 30 25.4324C30 27.9089 28.0684 30 25.6118 30H12.5059C11.3185 30 10.1902 29.5169 9.36718 28.6513C8.49152 27.7801 8.02906 26.6073 8.00026 25.3556L8 25.3441V25.2827C8 24.0824 8.44809 22.9452 9.24843 22.0652C10.0464 21.1889 11.1267 20.6745 12.2984 20.6202C12.8888 19.6934 13.9085 19.0936 15.0706 19.0936C15.1832 19.0936 15.2972 19.0992 15.4122 19.1113Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9294 18C19.1975 18 17.6079 19.0285 16.8221 20.6947L16.406 21.5772L15.5135 21.1829C15.3727 21.1207 15.2302 21.0936 15.0706 21.0936C14.522 21.0936 14.0408 21.4353 13.8477 21.9764L13.5638 22.7721L12.7319 22.6251C12.6883 22.6174 12.6531 22.6154 12.5059 22.6154C11.8278 22.6154 11.2006 22.8921 10.7278 23.4111C10.2577 23.9281 10 24.5872 10 25.2827V25.3204C10.0205 26.1038 10.3062 26.768 10.7849 27.2405L10.7976 27.2531L10.8098 27.2661C11.2564 27.7395 11.8639 28 12.5059 28H25.6118C26.8728 28 28 26.8977 28 25.4324C28 24.2019 27.2101 23.2005 26.2184 22.9292L25.5958 22.7588L25.4947 22.1213C25.1175 19.7427 23.1462 18 20.9294 18Z" fill="currentColor"/>
<path d="M14.7545 7.77959C14.7545 13.6369 9.79524 18.3853 3.67764 18.3853C2.92465 18.3853 2.37201 19.1847 2.83792 19.7756C4.21982 21.5284 6.13183 22.8551 8.33674 23.5217C8.54849 22.9897 8.85613 22.4966 9.24839 22.0653C10.0464 21.189 11.1267 20.6746 12.2984 20.6203C12.8888 19.6935 13.9085 19.0936 15.0705 19.0936C15.1832 19.0936 15.2972 19.0993 15.4122 19.1114C16.6075 17.2039 18.6568 16.0001 20.9294 16.0001C21.3737 16.0001 21.8079 16.0466 22.2278 16.1351C22.5135 15.1663 22.6666 14.142 22.6666 13.0824C22.6666 8.24436 19.4738 4.14135 15.0516 2.70859C14.3171 2.47061 13.75 3.29388 14.0348 4.01093C14.4999 5.18197 14.7545 6.45229 14.7545 7.77959Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9294 18C19.1975 18 17.6079 19.0285 16.8221 20.6947L16.406 21.5772L15.5135 21.1829C15.3727 21.1207 15.2302 21.0936 15.0706 21.0936C14.522 21.0936 14.0408 21.4353 13.8477 21.9764L13.5638 22.7721L12.7319 22.6251C12.6883 22.6174 12.6531 22.6154 12.5059 22.6154C11.8278 22.6154 11.2006 22.8921 10.7278 23.4111C10.2577 23.9281 10 24.5872 10 25.2827V25.3204C10.0205 26.1038 10.3062 26.768 10.7849 27.2405L10.7976 27.2531L10.8098 27.2661C11.2564 27.7395 11.8639 28 12.5059 28H25.6118C26.8728 28 28 26.8977 28 25.4324C28 24.2019 27.2101 23.2005 26.2184 22.9292L25.5958 22.7588L25.4947 22.1213C25.1175 19.7427 23.1462 18 20.9294 18ZM15.4122 19.1113C16.6076 17.2038 18.6569 16 20.9294 16C24.0167 16 26.6153 18.2451 27.3502 21.2163C28.9443 21.9289 30 23.5932 30 25.4324C30 27.9089 28.0684 30 25.6118 30H12.5059C11.3185 30 10.1902 29.5169 9.36718 28.6513C8.49152 27.7801 8.02906 26.6073 8.00026 25.3556L8 25.3441V25.2827C8 24.0824 8.44809 22.9452 9.24843 22.0652C10.0464 21.1889 11.1267 20.6745 12.2984 20.6202C12.8888 19.6934 13.9085 19.0936 15.0706 19.0936C15.1832 19.0936 15.2972 19.0992 15.4122 19.1113Z" style="fill: var(--data-weather-cloud-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9294 18C19.1975 18 17.6079 19.0285 16.8221 20.6947L16.406 21.5772L15.5135 21.1829C15.3727 21.1207 15.2302 21.0936 15.0706 21.0936C14.522 21.0936 14.0408 21.4353 13.8477 21.9764L13.5638 22.7721L12.7319 22.6251C12.6883 22.6174 12.6531 22.6154 12.5059 22.6154C11.8278 22.6154 11.2006 22.8921 10.7278 23.4111C10.2577 23.9281 10 24.5872 10 25.2827V25.3204C10.0205 26.1038 10.3062 26.768 10.7849 27.2405L10.7976 27.2531L10.8098 27.2661C11.2564 27.7395 11.8639 28 12.5059 28H25.6118C26.8728 28 28 26.8977 28 25.4324C28 24.2019 27.2101 23.2005 26.2184 22.9292L25.5958 22.7588L25.4947 22.1213C25.1175 19.7427 23.1462 18 20.9294 18Z" style="fill: var(--data-weather-cloud-seconday-color)"/>
<path d="M14.7545 7.77959C14.7545 13.6369 9.79524 18.3853 3.67764 18.3853C2.92465 18.3853 2.37201 19.1847 2.83792 19.7756C4.21982 21.5284 6.13183 22.8551 8.33674 23.5217C8.54849 22.9897 8.85613 22.4966 9.24839 22.0653C10.0464 21.189 11.1267 20.6746 12.2984 20.6203C12.8888 19.6935 13.9085 19.0936 15.0705 19.0936C15.1832 19.0936 15.2972 19.0993 15.4122 19.1114C16.6075 17.2039 18.6568 16.0001 20.9294 16.0001C21.3737 16.0001 21.8079 16.0466 22.2278 16.1351C22.5135 15.1663 22.6666 14.142 22.6666 13.0824C22.6666 8.24436 19.4738 4.14135 15.0516 2.70859C14.3171 2.47061 13.75 3.29388 14.0348 4.01093C14.4999 5.18197 14.7545 6.45229 14.7545 7.77959Z" style="fill: var(--data-weather-moon-primary-color)"/>
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
    'obi-slightlycloudy-night-colour': ObiSlightlycloudyNightColour;
  }
}