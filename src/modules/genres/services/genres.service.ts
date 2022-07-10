const { RESTDataSource } = require('apollo-datasource-rest');

export class GenreAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = process.env.GENRES_URL;
    }

    willSendRequest(request: any) {
        request.headers.set('Authorization', `${this.context.token}`);
    }

    async getGenreByID(id: string) {
        return this.get(`/${id}`);
    }

    async getGenres(limit = 5, offset = 0) {
        const data = await this.get('/', {
            limit,
            offset
        });
        return data.items;
    }

    async createGenre(createGenreInput: any) {
        return await this.post('/', {...createGenreInput});
    }

    async updateGenre(updateGenreInput: any) {
        return await this.put(`/${updateGenreInput.id}`, {...updateGenreInput});
    }

    async deleteGenre(id: string) {
        return await this.delete(`/${id}`);
    }
}
