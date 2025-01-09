import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-sound-off')
export class ObiSoundOff extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.80718 1.39374L0.393188 2.80772L5.5855 8.00004H5.19963C4.07953 8.00004 3.51948 8.00004 3.09165 8.21803C2.71533 8.40977 2.40937 8.71573 2.21762 9.09206C1.99963 9.51988 1.99963 10.0799 1.99963 11.2V12.8C1.99963 13.9201 1.99963 14.4802 2.21762 14.908C2.40937 15.2843 2.71533 15.5903 3.09165 15.7821C3.51948 16 4.07953 16 5.19963 16H7.99963L11.2683 19.2687C12.125 20.1254 12.5534 20.5538 12.9212 20.5827C13.2403 20.6079 13.5521 20.4787 13.76 20.2353C13.9996 19.9547 13.9996 19.3489 13.9996 18.1373V16.4142L20.1922 22.6067L21.6064 21.1925L13.9996 13.5859V5.86278C13.9996 4.65115 13.9996 4.04533 13.76 3.7648C13.5521 3.52139 13.2403 3.39222 12.9212 3.41733C12.5534 3.44628 12.125 3.87466 11.2683 4.73141L8.20663 7.79304L1.80718 1.39374ZM7.5855 10H5.19963C4.60658 10 4.28207 10.0016 4.0489 10.0206L4.02253 10.0229L4.02024 10.0493C4.00119 10.2825 3.99963 10.607 3.99963 11.2V12.8C3.99963 13.3931 4.00119 13.7176 4.02024 13.9508L4.02253 13.9771L4.0489 13.9794C4.28207 13.9985 4.60658 14 5.19963 14H8.82806L11.9996 17.1716V14.4142L7.5855 10ZM11.9996 11.586L9.62086 9.20724L11.9996 6.82846V11.586Z" fill="currentColor"/>
<path d="M20.3852 17.1433C20.7544 16.6132 21.0663 16.0436 21.3147 15.4439C21.767 14.352 21.9998 13.1816 21.9998 11.9997C21.9998 10.8178 21.767 9.64752 21.3147 8.55559C20.8624 7.46366 20.1995 6.47151 19.3637 5.63578C18.528 4.80005 17.5359 4.13712 16.4439 3.68483C16.2972 3.62406 16.1491 3.56727 15.9998 3.51446V5.67519C16.7228 6.01814 17.3825 6.48292 17.9495 7.04999C18.5995 7.7 19.1152 8.47168 19.4669 9.32096C19.8187 10.1702 19.9998 11.0805 19.9998 11.9997C19.9998 12.919 19.8187 13.8292 19.4669 14.6785C19.3198 15.0337 19.1441 15.3752 18.9419 15.7L20.3852 17.1433Z" fill="currentColor"/>
<path d="M17.3801 14.1383L15.9998 12.7579V8.53564C16.3019 8.71005 16.5805 8.9236 16.8282 9.17131C17.1996 9.54275 17.4943 9.9837 17.6953 10.469C17.8963 10.9543 17.9998 11.4745 17.9998 11.9997C17.9998 12.525 17.8963 13.0452 17.6953 13.5305C17.6076 13.7422 17.5021 13.9455 17.3801 14.1383Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.80718 1.39374L0.393188 2.80772L5.5855 8.00004H5.19963C4.07953 8.00004 3.51948 8.00004 3.09165 8.21803C2.71533 8.40977 2.40937 8.71573 2.21762 9.09206C1.99963 9.51988 1.99963 10.0799 1.99963 11.2V12.8C1.99963 13.9201 1.99963 14.4802 2.21762 14.908C2.40937 15.2843 2.71533 15.5903 3.09165 15.7821C3.51948 16 4.07953 16 5.19963 16H7.99963L11.2683 19.2687C12.125 20.1254 12.5534 20.5538 12.9212 20.5827C13.2403 20.6079 13.5521 20.4787 13.76 20.2353C13.9996 19.9547 13.9996 19.3489 13.9996 18.1373V16.4142L20.1922 22.6067L21.6064 21.1925L13.9996 13.5859V5.86278C13.9996 4.65115 13.9996 4.04533 13.76 3.7648C13.5521 3.52139 13.2403 3.39222 12.9212 3.41733C12.5534 3.44628 12.125 3.87466 11.2683 4.73141L8.20663 7.79304L1.80718 1.39374ZM7.5855 10H5.19963C4.60658 10 4.28207 10.0016 4.0489 10.0206L4.02253 10.0229L4.02024 10.0493C4.00119 10.2825 3.99963 10.607 3.99963 11.2V12.8C3.99963 13.3931 4.00119 13.7176 4.02024 13.9508L4.02253 13.9771L4.0489 13.9794C4.28207 13.9985 4.60658 14 5.19963 14H8.82806L11.9996 17.1716V14.4142L7.5855 10ZM11.9996 11.586L9.62086 9.20724L11.9996 6.82846V11.586Z" style="fill: var(--element-active-color)"/>
<path d="M20.3852 17.1433C20.7544 16.6132 21.0663 16.0436 21.3147 15.4439C21.767 14.352 21.9998 13.1816 21.9998 11.9997C21.9998 10.8178 21.767 9.64752 21.3147 8.55559C20.8624 7.46366 20.1995 6.47151 19.3637 5.63578C18.528 4.80005 17.5359 4.13712 16.4439 3.68483C16.2972 3.62406 16.1491 3.56727 15.9998 3.51446V5.67519C16.7228 6.01814 17.3825 6.48292 17.9495 7.04999C18.5995 7.7 19.1152 8.47168 19.4669 9.32096C19.8187 10.1702 19.9998 11.0805 19.9998 11.9997C19.9998 12.919 19.8187 13.8292 19.4669 14.6785C19.3198 15.0337 19.1441 15.3752 18.9419 15.7L20.3852 17.1433Z" style="fill: var(--element-active-color)"/>
<path d="M17.3801 14.1383L15.9998 12.7579V8.53564C16.3019 8.71005 16.5805 8.9236 16.8282 9.17131C17.1996 9.54275 17.4943 9.9837 17.6953 10.469C17.8963 10.9543 17.9998 11.4745 17.9998 11.9997C17.9998 12.525 17.8963 13.0452 17.6953 13.5305C17.6076 13.7422 17.5021 13.9455 17.3801 14.1383Z" style="fill: var(--element-active-color)"/>
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
    'obi-sound-off': ObiSoundOff;
  }
}