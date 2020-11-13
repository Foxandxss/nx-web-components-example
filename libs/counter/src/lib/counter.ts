const template = document.createElement('template');

template.innerHTML = `
  <style>
    button,
    span {
      font-size: 3rem;
      font-family: monospace;
      padding: 0 .5rem;
    }

    button {
      background: pink;
      color: black;
      border: 0;
      border-radius: 6px;
      box-shadow: 0 0 5px rgba(173, 61, 85, .5);
    }

    button:active {
      background: #ad3d55;
      color: white;
    }
  </style>
  <div>
    <button type="button" increment>+</button>
    <span></span>
    <button type="button" decrement>-</button>
  </div>
`;

export class MyCounter extends HTMLElement {
  incrementBtn: HTMLButtonElement;
  decrementBtn: HTMLButtonElement;
  displayVal: HTMLSpanElement;

  constructor() {
    super();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.incrementBtn = this.shadowRoot.querySelector('[increment]');
    this.decrementBtn = this.shadowRoot.querySelector('[decrement]');
    this.displayVal = this.shadowRoot.querySelector('span');
  }

  connectedCallback() {
    this.incrementBtn.addEventListener('click', this.increment);
    this.decrementBtn.addEventListener('click', this.decrement);

    if (!this.hasAttribute('value')) {
      this.setAttribute('value', '1');
    }
  }

  increment() {
    // using +myVariable coerces myVariable into a number,
    // we do this because the attribute's value is received as a string
    const step = +this.step || 1;
    const newValue = +this.value + step;

    if (this.max) {
      this.value = (newValue > +this.max ? +this.max : +newValue).toString();
    } else {
      this.value = newValue.toString();
    }
  }

  decrement() {
    const step = +this.step || 1;
    const newValue = +this.value - step;

    if (this.min) {
      this.value = (newValue <= +this.min ? +this.min : +newValue).toString();
    } else {
      this.value = newValue.toString();
    }
  }

  static get observedAttributes() {
    return ['value'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.displayVal.innerText = this.value;
  }

  set value(newValue) {
    this.setAttribute('value', newValue);
  }

  get value() {
    return this.getAttribute('value');
  }

  set step(newValue) {
    this.setAttribute('step', newValue);
  }

  get step() {
    return this.getAttribute('step');
  }

  set min(newValue) {
    this.setAttribute('min', newValue);
  }

  get min() {
    return this.getAttribute('min');
  }

  set max(newValue) {
    this.setAttribute('max', newValue);
  }

  get max() {
    return this.getAttribute('max');
  }

  disconnectedCallback() {
    this.incrementBtn.removeEventListener('click', this.increment);
    this.decrementBtn.removeEventListener('click', this.decrement);
  }
}

window.customElements.define('my-counter', MyCounter);
