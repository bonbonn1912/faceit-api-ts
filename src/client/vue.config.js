const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../../dist/client'),
    devServer : {
        proxy : {
            '/internal/api/getLastMatches' : {
                target : 'http://localhost:9999',
            },
            '/internal/api/getLastPlayers' : {
                target : 'http://localhost:9999',
            },   
        }
    }
};