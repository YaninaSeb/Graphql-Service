# Graphql-Service

## Installing
1. git clone https://github.com/YaninaSeb/Graphql-Service.git
2. git checkout develop
3. npm install

## Starting
1. ```npm run start``` or ```npm run start:dev```
2. open http://localhost:3000/graphql
 

## Using

### Users module

- **register**
    ```
    mutation Register($registerUserInput: RegisterUserInput!) {
        register(registerUserInput: $registerUserInput) {
            id
            firstName
            secondName
            password
            email
        }
    }
    ```

    *input example*
    ```
    {
        "registerUserInput": {
            "firstName": "Yana",
            "lastName": "Seb",
            "password": "ZyfZyf123",
            "email": "yana@mail.ru"
        }
    }
    ```

    *response example*
    ```
    {
        "data": {
            "register": {
            "id": "62cb2faa2366405ad98a9ac8",
            "firstName": "Yana",
            "secondName": null,
            "password": "$2b$10$YEercjGhHzgFwC8dBXZUUeCDSVhwjKOBCT.R9wMMn4SEdBWic7YOe",
            "email": "yana@mail.ru"
            }
        }
    }
    ```



- **jwt**
    ```
    query Jwt($email: String!, $password: String!) {
        jwt(email: $email, password: $password) {
            token
        }
    }
    ```

    *input example*
    ```
    {
        "email": "yana@mail.ru"
        "password": "ZyfZyf123",
    }
    ```

    *response example*
    ```
    {
        "data": {
            "jwt": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiMmZhYTIzNjY0MDVhZDk4YTlhYzgiLCJmaXJzdE5hbWUiOiJZYW5hIiwibGFzdE5hbWUiOiJTZWIiLCJlbWFpbCI6InlhbmFAbWFpbC5ydSIsImlhdCI6MTY1NzQ4MzQ1Nn0.Sq_1-4bjNF-yJ9ucxx3bCBjXL9ayd9ZpddWU4O1sUgg"
            }
        }
    }
    ```





- **user**
    ```
    query User($userId: ID!) {
        user(id: $userId) {
            id
            firstName
            secondName
            password
            email
        }
    }
    ```

    *input example*
    ```
    {
        "userId": "62cb2faa2366405ad98a9ac8"
    }
    ```

    *response example*
    ```
    {
        "data": {
            "user": {
            "id": "62cb2faa2366405ad98a9ac8",
            "firstName": "Yana",
            "secondName": null,
            "password": "$2b$10$YEercjGhHzgFwC8dBXZUUeCDSVhwjKOBCT.R9wMMn4SEdBWic7YOe",
            "email": "yana@mail.ru"
            }
        }
    }
    ```

### Artist module

- **artist**
    ```
    query Artist($artistId: ID!) {
        artist(id: $artistId) {
            id
            firstName
            secondName
            middleName
            birthDate
            birthPlace
            country
            bands {
                id
                name
            }
            instruments
        }
    }
    ```

    *input example*
    ```
    {
        "artistId": "62c35bfd31bf00d02598cb22"
    }
    ```

    *response example*
    ```
    "data": {
        "artist": [
        {
            "id": "62c35bfd31bf00d02598cb22",
            "firstName": "Adam",
            "secondName": "Levine",
            "middleName": "Adam Levine",
            "birthDate": "24/07/1979",
            "birthPlace": "LA",
            "country": "USA",
            "bands": [
                {
                    "id": "62c89d3274d34744a3f98faf",
                    "name": "Maroon"
                }
            ],
            "instruments": ["electric guitar"]
        }
    }
    ```

- **artists**
    ```
    query Artists {
        artists {
            id
            firstName
            secondName
            middleName
            birthDate
            birthPlace
            country
            bands {
                id
                name
            }
            instruments
        }
    }
    ```

    *response example*
    ```
    "data": {
        "artists": [
        {
            "id": "62c35bfd31bf00d02598cb22",
            "firstName": "Adam",
            "secondName": "Levine",
            "middleName": "Adam Levine",
            "birthDate": "24/07/1979",
            "birthPlace": "LA",
            "country": "USA",
            "bands": [
                {
                    "id": "62c89d3274d34744a3f98faf",
                    "name": "Maroon"
                }
            ],
            "instruments": ["electric guitar"]
        },
        {
            "id": "62c35bfd31bf00d02598cb27",
            "firstName": "Gordon",
            "secondName": "Matthew",
            "middleName": "Gordon Matthew",
            "birthDate": "02/10/1951",
            "birthPlace": "Wallsend",
            "country": "England",
            "bands": [
                {
                    "id": "22c89d3274d34744a3f98faf",
                    "name": "Sting"
                }
            ],
            "instruments": ["bass guitar", "guitar"]
        }
    }
    ```

- **createArtist**
   ```
    mutation CreateArtist($createArtistInput: CreateArtistInput!) {
        createArtist(createArtistInput: $createArtistInput) {
            id
            firstName
            secondName
            middleName
            birthDate
            birthPlace
            country
            bands {
                name
            }
            instruments
        }
    }
    ```
    *input example*
    ```
    {
        "createArtistInput": {
            "firstName": "Adam",
            "secondName": "Levine",
            "middleName": "Adam Levine",
            "birthDate": "24/07/1979",
            "birthPlace": "LA",
            "country": "USA",
            "bandsIds": ["62c89d3274d34744a3f98faf"],
            "instruments": ["electric guitar"]
        }
    }
    ```

    *Headers*
    ```
    {
        "Authorization": "Bearer {token_string}"
    }
    ```

    *response example*
    ```
    "data": {
        "createArtist": [
        {
            "id": "62c35bfd31bf00d02598cb22",
            "firstName": "Adam",
            "secondName": "Levine",
            "middleName": "Adam Levine",
            "birthDate": "24/07/1979",
            "birthPlace": "LA",
            "country": "USA",
            "bands": [
                {
                    "id": "62c89d3274d34744a3f98faf",
                    "name": "Maroon"
                }
            ],
            "instruments": ["electric guitar"]
        }
    }
    ```

- **updateArtist**
    ```
    mutation UpdateArtist($updateArtistInput: UpdateArtistInput) {
        updateArtist(updateArtistInput: $updateArtistInput) {
            id
            firstName
            secondName
            middleName
            birthDate
            birthPlace
            country
            bands {
                name
            }
            instruments
        }
    }
    ```

    *input example*
    ```
    {
        "updateArtistInput": {
            "id": "62c35bfd31bf00d02598cb22"
            "firstName": "Adam",
            "secondName": "Levine",
            "middleName": "Adam Levine",
            "instruments": ["electric guitar", "guitar"]
        }
    }
    ```

    *Headers*
    ```
    {
        "Authorization": "Bearer {token_string}"
    }
    ```

    *response example*
    ```
    "data": {
        "updateArtist": [
        {
            "id": "62c35bfd31bf00d02598cb22",
            "firstName": "Adam",
            "secondName": "Levine",
            "middleName": "Adam Levine",
            "instruments": ["electric guitar", "guitar"]
        }
    }
    ```

- **deleteArtist**
    ```
    mutation DeleteArtist($deleteArtistId: ID!) {
        deleteArtist(id: $deleteArtistId) {
            acknowledged
            deletedCount
        }
    }
    ```

    *input example*
    ```
    {
        "deleteArtistId": "62c35bfd31bf00d02598cb22"
    }
    ```

    *Headers*
    ```
    {
        "Authorization": "Bearer {token_string}"
    }
    ```

    *response example*
    ```
    {
        "data": {
            "deleteArtist": {
            "acknowledged": true,
            "deletedCount": 1
            }
        }
    }
    ```

### Analogue usage for Genres module, Bands module, Tracks module, Albums module, Favourites module
