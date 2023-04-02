import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  constructor(selectorPopup){
    super(selectorPopup)
    this._image = this._popup.querySelector("#picture-img")
    this._title = this._popup.querySelector("#picture-title")
  }
  open(name, link){
    super.open();
    this._image.src = link;
    this._image.alt = name;
    this._title.textContent = name;
  }
}
