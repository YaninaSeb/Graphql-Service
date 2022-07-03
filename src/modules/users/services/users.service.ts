const { RESTDataSource } = require('apollo-datasource-rest');

export class UserAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_URL;
    }

    async getUser(id: string) {
        return this.get(`/${id}`);
    }
}