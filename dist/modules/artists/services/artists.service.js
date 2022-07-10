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
exports.ArtistAPI = void 0;
const { RESTDataSource } = require('apollo-datasource-rest');
class ArtistAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ARTISTS_URL;
    }
    willSendRequest(request) {
        request.headers.set('Authorization', `${this.context.token}`);
    }
    getArtistByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/${id}`);
        });
    }
    getArtists(limit = 5, offset = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.get('/', {
                limit,
                offset
            });
            return res.items;
        });
    }
    createArtist(createArtistInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.post('/', Object.assign({}, createArtistInput));
            res.bands = res.bandsIds;
            return res;
        });
    }
    updateArtist(updateArtistInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.put(`/${updateArtistInput.id}`, Object.assign({}, updateArtistInput));
            res.bands = res.bandsIds;
            return res;
        });
    }
    deleteArtist(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.delete(`/${id}`);
        });
    }
}
exports.ArtistAPI = ArtistAPI;
