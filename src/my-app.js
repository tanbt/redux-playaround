import { html } from 'lit-element';
import {store} from './store.js';
import './components/menu-bar.js';
import { ReduxLitElement } from './components/ReduxLitElement.js';

class MyApp extends ReduxLitElement {

  render() {
    return html`
      <h1>Hello from my app!</h1>
      Current visibility state: ${store.getState().visibilityFilter}

      <menu-bar></menu-bar>
    `;
  }

  stateChanged() {
    console.log(store.getState());
  }

}

window.customElements.define('my-app', MyApp);
