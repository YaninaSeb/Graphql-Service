import { resolversAlbums } from "../albums/resolvers/albums.resolved";
import { resolversArtists } from "../artists/resolvers/artists.resolved";
import { resolversBands } from "../bands/resolvers/bands.resolved";
import { resolversGenres } from "../genres/resolvers/genres.resolved";
import { resolversTracks } from "../tracks/resolvers/tracks.resolved";
import { resolversUser } from "../users/resolvers/users.resolved";
import { resolversFavourites } from "../favourites/resolvers/favourites.resolved";

export default [
    resolversAlbums,
    resolversArtists,
    resolversBands,
    resolversGenres,
    resolversTracks,
    resolversUser,
    resolversFavourites
];
