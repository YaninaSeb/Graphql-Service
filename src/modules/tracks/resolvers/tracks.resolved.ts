export const resolversTracks = {
    Query: {
        track: async (_ : undefined , { id } : { id: string} , { dataSources}: any) => {
            return dataSources.TrackAPI.getTrackByID(id);
        },
        tracks: async (_ : undefined , __ : Record<string,never> , { dataSources }: any) => {
            return dataSources.TrackAPI.getTracks();
        }
    },
    
    Track:  {
        id: (parent: any) => parent._id
    }
}
