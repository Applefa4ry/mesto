import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
  constructor(selectorPopup, callback){
    super(selectorPopup);
    this._callback = callback;
    this._form = this._popup.querySelector(".form");
    this._inputList = this._form.querySelectorAll('.form__field');
  }

  close = () => {
    super.close();
    this._form.reset();
  }

  open = (data) => {
    super.open();
    // this._form.querySelectorAll("input").forEach((element,index) => {
    //   if(data[index] !== undefined) element.value =  data[index];
    // })
    // this._formInput = this._form.querySelectorAll("input");
    // if(data.name !== undefined) this._formInput[0].value = data.name;
    // if(data.about !== undefined) this._formInput[1].value = data.about;
    if(data){
      this._inputList.forEach(input => {
        input.value = data[input.name]
      });
    }
  }

  _getInputValues() {
    // достаём все элементы полей
    this._inputList = this._form.querySelectorAll('.form__field');
    // создаём пустой объект
    this._formValues = {};
  
    // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
  
    // возвращаем объект значений
    return this._formValues;
  }

  setEventListeners(){
    super.setEventListeners()
    this._form.addEventListener("submit", (evt) => this._callback(this._getInputValues(), evt))
  }
}