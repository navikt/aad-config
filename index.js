// const fs = require('fs');

require('dotenv').config();

// const parseConfig = require('./lib/parseConfig');
const getAccessToken = require('./lib/getAccessToken');
const getGroup = require('./lib/getGroup');
// console.log(process.env.LOGIN_TOKEN);

// const configStr = fs.readFileSync('config.yml', 'utf-8');

// const data = parseConfig(configStr);
const groupid = '0e6bdb4c-7aad-4dd2-80da-44cb00c09c9f';


async function doStuff() {
    const accessToken = await getAccessToken({
        clientId: process.env.AZURE_APP_ID,
        clientSecret: process.env.AZURE_APP_SECRET,
        tenantId: process.env.AZURE_TENANT_ID
    });


    await getGroup({
        accessToken,
        groupid
    });
}


doStuff();
