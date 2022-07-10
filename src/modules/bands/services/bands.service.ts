const { RESTDataSource } = require('apollo-datasource-rest');

export class BandAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = process.env.BANDS_URL;
    }

    willSendRequest(request: any) {
        request.headers.set('Authorization', `${this.context.token}`);
    }

    async getBandByID(id: string) {
        return await this.get(`/${id}`);
    }

    async getBands(limit = 5, offset = 0) {
        const data = await this.get('/', {
            limit,
            offset
        });
        return data.items;
    }

    async createBand(createBandInput: any) {
        const res = await this.post('/', {...createBandInput});
        res.genres = res.genresIds;
        return res;
    }

    async updateBand(updateBandInput: any) {
        const res = await this.put(`/${updateBandInput.id}`, {...updateBandInput});
        res.members = res.membersId;
        res.genres = res.genresIds;
        return res;
    }

    async deleteBand(id: string) {
        return await this.delete(`/${id}`);
    }
}