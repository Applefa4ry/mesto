import Popup from "./Popup.js";

export default class PopupWithImage extends Popup{
  open(name, link){
    super.open();
    this._popup.querySelector("#picture-img").src = link;
    this._popup.querySelector("#picture-img").alt = name;
    this._popup.querySelector("#picture-title").textContent = name;
  }
}

// function handleCardClick(name, link){
//   // formAddNewCard.resetValidation();
//   imagePicture.src = link;
//   imagePicture.alt = name;
//   titlePicture.textContent = name;
//   openPopUp(popupFullIImage);
// }