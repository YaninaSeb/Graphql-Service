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
        id: (parent: any) => parent._id,

        // members: async (parent: any, _: any, { dataSources }: any) => {
        //     const data = await Promise.all(
        //         parent.membersIds.map(async (id: string) => {
        //             const arrBand = await dataSources.BandAPI.getBandByID(id);
        //             return arrBand
        //         })
        //     );
        //     return data;
        // }

        genres: async (parent: any, _: any, { dataSources }: any) => {
            const arrGenres: any = [];
            if (parent.genresIds && parent.genresIds.length > 0) {
                parent.genresIds.forEach((id: string) => {
                    const genre = dataSources.GenreAPI.getGenreByID(id);
                    arrGenres.push(genre);
                });
                return arrGenres;
            }
            return arrGenres;
        }
    }
}
