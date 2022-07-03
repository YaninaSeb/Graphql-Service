import { gql } from "apollo-server";

export const typeDefTracks = gql `
    type Track {
        id: ID!
        title: String!
        albums: [Album]
        bands: [Band]
        duration: Int
        released: Int
        genres: [Genre]
    }

    type Query {
        track(id: ID!): Track
        tracks(limit: Int, offset: Int): [Track]
    }

`

// input TrackContent {
//     title: String
//     albumId: String
//     bandsIds: [String]
//     duration: Int
//     released: Int
//     genresIds: [String]
// }

// type Mutation {
//     createTrack(content: TrackContent): Track
//     deleteTrack(id: ID!): DEL
//     updateTrack(id: ID!, content: TrackContent): Track
// }
