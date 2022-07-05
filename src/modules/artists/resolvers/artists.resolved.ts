export const resolversArtists = {
    Query: {
        artist: async (_ : undefined , { id } : { id: string} , { dataSources }: any) => {
            return await dataSources.ArtistAPI.getArtistByID(id);
        },
        artists: async (_ : undefined , __ : Record<string,never> , { dataSources }: any) => {
            return await dataSources.ArtistAPI.getArtists();
        }
    },

    Mutation: {
        createArtist: async (_ : undefined , { createArtistInput }: any , { dataSources }: any) => {
            return await dataSources.ArtistAPI.createArtist(createArtistInput);
        },
        updateArtist: async (_ : undefined , { updateArtistInput } : { updateArtistInput: any} , { dataSources }: any) => {
            return await dataSources.ArtistAPI.updateArtist(updateArtistInput);
        },
        deleteArtist: async (_ : undefined , { id } : { id: string} , { dataSources }: any) => {
            return await dataSources.ArtistAPI.deleteArtist(id);
        },
    },
   
    Artist:  {
        id: (parent: any) => parent._id
    }
}
