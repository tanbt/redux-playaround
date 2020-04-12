import { LitElement, html, css } from 'lit-element';
import {store} from './store.js';

class MyApp extends LitElement {

  render() {
    return html`
      Hello from my app!
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    store.getState();
  }

}

window.customElements.define('my-app', MyApp);
