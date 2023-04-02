export default class UserInfo {
  constructor({nameSelector, aboutSelector}){
    this._name = document.querySelector(nameSelector)
    this._about = document.querySelector(aboutSelector)
  }

  getUserInfo(){
    if(this._name.textContent !== "" && this._about !== ""){
      return {0: this._name.textContent, 1: this._about.textContent}
    }
  }

  setUserInfo([name, about]){
    this._name.textContent = name
    this._about.textContent = about
  }
}