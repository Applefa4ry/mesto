// const showInputError = (formElement, inputElement, errorMessage, form) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add(form.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(form.errorClass);
// };

// const hideInputError = (formElement, inputElement, form) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove(form.inputErrorClass);
//   errorElement.classList.remove(form.errorClass);
//   errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, inputElement, form) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, form);
//   } else {
//     hideInputError(formElement, inputElement, form);
//   }
// };

// const setEventListeners = (formElement, form) => {
//   const inputList = Array.from(formElement.querySelectorAll(form.inputSelector));
//   const buttonElement = formElement.querySelector(form.submitButtonSelector);
//   toggleButtonState(inputList, buttonElement, form);
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement, form);
//       toggleButtonState(inputList, buttonElement, form);
//     });
//   });
// };

// const enableValidation = (form) => {
//   const formList = Array.from(document.querySelectorAll(form.formSelector));
//   formList.forEach((formElement) => {
//     // formElement.addEventListener('submit', function (evt) {
//     //   evt.preventDefault();
//     // });
//     setEventListeners(formElement, form);
//     // const fieldsetList = Array.from(formElement.querySelectorAll(".form__set"));
//     // fieldsetList.forEach(formElement => setEventListeners(formElement))
//   });
// };

// function hasInvalidInput(inputList){
//   return inputList.some(inputElement => {return !inputElement.validity.valid});
// }

// function toggleButtonState(inputList, buttonElement, form){
//   if(hasInvalidInput(inputList)){
//     buttonElement.classList.add(form.inactiveButtonClass);
//     buttonElement.setAttribute("disabled", "disabled");
//   }
//   else{
//     buttonElement.classList.remove(form.inactiveButtonClass);
//     buttonElement.removeAttribute("disabled");
//   }
// }
// enableValidation({
//   formSelector: '.form',
//   inputSelector: '.form__field',
//   submitButtonSelector: '.form__button-submit',
//   inactiveButtonClass: 'form__button-submit_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });

class FormValidator{
  constructor(data, selectedForm){
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._selectedForm = selectedForm;
  }

  _showInputError = (inputElement, errorMessage) => {
    // const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };
  
  _hideInputError = (inputElement) => {
    // const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _setEventListeners = () => {
    this._inputList = Array.from(this.formList.querySelectorAll(this._inputSelector));
    this._buttonElement = this.formList.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  // _hideInput(inputElement){
  //   inputElement.value = "";
  // }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      // this._hideInput(inputElement);
      this._hideInputError(inputElement)
    });
    this._toggleButtonState();
  }


  enableValidation = () => {
    this.formList = document.querySelector(this._selectedForm);
    // this.formList = document.querySelector(`[name="${this._formSelector}"]`);
    this._setEventListeners();
  };


  _hasInvalidInput = () =>{
    return this._inputList.some(inputElement => {return !inputElement.validity.valid});
  }

  _toggleButtonState = () =>{
    if(this._hasInvalidInput(this._inputList)){
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", "disabled");
    }
    else{
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  }




}

export {FormValidator}
