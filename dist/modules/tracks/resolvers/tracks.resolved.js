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
exports.resolversTracks = void 0;
exports.resolversTracks = {
    Query: {
        track: (_, { id }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return dataSources.TrackAPI.getTrackByID(id);
        }),
        tracks: (_, { limit, offset }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return dataSources.TrackAPI.getTracks(limit, offset);
        })
    },
    Mutation: {
        createTrack: (_, { createTrackInput }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.TrackAPI.createTrack(createTrackInput);
        }),
        updateTrack: (_, { updateTrackInput }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.TrackAPI.updateTrack(updateTrackInput);
        }),
        deleteTrack: (_, { id }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.TrackAPI.deleteTrack(id);
        }),
    },
    Track: {
        id: (parent) => parent._id,
        album: (parent, _, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            const id = parent.albumId;
            return yield dataSources.AlbumAPI.getAlbumByID(`${id}`);
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
        })
    }
};
