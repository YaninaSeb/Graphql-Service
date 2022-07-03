const { RESTDataSource } = require('apollo-datasource-rest');

export class GenreAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.GENRES_URL;
    }

    async getGenreByID(id: string) {
        return this.get(`/${id}`);
    }

    async getGenres() {
        const data = await this.get('/');
        return data.items;
    }
}