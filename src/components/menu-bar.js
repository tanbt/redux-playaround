import { LitElement, html, css } from 'lit-element';
import { store } from '../store.js';
import { VisibilityFilters, setVisibilityFilter } from '../actions/VisibilityFilters.js';
import { connect } from '../utils/connect-mixin.js';

class MenuBar extends connect(store)(LitElement) {

  static get properties() {
    return {
      showAll: Boolean,
      showActive: Boolean,
      showCompleted: Boolean
    }
  }

  static get styles() {
    return css`
      [selected] {
        font-weight: bold;
        color: #00F;
      }
    `;
  }

  render() {
    return html`
      <div>
        Total: 5
        <button
          ?selected="${this.showAll}"
          @click="${() => this._setVisibility(VisibilityFilters.SHOW_ALL)}">
          All
        </button>
        <button
          ?selected="${this.showActive}"
          @click="${() => this._setVisibility(VisibilityFilters.SHOW_ACTIVE)}">
          Active
        </button>
        <button
          ?selected="${this.showCompleted}"
          @click="${() => this._setVisibility(VisibilityFilters.SHOW_COMPLETED)}">
        Completed
        </button>
      </div>
    `;
  }

  constructor() {
    super();
    this._resetProperties();
    this.showAll = true;
  }

  _resetProperties() {
    this.showAll = false;
    this.showActive = false;
    this.showCompleted = false;
  }

  _setVisibility(filter) {
    store.dispatch(setVisibilityFilter(filter));
  }

  stateChanged(state) {
    this._resetProperties();
    switch (state.visibilityFilter) {
      case VisibilityFilters.SHOW_ACTIVE:
        this.showActive = true;
        break;
      case VisibilityFilters.SHOW_COMPLETED:
        this.showCompleted = true;
        break;
      default:
        this.showAll = true;
    }
  }

}

window.customElements.define('menu-bar', MenuBar);