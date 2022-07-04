const { RESTDataSource } = require('apollo-datasource-rest');

export class ArtistAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = process.env.ARTISTS_URL;
    }

    async getArtistByID(id: string) {
        return this.get(`/${id}`);
    }

    async getArtists() {
        const res = await this.get('/');
        return res.items;
    }

    async createArtist(createArtistInput: any) {
        console.log(createArtistInput);
        const res = await this.post('', createArtistInput);
        return res.data;
    }
}