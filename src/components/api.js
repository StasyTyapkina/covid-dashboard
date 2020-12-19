const Method = {
    GET: `GET`,
    POST: `POST`,
    PUT: `PUT`,
    DELETE: `DELETE`
  };
  
  const ResponseCode = {
    SUCCESS: 200,
    REDIRECT: 300,
  };
  
  const checkStatus = (response) => {
    if (response.status >= ResponseCode.SUCCESS && response.status < ResponseCode.REDIRECT) {
      return response;
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
};

const END_POINT = `https://api.covid19api.com/`;

export default class API {
    constructor({endPoint}) {
      this._endPoint = endPoint;
    }
  
    getData(url) {
      return this._load({url: url})
        .then(toJSON)
        .then(
            // some func
          );
    }
  
    _load({url, method = Method.GET, body = null, headers = new Headers()}) {
      return fetch(`${this._endPoint}/${url}`, {method, body, headers})
        .then(checkStatus)
        .catch((err) => {
          throw new Error(`fetch error: ${err}`);
        });
    }
}