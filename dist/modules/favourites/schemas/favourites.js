"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefFavourites = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefFavourites = (0, apollo_server_1.gql) `
    type Favourites {
        id: ID!
        userId: ID
        bands: [Band]
        genres: [Genre]
        artists: [Artist]
        tracks: [Track]
    }

    type Query {
        favourites: Favourites
    }

    type Mutation {
        addTrackToFavourites(id: ID!): Favourites!
        addBandToFavourites(id: ID!): Favourites!
        addArtistToFavourites(id: ID!): Favourites!
        addGenreToFavourites(id: ID!): Favourites!
    }

`;
