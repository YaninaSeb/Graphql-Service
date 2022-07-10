const { RESTDataSource } = require('apollo-datasource-rest');

export class TrackAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = process.env.TRACKS_URL;
    }

    willSendRequest(request: any) {
        request.headers.set('Authorization', `${this.context.token}`);
    }

    async getTrackByID(id: string) {
        return await this.get(`/${id}`);
    }

    async getTracks(limit = 5, offset = 0) {
        const data = await this.get('/', {
            limit,
            offset
        });
        return data.items;
    }

    async createTrack(createTrackInput: any) {
        const res = await this.post('/', {...createTrackInput});
        res.album = res.albumId;
        res.artists = res.artistsIds;
        res.bands = res.bandsIds;
        res.genres = res.genresIds;
        return res;
    }

    async updateTrack(updateTrackInput: any) {
        const res =await this.put(`/${updateTrackInput.id}`, {...updateTrackInput});
        res.album = res.albumId;
        res.artists = res.artistsIds;
        res.bands = res.bandsIds;
        res.genres = res.genresIds;
        return res;
    }

    async deleteTrack(id: string) {
        return await this.delete(`/${id}`);
    }
}
