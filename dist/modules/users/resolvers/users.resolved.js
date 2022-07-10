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
exports.resolversUser = void 0;
exports.resolversUser = {
    Query: {
        user: (_, { id }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield dataSources.UserAPI.getUser(id);
        }),
        jwt: (_, { email, password }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            const data = yield dataSources.UserAPI.getJWT(email, password);
            return { token: data.jwt };
        })
    },
    Mutation: {
        register: (_, { registerUserInput }, { dataSources }) => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield dataSources.UserAPI.registerUser(registerUserInput);
            return res;
        }),
    },
    User: {
        id: (parent) => parent._id
    }
};
