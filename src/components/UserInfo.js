export default class UserInfo {
  constructor({nameSelector, aboutSelector, avatarSelector}){
    this._name = document.querySelector(nameSelector)
    this._about = document.querySelector(aboutSelector)
    this._avatar = document.querySelector(avatarSelector)
  }

  getUserInfo(){
    // if(this._name.textContent !== "" && this._about !== "" && this._avatar !== ""){
      return {name: this._name.textContent, about: this._about.textContent, avatar: this._avatar.src}
    // }
  }

  // getUserAvatar(){
  //   if(this._avatar.src !== ""){
  //     return this._avatar.src
  //   }
  // }

  setUserAvatar(avatar){
    this._avatar.src = avatar
  }

  setUserInfo({name, about}){
    this._name.textContent = name
    this._about.textContent = about
  }
}