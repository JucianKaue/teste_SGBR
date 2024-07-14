## Start
docker compose up --build

## API endpoints

### Users endpoints

#### Create User
Registers a new user with the given email and password.
Endpoint: POST http://localhost:3000/users
Headers:
- Content-Type: application/json
{
    "email": "",
    "password": ""
}

#### Auth User
Authenticates the user and returns an access token.
Endpoint: POST http://localhost:3000/auth
Headers:
- Content-Type: application/json
{
    "email": "",
    "password": ""
}

### Places endpoints

#### Create Place
Creates a new place with the specified details.
Endpoint: POST http://localhost:3000/places
Headers:
- Authorization: Bearer {{authToken}}
- Content-Type: application/json
{
    "name": "",
    "city": "",
    "state": ""
}

#### Get Place
Retrieves details of the place with the specified ID.
Endpoint: POST http://localhost:3000/places/:id
Headers:
- Authorization: Bearer authToken

#### Get All Places
Retrieves a list of all places.
Endpoint: GET http://localhost:3000/places
Headers:
- Authorization: Bearer authToken

#### Get Places By Name
Retrieves a list of places that cointains the searched name.
Endpoint: GET http://localhost:3000/places?name=
Headers:
- Authorization: Bearer authToken

#### Edit Place
Updates the details of the place with the specified ID.
Endpoint: PATCH http://localhost:3000/places/:id
Headers:
- Authorization: Bearer authToken
- Content-Type: application/json

{
    "name": "",
    "city": "",
    "state": ""
}

#### Delete Place
Deletes the place with the specified ID.
Endpoint: DELETE http://localhost:3000/places/:id
Headers:
- Authorization: Bearer authToken
