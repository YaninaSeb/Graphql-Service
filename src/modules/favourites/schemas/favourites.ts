import { gql } from "apollo-server";

export const typeDefFavourites = gql `
    type Favourites {
        id: ID!
        userId: ID
        bands: [Band]
        genres: [Genre]
        artists: [Artist]
        tracks: [Track]
    }

    type Query {
        favourites(limit: Int, offset: Int): [Favourites]
    }
`
