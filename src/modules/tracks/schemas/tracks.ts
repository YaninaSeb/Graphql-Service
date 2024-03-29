import { gql } from "apollo-server";

export const typeDefTracks = gql `
    type Track {
        id: ID!
        title: String!
        album: Album
        artists: [Artist]
        bands: [Band]
        duration: Int
        released: Int
        genres: [Genre]
    }

    input CreateTrackInput {
        title: String!
        albumId: ID
        artistsIds: [ID]
        bandsIds: [ID]
        duration: Int
        released: Int
        genresIds: [ID]
    }

    input UpdateTrackInput {
        id: ID!
        title: String!
        albumId: ID
        artistsIds: [ID]
        bandsIds: [ID]
        duration: Int
        released: Int
        genresIds: [ID]
    }

    type Query {
        track(id: ID!): Track
        tracks(limit: Int, offset: Int): [Track]
    }

    type Mutation {
        createTrack(createTrackInput: CreateTrackInput): Track!
        updateTrack(updateTrackInput: UpdateTrackInput): Track!
        deleteTrack(id: ID!): DELETE
    }
`
