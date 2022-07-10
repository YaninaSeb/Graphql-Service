"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const albums_resolved_1 = require("../albums/resolvers/albums.resolved");
const artists_resolved_1 = require("../artists/resolvers/artists.resolved");
const bands_resolved_1 = require("../bands/resolvers/bands.resolved");
const genres_resolved_1 = require("../genres/resolvers/genres.resolved");
const tracks_resolved_1 = require("../tracks/resolvers/tracks.resolved");
const users_resolved_1 = require("../users/resolvers/users.resolved");
const favourites_resolved_1 = require("../favourites/resolvers/favourites.resolved");
exports.default = [
    albums_resolved_1.resolversAlbums,
    artists_resolved_1.resolversArtists,
    bands_resolved_1.resolversBands,
    genres_resolved_1.resolversGenres,
    tracks_resolved_1.resolversTracks,
    users_resolved_1.resolversUser,
    favourites_resolved_1.resolversFavourites
];
