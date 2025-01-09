import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-heavy-snow-showers-polartwilight')
export class ObiHeavySnowShowersPolartwilight extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.33337 4.66675C2.96518 4.66675 2.66671 4.96522 2.66671 5.33341C2.66671 5.7016 2.96518 6.00008 3.33337 6.00008H4.88757C4.88757 6.13816 4.82823 6.27623 4.70955 6.37592L2.84544 7.94165C2.50018 8.23165 2.68521 8.77504 3.14317 8.81601L5.61575 9.0372C5.9306 9.06536 6.148 9.35089 6.07878 9.64532L5.53517 11.9575C5.43448 12.3858 5.9189 12.7216 6.31463 12.4979L8.45124 11.2901C8.47491 11.2767 8.49919 11.2653 8.52386 11.2558C7.74855 11.8519 7.4036 12.6549 7.25991 13.3488H6.66671C5.52703 13.3488 4.46215 13.7474 3.69557 14.5797C2.9538 15.3851 2.66671 16.4055 2.66671 17.3488C2.66671 19.558 4.45757 21.3488 6.66671 21.3488H25.3334C27.6727 21.3488 29.178 19.445 29.3275 17.5022C29.4243 16.244 28.7331 15.3588 28.1496 14.8677C27.5832 14.3909 26.9123 14.0917 26.3987 13.9034C26.1853 13.8252 25.9743 13.7574 25.7741 13.699C25.6451 13.1747 25.439 12.556 25.1071 11.919C24.1525 10.0867 22.2421 8.29671 18.8271 8.02193C18.7347 8.01449 18.643 8.00897 18.5522 8.0053C18.5333 7.98304 18.5119 7.96174 18.488 7.94166L16.6239 6.37592C16.5052 6.27623 16.4458 6.13816 16.4458 6.00008H18C18.3682 6.00008 18.6667 5.7016 18.6667 5.33341C18.6667 4.96522 18.3682 4.66675 18 4.66675H3.33337ZM14.8772 6.00008H6.45618C6.45618 8.20922 8.3413 10.0001 10.6667 10.0001C12.9921 10.0001 14.8772 8.20922 14.8772 6.00008ZM24 15.3488C24 15.3488 27.4498 15.8352 27.3334 17.3488C27.2487 18.4501 26.4379 19.3488 25.3334 19.3488H6.66671C5.56214 19.3488 4.66671 18.4534 4.66671 17.3488C4.66671 16.2442 5.33337 15.3488 6.66671 15.3488H9.33337C9.33337 15.3488 8.95837 14.2238 9.33337 13.3801C9.45837 13.0988 9.66671 12.8488 10 12.6822C10.3899 12.4872 10.7797 12.5203 11.1362 12.6646C11.9991 13.014 12.6667 14.0155 12.6667 14.0155C12.6667 14.0155 13.0855 13.2031 13.8693 12.3091C14.8895 11.1454 16.5283 9.84342 18.6667 10.0155C24 10.4446 24 15.3488 24 15.3488Z" fill="currentColor"/>
<path d="M2.66675 27.9007C2.34788 27.696 2.23863 27.2428 2.42273 26.8883L2.84538 26.0745H2.00004C1.63185 26.0745 1.33337 25.7427 1.33337 25.3334C1.33337 24.9241 1.63185 24.5923 2.00004 24.5923H2.84538L2.42273 23.7785C2.23863 23.4241 2.34788 22.9708 2.66675 22.7662C2.98561 22.5615 3.39333 22.683 3.57743 23.0374L4.00008 23.8512L4.42273 23.0374C4.60682 22.683 5.01455 22.5615 5.33341 22.7662C5.65228 22.9708 5.76153 23.4241 5.57743 23.7785L5.15478 24.5923H6.00004C6.36823 24.5923 6.66671 24.9241 6.66671 25.3334C6.66671 25.7427 6.36823 26.0745 6.00004 26.0745H5.15478L5.57743 26.8883C5.76153 27.2428 5.65228 27.696 5.33341 27.9007C5.01455 28.1053 4.60682 27.9839 4.42273 27.6294L4.00008 26.8156L3.57743 27.6294C3.39334 27.9839 2.98561 28.1053 2.66675 27.9007Z" fill="currentColor"/>
<path d="M15.3334 27.9007C15.0146 27.696 14.9053 27.2428 15.0894 26.8883L15.512 26.0745H14.6667C14.2985 26.0745 14 25.7427 14 25.3334C14 24.9241 14.2985 24.5923 14.6667 24.5923H15.512L15.0894 23.7785C14.9053 23.4241 15.0146 22.9708 15.3334 22.7662C15.6523 22.5615 16.06 22.683 16.2441 23.0374L16.6667 23.8512L17.0894 23.0374C17.2735 22.683 17.6812 22.5615 18.0001 22.7662C18.3189 22.9708 18.4282 23.4241 18.2441 23.7785L17.8215 24.5923H18.6667C19.0349 24.5923 19.3334 24.9241 19.3334 25.3334C19.3334 25.7427 19.0349 26.0745 18.6667 26.0745H17.8214L18.2441 26.8883C18.4282 27.2428 18.3189 27.696 18.0001 27.9007C17.6812 28.1053 17.2735 27.9839 17.0894 27.6294L16.6667 26.8156L16.2441 27.6294C16.06 27.9839 15.6523 28.1053 15.3334 27.9007Z" fill="currentColor"/>
<path d="M26.6667 27.9007C26.3479 27.696 26.2386 27.2428 26.4227 26.8883L26.8454 26.0745H26C25.6319 26.0745 25.3334 25.7427 25.3334 25.3334C25.3334 24.9241 25.6319 24.5923 26 24.5923H26.8454L26.4227 23.7785C26.2386 23.4241 26.3479 22.9708 26.6667 22.7662C26.9856 22.5615 27.3933 22.683 27.5774 23.0374L28.0001 23.8512L28.4227 23.0374C28.6068 22.683 29.0146 22.5615 29.3334 22.7662C29.6523 22.9708 29.7615 23.4241 29.5774 23.7785L29.1548 24.5923H30C30.3682 24.5923 30.6667 24.9241 30.6667 25.3334C30.6667 25.7427 30.3682 26.0745 30 26.0745H29.1548L29.5774 26.8883C29.7615 27.2428 29.6523 27.696 29.3334 27.9007C29.0146 28.1053 28.6068 27.9839 28.4227 27.6294L28.0001 26.8156L27.5774 27.6294C27.3933 27.9839 26.9856 28.1053 26.6667 27.9007Z" fill="currentColor"/>
<path d="M21.3334 30.5673C21.0146 30.3627 20.9053 29.9094 21.0894 29.555L21.5121 28.7412H20.6667C20.2985 28.7412 20 28.4094 20 28.0001C20 27.5908 20.2985 27.259 20.6667 27.259H21.512L21.0894 26.4452C20.9053 26.0907 21.0146 25.6375 21.3334 25.4328C21.6523 25.2282 22.06 25.3496 22.2441 25.7041L22.6667 26.5179L23.0894 25.7041C23.2735 25.3496 23.6812 25.2282 24.0001 25.4328C24.3189 25.6375 24.4282 26.0907 24.2441 26.4452L23.8215 27.259H24.6667C25.0349 27.259 25.3334 27.5908 25.3334 28.0001C25.3334 28.4094 25.0349 28.7412 24.6667 28.7412H23.8214L24.2441 29.555C24.4282 29.9094 24.3189 30.3627 24.0001 30.5673C23.6812 30.772 23.2735 30.6505 23.0894 30.2961L22.6667 29.4823L22.2441 30.2961C22.06 30.6505 21.6523 30.772 21.3334 30.5673Z" fill="currentColor"/>
<path d="M9.33341 30.5673C9.01455 30.3627 8.9053 29.9094 9.0894 29.555L9.51205 28.7412H8.66671C8.29852 28.7412 8.00004 28.4094 8.00004 28.0001C8.00004 27.5908 8.29852 27.259 8.66671 27.259H9.51204L9.0894 26.4452C8.9053 26.0907 9.01455 25.6375 9.33341 25.4328C9.65228 25.2282 10.06 25.3496 10.2441 25.7041L10.6667 26.5179L11.0894 25.7041C11.2735 25.3496 11.6812 25.2282 12.0001 25.4328C12.3189 25.6375 12.4282 26.0907 12.2441 26.4452L11.8215 27.259H12.6667C13.0349 27.259 13.3334 27.5908 13.3334 28.0001C13.3334 28.4094 13.0349 28.7412 12.6667 28.7412H11.8214L12.2441 29.555C12.4282 29.9094 12.3189 30.3627 12.0001 30.5673C11.6812 30.772 11.2735 30.6505 11.0894 30.2961L10.6667 29.4823L10.2441 30.2961C10.06 30.6505 9.65228 30.772 9.33341 30.5673Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.33337 4.66675C2.96518 4.66675 2.66671 4.96522 2.66671 5.33341C2.66671 5.7016 2.96518 6.00008 3.33337 6.00008H4.88757C4.88757 6.13816 4.82823 6.27623 4.70955 6.37592L2.84544 7.94165C2.50018 8.23165 2.68521 8.77504 3.14317 8.81601L5.61575 9.0372C5.9306 9.06536 6.148 9.35089 6.07878 9.64532L5.53517 11.9575C5.43448 12.3858 5.9189 12.7216 6.31463 12.4979L8.45124 11.2901C8.47491 11.2767 8.49919 11.2653 8.52386 11.2558C7.74855 11.8519 7.4036 12.6549 7.25991 13.3488H6.66671C5.52703 13.3488 4.46215 13.7474 3.69557 14.5797C2.9538 15.3851 2.66671 16.4055 2.66671 17.3488C2.66671 19.558 4.45757 21.3488 6.66671 21.3488H25.3334C27.6727 21.3488 29.178 19.445 29.3275 17.5022C29.4243 16.244 28.7331 15.3588 28.1496 14.8677C27.5832 14.3909 26.9123 14.0917 26.3987 13.9034C26.1853 13.8252 25.9743 13.7574 25.7741 13.699C25.6451 13.1747 25.439 12.556 25.1071 11.919C24.1525 10.0867 22.2421 8.29671 18.8271 8.02193C18.7347 8.01449 18.643 8.00897 18.5522 8.0053C18.5333 7.98304 18.5119 7.96174 18.488 7.94166L16.6239 6.37592C16.5052 6.27623 16.4458 6.13816 16.4458 6.00008H18C18.3682 6.00008 18.6667 5.7016 18.6667 5.33341C18.6667 4.96522 18.3682 4.66675 18 4.66675H3.33337ZM14.8772 6.00008H6.45618C6.45618 8.20922 8.3413 10.0001 10.6667 10.0001C12.9921 10.0001 14.8772 8.20922 14.8772 6.00008ZM24 15.3488C24 15.3488 27.4498 15.8352 27.3334 17.3488C27.2487 18.4501 26.4379 19.3488 25.3334 19.3488H6.66671C5.56214 19.3488 4.66671 18.4534 4.66671 17.3488C4.66671 16.2442 5.33337 15.3488 6.66671 15.3488H9.33337C9.33337 15.3488 8.95837 14.2238 9.33337 13.3801C9.45837 13.0988 9.66671 12.8488 10 12.6822C10.3899 12.4872 10.7797 12.5203 11.1362 12.6646C11.9991 13.014 12.6667 14.0155 12.6667 14.0155C12.6667 14.0155 13.0855 13.2031 13.8693 12.3091C14.8895 11.1454 16.5283 9.84342 18.6667 10.0155C24 10.4446 24 15.3488 24 15.3488Z" style="fill: var(--element-active-color)"/>
<path d="M2.66675 27.9007C2.34788 27.696 2.23863 27.2428 2.42273 26.8883L2.84538 26.0745H2.00004C1.63185 26.0745 1.33337 25.7427 1.33337 25.3334C1.33337 24.9241 1.63185 24.5923 2.00004 24.5923H2.84538L2.42273 23.7785C2.23863 23.4241 2.34788 22.9708 2.66675 22.7662C2.98561 22.5615 3.39333 22.683 3.57743 23.0374L4.00008 23.8512L4.42273 23.0374C4.60682 22.683 5.01455 22.5615 5.33341 22.7662C5.65228 22.9708 5.76153 23.4241 5.57743 23.7785L5.15478 24.5923H6.00004C6.36823 24.5923 6.66671 24.9241 6.66671 25.3334C6.66671 25.7427 6.36823 26.0745 6.00004 26.0745H5.15478L5.57743 26.8883C5.76153 27.2428 5.65228 27.696 5.33341 27.9007C5.01455 28.1053 4.60682 27.9839 4.42273 27.6294L4.00008 26.8156L3.57743 27.6294C3.39334 27.9839 2.98561 28.1053 2.66675 27.9007Z" style="fill: var(--element-active-color)"/>
<path d="M15.3334 27.9007C15.0146 27.696 14.9053 27.2428 15.0894 26.8883L15.512 26.0745H14.6667C14.2985 26.0745 14 25.7427 14 25.3334C14 24.9241 14.2985 24.5923 14.6667 24.5923H15.512L15.0894 23.7785C14.9053 23.4241 15.0146 22.9708 15.3334 22.7662C15.6523 22.5615 16.06 22.683 16.2441 23.0374L16.6667 23.8512L17.0894 23.0374C17.2735 22.683 17.6812 22.5615 18.0001 22.7662C18.3189 22.9708 18.4282 23.4241 18.2441 23.7785L17.8215 24.5923H18.6667C19.0349 24.5923 19.3334 24.9241 19.3334 25.3334C19.3334 25.7427 19.0349 26.0745 18.6667 26.0745H17.8214L18.2441 26.8883C18.4282 27.2428 18.3189 27.696 18.0001 27.9007C17.6812 28.1053 17.2735 27.9839 17.0894 27.6294L16.6667 26.8156L16.2441 27.6294C16.06 27.9839 15.6523 28.1053 15.3334 27.9007Z" style="fill: var(--element-active-color)"/>
<path d="M26.6667 27.9007C26.3479 27.696 26.2386 27.2428 26.4227 26.8883L26.8454 26.0745H26C25.6319 26.0745 25.3334 25.7427 25.3334 25.3334C25.3334 24.9241 25.6319 24.5923 26 24.5923H26.8454L26.4227 23.7785C26.2386 23.4241 26.3479 22.9708 26.6667 22.7662C26.9856 22.5615 27.3933 22.683 27.5774 23.0374L28.0001 23.8512L28.4227 23.0374C28.6068 22.683 29.0146 22.5615 29.3334 22.7662C29.6523 22.9708 29.7615 23.4241 29.5774 23.7785L29.1548 24.5923H30C30.3682 24.5923 30.6667 24.9241 30.6667 25.3334C30.6667 25.7427 30.3682 26.0745 30 26.0745H29.1548L29.5774 26.8883C29.7615 27.2428 29.6523 27.696 29.3334 27.9007C29.0146 28.1053 28.6068 27.9839 28.4227 27.6294L28.0001 26.8156L27.5774 27.6294C27.3933 27.9839 26.9856 28.1053 26.6667 27.9007Z" style="fill: var(--element-active-color)"/>
<path d="M21.3334 30.5673C21.0146 30.3627 20.9053 29.9094 21.0894 29.555L21.5121 28.7412H20.6667C20.2985 28.7412 20 28.4094 20 28.0001C20 27.5908 20.2985 27.259 20.6667 27.259H21.512L21.0894 26.4452C20.9053 26.0907 21.0146 25.6375 21.3334 25.4328C21.6523 25.2282 22.06 25.3496 22.2441 25.7041L22.6667 26.5179L23.0894 25.7041C23.2735 25.3496 23.6812 25.2282 24.0001 25.4328C24.3189 25.6375 24.4282 26.0907 24.2441 26.4452L23.8215 27.259H24.6667C25.0349 27.259 25.3334 27.5908 25.3334 28.0001C25.3334 28.4094 25.0349 28.7412 24.6667 28.7412H23.8214L24.2441 29.555C24.4282 29.9094 24.3189 30.3627 24.0001 30.5673C23.6812 30.772 23.2735 30.6505 23.0894 30.2961L22.6667 29.4823L22.2441 30.2961C22.06 30.6505 21.6523 30.772 21.3334 30.5673Z" style="fill: var(--element-active-color)"/>
<path d="M9.33341 30.5673C9.01455 30.3627 8.9053 29.9094 9.0894 29.555L9.51205 28.7412H8.66671C8.29852 28.7412 8.00004 28.4094 8.00004 28.0001C8.00004 27.5908 8.29852 27.259 8.66671 27.259H9.51204L9.0894 26.4452C8.9053 26.0907 9.01455 25.6375 9.33341 25.4328C9.65228 25.2282 10.06 25.3496 10.2441 25.7041L10.6667 26.5179L11.0894 25.7041C11.2735 25.3496 11.6812 25.2282 12.0001 25.4328C12.3189 25.6375 12.4282 26.0907 12.2441 26.4452L11.8215 27.259H12.6667C13.0349 27.259 13.3334 27.5908 13.3334 28.0001C13.3334 28.4094 13.0349 28.7412 12.6667 28.7412H11.8214L12.2441 29.555C12.4282 29.9094 12.3189 30.3627 12.0001 30.5673C11.6812 30.772 11.2735 30.6505 11.0894 30.2961L10.6667 29.4823L10.2441 30.2961C10.06 30.6505 9.65228 30.772 9.33341 30.5673Z" style="fill: var(--element-active-color)"/>
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
    'obi-heavy-snow-showers-polartwilight': ObiHeavySnowShowersPolartwilight;
  }
}