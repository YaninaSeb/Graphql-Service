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
        id: (parent: any) => parent._id
    }
}
