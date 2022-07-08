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
            const data = await Promise.all(
                parent.artistsIds.map(async (id: string) => {
                    const arrArtists = await dataSources.ArtistAPI.getArtistByID(id);
                    return arrArtists
                })
            );
            return data;
        },

        bands: async (parent: any, _: any, { dataSources }: any) => {
            const data = await Promise.all(
                parent.bandsIds.map(async (id: string) => {
                    const arrBands = await dataSources.BandAPI.getBandByID(id);
                    return arrBands
                })
            );
            return data;
        },

        tracks: async (parent: any, _: any, { dataSources }: any) => {
            const data = await Promise.all(
                parent.trackIds.map(async (id: string) => {
                    const arrTracks = await dataSources.TrackAPI.getTrackByID(id);
                    return arrTracks
                })
            )
            return data;
        },

        genres: async (parent: any, _: any, { dataSources }: any) => {
            const data = await Promise.all(
                parent.genresIds.map(async (id: string) => {
                    const arrGenres = await dataSources.GenreAPI.getGenreByID(id);
                    return arrGenres
                })
            );
            return data;
        }
    }
}
