const redis = require('redis');
const client = redis.createClient();

client.on('error', function(err) {
    console.log(err);
});

module.exports = client;