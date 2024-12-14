import {LitElement, html, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import '../icon-button/icon-button';
import componentStyle from './toggle-switch.css?inline';

/**
 * 
 * @fires change - Dispatched when the value of the input changes
 */
@customElement('obc-toggle-switch')
export class ObcToggleSwitch extends LitElement {
  @property({type: String}) label = 'Label';
  @property({type: Boolean}) checked = false;

  override render() {
    return html`
      <label>
        <span>${this.label}</span>
        <div class="switch">
          <div class="presenter ${classMap({checked: this.checked})}">
            <div class="knob"></div>
            <input
              type="checkbox"
              ?checked=${this.checked}
              @click=${this._tryChange}
            />
          </div>
        </div>
      </label>
    `;
  }

  _tryChange() {
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('change', {detail: {checked: this.checked}}));
  }

  static override styles = unsafeCSS(componentStyle);
}

declare global {
  interface HTMLElementTagNameMap {
    'obc-toggle-switch': ObcToggleSwitch;
  }
}
