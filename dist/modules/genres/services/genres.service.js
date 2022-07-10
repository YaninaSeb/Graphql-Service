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
exports.GenreAPI = void 0;
const { RESTDataSource } = require('apollo-datasource-rest');
class GenreAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.GENRES_URL;
    }
    willSendRequest(request) {
        request.headers.set('Authorization', `${this.context.token}`);
    }
    getGenreByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`/${id}`);
        });
    }
    getGenres(limit = 5, offset = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.get('/', {
                limit,
                offset
            });
            return data.items;
        });
    }
    createGenre(createGenreInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.post('/', Object.assign({}, createGenreInput));
        });
    }
    updateGenre(updateGenreInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.put(`/${updateGenreInput.id}`, Object.assign({}, updateGenreInput));
        });
    }
    deleteGenre(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.delete(`/${id}`);
        });
    }
}
exports.GenreAPI = GenreAPI;
