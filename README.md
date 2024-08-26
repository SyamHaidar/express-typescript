# Express TypeScript

This is a sample setup Express using TypeScript i have been create.

## Feature

- Express
- TypeScript
- Sequelize
- PostgreSQL

## Setup

1. Create a Postgres Database
2. Setup `.env` file with your database configuration
3. Run `npm install`
4. Run `npm dev` for runnig app

## Folder Structure

- \_mock -> postman collection sample
- configs -> all configuration for app
- controllers -> logic for APIs
- dto -> custom Request and Response
- models -> database table model
- repositories -> logic for get data/query when needed
- routes -> route for APIs
- utils -> utility
- validation -> validation for Request data
- NOTE: Each `index.ts` file inside folder is use for short name when import all file inside directory folder (e.g `../configs` or `../dto`)

### Support

The setup not 100% clean and under development, feel free to use. Thank you.
