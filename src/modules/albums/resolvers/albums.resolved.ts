export const resolversAlbums = {
    Query: {
        album: async (_ : undefined , { id } : { id: string} , { dataSources}: any) => {
            return dataSources.AlbumAPI.getAlbumByID(id);
        },
        albums: async (_ : undefined , __ : Record<string,never> , { dataSources }: any) => {
            return dataSources.AlbumAPI.getAlbums();
        }
    },
    
    Album:  {
        id: (parent: any) => parent._id
    }
}
