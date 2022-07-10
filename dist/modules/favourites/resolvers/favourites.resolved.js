"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolversFavourites = void 0;
exports.resolversFavourites = {
    Query: {
        favourites: (_, __, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return dataSources.FavouriteAPI.getFavourites();
        })
    },
    Mutation: {
        addTrackToFavourites: (_, { id }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            let res = yield dataSources.FavouriteAPI.addTrack(id);
            res.tracks = res.tracksIds;
            return res;
        }),
        addBandToFavourites: (_, { id }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.FavouriteAPI.addBand(id);
        }),
        addArtistToFavourites: (_, { id }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.FavouriteAPI.addArtist(id);
        }),
        addGenreToFavourites: (_, { id }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.FavouriteAPI.addGenre(id);
        })
    },
    Favourites: {
        id: (parent) => parent._id,
        bands: (parent, _, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            const arrBands = [];
            if (parent.bandsIds && parent.bandsIds.length > 0) {
                parent.bandsIds.forEach((id) => {
                    const band = dataSources.BandAPI.getBandByID(id);
                    arrBands.push(band);
                });
                return arrBands;
            }
            return arrBands;
        }),
        genres: (parent, _, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            const arrGenres = [];
            if (parent.genresIds && parent.genresIds.length > 0) {
                parent.genresIds.forEach((id) => {
                    const genre = dataSources.GenreAPI.getGenreByID(id);
                    arrGenres.push(genre);
                });
                return arrGenres;
            }
            return arrGenres;
        }),
        artists: (parent, _, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            const arrArtists = [];
            if (parent.artistsIds && parent.artistsIds.length > 0) {
                parent.artistsIds.forEach((id) => {
                    const artist = dataSources.ArtistAPI.getArtistByID(id);
                    arrArtists.push(artist);
                });
                return arrArtists;
            }
            return arrArtists;
        }),
        tracks: (parent, _, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            const arrTracks = [];
            if (parent.tracksIds && parent.tracksIds.length > 0) {
                parent.tracksIds.forEach((id) => {
                    const track = dataSources.TrackAPI.getTrackByID(id);
                    arrTracks.push(track);
                });
                return arrTracks;
            }
            return arrTracks;
        }),
    }
};
