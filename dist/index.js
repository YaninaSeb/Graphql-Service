"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const typeDefs_1 = __importDefault(require("./modules/utils/typeDefs"));
const resolvers_1 = __importDefault(require("./modules/utils/resolvers"));
const { ApolloServer } = require('apollo-server');
const albums_api_1 = require("./modules/albums/services/albums-api");
const artists_service_1 = require("./modules/artists/services/artists.service");
const bands_service_1 = require("./modules/bands/services/bands.service");
const genres_service_1 = require("./modules/genres/services/genres.service");
const tracks_service_1 = require("./modules/tracks/services/tracks.service");
const users_service_1 = require("./modules/users/services/users.service");
const favourites_api_1 = require("./modules/favourites/services/favourites-api");
dotenv.config();
const PORT = process.env.PORT || 3000;
const server = new ApolloServer({
    typeDefs: typeDefs_1.default,
    resolvers: resolvers_1.default,
    dataSources: () => {
        return {
            AlbumAPI: new albums_api_1.AlbumAPI(),
            ArtistAPI: new artists_service_1.ArtistAPI(),
            BandAPI: new bands_service_1.BandAPI(),
            GenreAPI: new genres_service_1.GenreAPI(),
            TrackAPI: new tracks_service_1.TrackAPI(),
            UserAPI: new users_service_1.UserAPI(),
            FavouriteAPI: new favourites_api_1.FavouriteAPI()
        };
    },
    csrfPrevention: true,
    cache: 'bounded',
    context: ({ req }) => {
        return { token: req.headers.authorization || '' };
    }
});
server.listen({ port: PORT }).then(() => {
    console.log(`🚀  Server ready at http://localhost:${PORT}/`);
});
