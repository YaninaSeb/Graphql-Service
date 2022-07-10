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
exports.TrackAPI = void 0;
const { RESTDataSource } = require('apollo-datasource-rest');
class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.TRACKS_URL;
    }
    willSendRequest(request) {
        request.headers.set('Authorization', `${this.context.token}`);
    }
    getTrackByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.get(`/${id}`);
        });
    }
    getTracks(limit = 5, offset = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.get('/', {
                limit,
                offset
            });
            return data.items;
        });
    }
    createTrack(createTrackInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.post('/', Object.assign({}, createTrackInput));
            res.album = res.albumId;
            res.artists = res.artistsIds;
            res.bands = res.bandsIds;
            res.genres = res.genresIds;
            return res;
        });
    }
    updateTrack(updateTrackInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.put(`/${updateTrackInput.id}`, Object.assign({}, updateTrackInput));
            res.album = res.albumId;
            res.artists = res.artistsIds;
            res.bands = res.bandsIds;
            res.genres = res.genresIds;
            return res;
        });
    }
    deleteTrack(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.delete(`/${id}`);
        });
    }
}
exports.TrackAPI = TrackAPI;
