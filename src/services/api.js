import fetch from 'isomorphic-fetch';

require('es6-promise').polyfill(); // eslint-disable-line

export default (url) => {
  return fetch(url).then((response) => {
    return response.json();
  }).then((response) => {
    return response;
  });
};
