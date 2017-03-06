import { normalize, schema } from 'normalizr'

const placeSchema = new schema.Entity('places', {}, {
  idAttribute: 'placeId'
});


export default placeSchema;
