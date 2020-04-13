import { html, css } from 'lit-element';
import { ReduxLitElement } from './ReduxLitElement.js';

class InputBar extends ReduxLitElement {

  static get styles() {
    return css`
      input {
        width: 100%;
      }
    `;
  }

  render() {
    return html`
      <input type="text" id="todoInput" placeholder="Enter a todo">
    `;
  }

}

window.customElements.define('input-bar', InputBar);