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

// const cardList = document.querySelector(".cards");
// const popupCard = document.querySelector("#edit-picture");
// const popupImage = popupCard.querySelector("#picture-img");
// const popupTitle = popupCard.querySelector("#picture-title");
// const popupCloseButton = popupCard.querySelector(".picture__close");

class Card{
  constructor(data, templateSelector, handleCardClick){
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _like(){
    this._cardLike.classList.toggle("card__like_active");
  }

  _removeCard(){
    this._element.remove();
  }

  // _handleOpenPopup(){
  //   popupImage.src = this.link;
  //   popupImage.alt = this.name;
  //   popupTitle.textContent = this.name;
  //   popupCard.classList.add("popup_opened");
  // }

  // _handleClosePopup(){
  //   popupImage.src = "";
  //   popupImage.alt = "";
  //   popupTitle.textContent = "";
  //   popupCard.classList.remove("popup_opened");
  // }

  _setEventListeners(){
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
    this._cardLike.addEventListener("click", () => {
      this._like();
    });
    this._cardTrash.addEventListener("click", () => {
      this._removeCard();
    });
  }

  _getTemplate(){
    const cardElement = document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(true);
    return cardElement;
  }

  generateCard(){
    this._element = this._getTemplate();
    this._cardTitle = this._element.querySelector(".card__title");
    this._cardImage = this._element.querySelector(".card__image");
    this._cardTrash = this._element.querySelector(".card__trash");
    this._cardLike = this._element.querySelector(".card__like");
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name
    this._cardTitle.textContent = this._name;

    return this._element;
  }
}

export {Card, initialCards}

// export {Card};