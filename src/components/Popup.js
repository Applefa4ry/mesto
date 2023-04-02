export default class Popup{
  constructor(selectorPopup){
    this._popup = document.querySelector(selectorPopup);
  }

  _handleEscClose = (evt) => {
    if(evt.key === "Escape"){
      this.close();
    }
  }

  open(){
    this._popup.classList.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose)
  }

  close(){
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose)
  }

  setEventListeners(){
    this._popup.querySelector(".popup__close").addEventListener("click", this.close.bind(this));
    const closeBackground = this.close.bind(this);
    this._popup.addEventListener("click", function(evt){
      if(this === evt.target){
        closeBackground();
      }
    })
  }
}