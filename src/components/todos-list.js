import { LitElement, html } from 'lit-element';

class TodosList extends LitElement {

  render() {
    return html`
      show the list here
    `;
  }

}

window.customElements.define('todos-list', TodosList);