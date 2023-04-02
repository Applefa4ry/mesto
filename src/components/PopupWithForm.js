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
    this._popup.classList.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose)
    this._form.querySelectorAll("input").forEach((element,index) => {
      if(data[index] !== undefined) element.value =  data[index];
    })
  }

  _getInputValues(){
    this._dataField = Array.from(this._form.querySelectorAll("input")).map(element => element.value)
    return this._dataField
  }

  setEventListeners(){
    this._popup.querySelector(".popup__close").addEventListener("click", this.close);
    const closeBackground = this.close;
    this._popup.addEventListener("click", function(evt){
      if(this === evt.target){
        closeBackground();
      }
    })
    this._form.addEventListener("submit", (evt) => this._callback(this._getInputValues(), evt))
  }
}