import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('slick-menu-item')
export class SlickMenuItem extends LitElement {
  static styles = css`
    li {
      display: flex;
      border: none;
      background: inherit;
      color: currentcolor;
      justify-content: start;
      align-items: center;
      height: 35px;
    }
    
    li > * {
      padding: 5px;
      font-size: 18px;
    }
  `

  /**
   * The name to say "Hello" to.
   */
  @property()
  title = 'Title'

  /**
   * The name to say "Hello" to.
   */
  @property()
  icon = 'M2.5,19H21.5V21H2.5V19M22.07,9.64C21.86,8.84 21.03,8.36 20.23,8.58L14.92,10L8,3.57L6.09,4.08L10.23,11.25L5.26,12.58L3.29,11.04L1.84,11.43L3.66,14.59L4.43,15.92L6.03,15.5L11.34,14.07L15.69,12.91L21,11.5C21.81,11.26 22.28,10.44 22.07,9.64Z'

  /**
   * Returns a true or false value to display or hide the side menu
   */
  @property()
  color = '#ffffff'

  /**
   * Returns a true or false value to display or hide the side menu
   */
  @property()
  background = '#f97316'

  _colorInversion(e: any) {
    e.currentTarget.setAttribute('style', `background-color: ${this.color}; color: ${this.background};`)
  }

  _backToNormal(e: any) {
    e.currentTarget.setAttribute('style', `background-color: ${this.background}; color: ${this.color};`)
  }

  _emitEvent() {
    console.debug('slick-menu-item-clicked intern click')
    this.dispatchEvent(new Event('slick-menu-item-clicked'));
  }

  render() {
    return html`
      <li
        style="color: ${this.color};background-color: ${this.background};"
        @mouseover="${this._colorInversion}"
        @mouseout="${this._backToNormal}"
        @click="${this._emitEvent}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="${ this.icon }"></path></svg>
        <span class="link_name">${ this.title }</span>
      </li>
    `
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'slick-menu-item': SlickMenuItem
  }
}
