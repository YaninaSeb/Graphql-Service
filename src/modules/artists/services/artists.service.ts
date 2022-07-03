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
        const data = await this.get('/');
        return data.items;
    }
}