import { LitElement, html } from 'lit-element';
import { store } from '../store.js';

export class ReduxLitElement extends LitElement {

  constructor() {
    super();
    this.storeUnsubscribe = store.subscribe(this.stateChanged);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.storeUnsubscribe();
  }

  stateChanged() {
  }

}
