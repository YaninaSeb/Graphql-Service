const { RESTDataSource } = require('apollo-datasource-rest');

export class AlbumAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ALBUMS_URL;
    }

    async getAlbumByID(id: string) {
        return this.get(`/${id}`);
    }

    async getAlbums() {
        const data = await this.get('/');
        return data.items;
    }
}