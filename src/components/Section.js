export default class Section {
  constructor({renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.prepend(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems(items) {
    this.clear();
    this._renderedItems = items;
    this._renderedItems.forEach(item => {
      const element = this._renderer(item);
      this.addItem(element)
    });
  }
}