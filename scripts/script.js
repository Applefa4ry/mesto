const editButton = document.querySelector(".profile__edit-button");

const closeButtons = document.querySelectorAll(".popup__close");

const formElement = document.querySelectorAll(".popup__container");

const editProfile = document.querySelector("#edit-profile");

const editPlace = document.querySelector("#edit-place");

const editPicture = document.querySelector("#edit-picture");

const nameInput = editProfile.querySelector("#edit-name");

const jobInput = editProfile.querySelector("#edit-job");

const nameProfile = document.querySelector(".profile__name");

const aboutProfile = document.querySelector(".profile__about");

const popups = document.querySelectorAll(".popup");

const titlePlace = editPlace.querySelector("#edit-title");

const imgSrcPlace = editPlace.querySelector("#edit-url");

const addButton = document.querySelector(".profile__add-button");

const card = document.querySelectorAll(".card");

const imagePicture = editPicture.querySelector("#picture-img");

const titlePicture = editPicture.querySelector("#picture-title");

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
    closePopUp(editProfile);
}

function fillPopupPicture(element){
  const imgSrcValue = element.querySelector(".card__image").getAttribute("src");
  const titleValue = element.querySelector(".card__title").textContent;
  imagePicture.setAttribute("src", imgSrcValue);
  titlePicture.textContent = titleValue;
}

function createCard(cardData) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__image').setAttribute("src" , cardData.link);
  cardElement.querySelector(".card__title").textContent = cardData.name;

  cardElement.querySelector(".card__like").addEventListener("click", function(evt){
    evt.target.classList.toggle("card__like_active");
  })

  cardElement.querySelector(".card__image").addEventListener("click", function(){
      openPopUp(editPicture);
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
  renderCard(createCard(cardData));
  
  closePopUp(editPlace);
  evt.target.reset();
}

function renderCard(card){
  cardsContainer.prepend(card);
};

function removeCard(evt){
  evt.target.parentNode.remove();
}

function openEditProfilePopup(){
  openPopUp(editProfile);
  inputFieldFill();
}

initialCards.forEach(function(element){
  renderCard(createCard(element));
});

editButton.addEventListener("click", openEditProfilePopup);

addButton.addEventListener("click", function(){
  openPopUp(editPlace);
});

closePicture.addEventListener("click", function(){
  closePopUp(editPicture);
})

closeButtons.forEach(function(element , key){
  element.addEventListener("click", function(){
    closePopUp(popups[key]);
  })
});

formElement[0].addEventListener('submit', handleFormEditProfileSubmit);
formElement[1].addEventListener('submit', addCard);

//ПР6

document.addEventListener("keyup", function(evt){
  if(evt.key === "Escape"){
    popups.forEach(element => closePopUp(element));
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


