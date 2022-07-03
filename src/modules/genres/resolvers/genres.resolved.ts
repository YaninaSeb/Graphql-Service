export const resolversGenres = {
    Query: {
        genre: async (_ : undefined , { id } : { id: string} , { dataSources}: any) => {
            return dataSources.GenreAPI.getGenreByID(id);
        },
        genres: async (_ : undefined , __ : Record<string,never> , { dataSources }: any) => {
            return dataSources.GenreAPI.getGenres();
        }
    },
    
    Genre:  {
        id: (parent: any) => parent._id
    }
}
