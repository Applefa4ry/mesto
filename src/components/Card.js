export default class Card{
  constructor(data, templateSelector, handleCardClick, handleBusketClick, handleLikeClick){
    this._name = data.name;
    this._link = data.link;
    if(data.owner){
      this._idOwner = data.owner._id;
    }
    if(data._id){
      this._id = data._id;
    }
    if(data.likes){
      this._countLikes = data.likes.length;
    }
    this._likesArray = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleBusketClick = handleBusketClick;
    this._handleLikeClick = handleLikeClick;
    // this._ownerLike = data.likes.some(element => {
    //   element._id === "6d139468d234cc10f1583d43"
    // })
  }

  updateDataCard(data){
    this._name = data.name;
    this._link = data.link;
    if(data.owner){
      this._idOwner = data.owner._id;
    }
    if(data._id){
      this._id = data._id;
    }
    if(data.likes){
      this._countLikes = data.likes.length;
    }
    this._likesArray = data.likes;
  }

  _checkOwnerLike(){
    if(this._likesArray){
      for(let i = 0; i < this._likesArray.length;++i){
        if(this._likesArray[i]._id === "6d139468d234cc10f1583d43"){
          return true
        }
      }
    }
    return false
  }

  getIdCard(){
    return this._id;
  }

  _like(){
    this._likeStatus = this._cardLike.classList.contains("card__like_active")
    this._handleLikeClick(this._likeStatus, this._id)
    if(!this._ownerLike && !this._likeStatus){
      // this._counterLikes.textContent = ++this._countLikes;
      ++this._counterLikes.textContent
    }
    else{
      --this._counterLikes.textContent
      // this._counterLikes.textContent = --this._countLikes;
    }
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
      this._handleBusketClick(this)
      // this._removeCard();
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
    this._counterLikes = this._element.querySelector(".card__like-counter");
    if(this._countLikes){
      this._counterLikes.textContent = this._countLikes;
    }
    else{
      this._counterLikes.textContent = 0;
    }
    if(this._idOwner){
      if(this._idOwner !== "6d139468d234cc10f1583d43"){
        this._cardTrash.remove()
      }
    }
    this._cardLike = this._element.querySelector(".card__like");
    if(this._checkOwnerLike()){
      this._cardLike.classList.add("card__like_active");
    }
    this._setEventListeners();
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name
    this._cardTitle.textContent = this._name;
    return this._element;
  }
}

