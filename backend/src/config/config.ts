

import config = require ("dotenv");

config.config();

const envConfig={
    port : process.env.PORT,
    mongodbString: process.env.MONGODB_URL,
    backendurl :process.env.BACKEND_URL,
    environment:process.env.NODE_ENV,
    frontendurl:process.env.FORNTEND_URL
}

export = envConfig
