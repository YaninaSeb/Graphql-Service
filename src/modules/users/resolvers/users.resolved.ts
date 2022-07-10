import { IUser } from "../../utils/types";

export const resolversUser = {
    Query: {
        user: async (_ : undefined , { id } : { id: string} , { dataSources}: { dataSources: any }) => {
            return await dataSources.UserAPI.getUser(id);
        },

        jwt: async (_ : undefined , { email, password } : { email: string, password: string} , { dataSources }: { dataSources: any }) => {
            const data = await dataSources.UserAPI.getJWT(email, password);
            return { token: data.jwt }
        }
    },

    Mutation: {
        register: async (_ : undefined , { registerUserInput } : { registerUserInput: any} , { dataSources }: { dataSources: any }) => {
           const res = await dataSources.UserAPI.registerUser(registerUserInput);
           return res
        },

    },
    
    User:  {
        id: (parent: any) => parent._id
    }
}
