export default class Api {
  constructor(options) {
    // тело конструктора
    this._baseUrl = options.baseUrl
    this._headers = options.headers
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, 
      {  
        headers: {
        authorization: '56bd9a91-126f-47c1-94b3-76e6f2e1aa35',
        'Content-Type': 'application/json'
      }}
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  getUserInfoFromServer(){
    return fetch(`${this._baseUrl}/users/me`,{
      headers: {
        authorization: '56bd9a91-126f-47c1-94b3-76e6f2e1aa35',
        'Content-Type': 'application/json'
    }}
  )
  .then(res => {
    if (res.ok) {
      return res.json();
    }

    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  });
  }

  setUserAvatarOnServer(avatar){
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: '56bd9a91-126f-47c1-94b3-76e6f2e1aa35',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
    .then(res => {
      if(res.ok){
        return res;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  setUserInfoOnServer(data){
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: '56bd9a91-126f-47c1-94b3-76e6f2e1aa35',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
    .then(res => {
      if(res.ok){
        return res;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }

  addNewCard(data){
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: '56bd9a91-126f-47c1-94b3-76e6f2e1aa35',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(res => {
      if(res.ok){
        return res;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })    
  }

  deleteCard(id){
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: '56bd9a91-126f-47c1-94b3-76e6f2e1aa35',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.ok){
        return res;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })   
  }

  _deleteLike(id){
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: '56bd9a91-126f-47c1-94b3-76e6f2e1aa35',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.ok){
        return res;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })  
  }

  _addLike(id){
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: '56bd9a91-126f-47c1-94b3-76e6f2e1aa35',
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.ok){
        return res;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })  
  }

  toggleLike(status, id){
    if(status){
      this._deleteLike(id);
    }
    else{
      this._addLike(id);
    }
  }
}