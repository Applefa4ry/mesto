import {Card, initialCards} from "./Card.js";
import {FormValidator} from "./FormValidator.js";


const editButton = document.querySelector(".profile__edit-button");

const closeButtons = document.querySelectorAll(".popup__close");

// const formElements = document.querySelectorAll(".popup__container");

const popupProfile = document.querySelector("#edit-profile");

const popupAddNewCard = document.querySelector("#edit-place");

const popupFullIImage = document.querySelector("#edit-picture");

const nameInput = popupProfile.querySelector("#edit-name");

const jobInput = popupProfile.querySelector("#edit-job");

const nameProfile = document.querySelector(".profile__name");

const aboutProfile = document.querySelector(".profile__about");

const popups = document.querySelectorAll(".popup");

const titlePlace = popupAddNewCard.querySelector("#edit-title");

const imgSrcPlace = popupAddNewCard.querySelector("#edit-url");

const addButton = document.querySelector(".profile__add-button");

// const card = document.querySelectorAll(".card");

const imagePicture = popupFullIImage.querySelector("#picture-img");

const titlePicture = popupFullIImage.querySelector("#picture-title");

// const closePicture = document.querySelector(".picture__close");

const cardsContainer = document.querySelector(".cards");

// const formValidators = {
  
// }

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

// const formEditProfiile = new FormValidator('[name="edit-profile"]',{

// })

// const formAddNewCard = new FormValidator('[name="add-card"]',{
//   formSelector: '.form',
//   inputSelector: '.form__field',
//   submitButtonSelector: '.form__button-submit',
//   inactiveButtonClass: 'form__button-submit_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// })

// const cardTemplate = document.querySelector('#card-template').content;

function openPopUp(element){
  document.addEventListener("keyup", closeByEsc);
  element.classList.add("popup_opened");
}

function closePopUp(element){
  document.removeEventListener("keyup", closeByEsc);
  // formValidators[element.getAttribute("name")].resetValidation();
  // formEditProfiile.resetValidation();
  // formAddNewCard.resetValidation();
  // evt.target.reset();
  element.classList.remove("popup_opened");
}

function inputFieldFill(){
  nameInput.value = nameProfile.textContent;
  jobInput.value = aboutProfile.textContent;
}

function handleFormEditProfileSubmit (evt) {
    evt.preventDefault();
    const nameValue = nameInput.value;
    const jobValue = jobInput.value;
    nameProfile.textContent = nameValue;
    aboutProfile.textContent = jobValue;
    // formEditProfiile.resetValidation();
    evt.target.reset();
    closePopUp(popupProfile);
}

// function fillPopupPicture(cardData){
//   // const imgSrcValue = element.querySelector(".card__image").getAttribute("src");
//   // const titleValue = element.querySelector(".card__title").textContent;
//   imagePicture.setAttribute("src", cardData.link);
//   imagePicture.setAttribute("alt", cardData.name);
//   titlePicture.textContent = cardData.name;
// }

// function createCard(cardData) {
  
//   const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

//   const cardImage = cardElement.querySelector('.card__image');

//   cardImage.setAttribute("src" , cardData.link);
//   cardImage.setAttribute("alt" , cardData.name);
//   cardElement.querySelector(".card__title").textContent = cardData.name;

//   cardElement.querySelector(".card__like").addEventListener("click", function(evt){
//     evt.target.classList.toggle("card__like_active");
//   })

//   cardImage.addEventListener("click", function(){
//       openPopUp(popupFullIImage);
//       fillPopupPicture(cardData);
//   });

//   cardElement.querySelector(".card__trash").addEventListener("click", removeCard);
  
//   return cardElement;
// }

function createCard(cardData){
  const card = new Card(cardData, "#card-template",handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

function addCard(evt){
  evt.preventDefault();
  const cardData = {
    link: imgSrcPlace.value,
    name: titlePlace.value
  };
  
  const cardElement = createCard(cardData);

  cardsContainer.prepend(cardElement);
  evt.target.reset();
  formAddNewCard.resetValidation();
  closePopUp(popupAddNewCard);
 
}

// function addCard(evt){
//   evt.preventDefault();
//   const cardData = {
//     link: imgSrcPlace.value,
//     name: titlePlace.value
//   };
//   // const imgSrcValue = imgSrcPlace.value;
//   // const titleValue = titlePlace.value;
//   renderCard(cardsContainer,createCard(cardData));
  
  
//   evt.submitter.classList.add("form__button-submit_disabled");
//   evt.submitter.disabled = true;
//   closePopUp(popupAddNewCard);
//   evt.target.reset();
// }

// function renderCard(container, card){
//   container.prepend(card);
// };

// function removeCard(evt){
//   evt.target.closest(".card").remove();
// }

function openEditProfilePopup(){
  formEditProfiile.formList.reset();
  formEditProfiile.resetValidation()
  openPopUp(popupProfile);
  inputFieldFill();
}

function closeByEsc(evt){
  if(evt.key === "Escape"){
    const openedPopup = document.querySelector('.popup_opened');
    closePopUp(openedPopup);
  }
};

function handleCardClick(name, link){
  // formAddNewCard.resetValidation();
  imagePicture.src = link;
  imagePicture.alt = name;
  titlePicture.textContent = name;
  openPopUp(popupFullIImage);
}

// function createCard(item) {
//   const card = new Card(item, "#card-template", handleCardClick);
//   const cardElement = card.generateCard();
//   return cardElement
// }

const renderElements = () => {
  cardsContainer.innerHTML = "";
  initialCards.forEach(element => {
    const cardElement = createCard(element);
    cardsContainer.append(cardElement);
  });
}

// const enableValidation = (config) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector))
//   formList.forEach((formElement) => {
//     const formName = formElement.getAttribute('name')
//     const validator = new FormValidator(formName, config)
// // получаем данные из атрибута `name` у формы
//    // вот тут в объект записываем под именем формы
    
//     formValidators[formName] = validator;
//     validator.enableValidation();
//   });
// };

// initialCards.forEach(function(element){
//   renderCard(cardsContainer, createCard(element));
// });

editButton.addEventListener("click", openEditProfilePopup);

addButton.addEventListener("click", function(){
  formAddNewCard.formList.reset();
  formAddNewCard.resetValidation();
  openPopUp(popupAddNewCard);
});

// closePicture.addEventListener("click", function(){
//   closePopUp(popupFullIImage);
// })

closeButtons.forEach(element => {
  const buttonsPopup = element.closest(".popup");
  element.addEventListener("click", () => closePopUp(buttonsPopup));
});

document.forms["edit-profile"].addEventListener('submit', handleFormEditProfileSubmit);
document.forms["add-card"].addEventListener('submit', addCard);

//ПР6

// document.addEventListener("keyup", function(evt){
//   if(evt.key === "Escape"){
//     popups.forEach((element, index) => {
//       if(element.classList.contains("popup_opened")){
//         closePopUp(popups[index]);
//       }
//     });
//     console.log(evt.key);
//   };
// });

popups.forEach(element => {
  element.addEventListener("click", function(evt){
    if(element === evt.target){
      closePopUp(element);
    }
  });
});

formEditProfiile.enableValidation();
formAddNewCard.enableValidation();

renderElements();


