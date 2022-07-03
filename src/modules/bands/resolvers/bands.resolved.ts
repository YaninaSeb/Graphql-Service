export const resolversBands = {
    Query: {
        band: async (_ : undefined , { id } : { id: string} , { dataSources}: any) => {
            return dataSources.BandAPI.getBandByID(id);
        },
        bands: async (_ : undefined , __ : Record<string,never> , { dataSources }: any) => {
            return dataSources.BandAPI.getBands();
        }
    },
    
    Band:  {
        id: (parent: any) => parent._id
    }
}
