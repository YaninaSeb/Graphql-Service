const { RESTDataSource } = require('apollo-datasource-rest');

export class FavouriteAPI extends RESTDataSource {

    willSendRequest(request: any) {
        request.headers.set('Authorization', `${this.context.token}`);
    }

    constructor() {
        super();
        this.baseURL = process.env.FAVOURITES_URL;
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

    async addTrack(addTrackInput: any) {
        await this.put('/add', {...addTrackInput})
    }

    async addBand(addBandInput: any) {
        await this.put('/add', {...addBandInput})
    }

    async addArtist(addArtistInput: any) {
        await this.put('/add', {...addArtistInput})
    }

    async addGenre(addGenreInput: any) {
        await this.put('/add', {...addGenreInput})
    }

}
