#!/usr/bin/env node

var SwaggerClient = require('swagger-client');
var _ = require('lodash');
var jquery = require('jquery');

var swaggerParsers =
{
    '2.0': require('../parsers/2.0.js')
};

var url = 'http://localhost:8000/swagger.json';

var client = new SwaggerClient({
    url: url,
    swaggerRequestHeaders: '',
    success: function() {
        if (!_.has(swaggerParsers, client.swaggerVersion)) {
            throw new Error('Unsupported swagger version - ' + client.swaggerVersion);
        }
        swaggerParsers[client.swaggerVersion](client);
    }
});
