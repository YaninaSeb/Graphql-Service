const { RESTDataSource } = require('apollo-datasource-rest');

export class UserAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_URL;
    }

    async getUser(id: string) {
        return this.get(`/${id}`);
    }

    async registerUser(userdata: any) {
        const data = await this.post('/register', {...userdata});
        return data;
    }

    async getJWT(email: string, password: string) {
        const data = await this.post('/login', {
            email,
            password
        });
        this.context.token = data.jwt
        console.log(this.context.token);
        return data
    }

}