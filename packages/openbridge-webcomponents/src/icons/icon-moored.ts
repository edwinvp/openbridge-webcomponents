import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-moored')
export class ObiMoored extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3599 16.2332C11.7711 16.5181 11.1188 16.7603 10.3599 16.898C8.01241 17.3238 6.27724 16.4168 5.63345 14.1769H2.35986V12.6769H5.38224C5.3674 12.4595 5.35986 12.2338 5.35986 12C5.35986 11.7662 5.3674 11.5405 5.38224 11.3231H2.35986V9.82311H5.63344C6.27721 7.5832 8.01239 6.6762 10.3599 7.10204C11.1188 7.23972 11.7711 7.48188 12.3599 7.76685C12.9486 7.48188 13.6009 7.23972 14.3599 7.10204C16.7073 6.6762 18.4425 7.5832 19.0863 9.82311H22.3599V11.3231H19.3375C19.3523 11.5405 19.3599 11.7662 19.3599 12C19.3599 12.2338 19.3523 12.4595 19.3375 12.6769H22.3599V14.1769H19.0863C18.4425 16.4168 16.7073 17.3238 14.3599 16.898C13.6009 16.7603 12.9486 16.5181 12.3599 16.2332ZM17.8336 12.6769C17.8507 12.4671 17.8599 12.2418 17.8599 12C17.8599 11.7582 17.8507 11.5329 17.8336 11.3231H17.0265C15.4081 11.3231 14.1641 10.561 13.2107 9.97702L13.1525 9.94137C12.8801 9.77458 12.619 9.61471 12.3599 9.46589C12.1008 9.61471 11.8396 9.77458 11.5672 9.94137L11.509 9.97702C10.5556 10.561 9.31158 11.3231 7.69321 11.3231H6.88615C6.86905 11.5329 6.85986 11.7582 6.85986 12C6.85986 12.2418 6.86905 12.4671 6.88615 12.6769H7.6932C9.31156 12.6769 10.5556 13.439 11.509 14.023L11.5672 14.0586C11.8396 14.2254 12.1008 14.3853 12.3599 14.5341C12.619 14.3853 12.8801 14.2254 13.1525 14.0586L13.2107 14.023C14.1641 13.439 15.4082 12.6769 17.0265 12.6769H17.8336ZM14.0293 15.2807C14.9961 14.6903 15.8934 14.1769 17.0265 14.1769H17.4994C17.3443 14.544 17.1544 14.805 16.9616 14.9848C16.5337 15.384 15.8162 15.6377 14.6276 15.422C14.419 15.3842 14.2204 15.3367 14.0293 15.2807ZM7.22035 14.1769C7.37548 14.544 7.56531 14.805 7.75811 14.9848C8.18601 15.384 8.90349 15.6377 10.0921 15.422C10.3008 15.3842 10.4993 15.3367 10.6904 15.2807C9.72358 14.6903 8.8263 14.1769 7.6932 14.1769H7.22035ZM7.22034 9.82311H7.6932C8.8263 9.8231 9.72358 9.30974 10.6904 8.7193C10.4993 8.66331 10.3008 8.6158 10.0921 8.57795C8.90348 8.36233 8.186 8.61595 7.75811 9.01515C7.5653 9.19502 7.37546 9.45599 7.22034 9.82311ZM14.0293 8.7193C14.9961 9.30974 15.8934 9.8231 17.0265 9.82311H17.4994C17.3443 9.45599 17.1544 9.19502 16.9616 9.01515C16.5337 8.61595 15.8162 8.36233 14.6276 8.57795C14.419 8.6158 14.2204 8.66331 14.0293 8.7193Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3599 16.2332C11.7711 16.5181 11.1188 16.7603 10.3599 16.898C8.01241 17.3238 6.27724 16.4168 5.63345 14.1769H2.35986V12.6769H5.38224C5.3674 12.4595 5.35986 12.2338 5.35986 12C5.35986 11.7662 5.3674 11.5405 5.38224 11.3231H2.35986V9.82311H5.63344C6.27721 7.5832 8.01239 6.6762 10.3599 7.10204C11.1188 7.23972 11.7711 7.48188 12.3599 7.76685C12.9486 7.48188 13.6009 7.23972 14.3599 7.10204C16.7073 6.6762 18.4425 7.5832 19.0863 9.82311H22.3599V11.3231H19.3375C19.3523 11.5405 19.3599 11.7662 19.3599 12C19.3599 12.2338 19.3523 12.4595 19.3375 12.6769H22.3599V14.1769H19.0863C18.4425 16.4168 16.7073 17.3238 14.3599 16.898C13.6009 16.7603 12.9486 16.5181 12.3599 16.2332ZM17.8336 12.6769C17.8507 12.4671 17.8599 12.2418 17.8599 12C17.8599 11.7582 17.8507 11.5329 17.8336 11.3231H17.0265C15.4081 11.3231 14.1641 10.561 13.2107 9.97702L13.1525 9.94137C12.8801 9.77458 12.619 9.61471 12.3599 9.46589C12.1008 9.61471 11.8396 9.77458 11.5672 9.94137L11.509 9.97702C10.5556 10.561 9.31158 11.3231 7.69321 11.3231H6.88615C6.86905 11.5329 6.85986 11.7582 6.85986 12C6.85986 12.2418 6.86905 12.4671 6.88615 12.6769H7.6932C9.31156 12.6769 10.5556 13.439 11.509 14.023L11.5672 14.0586C11.8396 14.2254 12.1008 14.3853 12.3599 14.5341C12.619 14.3853 12.8801 14.2254 13.1525 14.0586L13.2107 14.023C14.1641 13.439 15.4082 12.6769 17.0265 12.6769H17.8336ZM14.0293 15.2807C14.9961 14.6903 15.8934 14.1769 17.0265 14.1769H17.4994C17.3443 14.544 17.1544 14.805 16.9616 14.9848C16.5337 15.384 15.8162 15.6377 14.6276 15.422C14.419 15.3842 14.2204 15.3367 14.0293 15.2807ZM7.22035 14.1769C7.37548 14.544 7.56531 14.805 7.75811 14.9848C8.18601 15.384 8.90349 15.6377 10.0921 15.422C10.3008 15.3842 10.4993 15.3367 10.6904 15.2807C9.72358 14.6903 8.8263 14.1769 7.6932 14.1769H7.22035ZM7.22034 9.82311H7.6932C8.8263 9.8231 9.72358 9.30974 10.6904 8.7193C10.4993 8.66331 10.3008 8.6158 10.0921 8.57795C8.90348 8.36233 8.186 8.61595 7.75811 9.01515C7.5653 9.19502 7.37546 9.45599 7.22034 9.82311ZM14.0293 8.7193C14.9961 9.30974 15.8934 9.8231 17.0265 9.82311H17.4994C17.3443 9.45599 17.1544 9.19502 16.9616 9.01515C16.5337 8.61595 15.8162 8.36233 14.6276 8.57795C14.419 8.6158 14.2204 8.66331 14.0293 8.7193Z" style="fill: var(--element-active-color)"/>
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
    'obi-moored': ObiMoored;
  }
}