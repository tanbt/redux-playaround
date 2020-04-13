import { LitElement, html, css } from 'lit-element';
import { store } from '../store.js';
import { addTodo } from '../actions/Todos.js';

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
      <input type="text" id="todoInput" placeholder="Enter a todo" autofocus
        @keydown="${this._keydown}"
        >
    `;
  }

  _keydown(e) {
    if (e.key === 'Enter') {
      const text = this.renderRoot.getElementById('todoInput').value;
      if (text.trim() != '') {
        store.dispatch(addTodo(text));
        this.renderRoot.getElementById('todoInput').value = "";
      }
    }

    e.stopPropagation();
  }

}

window.customElements.define('input-bar', InputBar);