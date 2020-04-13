import { LitElement, html, css } from 'lit-element';

class InputBar extends LitElement {

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