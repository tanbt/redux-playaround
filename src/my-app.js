import { LitElement, html, css } from 'lit-element';

class MyApp extends LitElement {

  render() {
    return html`
      Hello from my app!
    `;
  }

}

window.customElements.define('my-app', MyApp);
