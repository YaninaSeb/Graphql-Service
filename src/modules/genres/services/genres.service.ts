const { RESTDataSource } = require('apollo-datasource-rest');

export class GenreAPI extends RESTDataSource {

    willSendRequest(request: any) {
        request.headers.set('Authorization', `${this.context.token}`);
    }

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
