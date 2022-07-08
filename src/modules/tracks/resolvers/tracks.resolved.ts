export const resolversTracks = {
    Query: {
        track: async (_ : undefined , { id } : { id: string} , { dataSources}: any) => {
            return dataSources.TrackAPI.getTrackByID(id);
        },
        tracks: async (_ : undefined , __ : Record<string,never> , { dataSources }: any) => {
            return dataSources.TrackAPI.getTracks();
        }
    },

    Mutation: {
        createTrack: async (_ : undefined , { createTrackInput }: any , { dataSources }: any) => {
            return await dataSources.TrackAPI.createTrack(createTrackInput);
        },
        updateTrack: async (_ : undefined , { updateTrackInput } : any , { dataSources }: any) => {
            return await dataSources.TrackAPI.updateTrack(updateTrackInput);
        },
        deleteTrack: async (_ : undefined , { id } : { id: string} , { dataSources }: any) => {
            return await dataSources.TrackAPI.deleteTrack(id);
        },
    },
    
    Track:  {
        id: (parent: any) => parent._id,

        album: async (parent: any, _: any, { dataSources }: any) => {
            const id = parent.albumId;
            return  await dataSources.AlbumAPI.getAlbumByID(`${id}`);
        },

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

        genres: async (parent: any, _: any, { dataSources }: any) => {
            const data = await Promise.all(
                parent.genresIds.map(async (id: string) => {
                    const arrGenres = await dataSources.GenreAPI.getGenreByID(id);
                    return arrGenres
                })
            );
            return data;
        },
    }
}
