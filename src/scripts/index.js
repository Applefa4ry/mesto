import {Card, initialCards} from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import '../pages/index.css'


const editButton = document.querySelector(".profile__edit-button");

// const closeButtons = document.querySelectorAll(".popup__close");

// const popupProfile = document.querySelector("#edit-profile");

// const popupAddNewCard = document.querySelector("#edit-place");

// const popupFullIImage = document.querySelector("#edit-picture");

// const nameInput = popupProfile.querySelector("#edit-name");

// const jobInput = popupProfile.querySelector("#edit-job");

// const nameProfile = document.querySelector(".profile__name");

// const aboutProfile = document.querySelector(".profile__about");

// const popups = document.querySelectorAll(".popup");

// const titlePlace = popupAddNewCard.querySelector("#edit-title");

// const imgSrcPlace = popupAddNewCard.querySelector("#edit-url");

const addButton = document.querySelector(".profile__add-button");

// const imagePicture = popupFullIImage.querySelector("#picture-img");

// const titlePicture = popupFullIImage.querySelector("#picture-title");

// const cardsContainer = document.querySelector(".cards");

const config = 
  { 
    formSelector: '.form',
    inputSelector: '.form__field',
    submitButtonSelector: '.form__button-submit',
    inactiveButtonClass: 'form__button-submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }

const formEditProfiile = new FormValidator(config, ".editProfile");

const formAddNewCard = new FormValidator(config, ".addCard");

const popupWithImage = new PopupWithImage("#edit-picture");

const popupEditProfile = new PopupWithForm("#edit-profile" , handleFormEditProfileSubmit);

const popupNewPlace = new PopupWithForm("#edit-place", addCard);

const userInfo = new UserInfo({nameSelector:".profile__name", aboutSelector:".profile__about"})

const cardSection = new Section({items: initialCards, renderer: createCard}, ".cards")
// popupWithImage.setEventListeners()

// function openPopUp(element){
//   document.addEventListener("keyup", closeByEsc);
//   element.classList.add("popup_opened");
// }

// function closePopUp(element){
//   document.removeEventListener("keyup", closeByEsc);
//   element.classList.remove("popup_opened");
// }

// function inputFieldFill(){
//   nameInput.value = nameProfile.textContent;
//   jobInput.value = aboutProfile.textContent;
// }

function handleFormEditProfileSubmit (evt) {
    evt.preventDefault();
    const data = popupEditProfile._getInputValues();
    userInfo.setUserInfo(data);
    popupEditProfile.close()
    popupEditProfile._form.querySelectorAll("input").forEach((element,index) => {
      element.value = data[index];
    })
}

function createCard(cardData){
  const card = new Card(cardData, "#card-template", popupWithImage.open.bind(popupWithImage));
  const cardElement = card.generateCard();
  return cardElement;
}

function addCard(evt){
  evt.preventDefault();
  const data = popupNewPlace._getInputValues()
  const cardData = {
    link: data[1],
    name: data[0]
  };
  const cardElement = createCard(cardData);
  cardSection.addItem(cardElement)
  // cardsContainer.prepend(cardElement);
  popupNewPlace._form.reset();
  formAddNewCard.resetValidation();
  popupNewPlace.close()
  // closePopUp(popupAddNewCard);
}

// function openEditProfilePopup(){
//   formEditProfiile.formList.reset();
//   formEditProfiile.resetValidation()
//   openPopUp(popupProfile);
//   inputFieldFill();
// }

// function closeByEsc(evt){
//   if(evt.key === "Escape"){
//     const openedPopup = document.querySelector('.popup_opened');
//     closePopUp(openedPopup);
//   }
// };

// function handleCardClick(name, link){
//   popupWithImage.open(name, link)
// }

// const renderElements = () => {
//   cardsContainer.innerHTML = "";
//   initialCards.forEach(element => {
//     const cardElement = createCard(element);
//     cardsContainer.append(cardElement);
//   });
// }

editButton.addEventListener("click", popupEditProfile.open.bind(popupEditProfile));

// addButton.addEventListener("click", function(){
//   formAddNewCard.formList.reset();
//   formAddNewCard.resetValidation();
//   openPopUp(popupAddNewCard);
// });

addButton.addEventListener("click", popupNewPlace.open.bind(popupNewPlace))

// closeButtons.forEach(element => {
//   const buttonsPopup = element.closest(".popup");
//   element.addEventListener("click", () => closePopUp(buttonsPopup));
// });



// document.forms["edit-profile"].addEventListener('submit', handleFormEditProfileSubmit);

// document.forms["add-card"].addEventListener('submit', addCard);

// popups.forEach(element => {
//   element.addEventListener("click", function(evt){
//     if(element === evt.target){
//       closePopUp(element);
//     }
//   });
// });

formEditProfiile.enableValidation();

formAddNewCard.enableValidation();

// renderElements();
cardSection.renderItems()

popupEditProfile.setEventListeners()
popupNewPlace.setEventListeners()
popupWithImage.setEventListeners()



