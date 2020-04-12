import { LitElement, html, css } from 'lit-element';
import {store} from './store.js';
import './components/menu-bar.js';

class MyApp extends LitElement {

  render() {
    return html`
      <h1>Hello from my app!</h1>
      Current visibility state: ${store.getState().visibilityFilter}

      <menu-bar></menu-bar>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log(store.getState());
  }

}

window.customElements.define('my-app', MyApp);
