let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close");

editButton.addEventListener("click", openPopUp);
editButton.addEventListener("click", inputFieldFill);
closeButton.addEventListener("click", openPopUp);

function openPopUp(){
  document.querySelector(".popup").classList.toggle("popup_opened");
}

// Находим форму в DOM
let formElement = document.querySelector(".popup__container");
let nameInput = document.querySelectorAll(".popup__field")[0];
let jobInput = document.querySelectorAll(".popup__field")[1];

let nameProfile = document.querySelector(".profile__name");
let aboutProfile = document.querySelector(".profile__about");

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
    document.querySelector(".popup").classList.toggle("popup_opened");
}

formElement.addEventListener('submit', handleFormSubmit);