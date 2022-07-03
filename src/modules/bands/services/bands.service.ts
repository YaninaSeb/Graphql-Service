const { RESTDataSource } = require('apollo-datasource-rest');

export class BandAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.BANDS_URL;
    }

    async getBandByID(id: string) {
        return this.get(`/${id}`);
    }

    async getBands() {
        const data = await this.get('/');
        return data.items;
    }
}