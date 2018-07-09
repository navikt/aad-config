const fs = require('fs');

require('dotenv').config();

const parseConfig = require('./lib/parseConfig');

console.log(process.env.LOGIN_TOKEN);

const configStr = fs.readFileSync('config.yml', 'utf-8');

const data = parseConfig(configStr);

console.log(data);
