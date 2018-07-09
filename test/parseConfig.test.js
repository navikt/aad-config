const parseConfig = require('../lib/parseConfig');
const { expect } = require('chai');

describe('parsing yaml config', () => {
    it('should fail on malformed input', () => {
        expect(() => parseConfig('[[[ ugyldig yaml')).to.throw();
    });

    it('parsing valid yaml', () => {
        expect(parseConfig(`
applications:
  - name: gosys
    token_payload:
      - navident
      - security_groups
    callback_uris:
      - http://localhost:8085/gosys/callback
      - https://gosys.nais.preprod.local/gosys/callback
      - https://gosys-t8.nais.preprod.local/gosys/callback
        `)).to.eql({
            applications: [{
                name: 'gosys',
                token_payload: [
                    'navident',
                    'security_groups'
                ],
                callback_uris: [
                    'http://localhost:8085/gosys/callback',
                    'https://gosys.nais.preprod.local/gosys/callback',
                    'https://gosys-t8.nais.preprod.local/gosys/callback'
                ]
            }]
        });
    });
});
