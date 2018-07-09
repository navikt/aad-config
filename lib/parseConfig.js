const yaml = require('js-yaml');

module.exports = function parseConfig(str) {
    const doc = yaml.safeLoad(str);
    return doc;
};
