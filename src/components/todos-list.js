import { LitElement, html, css } from 'lit-element';
import { store } from '../store.js';
import { connect } from '../utils/connect-mixin.js';
import { toggleTodo } from '../actions/Todos.js';

class TodosList extends connect(store, LitElement) {

  static get properties() {
    return {
      items: Array
    }
  }

  static get styles() {
    return css`
      .item {
        padding: .4rem .2rem;
        display: flex;
      }
      .item span { flex: 1;}

      .item:hover {
        background: #EEE;
      }

      .item[completed] {
        color: #AAA;
      }
    `;
  }

  render() {
    return html`
      ${this.items.map(item => html`
        <div class="item" item-id="${item.id}" ?completed="${item.completed}">
          <button @click="${this._markCompleted}">[o]</button> &nbsp;&nbsp;
          <span>${item.text}</span>
          <button @click="${this._remove}">[x]</button>
        </div>
      `)}
    `;
  }

  stateChanged(state) {
    this.items = state.todos;
  }

  _remove(e) {
    console.log("Removing item id: " + e.target.parentElement.getAttribute('item-id'));
  }

  _markCompleted(e) {
    const itemId = Number(e.target.parentElement.getAttribute('item-id'));
    if (itemId) {
      store.dispatch(toggleTodo(itemId));
    }
  }

}

window.customElements.define('todos-list', TodosList);