export const resolversUser = {
    Query: {
        user: async (_ : undefined , { id } : { id: string} , { dataSources}: any) => {
            return dataSources.UserAPI.getUser(id);
        }
    },
    
    User:  {
        id: (parent: any) => parent._id
    }
}
