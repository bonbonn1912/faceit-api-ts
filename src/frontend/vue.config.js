const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../../dist/frontend'),
    devServer : {
        proxy : {
            '/internal/api/getallcurrentgames' : {
                target : 'http://localhost:9999',
            }
        }
    }
};