import { LitElement, html } from 'lit-element';
import { store } from '../store.js';
import { VisibilityFilters, setVisibilityFilter } from '../actions/VisibilityFilters.js';

class MenuBar extends LitElement {

  render() {
    return html`
      <div>
        menu-bar goes here.
        <button @click="${() => this._setVisibility(VisibilityFilters.SHOW_ALL)}">
          All
        </button>
        <button @click="${() => this._setVisibility(VisibilityFilters.SHOW_ACTIVE)}">
          Active
        </button>
        <button @click="${() => this._setVisibility(VisibilityFilters.SHOW_COMPLETED)}">
        Completed
        </button>
      </div>
    `;
  }

  _setVisibility(filter) {
    store.dispatch(setVisibilityFilter(filter));
  }

}

window.customElements.define('menu-bar', MenuBar);