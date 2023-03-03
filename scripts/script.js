let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelectorAll(".popup__close");
let formElement = document.querySelectorAll(".popup__container");
let nameInput = formElement[0].querySelectorAll(".form__field")[0];
let jobInput = formElement[0].querySelectorAll(".form__field")[1];
let nameProfile = document.querySelector(".profile__name");
let aboutProfile = document.querySelector(".profile__about");
let popups = document.querySelectorAll(".popup");

let titleInput = formElement[1].querySelectorAll(".form__field")[0];
let imgSrcInput = formElement[1].querySelectorAll(".form__field")[1];
let addButton = document.querySelector(".profile__add-button");

let card = document.querySelectorAll(".card");

let imagePopup = popups[2].querySelector(".picture__image");
let titlePopup = popups[2].querySelector(".picture__title");
let closePicture = document.querySelector(".picture__close");

const cardsContainer = document.querySelector(".cards");
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

function openPopUp(element){
  element.classList.add("popup_opened");
}

function closePopUp(element){
  element.classList.remove("popup_opened");
}

function inputFieldFill(){
  nameInput.value = nameProfile.innerHTML;
  jobInput.value = aboutProfile.innerHTML;
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    nameProfile.textContent = nameValue;
    aboutProfile.textContent = jobValue;
    popups[0].classList.toggle("popup_opened");
}

function fillPopupPicture(element){
  const imgSrcValue = element.querySelector(".card__image").getAttribute("src");
  const titleValue = element.querySelector(".card__title").textContent;
  imagePopup.setAttribute("src", imgSrcValue);
  titlePopup.textContent = titleValue;
}

function addCard(imgSrcValue, titleValue) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__image').setAttribute("src" , imgSrcValue);
  cardElement.querySelector(".card__title").textContent = titleValue;

  cardElement.querySelector(".card__like").addEventListener("click", function(evt){
    evt.target.classList.toggle("card__like_active");
  })

  cardElement.addEventListener("click", function(evt){
    if(evt.target !== cardElement.querySelector(".card__trash")){
      openPopUp(popups[2]);
      fillPopupPicture(cardElement);
    }
  });

  cardElement.querySelector(".card__trash").addEventListener("click", removeCard);
  
  cardsContainer.prepend(cardElement);
}

function removeCard(evt){
  evt.target.parentNode.remove();
}

function createCard(evt){
  evt.preventDefault();
  const imgSrcValue = imgSrcInput.value;
  const titleValue = titleInput.value;
  addCard(imgSrcValue, titleValue);
  popups[1].classList.toggle("popup_opened");
}

initialCards.forEach(function(element){
  addCard(element.link, element.name);
});

card.forEach(function(element){
  element.querySelector(".card__like").addEventListener("click", function(evt){
    evt.target.classList.toggle("card__like_active");
  });
  element.querySelector(".card__trash").addEventListener("click", removeCard);
  element.addEventListener("click", function(evt){
    if(evt.target !== element.querySelector(".card__trash")){
      openPopUp(popups[2]);
      fillPopupPicture(element);
    }
  });
});

editButton.addEventListener("click", function(){
  openPopUp(popups[0]);
  inputFieldFill();
});
addButton.addEventListener("click", function(){
  openPopUp(popups[1]);
});

closePicture.addEventListener("click", function(){
  closePopUp(popups[2]);
})

closeButton.forEach(function(element , key){
  element.addEventListener("click", function(){
    closePopUp(popups[key]);
  })
});



formElement[0].addEventListener('submit', handleFormSubmit);
formElement[1].addEventListener('submit', createCard);


