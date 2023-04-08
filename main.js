(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var r,n;return r=t,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:"56bd9a91-126f-47c1-94b3-76e6f2e1aa35","Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getUserInfoFromServer",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:"56bd9a91-126f-47c1-94b3-76e6f2e1aa35","Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"setUserAvatarOnServer",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:"56bd9a91-126f-47c1-94b3-76e6f2e1aa35","Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then((function(t){return t.ok?t:Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"setUserInfoOnServer",value:function(t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:"56bd9a91-126f-47c1-94b3-76e6f2e1aa35","Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return t.ok?t:Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"addNewCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:"56bd9a91-126f-47c1-94b3-76e6f2e1aa35","Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return t.ok?t:Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:{authorization:"56bd9a91-126f-47c1-94b3-76e6f2e1aa35","Content-Type":"application/json"}}).then((function(t){return t.ok?t:Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"_deleteLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:"56bd9a91-126f-47c1-94b3-76e6f2e1aa35","Content-Type":"application/json"}}).then((function(t){return t.ok?t:Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"_addLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:"56bd9a91-126f-47c1-94b3-76e6f2e1aa35","Content-Type":"application/json"}}).then((function(t){return t.ok?t:Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"toggleLike",value:function(t,e){t?this._deleteLike(e):this._addLike(e)}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r,n,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,e.owner&&(this._idOwner=e.owner._id),e._id&&(this._id=e._id),e.likes&&(this._countLikes=e.likes.length),this._likesArray=e.likes,this._templateSelector=r,this._handleCardClick=n,this._handleBusketClick=o,this._handleLikeClick=i}var e,r;return e=t,(r=[{key:"updateDataCard",value:function(t){this._name=t.name,this._link=t.link,t.owner&&(this._idOwner=t.owner._id),t._id&&(this._id=t._id),t.likes&&(this._countLikes=t.likes.length),this._likesArray=t.likes}},{key:"_checkOwnerLike",value:function(){if(this._likesArray)for(var t=0;t<this._likesArray.length;++t)if("6d139468d234cc10f1583d43"===this._likesArray[t]._id)return!0;return!1}},{key:"getIdCard",value:function(){return this._id}},{key:"_like",value:function(){this._likeStatus=this._cardLike.classList.contains("card__like_active"),this._handleLikeClick(this._likeStatus,this._id),this._ownerLike||this._likeStatus?--this._counterLikes.textContent:++this._counterLikes.textContent,this._cardLike.classList.toggle("card__like_active")}},{key:"_removeCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)})),this._cardLike.addEventListener("click",(function(){t._like()})),this._cardTrash.addEventListener("click",(function(){t._handleBusketClick(t)}))}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardTitle=this._element.querySelector(".card__title"),this._cardImage=this._element.querySelector(".card__image"),this._cardTrash=this._element.querySelector(".card__trash"),this._counterLikes=this._element.querySelector(".card__like-counter"),this._countLikes?this._counterLikes.textContent=this._countLikes:this._counterLikes.textContent=0,this._idOwner&&"6d139468d234cc10f1583d43"!==this._idOwner&&this._cardTrash.remove(),this._cardLike=this._element.querySelector(".card__like"),this._checkOwnerLike()&&this._cardLike.classList.add("card__like_active"),this._setEventListeners(),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name,this._element}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}function u(t,e,r){return(e=l(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}var s=function(){function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"_showInputError",(function(t,e){var r=document.querySelector(".".concat(t.id,"-error"));t.classList.add(n._inputErrorClass),r.textContent=e,r.classList.add(n._errorClass)})),u(this,"_hideInputError",(function(t){var e=document.querySelector(".".concat(t.id,"-error"));t.classList.remove(n._inputErrorClass),e.classList.remove(n._errorClass),e.textContent=""})),u(this,"_checkInputValidity",(function(t){t.validity.valid?n._hideInputError(t):n._showInputError(t,t.validationMessage)})),u(this,"_setEventListeners",(function(){n._inputList=Array.from(n.formList.querySelectorAll(n._inputSelector)),n._buttonElement=n.formList.querySelector(n._submitButtonSelector),n._toggleButtonState(),n._inputList.forEach((function(t){t.addEventListener("input",(function(){n._checkInputValidity(t),n._toggleButtonState()}))}))})),u(this,"enableValidation",(function(){n.formList=document.querySelector(n._selectedForm),n._setEventListeners()})),u(this,"_hasInvalidInput",(function(){return n._inputList.some((function(t){return!t.validity.valid}))})),u(this,"_toggleButtonState",(function(){n._hasInvalidInput(n._inputList)?(n._buttonElement.classList.add(n._inactiveButtonClass),n._buttonElement.setAttribute("disabled","disabled")):(n._buttonElement.classList.remove(n._inactiveButtonClass),n._buttonElement.removeAttribute("disabled"))})),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._selectedForm=r}var e,r;return e=t,(r=[{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}}])&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,y(n.key),n)}}function y(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(e)?e:String(e)}var d=function(){function t(e){var r,n,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=function(t){"Escape"===t.key&&i.close()},(n=y(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(e)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popup.querySelector(".popup__close").addEventListener("click",this.close.bind(this));var t=this.close.bind(this);this._popup.addEventListener("click",(function(e){this===e.target&&t()}))}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,k(n.key),n)}}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},_.apply(this,arguments)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}function g(t,e,r){return(e=k(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function k(t){var e=function(t,e){if("object"!==b(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===b(e)?e:String(e)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(o){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return v(t)}(this,t)});function a(t,e){var r,n,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),g(v(o=i.call(this,t)),"close",(function(){_((r=v(o),S(a.prototype)),"close",r).call(r),o._form.reset()})),g(v(o),"open",(function(t){_((n=v(o),S(a.prototype)),"open",n).call(n),o._formInput=o._form.querySelectorAll("input"),void 0!==t.name&&(o._formInput[0].value=t.name),void 0!==t.about&&(o._formInput[1].value=t.about)})),o._callback=e,o._form=o._popup.querySelector(".form"),o}return e=a,(r=[{key:"_getInputValues",value:function(){return this._dataField=Array.from(this._form.querySelectorAll("input")).map((function(t){return t.value})),this._dataField}},{key:"setEventListeners",value:function(){var t=this;_(S(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){return t._callback(t._getInputValues(),e)}))}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(d);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},E.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(n);if(o){var r=P(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._image=e._popup.querySelector("#picture-img"),e._title=e._popup.querySelector("#picture-title"),e}return e=a,(r=[{key:"open",value:function(t,e){E(P(a.prototype),"open",this).call(this),this._image.src=e,this._image.alt=t,this._title.textContent=t}}])&&O(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(d);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function I(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},q.apply(this,arguments)}function U(t,e){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},U(t,e)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(n);if(o){var r=A(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e,r){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._card=e,n._handleDelete=r,n._form=n._popup.querySelector(".form"),n}return e=a,(r=[{key:"setCard",value:function(t){this._card=t}},{key:"setEventListeners",value:function(){var t=this;q(A(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){return t._handleDelete(t._card,e)}))}}])&&I(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(d);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==x(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===x(o)?o:String(o)),n)}var o}var D=function(){function t(e,r){var n=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=n,this._renderer=o,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"setItems",value:function(t){this._renderedItems=t}},{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var t=this;this.clear(),this._renderedItems.forEach((function(e){var r=t._renderer(e);t.addItem(r)}))}}])&&B(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function F(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==V(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===V(o)?o:String(o)),n)}var o}var N=function(){function t(e){var r=e.nameSelector,n=e.aboutSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(r),this._about=document.querySelector(n),this._avatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){if(""!==this._name.textContent&&""!==this._about&&""!==this._avatar)return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src}}},{key:"getUserAvatar",value:function(){if(""!==this._avatar.src)return this._avatar.src}},{key:"setUserAvatar",value:function(t){this._avatar.src=t}},{key:"setUserInfo",value:function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return z(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];this._name.textContent=o,this._about.textContent=i}}])&&F(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),H=document.querySelector(".profile__edit-button"),J=document.querySelector(".profile__add-button"),M=document.querySelector(".profile__edit-avatar"),$={formSelector:".form",inputSelector:".form__field",submitButtonSelector:".form__button-submit",inactiveButtonClass:"form__button-submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},G=new s($,".editProfile"),K=new s($,".addCard"),Q=new s($,".editAvatar"),W=new L("#edit-picture"),X=new w("#edit-profile",(function(t,e){e.preventDefault(),X._form.querySelector(".form__button-submit").textContent="Сохранение...",et.setUserInfo(t),rt.setUserInfoOnServer(et.getUserInfo()).then(X.close()).catch((function(t){return console.log("Ошибка ".concat(t))})).finally((function(){return X._form.querySelector(".form__button-submit").textContent="Сохранить"}))})),Y=new w("#edit-place",(function(t,e){e.preventDefault(),Y._form.querySelector(".form__button-submit").textContent="Создание...";var r={link:t[1],name:t[0]};rt.addNewCard(r).then((function(t){return t.json()})).then((function(t){var e=ot(t);nt.addItem(e),Y.close(),K.resetValidation()})).catch((function(t){return console.log("Ошибка ".concat(t))})).finally((function(){return Y._form.querySelector(".form__button-submit").textContent="Создать"}))})),Z=new R("#delete-picture",{},(function(t,e){e.preventDefault(),rt.deleteCard(t._id).catch((function(t){return console.log("Ошибка ".concat(t))})),t._removeCard(),Z.close()})),tt=new w("#edit-avatar",(function(t,e){e.preventDefault(),et.setUserAvatar(t[0]),tt._form.querySelector(".form__button-submit").textContent="Сохранение...",rt.setUserAvatarOnServer(et.getUserAvatar()).then(tt.close()).catch((function(t){return console.log("Ошибка ".concat(t))})).finally((function(){return tt._form.querySelector(".form__button-submit").textContent="Сохранить"}))})),et=new N({nameSelector:".profile__name",aboutSelector:".profile__about",avatarSelector:".profile__avatar"}),rt=new r({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"56bd9a91-126f-47c1-94b3-76e6f2e1aa35","Content-Type":"application/json"}}),nt=new D({items:[],renderer:ot},".cards");function ot(t){return new i(t,"#card-template",W.open.bind(W),it,rt.toggleLike.bind(rt)).generateCard()}function it(t){Z.open(),Z.setCard(t)}H.addEventListener("click",(function(){return X.open(et.getUserInfo())})),J.addEventListener("click",Y.open.bind(Y)),M.addEventListener("click",tt.open.bind(tt)),G.enableValidation(),K.enableValidation(),Q.enableValidation(),X.setEventListeners(),Y.setEventListeners(),W.setEventListeners(),Z.setEventListeners(),tt.setEventListeners(),rt.getInitialCards().then((function(t){nt.setItems(t),nt.renderItems()})).catch((function(t){return console.log("Ошибка ".concat(t))})),rt.getUserInfoFromServer().then((function(t){et.setUserAvatar(t.avatar),et.setUserInfo([t.name,t.about])})).catch((function(t){return console.log("Ошибка ".concat(t))}))})();