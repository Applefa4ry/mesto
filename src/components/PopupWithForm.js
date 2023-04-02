import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(selectorPopup, callback){
    super(selectorPopup);
    this._callback = callback;
    this._form = this._popup.querySelector(".form");
  }

  close = () => {
    super.close();
    this._form.reset();
  }

  open = (data) => {
    super.open();
    this._form.querySelectorAll("input").forEach((element,index) => {
      if(data[index] !== undefined) element.value =  data[index];
    })
  }

  _getInputValues(){
    this._dataField = Array.from(this._form.querySelectorAll("input")).map(element => element.value)
    return this._dataField
  }

  setEventListeners(){
    super.setEventListeners()
    this._form.addEventListener("submit", (evt) => this._callback(this._getInputValues(), evt))
  }
}