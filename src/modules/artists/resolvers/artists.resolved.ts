import { ArtistAPI } from "../services/artists.service";

export const resolversArtists = {
    Query: {
        artist: async (_ : undefined , { id } : { id: string} , { dataSources }: any) => {
            return await dataSources.ArtistAPI.getArtistByID(id);
        },
        artists: async (_ : undefined , { limit, offset } :  { limit: number, offset: number } , { dataSources }: any) => {
            return await dataSources.ArtistAPI.getArtists(limit, offset);
        }
    },

    Mutation: {
        createArtist: async (_ : undefined , { createArtistInput }: any , { dataSources }: any) => {
            return await dataSources.ArtistAPI.createArtist(createArtistInput);
        },
        updateArtist: async (_ : undefined , { updateArtistInput } : { updateArtistInput: any} , { dataSources }: any) => {
            return await dataSources.ArtistAPI.updateArtist(updateArtistInput);
        },
        deleteArtist: async (_ : undefined , { id } : { id: string} , { dataSources }: any) => {
            return await dataSources.ArtistAPI.deleteArtist(id);
        },
    },
   
    Artist:  {
        id: (parent: any) => parent._id,

        bands: async (parent: any, _: any, { dataSources }: any) => {
            const arrBands: any = [];
            if (parent.bandsIds && parent.bandsIds.length > 0) {
                parent.bandsIds.forEach((id: string) => {
                    const band = dataSources.BandAPI.getBandByID(id);
                    arrBands.push(band);
                });
                return arrBands;
            }
            return arrBands;
        }
    }
}
