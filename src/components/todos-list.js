import { LitElement, html } from 'lit-element';
import { store } from '../store.js';
import { connect } from '../utils/connect-mixin.js';

class TodosList extends connect(store, LitElement) {

  static get properties() {
    return {
      items: Array
    }
  }

  render() {
    return html`
      ${this.items.map(item => html`
        ${item.id} - ${item.text} - [${item.completed}]<br/>
      `)}
    `;
  }

  stateChanged(state) {
    this.items = state.todos;
  }
}

window.customElements.define('todos-list', TodosList);