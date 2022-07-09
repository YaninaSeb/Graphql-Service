export const resolversFavourites = {
    Query: {
        favourites: async (_ : any , __: any , { dataSources }: any) => {
            return dataSources.FavouriteAPI.getFavourites();
        }
    },

    Mutation: {
        addTrackToFavourites: async (_ : undefined , { addTrackInput } : any , { dataSources }: any) => {
            return await dataSources.FavouriteAPI.addTrack(addTrackInput);
        },
        addBandToFavourites: async (_ : undefined , { addBandInput } : any , { dataSources }: any) => {
            return await dataSources.FavouriteAPI.addBand(addBandInput);
        },
        addArtistToFavourites: async (_ : undefined , { addArtistInput } : any , { dataSources }: any) => {
            return await dataSources.FavouriteAPI.addArtist(addArtistInput);
        },
        addGenreToFavourites: async (_ : undefined , { addGenreInput } : any , { dataSources }: any) => {
            return await dataSources.FavouriteAPI.addGenre(addGenreInput);
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
            if (parent.trackIds && parent.trackIds.length > 0) {
                parent.trackIds.forEach((id: string) => {
                    const track = dataSources.TrackAPI.getTrackByID(id);
                    arrTracks.push(track);
                });
                return arrTracks;
            }
            return arrTracks;
        },
    }
}
