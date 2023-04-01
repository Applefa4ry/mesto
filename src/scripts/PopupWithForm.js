import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(selectorPopup, callback){
    super(selectorPopup);
    this._callback = callback;
    this._form = this._popup.querySelector(".form");
  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener("submit", this._callback)
  }

  close(){
    super.close()
    this._form.reset();
  }

  _getInputValues(){
    this._dataField = Array.from(this._form.querySelectorAll("input")).map(element => element.value)
    console.log(this._dataField)
    return this._dataField
  }
}