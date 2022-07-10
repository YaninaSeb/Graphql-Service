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
exports.resolversArtists = void 0;
exports.resolversArtists = {
    Query: {
        artist: (_, { id }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.ArtistAPI.getArtistByID(id);
        }),
        artists: (_, { limit, offset }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.ArtistAPI.getArtists(limit, offset);
        })
    },
    Mutation: {
        createArtist: (_, { createArtistInput }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.ArtistAPI.createArtist(createArtistInput);
        }),
        updateArtist: (_, { updateArtistInput }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.ArtistAPI.updateArtist(updateArtistInput);
        }),
        deleteArtist: (_, { id }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.ArtistAPI.deleteArtist(id);
        }),
    },
    Artist: {
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
        })
    }
};
