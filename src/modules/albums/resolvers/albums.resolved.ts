export const resolversAlbums = {
    Query: {
        album: async (_ : undefined , { id } : { id: string} , { dataSources}: any) => {
            return dataSources.AlbumAPI.getAlbumByID(id);
        },
        albums: async (_ : undefined , __ : Record<string,never> , { dataSources }: any) => {
            return dataSources.AlbumAPI.getAlbums();
        }
    },

    Mutation: {
        createAlbum: async (_ : undefined , { createAlbumInput }: any , { dataSources }: any) => {
            return await dataSources.AlbumAPI.createAlbum(createAlbumInput);
        },
        updateAlbum: async (_ : undefined , { updateAlbumInput } : any , { dataSources }: any) => {
            return await dataSources.AlbumAPI.updateAlbum(updateAlbumInput);
        },
        deleteAlbum: async (_ : undefined , { id } : { id: string} , { dataSources }: any) => {
            return await dataSources.AlbumAPI.deleteAlbum(id);
        },
    },
    
    Album:  {
        id: (parent: any) => parent._id,

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
        }
    }
}
