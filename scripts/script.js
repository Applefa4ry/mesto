const editButton = document.querySelector(".profile__edit-button");

const closeButtons = document.querySelectorAll(".popup__close");

const formElements = document.querySelectorAll(".popup__container");

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

const closePicture = document.querySelector(".picture__close");

const cardsContainer = document.querySelector(".cards");

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

function handleFormEditProfileSubmit (evt) {
    evt.preventDefault();
    const nameValue = nameInput.value;
    const jobValue = jobInput.value;
    nameProfile.textContent = nameValue;
    aboutProfile.textContent = jobValue;
    closePopUp(popupProfile);
}

function fillPopupPicture(element){
  const imgSrcValue = element.querySelector(".card__image").getAttribute("src");
  const titleValue = element.querySelector(".card__title").textContent;
  imagePicture.setAttribute("src", imgSrcValue);
  imagePicture.setAttribute("alt", titleValue);
  titlePicture.textContent = titleValue;
}

function createCard(cardData) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__image').setAttribute("src" , cardData.link);
  cardElement.querySelector('.card__image').setAttribute("alt" , cardData.name);
  cardElement.querySelector(".card__title").textContent = cardData.name;

  cardElement.querySelector(".card__like").addEventListener("click", function(evt){
    evt.target.classList.toggle("card__like_active");
  })

  cardElement.querySelector(".card__image").addEventListener("click", function(){
      openPopUp(popupFullIImage);
      fillPopupPicture(cardElement);
  });

  cardElement.querySelector(".card__trash").addEventListener("click", removeCard);
  
  return cardElement;
}

function addCard(evt){
  evt.preventDefault();
  const cardData = {
    link: imgSrcPlace.value,
    name: titlePlace.value
  };
  // const imgSrcValue = imgSrcPlace.value;
  // const titleValue = titlePlace.value;
  renderCard(cardsContainer,createCard(cardData));
  
  closePopUp(popupAddNewCard);
  evt.target.reset();
}

function renderCard(container, card){
  container.prepend(card);
};

function removeCard(evt){
  evt.target.parentNode.remove();
}

function openEditProfilePopup(){
  openPopUp(popupProfile);
  inputFieldFill();
}

initialCards.forEach(function(element){
  renderCard(cardsContainer, createCard(element));
});

editButton.addEventListener("click", openEditProfilePopup);

addButton.addEventListener("click", function(){
  openPopUp(popupAddNewCard);
});

closePicture.addEventListener("click", function(){
  closePopUp(popupFullIImage);
})

closeButtons.forEach(function(element , key){
  element.addEventListener("click", function(evt){
    // closePopUp(popups[key]);
    closePopUp(evt.target.parentNode);
  })
});

formElements[0].addEventListener('submit', handleFormEditProfileSubmit);
formElements[1].addEventListener('submit', addCard);

//ПР6

document.addEventListener("keyup", function(evt){
  if(evt.key === "Escape"){
    popups.forEach((element, index) => {
      if(element.classList.contains("popup_opened")){
        closePopUp(popups[index]);
      }
    });
    console.log(evt.key);
  };
});

popups.forEach(element => {
  element.addEventListener("click", function(evt){
    if(element.isEqualNode(evt.target)){
      closePopUp(element);
    }
  });
});


