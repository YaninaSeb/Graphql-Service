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
exports.resolversBands = void 0;
exports.resolversBands = {
    Query: {
        band: (_, { id }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.BandAPI.getBandByID(id);
        }),
        bands: (_, { limit, offset }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.BandAPI.getBands(limit, offset);
        })
    },
    Mutation: {
        createBand: (_, { createBandInput }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.BandAPI.createBand(createBandInput);
        }),
        updateBand: (_, { updateBandInput }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.BandAPI.updateBand(updateBandInput);
        }),
        deleteBand: (_, { id }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.BandAPI.deleteBand(id);
        }),
    },
    Band: {
        id: (parent) => parent._id,
        members: (parent, _, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            if (parent.members && parent.members.length > 0) {
                const res = yield parent.members.map((elem) => __awaiter(void 0, void 0, void 0, function* () {
                    const artist = yield dataSources.ArtistAPI.getArtistByID(elem.artist);
                    const id = artist._id;
                    const firstName = artist.firstName;
                    const secondName = artist.secondName;
                    const middleName = artist.middleName;
                    const instrument = elem.instrument;
                    const years = elem.years;
                    return { id, firstName, secondName, middleName, instrument, years };
                }));
                return res;
            }
            return [];
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
