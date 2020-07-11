require('dotenv').config();

// Creates environmental variable; gets passed along no matter where this goes
const env = process.env.NODE_ENV

const dev = {
  app: {
    // default ports
    port: parseInt(process.env.DEV_APP_PORT, 10) || 3030,
  },
  db: {
    //initial host of db connection
    host: process.env.DEV_DB_HOST || 'localhost',
    port: parseInt(process.env.DEV_DB_PORT, 10) || 5432,
    database: process.env.DEV_DB_NAME || 'dk',
    user: process.env.USER,
    password: null,
  },
  // for Redis
  // cache: {
  //   port: 6379,
  //   host: 'localhost'
  // },
};

// always either set an environmental or have default on other side of ||

const prod = {
  app: {
    port: parseInt(process.env.PROD_APP_PORT, 10) || 3000,
  },
  db: {
    host: process.env.PROD_DB_HOST || 'database',
    port: parseInt(process.env.TEST_DB_PORT, 10) || 5432,
    database: process.env.TEST_DB_NAME || 'productsPROD',
    user: process.env.PGUSER,
    password: process.env.PG_AWS_PASSWORD,
  },
  // cache: {
  //   port: 6379,
  //   host: 'cache',
  // },
};