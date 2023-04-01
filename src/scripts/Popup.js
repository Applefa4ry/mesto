export default class Popup{
  constructor(selectorPopup){
    this._popup = document.querySelector(selectorPopup);
  }

  _handleEscClose(evt){
    if(evt.key === "Escape"){
      this.close();
    }
  }

  open(){
    console.log(this)
    console.log(this._popup)
    this._popup.classList.add("popup_opened");
  }

  close(){
    console.log(this)
    console.log(this._popup)
    this._popup.classList.remove("popup_opened");
  }

  setEventListeners(){
    this._popup.querySelector(".popup__close").addEventListener("click", this.close.bind(this));
    document.addEventListener("keyup", this._handleEscClose.bind(this))
    const closeBackground = this.close.bind(this);
    this._popup.addEventListener("click", function(evt){
      if(this === evt.target){
        closeBackground();
      }
    })
  }
}

// function openPopUp(element){
//   document.addEventListener("keyup", closeByEsc);
//   element.classList.add("popup_opened");
// }

// function closePopUp(element){
//   document.removeEventListener("keyup", closeByEsc);
//   // formValidators[element.getAttribute("name")].resetValidation();
//   // formEditProfiile.resetValidation();
//   // formAddNewCard.resetValidation();
//   // evt.target.reset();
//   element.classList.remove("popup_opened");
// }

// function closeByEsc(evt){
//   if(evt.key === "Escape"){
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopUp(openedPopup);
//   }
// };

// closeButtons.forEach(element => {
//   const buttonsPopup = element.closest(".popup");
//   element.addEventListener("click", () => closePopUp(buttonsPopup));
// });

// popups.forEach(element => {
//   element.addEventListener("click", function(evt){
//     if(element === evt.target){
//       closePopUp(element);
//     }
//   });
// });