import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';
import { mapValues, mapKeys } from 'lodash';
import urlSlug from 'url-slug';

import config from '../../config';
import placeSchema from './schema';


export const getPlaces = (entities, ids) => {
  const { places } = entities;

  // Make computation cheap
  if (!ids || !ids.length) {
    return [];
  }

  let res = denormalize(ids, [placeSchema], {
    places
  });

  res = res.map(getProcessedPlace);

  return res;
};


export const getProcessedPlace = (placeRaw) => {
  const { placeId } = placeRaw;

  const place = {
    ...placeRaw
  };

  place.url = getPlaceUrl(place);

  return place;
};

export const getPlaceUrl = (place) => {
  if (!place) {
    return "";
  }

  const {
    placeId,
    name
  } = place;

  const slug = urlSlug(name);

  return `/places/${placeId}-${slug}`;
};
