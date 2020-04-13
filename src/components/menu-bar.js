import { LitElement, html, css } from 'lit-element';
import { store } from '../store.js';
import { VisibilityFilters as VF, setVisibilityFilter } from '../actions/VisibilityFilters.js';
import { connect } from '../utils/connect-mixin.js';

class MenuBar extends connect(store, LitElement) {

  static get properties() {
    return {
      filter: String,
      count: Number
    }
  }

  static get styles() {
    return css`
      [selected] {
        font-weight: bold;
        color: #00F;
      }

      a {
        text-decoration: none;
      }
    `;
  }

  render() {
    return html`
      <div>
        Total: ${this.count}

        <button
          ?selected="${this.filter == VF.SHOW_ALL}"
          @click="${() => this._setVisibility(VF.SHOW_ALL)}">
          All
        </button>

        <button
          ?selected="${this.filter == VF.SHOW_ACTIVE}"
          @click="${() => this._setVisibility(VF.SHOW_ACTIVE)}">
          Active
        </button>

        <button
          ?selected="${this.filter == VF.SHOW_COMPLETED}"
          @click="${() => this._setVisibility(VF.SHOW_COMPLETED)}">
          Completed
        </button>

        <a href="#">clear completed</a>
      </div>
    `;
  }

  constructor() {
    super();
    this.filter = VF.SHOW_ALL;
    this.count = 0;
  }

  _setVisibility(filter) {
    store.dispatch(setVisibilityFilter(filter));
  }

  stateChanged(state) {
    this.filter = state.visibilityFilter;
    this.count = state.todos.length;
  }

}

window.customElements.define('menu-bar', MenuBar);