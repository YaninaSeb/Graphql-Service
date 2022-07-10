const { RESTDataSource } = require('apollo-datasource-rest');

export class AlbumAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = process.env.ALBUMS_URL;
    }

    willSendRequest(request: any) {
        request.headers.set('Authorization', `${this.context.token}`);
    }

    async getAlbumByID(id: string) {
        return await this.get(`/${id}`);
    }

    async getAlbums(limit = 5, offset = 0) {
        const data = await this.get('/', {
            limit,
            offset
        });
        return data.items;
    }

    async createAlbum(createAlbumInput: any) {
        const res = await this.post(`/`, {...createAlbumInput});
        res.artists = res.artistsIds;
        res.bands = res.bandsIds;
        res.tracks = res.trackIds;
        res.genres = res.genresIds;
        return res;
    }

    async updateAlbum(updateAlbumInput: any) {
        const res = await this.put(`/${updateAlbumInput.id}`, {...updateAlbumInput});
        res.artists = res.artistsIds;
        res.bands = res.bandsIds;
        res.tracks = res.trackIds;
        res.genres = res.genresIds;
        return res;
    }

    async deleteAlbum(id: string) {
        return await this.delete(`/${id}`);
    }
}
