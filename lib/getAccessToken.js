const request = require('request-promise');

module.exports = async function getAccessToken({
    clientId, clientSecret, tenantId
}) {
    try {
        // Setter parametere for Login URL mot graph.microsoft.com
        const parameters = {
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
            resource: 'https://graph.microsoft.com'
        };

        const tokenURI = `https://login.microsoftonline.com/${tenantId}/oauth2/token`;
        const response = await request.post(tokenURI, { form: parameters });
        const responseJSON = JSON.parse(response);
        console.log('accerss token: ', responseJSON.access_token);
        return responseJSON.access_token;
    } catch (e) {
        console.error('Could not get access_token', e);
        throw e;
    }
};
