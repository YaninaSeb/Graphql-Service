export const resolversArtists = {
    Query: {
        artist: async (_ : undefined , { id } : { id: string} , { dataSources }: any) => {
            return dataSources.ArtistAPI.getArtistByID(id);
        },
        artists: async (_ : undefined , __ : Record<string,never> , { dataSources }: any) => {
            return dataSources.ArtistAPI.getArtists();
        }
    },
    
    Artist:  {
        id: (parent: any) => parent._id
    }
}
