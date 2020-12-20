const Method = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const ResponseCode = {
  SUCCESS: 200,
  REDIRECT: 300,
};

const checkStatus = (response) => {
  if (response.status >= ResponseCode.SUCCESS && response.status < ResponseCode.REDIRECT) {
    return response;
  }
  throw new Error(`${response.status}: ${response.statusText}`);
};

const END_POINT = 'https://api.covid19api.com/';

export default class API {
  constructor() {
    this.endPoint = END_POINT;
  }

  getData(url) {
    return this.load({ url })
      .then((response) => response.json())
      .then(
        // some func
      );
  }

  load({
    url, method = Method.GET, body = null, headers = new Headers(),
  }) {
    return fetch(`${this.endPoint}/${url}`, { method, body, headers })
      .then(checkStatus)
      .catch((err) => {
        throw new Error(`fetch error: ${err}`);
      });
  }
}
