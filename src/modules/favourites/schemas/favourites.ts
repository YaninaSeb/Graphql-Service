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

    input AddToFavouritesInput {
        id: ID!
        type: String
    }

    type Query {
        favourites(limit: Int, offset: Int): Favourites
    }

    type Mutation {
        addTrackToFavourites(addTrackInput: AddToFavouritesInput): Favourites!
        addBandToFavourites(addBandInput: AddToFavouritesInput): Favourites!
        addArtistToFavourites(addArtistInput: AddToFavouritesInput): Favourites!
        addGenreToFavourites(addGenreInput: AddToFavouritesInput): Favourites!
    }

`
