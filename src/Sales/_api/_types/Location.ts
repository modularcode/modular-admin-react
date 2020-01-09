import EntityOwned, { EntitiyOwnedId } from './EntityOwned'

export type LocationId = EntitiyOwnedId

export default interface Location extends EntityOwned {
  id?: LocationId
  location?: {
    lat: number
    lng: number
  }
  name: string
}
