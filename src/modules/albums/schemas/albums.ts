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

    type Query {
        album(id: ID!): Album
        albums(limit: Int, offset: Int): [Album]
    }

`

// input AlbumContent {
//         name: String
//         released: Int
//         artistsIds: String
//         bandsIds: String
//         trackIds: String
//         genresIds: String
//         image: String
//     }



//     type Mutation {
//         createAlbum(content: AlbumContent): Album
//         deleteAlbum(id: ID!): DEL
//         updateAlbum(id: ID!, content: AlbumContent): Album
//     }
