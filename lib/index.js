var api = require('./api');

exports.connect = function(host)
{
    return new api(host);
}