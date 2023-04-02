export default class FormValidator{
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
    const errorElement = document.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };
  
  _hideInputError = (inputElement) => {
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

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
    this._toggleButtonState();
  }


  enableValidation = () => {
    this.formList = document.querySelector(this._selectedForm);
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


