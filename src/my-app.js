import { LitElement, html, css } from 'lit-element';
import './components/menu-bar.js';
import './components/input-bar.js';
import './components/todos-list.js';

class MyApp extends LitElement {

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0;
        background: #EEE;
      }

      #mainLayout {
        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 1rem;
        background: #FFF;
        box-shadow: .2rem .2rem #999;
      }

      #mainLayout > * {
        margin: .3rem 0;
      }
    `;
  }

  render() {
    return html`
      <h1>Todos</h1>
      <div id="mainLayout">
        <input-bar></input-bar>
        <todos-list></todos-list>
        <menu-bar></menu-bar>
      </div>
    `;
  }

}

window.customElements.define('my-app', MyApp);
