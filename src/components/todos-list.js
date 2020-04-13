import { LitElement, html, css } from 'lit-element';
import { store } from '../store.js';
import { connect } from '../utils/connect-mixin.js';
import { toggleTodo, removeTodo } from '../actions/Todos.js';
import { VisibilityFilters as VF } from '../actions/VisibilityFilters.js';

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
    this.items = this._getVisibleTodos(state.todos, state.visibilityFilter);
  }

  _getVisibleTodos(todos, filter) {
    switch (filter) {
      case VF.SHOW_ALL:
        return todos
      case VF.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case VF.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }

  _remove(e) {
    const itemId = Number(e.target.parentElement.getAttribute('item-id'));
    if (itemId) {
      store.dispatch(removeTodo(itemId));
    }
  }

  _markCompleted(e) {
    const itemId = Number(e.target.parentElement.getAttribute('item-id'));
    if (itemId) {
      store.dispatch(toggleTodo(itemId));
    }
  }

}

window.customElements.define('todos-list', TodosList);