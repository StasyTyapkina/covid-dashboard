import { END_POINT } from './constants';

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

export default class API {
  constructor() {
    this.endPoint = END_POINT;
  }

  getSummary() {
    return this.load({ url: 'summary' })
      .then((response) => response.json());
  }

  load({ url, params }) {
    return fetch(`${this.endPoint}/${url}`, params)
      .then(checkStatus)
      .catch((err) => {
        throw new Error(`fetch error: ${err}`);
      });
  }
}
