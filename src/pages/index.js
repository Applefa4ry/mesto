import Card from "../components/Card.js";
import {initialCards} from "../components/constants.js"
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import '../pages/index.css'


const editButton = document.querySelector(".profile__edit-button");

const addButton = document.querySelector(".profile__add-button");

const config = 
  { 
    formSelector: '.form',
    inputSelector: '.form__field',
    submitButtonSelector: '.form__button-submit',
    inactiveButtonClass: 'form__button-submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }

const validatorEditProfile = new FormValidator(config, ".editProfile");

const validatorAddCard = new FormValidator(config, ".addCard");

const popupWithImage = new PopupWithImage("#edit-picture");

const popupEditProfile = new PopupWithForm("#edit-profile" , handleFormEditProfileSubmit);

const popupNewPlace = new PopupWithForm("#edit-place", addCard);

const userInfo = new UserInfo({nameSelector:".profile__name", aboutSelector:".profile__about"})

const cardSection = new Section({items: initialCards, renderer: createCard}, ".cards")

function handleFormEditProfileSubmit (data, evt) {
    evt.preventDefault();
    userInfo.setUserInfo(data);
    popupEditProfile.close()
}

function createCard(cardData){
  const card = new Card(cardData, "#card-template", popupWithImage.open.bind(popupWithImage));
  const cardElement = card.generateCard();
  return cardElement;
}

function addCard(data, evt){
  evt.preventDefault();
  const cardData = {
    link: data[1],
    name: data[0]
  };
  const cardElement = createCard(cardData);
  cardSection.addItem(cardElement)
  popupNewPlace.close()
  validatorAddCard.resetValidation();
}

editButton.addEventListener("click", () => popupEditProfile.open(userInfo.getUserInfo()));

addButton.addEventListener("click", popupNewPlace.open.bind(popupNewPlace))

validatorEditProfile.enableValidation();

validatorAddCard.enableValidation();

cardSection.renderItems()

popupEditProfile.setEventListeners()

popupNewPlace.setEventListeners()

popupWithImage.setEventListeners()



