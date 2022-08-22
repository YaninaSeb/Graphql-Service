export const resolversBands = {
    Query: {
        band: async (_ : undefined , { id } : { id: string} , { dataSources}: any) => {
            return await dataSources.BandAPI.getBandByID(id);
        },
        bands: async (_ : undefined , { limit, offset } :  { limit: number, offset: number } , { dataSources }: any) => {
            return await dataSources.BandAPI.getBands(limit, offset);
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

        members: async (parent: any, _: any, { dataSources }: any) => {
            if (parent.members && parent.members.length > 0) {
                const res = await parent.members.map(async (elem: any) => {
                    const artist =  await dataSources.ArtistAPI.getArtistByID(elem.artist);
                    const id = artist._id;
                    const firstName = artist.firstName;
                    const secondName = artist.secondName;
                    const middleName = artist.middleName;
                    const instrument = elem.instrument;
                    const years = elem.years;
                    return {id, firstName, secondName, middleName, instrument, years}
                });
                return res;
            }
            return [];
        },

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
