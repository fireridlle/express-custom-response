/*
 * express-custom-response
 * https://github.com/SteffenLanger/express-custom-response
 *
 * Based on work by Sergii Zinkevych @https://github.com/fireridlle/express-custom-response
 *
 * Copyright (c) 2016 Steffen Langer
 * Licensed under the MIT license.
 */

'use strict';

var express      = require('express'),
    fs           = require('fs'),
    /**
     * Adds all files to the express reponse object
     * @param responsesDir Path to directory containing the response files
     */
    addResponses = function (responsesDir) {
        // Check if directory exists
        if (fs.existsSync(responsesDir)) {

            // Get user responses
            var userResponses = fs.readdirSync(responsesDir);

            // Add user responses to the express response object
            userResponses.forEach(function (reponseFileName) {
                var responseName               = reponseFileName.split('.')[0];
                express.response[responseName] = require(responsesDir + '/' + reponseFileName);
            });

        }
        else {
            throw Error('The custom responses directory does not exist.');
        }
    };

module.exports = function (responsesDir) {

    // Add default responses
    addResponses(__dirname + '/default');

    // Add custom responses
    if(responsesDir) {
        addResponses(responsesDir);
    }
};
