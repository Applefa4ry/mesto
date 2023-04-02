export default class UserInfo {
  constructor({nameSelector, aboutSelector}){
    this._name = document.querySelector(nameSelector)
    this._about = document.querySelector(aboutSelector)
  }

  getUserInfo(){
    if(this._name.textContent !== "" && this._about !== ""){
      return [this._name.textContent, this._about.textContent]
    }
    return 0
  }

  setUserInfo([name, about]){
    this._name.textContent = name
    this._about.textContent = about
  }
}