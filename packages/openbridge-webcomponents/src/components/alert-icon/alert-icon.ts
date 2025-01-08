import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';

const SvgFile = "/icons-14.svg";

const svg14AlarmSilencedA = "icon-14-alarm-silenced-a";
const svg14AlarmSilencedB = "icon-14-alarm-silenced-b";
const svg14AlarmUnackA = "icon-14-alarm-unack-a";
const svg14AlarmUnackB = "icon-14-alarm-unack-b";
const svg14WarningUnackA = "icon-14-warning-unack-a";
const svg14WarningUnackB = "icon-14-warning-unack-b";

const mapping = {
  'alarm-silenced': {a: svg14AlarmSilencedA, b: svg14AlarmSilencedB},
  'alarm-unack': {a: svg14AlarmUnackA, b: svg14AlarmUnackB},
  'warning-unack': {a: svg14WarningUnackA, b: svg14WarningUnackB},
};

export const AlertIconNames = Object.keys(mapping) as AlertIconName[];
export type AlertIconName = keyof typeof mapping;

/**
 * Icon used for alerts and notification with blinking effect
 *
 * @prop {boolean} blinkValue - This value should alternate between true and false to make the icon blink.
 * @prop {AlertIconName} name - Name of the icon.
 */
@customElement('obc-alert-icon')
export class ObcAlertIcon extends LitElement {
  @property({type: Boolean}) blinkValue = false;
  @property({type: String}) name: AlertIconName = 'alarm-unack';

  override render() {
    const icons = mapping[this.name];
    return html`
      <div
        class=${classMap({
          wrapper: true,
          'show-a': this.blinkValue,
          'show-b': !this.blinkValue,
        })}
      >
        <span class="a"><svg><use href={"${SvgFile}#${icons.a}"}/></svg></span>
        <span class="b"><svg><use href={"${SvgFile}#${icons.b}"}/></svg></span>
      </div>
    `;
  }

  static override styles = css`
    .wrapper {
      height: 100%;
      width: 100%;
    }
    .wrapper * {
      height: 100%;
      width: 100%;
    }
    .a,
    .b {
      display: none;
    }

    .show-a .a {
      display: revert;
    }

    .show-b .b {
      display: revert;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'obc-alert-icon': ObcAlertIcon;
  }
}
