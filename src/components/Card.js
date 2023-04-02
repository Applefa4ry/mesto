export default class Card{
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

