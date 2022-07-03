const { RESTDataSource } = require('apollo-datasource-rest');

export class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.TRACKS_URL;
    }

    async getTrackByID(id: string) {
        return this.get(`/${id}`);
    }

    async getTracks() {
        const data = await this.get('/');
        return data.items;
    }
}