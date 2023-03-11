const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardList = document.querySelector(".cards");
const popupCard = document.querySelector("#edit-picture");
const popupImage = popupCard.querySelector("#picture-img");
const popupTitle = popupCard.querySelector("#picture-title");
const popupCloseButton = popupCard.querySelector(".picture__close");

class Card{
  constructor(data, templateSelector){
    this.name = data.name;
    this.link = data.link;
    this.templateSelector = templateSelector;
  }

  _like(){
    this._element.querySelector(".card__like").classList.toggle("card__like_active");
  }

  _removeCard(){
    this._element.remove();
  }

  _handleOpenPopup(){
    popupImage.src = this.link;
    popupImage.alt = this.name;
    popupTitle.textContent = this.name;
    popupCard.classList.add("popup_opened");
  }

  _handleClosePopup(){
    popupImage.src = "";
    popupImage.alt = "";
    popupTitle.textContent = "";
    popupCard.classList.remove("popup_opened");
  }

  _setEventListeners(){
    this._element.querySelector(".card__image").addEventListener("click", () => {
      this._handleOpenPopup();
    });
    popupCloseButton.addEventListener("click", () => {
      this._handleClosePopup();
    });
    this._element.querySelector(".card__like").addEventListener("click", () => {
      this._like();
    });
    this._element.querySelector(".card__trash").addEventListener("click", () => {
      this._removeCard();
    });
  }

  _getTemplate(){
    const cardElement = document.querySelector(this.templateSelector).content.querySelector(".card").cloneNode(true);
    return cardElement;
  }

  generateCard(){
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".card__image").src = this.link;
    this._element.querySelector(".card__title").textContent = this.name;

    return this._element;
  }

}

const renderElements = () => {
  cardList.innerHTML = "";
  initialCards.forEach(element => {
    const card = new Card(element, "#card-template");
    const cardElement = card.generateCard();
    cardList.append(cardElement);
  });
}

renderElements();

export {Card}

// export {Card};