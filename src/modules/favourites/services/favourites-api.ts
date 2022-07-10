const { RESTDataSource } = require('apollo-datasource-rest');

export class FavouriteAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = process.env.FAVOURITES_URL;
    }

    willSendRequest(request: any) {
        request.headers.set('Authorization', `${this.context.token}`);
    }

    async getFavourites() {
        if (this.context.token) {
            const res = await this.get('/');
            return res
        }
        else {
            console.log('User not logged!')
        }
    }

    async addTrack(id: string) {
        return await this.put('/add', {
            id,
            type: "tracks"
        })
    }

    async addBand(id: string) {
       return await this.put('/add', {
            id,
            type: "bands"
        })
    }

    async addArtist(id: string) {
        const res = await this.put('/add', {
            id,
            type: "artists"
        })
        return res
    }

    async addGenre(id: string) {
        return await this.put('/add', {
            id,
            type: "genres"
        })
    }
}
