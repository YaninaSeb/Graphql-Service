const { RESTDataSource } = require('apollo-datasource-rest');

export class ArtistAPI extends RESTDataSource {

    willSendRequest(request: any) {
        request.headers.set('Authorization', `${this.context.token}`);
    }

    constructor() {
        super();
        this.baseURL = process.env.ARTISTS_URL;
        this.baseBand = process.env.BANDS_URL;
    }

    async getArtistByID(id: string) {
        return this.get(`/${id}`);
    }

    async getArtists() {
        const res = await this.get('/');
        return res.items;
    }

    async createArtist(createArtistInput: any) {
        const res = await this.post('/', {...createArtistInput});
        res.bands = res.bandsIds;
        return res;
    }

    async updateArtist(updateArtistInput: any) {
        const res = await this.put(`/${updateArtistInput.id}`, {...updateArtistInput});
        res.bands = res.bandsIds;
        return res;
    }

    async deleteArtist(id: string) {
        return await this.delete(`/${id}`);
    }
}
