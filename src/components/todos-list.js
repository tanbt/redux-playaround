import { html } from 'lit-element';
import { ReduxLitElement } from './ReduxLitElement.js';

class TodosList extends ReduxLitElement {

  render() {
    return html`
      show the list here
    `;
  }

}

window.customElements.define('todos-list', TodosList);