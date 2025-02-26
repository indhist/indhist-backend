require('dotenv').config();
require('dotenv-safe').config({
  allowEmptyValues: true,
  path: './.config/.env',
  example: './.env.example'
});

module.exports = {
  port: process.env.PORT,
  dbConfig: {
    DB_HOST: process.env.DB_HOST,
    DB_POST: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD
  }
};
