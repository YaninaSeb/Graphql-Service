export const resolversGenres = {
    Query: {
        genre: async (_ : undefined , { id } : { id: string} , { dataSources}: any) => {
            return await dataSources.GenreAPI.getGenreByID(id);
        },
        genres: async (_ : undefined , { limit, offset } :  { limit: number, offset: number } , { dataSources }: any) => {
            return await dataSources.GenreAPI.getGenres(limit, offset);
        }
    },

    Mutation: {
        createGenre: async (_ : undefined , { createGenreInput }: any , { dataSources }: any) => {
            return await dataSources.GenreAPI.createGenre(createGenreInput);
        },
        updateGenre: async (_ : undefined , { updateGenreInput }: any , { dataSources }: any) => {
            return await dataSources.GenreAPI.updateGenre(updateGenreInput);
        },
        deleteGenre: async (_ : undefined , { id } : { id: string} , { dataSources }: any) => {
            return await dataSources.GenreAPI.deleteGenre(id);
        },

    },
    
    Genre:  {
        id: (parent: any) => parent._id
    }
}
