import Api from "../components/Api.js";
import Card from "../components/Card.js";
import {initialCards} from "../utils/constants.js"
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupDelete from "../components/PopupDelete.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import '../pages/index.css'

const editButton = document.querySelector(".profile__edit-button");

const addButton = document.querySelector(".profile__add-button");

const editAvatarButton = document.querySelector(".profile__edit-avatar")

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

const validatorEditAvatar = new FormValidator(config, ".editAvatar")

const popupWithImage = new PopupWithImage("#edit-picture");

const popupEditProfile = new PopupWithForm("#edit-profile" , handleFormEditProfileSubmit);

const popupNewPlace = new PopupWithForm("#edit-place", addCard);

const popupDelete = new PopupDelete("#delete-picture", {}, deleteCard);

const popupEditAvatar = new PopupWithForm("#edit-avatar", editAvatar);

const userInfo = new UserInfo({nameSelector:".profile__name", aboutSelector:".profile__about", avatarSelector: ".profile__avatar"})

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '56bd9a91-126f-47c1-94b3-76e6f2e1aa35',
    'Content-Type': 'application/json'
  }
}); 


const cardSection = new Section({items: [], renderer: createCard}, ".cards")

function handleFormEditProfileSubmit (data, evt) {
    evt.preventDefault();
    popupEditProfile._form.querySelector(".form__button-submit").textContent = "Сохранение...";
    userInfo.setUserInfo(data);
    api.setUserInfoOnServer(userInfo.getUserInfo())
      .then(popupEditProfile.close())
      .catch(err => console.log(`Ошибка ${err}`))
      .finally(() => popupEditProfile._form.querySelector(".form__button-submit").textContent = "Сохранить");
    
}

function editAvatar(avatar, evt){
  evt.preventDefault();
  userInfo.setUserAvatar(avatar[0])
  popupEditAvatar._form.querySelector(".form__button-submit").textContent = "Сохранение..."
  api.setUserAvatarOnServer(userInfo.getUserAvatar())
    .then(popupEditAvatar.close())
    .catch(err => console.log(`Ошибка ${err}`))
    .finally(() => popupEditAvatar._form.querySelector(".form__button-submit").textContent = "Сохранить")
}

function createCard(cardData){
  const card = new Card(cardData, "#card-template", popupWithImage.open.bind(popupWithImage), clarifyDeletion, api.toggleLike.bind(api));
  const cardElement = card.generateCard();
  return cardElement;
}

function addCard(data, evt){
  evt.preventDefault();
  popupNewPlace._form.querySelector(".form__button-submit").textContent = "Создание..."
  const cardData = {
    link: data[1],
    name: data[0]
  };
  api.addNewCard(cardData)
    .then(res => res.json())
    .then(data => {
      const cardElement = createCard(data);
      cardSection.addItem(cardElement)
      popupNewPlace.close()
      validatorAddCard.resetValidation();
    })
    .catch(err => console.log(`Ошибка ${err}`))
    .finally(() => popupNewPlace._form.querySelector(".form__button-submit").textContent = "Создать")
    
}

function deleteCard(card, evt){
  evt.preventDefault();
  api.deleteCard(card._id)
  .catch(err => console.log(`Ошибка ${err}`));
  card._removeCard();
  popupDelete.close();
}

function clarifyDeletion(card){
  popupDelete.open();
  popupDelete.setCard(card);
}

editButton.addEventListener("click", () => popupEditProfile.open(userInfo.getUserInfo()));

addButton.addEventListener("click", popupNewPlace.open.bind(popupNewPlace))

editAvatarButton.addEventListener("click", popupEditAvatar.open.bind(popupEditAvatar));

validatorEditProfile.enableValidation();

validatorAddCard.enableValidation();

validatorEditAvatar.enableValidation();

popupEditProfile.setEventListeners()

popupNewPlace.setEventListeners()

popupWithImage.setEventListeners()

popupDelete.setEventListeners();

popupEditAvatar.setEventListeners()

api.getInitialCards()
  .then(res => {
    cardSection.setItems(res)
    cardSection.renderItems()
  })
  .catch(err => console.log(`Ошибка ${err}`))

api.getUserInfoFromServer()
  .then(res => {
    userInfo.setUserAvatar(res.avatar)
    userInfo.setUserInfo([res.name, res.about])
  })
  .catch(err => console.log(`Ошибка ${err}`))
