class TelephoneApi {
  constructor(content) {
    this._baseUrl = content.baseUrl;
  }

  _setHeaders(){
    return {
      'Content-Type': 'application/json'
    }
  }

  _checkResponse(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getTelephones(){
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: this._setHeaders()
    })
    .then(this._checkResponse)
  }

  createTelephone(telephone) {
    return fetch(`${this._baseUrl}`, {
      method: 'POST',
      headers: this._setHeaders(),
      body: JSON.stringify({
        value: `${telephone}`
      })
    })
    .then(this._checkResponse)
  }
}

const telephoneApi = new TelephoneApi({
  baseUrl: 'http://localhost:3002/telephone'
});

export default telephoneApi;
