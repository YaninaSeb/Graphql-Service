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
exports.FavouriteAPI = void 0;
const { RESTDataSource } = require('apollo-datasource-rest');
class FavouriteAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.FAVOURITES_URL;
    }
    willSendRequest(request) {
        request.headers.set('Authorization', `${this.context.token}`);
    }
    getFavourites() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.context.token) {
                const res = yield this.get('/');
                return res;
            }
            else {
                console.log('User not logged!');
            }
        });
    }
    addTrack(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.put('/add', {
                id,
                type: "tracks"
            });
        });
    }
    addBand(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.put('/add', {
                id,
                type: "bands"
            });
        });
    }
    addArtist(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.put('/add', {
                id,
                type: "artists"
            });
            return res;
        });
    }
    addGenre(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.put('/add', {
                id,
                type: "genres"
            });
        });
    }
}
exports.FavouriteAPI = FavouriteAPI;
