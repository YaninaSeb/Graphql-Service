import { gql } from "apollo-server";

export const typeDefAlbums = gql `
    type Album {
        id: ID!
        name: String
        released: Int
        artists: [Artist]
        bands: [Band]
        tracks: [Track]
        genres: [Genre]
        image: String
    }

    type DELETE {
        acknowledged: Boolean
        deletedCount: Int
    }

    input CreateAlbumInput {
        name: String
        released: Int
        artistsIds: [ID]
        bandsIds: [ID]
        tracksIds: [ID]
        genresIds: [ID]
        image: String
    }

    input UpdateAlbumInput {
        id: ID!
        name: String
        released: Int
        artistsIds: [ID]
        bandsIds: [ID]
        tracksIds: [ID]
        genresIds: [ID]
        image: String
    }

    type Query {
        album(id: ID!): Album
        albums(limit: Int, offset: Int): [Album]
    }

    type Mutation {
        createAlbum(createAlbumInput: CreateAlbumInput): Album!
        updateAlbum(updateAlbumInput: UpdateAlbumInput): Album!
        deleteAlbum(id: ID!): DELETE
    }
`
