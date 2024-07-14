## Start
docker compose up --build

## API endpoints

### Users endpoints

#### Create User
<p>Registers a new user with the given email and password.</p>
<p>Endpoint: POST http://localhost:3000/users</p>
<p>Headers:<p>
- Content-Type: application/json
{
    "email": "",
    "password": ""
}

#### Auth User
<p>Authenticates the user and returns an access token.</p>
<p>Endpoint: POST http://localhost:3000/auth</p>
<p>Headers:</p>
- Content-Type: application/json
{
    "email": "",
    "password": ""
}

### Places endpoints

#### Create Place
<p>Creates a new place with the specified details.</p>
<p>Endpoint: POST http://localhost:3000/places</p>
<p>Headers:</p>
- Authorization: Bearer {{authToken}}
- Content-Type: application/json
{
    "name": "",
    "city": "",
    "state": ""
}

#### Get Place
<p>Retrieves details of the place with the specified ID.</p>
<p>Endpoint: POST http://localhost:3000/places/:id</p>
<p>Headers:</p>
- Authorization: Bearer authToken

#### Get All Places
<p>Retrieves a list of all places.</p>
<p>Endpoint: GET http://localhost:3000/places</p>
<p>Headers:</p>
- Authorization: Bearer authToken

#### Get Places By Name
<p>Retrieves a list of places that cointains the searched name.</p>
<p>Endpoint: GET http://localhost:3000/places?name=</p>
<p>Headers:</p>
- Authorization: Bearer authToken

#### Edit Place
<p>Updates the details of the place with the specified ID.</p>
<p>Endpoint: PATCH http://localhost:3000/places/:id</p>
<p>Headers:</p>
- Authorization: Bearer authToken
- Content-Type: application/json

{
    "name": "",
    "city": "",
    "state": ""
}

#### Delete Place
<p>Deletes the place with the specified ID.</p>
<p>Endpoint: DELETE http://localhost:3000/places/:id</p>
<p>Headers:</p>
- Authorization: Bearer authToken
