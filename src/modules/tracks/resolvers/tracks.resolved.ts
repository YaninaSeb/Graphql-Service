export const resolversTracks = {
    Query: {
        track: async (_ : undefined , { id } : { id: string} , { dataSources}: any) => {
            return dataSources.TrackAPI.getTrackByID(id);
        },
        tracks: async (_ : undefined , { limit, offset } :  { limit: number, offset: number } , { dataSources }: any) => {
            return dataSources.TrackAPI.getTracks(limit, offset);
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
