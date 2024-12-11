import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-current')
export class ObiCurrent extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.91438 8.98698C3.51088 9.50843 2.89171 10 2 10V8C2.06067 8 2.15578 7.99157 2.33264 7.76302C2.5308 7.50693 2.70976 7.12515 2.92216 6.61538C2.94846 6.55227 2.97565 6.48614 3.00374 6.41779C3.17587 5.99909 3.38204 5.49756 3.6259 5.10109C3.90085 4.65408 4.42907 4 5.33333 4C6.23759 4 6.76582 4.65408 7.04076 5.10109C7.28462 5.49756 7.4908 5.99909 7.66292 6.41779C7.69102 6.48613 7.71821 6.55227 7.74451 6.61538C7.95691 7.12515 8.13586 7.50693 8.33403 7.76302C8.51088 7.99157 8.60599 8 8.66667 8C8.72734 8 8.82245 7.99157 8.99931 7.76302C9.19747 7.50693 9.37643 7.12515 9.58883 6.61538C9.61512 6.55227 9.64231 6.48614 9.67041 6.41779C9.84253 5.99909 10.0487 5.49756 10.2926 5.10109C10.5675 4.65408 11.0957 4 12 4C12.9043 4 13.4325 4.65408 13.7074 5.10109C13.9513 5.49756 14.1575 5.99909 14.3296 6.41779C14.3577 6.48613 14.3849 6.55227 14.4112 6.61538C14.6236 7.12515 14.8025 7.50693 15.0007 7.76302C15.1775 7.99157 15.2727 8 15.3333 8C15.394 8 15.4891 7.99157 15.666 7.76302C15.8641 7.50693 16.0431 7.12515 16.2555 6.61538C16.2818 6.55227 16.309 6.48613 16.3371 6.41779C16.5092 5.99909 16.7154 5.49756 16.9592 5.10109C17.2342 4.65408 17.7624 4 18.6667 4C19.5709 4 20.0991 4.65408 20.3741 5.10109C20.618 5.49756 20.8241 5.99908 20.9963 6.41778C21.0244 6.48613 21.0515 6.55227 21.0778 6.61538C21.2902 7.12515 21.4692 7.50693 21.6674 7.76302C21.8442 7.99157 21.9393 8 22 8V10C21.1083 10 20.4891 9.50843 20.0856 8.98698C19.7034 8.49307 19.436 7.87485 19.2317 7.38462C19.1985 7.30499 19.1669 7.22859 19.1366 7.15526C19.038 6.91685 18.9057 6.63529 18.8066 6.43017C18.7632 6.3404 18.7415 6.29551 18.71 6.28037C18.6831 6.2674 18.6503 6.2674 18.6233 6.28037C18.5918 6.29551 18.5701 6.3404 18.5268 6.43017C18.4277 6.63528 18.2954 6.91684 18.1968 7.15523C18.1664 7.22857 18.1348 7.30498 18.1016 7.38462C17.8974 7.87485 17.6299 8.49307 17.2477 8.98698C16.8442 9.50843 16.225 10 15.3333 10C14.4416 10 13.8225 9.50843 13.419 8.98698C13.0368 8.49307 12.7693 7.87485 12.565 7.38462C12.5318 7.305 12.5002 7.22859 12.4699 7.15527C12.3713 6.91686 12.239 6.63529 12.1399 6.43018C12.0965 6.3404 12.0748 6.29551 12.0433 6.28037C12.0164 6.2674 11.9836 6.2674 11.9567 6.28037C11.9252 6.29551 11.9035 6.3404 11.8601 6.43017C11.761 6.63529 11.6287 6.91685 11.5301 7.15525C11.4998 7.22858 11.4682 7.30499 11.435 7.38462C11.2307 7.87485 10.9632 8.49307 10.581 8.98698C10.1775 9.50843 9.55837 10 8.66667 10C7.77496 10 7.15578 9.50843 6.75228 8.98698C6.37009 8.49307 6.10262 7.87485 5.89835 7.38462C5.86517 7.30499 5.83357 7.22858 5.80324 7.15525C5.70462 6.91685 5.57232 6.63529 5.47323 6.43017C5.42986 6.3404 5.40817 6.29551 5.37668 6.28037C5.34972 6.2674 5.31695 6.2674 5.28999 6.28037C5.25849 6.29551 5.23681 6.3404 5.19344 6.43017C5.09434 6.63529 4.96204 6.91685 4.86343 7.15525C4.8331 7.22858 4.80149 7.30499 4.76832 7.38462C4.56405 7.87485 4.29658 8.49307 3.91438 8.98698Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 12.2929L21.4142 17L16.7071 21.7071L15.2929 20.2929L17.5858 18H3V16H17.5858L15.2929 13.7071L16.7071 12.2929Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.91438 8.98698C3.51088 9.50843 2.89171 10 2 10V8C2.06067 8 2.15578 7.99157 2.33264 7.76302C2.5308 7.50693 2.70976 7.12515 2.92216 6.61538C2.94846 6.55227 2.97565 6.48614 3.00374 6.41779C3.17587 5.99909 3.38204 5.49756 3.6259 5.10109C3.90085 4.65408 4.42907 4 5.33333 4C6.23759 4 6.76582 4.65408 7.04076 5.10109C7.28462 5.49756 7.4908 5.99909 7.66292 6.41779C7.69102 6.48613 7.71821 6.55227 7.74451 6.61538C7.95691 7.12515 8.13586 7.50693 8.33403 7.76302C8.51088 7.99157 8.60599 8 8.66667 8C8.72734 8 8.82245 7.99157 8.99931 7.76302C9.19747 7.50693 9.37643 7.12515 9.58883 6.61538C9.61512 6.55227 9.64231 6.48614 9.67041 6.41779C9.84253 5.99909 10.0487 5.49756 10.2926 5.10109C10.5675 4.65408 11.0957 4 12 4C12.9043 4 13.4325 4.65408 13.7074 5.10109C13.9513 5.49756 14.1575 5.99909 14.3296 6.41779C14.3577 6.48613 14.3849 6.55227 14.4112 6.61538C14.6236 7.12515 14.8025 7.50693 15.0007 7.76302C15.1775 7.99157 15.2727 8 15.3333 8C15.394 8 15.4891 7.99157 15.666 7.76302C15.8641 7.50693 16.0431 7.12515 16.2555 6.61538C16.2818 6.55227 16.309 6.48613 16.3371 6.41779C16.5092 5.99909 16.7154 5.49756 16.9592 5.10109C17.2342 4.65408 17.7624 4 18.6667 4C19.5709 4 20.0991 4.65408 20.3741 5.10109C20.618 5.49756 20.8241 5.99908 20.9963 6.41778C21.0244 6.48613 21.0515 6.55227 21.0778 6.61538C21.2902 7.12515 21.4692 7.50693 21.6674 7.76302C21.8442 7.99157 21.9393 8 22 8V10C21.1083 10 20.4891 9.50843 20.0856 8.98698C19.7034 8.49307 19.436 7.87485 19.2317 7.38462C19.1985 7.30499 19.1669 7.22859 19.1366 7.15526C19.038 6.91685 18.9057 6.63529 18.8066 6.43017C18.7632 6.3404 18.7415 6.29551 18.71 6.28037C18.6831 6.2674 18.6503 6.2674 18.6233 6.28037C18.5918 6.29551 18.5701 6.3404 18.5268 6.43017C18.4277 6.63528 18.2954 6.91684 18.1968 7.15523C18.1664 7.22857 18.1348 7.30498 18.1016 7.38462C17.8974 7.87485 17.6299 8.49307 17.2477 8.98698C16.8442 9.50843 16.225 10 15.3333 10C14.4416 10 13.8225 9.50843 13.419 8.98698C13.0368 8.49307 12.7693 7.87485 12.565 7.38462C12.5318 7.305 12.5002 7.22859 12.4699 7.15527C12.3713 6.91686 12.239 6.63529 12.1399 6.43018C12.0965 6.3404 12.0748 6.29551 12.0433 6.28037C12.0164 6.2674 11.9836 6.2674 11.9567 6.28037C11.9252 6.29551 11.9035 6.3404 11.8601 6.43017C11.761 6.63529 11.6287 6.91685 11.5301 7.15525C11.4998 7.22858 11.4682 7.30499 11.435 7.38462C11.2307 7.87485 10.9632 8.49307 10.581 8.98698C10.1775 9.50843 9.55837 10 8.66667 10C7.77496 10 7.15578 9.50843 6.75228 8.98698C6.37009 8.49307 6.10262 7.87485 5.89835 7.38462C5.86517 7.30499 5.83357 7.22858 5.80324 7.15525C5.70462 6.91685 5.57232 6.63529 5.47323 6.43017C5.42986 6.3404 5.40817 6.29551 5.37668 6.28037C5.34972 6.2674 5.31695 6.2674 5.28999 6.28037C5.25849 6.29551 5.23681 6.3404 5.19344 6.43017C5.09434 6.63529 4.96204 6.91685 4.86343 7.15525C4.8331 7.22858 4.80149 7.30499 4.76832 7.38462C4.56405 7.87485 4.29658 8.49307 3.91438 8.98698Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 12.2929L21.4142 17L16.7071 21.7071L15.2929 20.2929L17.5858 18H3V16H17.5858L15.2929 13.7071L16.7071 12.2929Z" style="fill: var(--element-active-color)"/>
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
    'obi-current': ObiCurrent;
  }
}