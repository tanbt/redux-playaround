import { LitElement, html } from 'lit-element';

class MenuBar extends LitElement {

  render() {
    return html`
      <div>
        menu-bar goes here.
      </div>
    `;
  }

}

window.customElements.define('menu-bar', MenuBar);