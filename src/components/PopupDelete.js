import Popup from "./Popup.js";

export default class PopupDelete extends Popup{
  constructor(selectorPopup, card, handleDelete){
    super(selectorPopup);
    this._card = card;
    this._handleDelete = handleDelete;
    this._form = this._popup.querySelector(".form");
  }


  setCard(card){
    this._card = card;
  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => this._handleDelete(this._card, evt));
  }
}