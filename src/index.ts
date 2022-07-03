import * as dotenv from 'dotenv';
import typeDefs from './modules/utils/typeDefs';
import resolvers from './modules/utils/resolvers';
const { ApolloServer } = require('apollo-server');
import { AlbumAPI } from './modules/albums/services/albums-api';
import { ArtistAPI } from './modules/artists/services/artists.service';
import { BandAPI } from './modules/bands/services/bands.service';
import { GenreAPI } from './modules/genres/services/genres.service';
import { TrackAPI } from './modules/tracks/services/tracks.service';
import { UserAPI } from './modules/users/services/users.service';

dotenv.config();

const PORT = process.env.PORT || 3000;


const server =  new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            AlbumAPI: new AlbumAPI(),
            ArtistAPI: new ArtistAPI(),
            BandAPI: new BandAPI(),
            GenreAPI: new GenreAPI(),
            TrackAPI: new TrackAPI(),
            UserAPI: new UserAPI(),
        }
    },
    csrfPrevention: true,
    cache: 'bounded',
    context: ({ req } : any) => {
        return { token: req.headers.authorization || '' }
    }
});
  
server.listen({ port: PORT}).then(() => {
    console.log(`🚀  Server ready at http://localhost:${PORT}/`);
});