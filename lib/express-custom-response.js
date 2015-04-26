/*
 * express-custom-response
 * https://github.com/fireridlle/express-custom-response
 *
 * Copyright (c) 2015 Sergii Zinkevych
 * Licensed under the MIT license.
 */

'use strict';

var express = require('express'),
    fs = require('fs')


var defaultReponse = ['serverError', 'validation', 'forbidden', 'notFound', 'ok'];


module.exports = function(reponse_path){
  //check if directory exists
  if(fs.existsSync(reponse_path)){
    //get user reponses
    var userRes = fs.readdirSync(reponse_path);

    //add user reponses
    userRes.forEach(function(response){
      var reponseName = response.split('.')[0];
      express.response[reponseName] = require(reponse_path + '/' + response);
    });

    //add default reponses
    defaultReponse.forEach(function(reponseName){
      //if user didn't override default reponse
      if(!express.response[reponseName]){
        express.response[reponseName] = require(__dirname + '/default/' + reponseName + '.js');
      }
    })


  }
}
