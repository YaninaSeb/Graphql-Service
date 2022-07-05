export const resolversBands = {
    Query: {
        band: async (_ : undefined , { id } : { id: string} , { dataSources}: any) => {
            return await dataSources.BandAPI.getBandByID(id);
        },
        bands: async (_ : undefined , __ : Record<string,never> , { dataSources }: any) => {
            return await dataSources.BandAPI.getBands();
        }
    },

    Mutation: {
        createBand: async (_ : undefined , { createBandInput }: any , { dataSources}: any) => {
            return await dataSources.BandAPI.createBand(createBandInput);
        },
        updateBand: async (_ : undefined , { updateBandInput }: any , { dataSources}: any) => {
            return await dataSources.BandAPI.updateBand(updateBandInput);
        },
        deleteBand: async (_ : undefined , { id } : { id: string} , { dataSources}: any) => {
            return await dataSources.BandAPI.deleteBand(id);
        },
    },
    
    Band:  {
        id: (parent: any) => parent._id
    }
}
