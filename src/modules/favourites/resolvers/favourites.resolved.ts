export const resolversFavourites = {
    Query: {
        favourites: async (_ : any , __: any , { dataSources }: any) => {
            return dataSources.FavouriteAPI.getFavourites();
        }
    },

    Mutation: {
        addTrackToFavourites: async (_ : undefined , { id } : { id: string} , { dataSources }: any) => {
            let res =  await dataSources.FavouriteAPI.addTrack(id);
            res.tracks = res.tracksIds;
            return res
        },
        addBandToFavourites: async (_ : undefined , { id } : { id: string} , { dataSources }: any) => {
            return await dataSources.FavouriteAPI.addBand(id);
        },
        addArtistToFavourites: async (_ : undefined , { id } : { id: string} , { dataSources }: any) => {
            return await dataSources.FavouriteAPI.addArtist(id);
        },
        addGenreToFavourites: async (_ : undefined , { id } : { id: string} , { dataSources }: any) => {
            return await dataSources.FavouriteAPI.addGenre(id);
        }
    },
    
    Favourites:  {
        id: (parent: any) => parent._id,

        bands: async (parent: any, _: any, { dataSources }: any) => {
            const arrBands: any = [];
            if (parent.bandsIds && parent.bandsIds.length > 0) {
                parent.bandsIds.forEach((id: string) => {
                    const band = dataSources.BandAPI.getBandByID(id);
                    arrBands.push(band);
                });
                return arrBands;
            }
            return arrBands;
        },

        genres: async (parent: any, _: any, { dataSources }: any) => {
            const arrGenres: any = [];
            if (parent.genresIds && parent.genresIds.length > 0) {
                parent.genresIds.forEach((id: string) => {
                    const genre = dataSources.GenreAPI.getGenreByID(id);
                    arrGenres.push(genre);
                });
                return arrGenres;
            }
            return arrGenres;
        },

        artists: async (parent: any, _: any, { dataSources }: any) => {
            const arrArtists: any = [];
            if (parent.artistsIds && parent.artistsIds.length > 0) {
                parent.artistsIds.forEach((id: string) => {
                    const artist = dataSources.ArtistAPI.getArtistByID(id);
                    arrArtists.push(artist);
                });
                return arrArtists;
            }
            return arrArtists;
        },

        tracks: async (parent: any, _: any, { dataSources }: any) => {
            const arrTracks: any = [];
            if (parent.tracksIds && parent.tracksIds.length > 0) {
                parent.tracksIds.forEach((id: string) => {
                    const track = dataSources.TrackAPI.getTrackByID(id);
                    arrTracks.push(track);
                });
                return arrTracks;
            }
            return arrTracks;
        },
    }
}
