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
        id: (parent: any) => parent._id
    }
}
