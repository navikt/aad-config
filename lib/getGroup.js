const request = require('request-promise');

module.exports = async function getGroup({
    accessToken, groupid
}) {
    const response = await request.get({
        headers: { 'content-type': 'application/json' },
        url: `https://graph.microsoft.com/beta/groups/${groupid}`,
        auth: { bearer: accessToken }
    });
    console.log(response);
};
