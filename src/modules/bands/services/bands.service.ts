const { RESTDataSource } = require('apollo-datasource-rest');

export class BandAPI extends RESTDataSource {

    willSendRequest(request: any) {
        request.headers.set('Authorization', `${this.context.token}`);
    }

    constructor() {
        super();
        this.baseURL = process.env.BANDS_URL;
    }

    async getBandByID(id: string) {
        return await this.get(`/${id}`);
    }

    async getBands() {
        const data = await this.get('/');
        return data.items;
    }

    async createBand(createBandInput: any) {
        const res = await this.post('/', {...createBandInput});
        res.members = res.membersIds;
        res.genres = res.genresIds;
        return res;
    }

    async updateBand(updateBandInput: any) {
        const res = await this.put(`/${updateBandInput.id}`, {...updateBandInput});
        res.members = res.membersIds;
        res.genres = res.genresIds;
        return res;
    }

    async deleteBand(id: string) {
        return await this.delete(`/${id}`);
    }
}