import { normalize, schema } from 'normalizr';
import deepAssign from 'deep-assign';
import queryString from 'query-string';

import config from '../../config';
import placeSchema from './schema';

export const get = (requestParams) => {

  // Default request params
  const defaultParams = {
    where: {
    }
  };

  // Query params
  const params = deepAssign({}, defaultParams, requestParams);

  // Flatten nested properties
  let queryObject = {};

  for (let key in params) {
    if (typeof params[key] === 'object') {
      queryObject[key] = JSON.stringify(params[key]);
    }
    else {
      queryObject[key] = params[key];
    }
  }

  // Create query string
  const queryStringified = queryString.stringify(queryObject);

  return fetch(`${config.API_URL}/places?${queryStringified}`)
    .then(res => res.json())
    .then(res => {

      const normalizedData = normalize(res, {
        places: [ placeSchema ]
      });

      return normalizedData;
    })

};

export default {
  get
};
