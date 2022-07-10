"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const albums_1 = require("../albums/schemas/albums");
const artists_1 = require("../artists/schemas/artists");
const bands_1 = require("../bands/schemas/bands");
const favourites_1 = require("../favourites/schemas/favourites");
const genres_1 = require("../genres/schemas/genres");
const tracks_1 = require("../tracks/schemas/tracks");
const users_1 = require("../users/schemas/users");
exports.default = [
    albums_1.typeDefAlbums,
    artists_1.typeDefArtists,
    bands_1.typeDefBands,
    favourites_1.typeDefFavourites,
    genres_1.typeDefGenres,
    tracks_1.typeDefTracks,
    users_1.typeDefUsers
];
