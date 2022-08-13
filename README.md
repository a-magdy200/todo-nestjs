
## Description

Basic TODO App built with Ionic (React), Nestjs, TypeORM

## Installation ( using docker )
- Download `docker-compose.yml` file
- Run `docker-compose up -d`

## Installation ( to run the code locally )

```bash
$ yarn install
```

## Environment
Create a local database, and create an `.env` file similar to `.env.example`
Example:
```dotenv
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=juleb_user
DATABASE_PASS=juleb
DATABASE_NAME=julebdb
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
