const axios = require('axios');
const utilities = require('./utilities');

exports.getProperties = function(body){
    return new Promise(function(resolve, reject){
        var url = "https://api-prod.corelogic.com/trestle/odata" + "/Property";
        var headers = utilities.createHeaders(body.access_token);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}


exports.getMembers = function(body){
    return new Promise(function(resolve, reject){
        var url = "https://api-prod.corelogic.com/trestle/odata" + "/Member";
        var headers = utilities.createHeaders(body.access_token);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}


exports.getOffices = function(body){
    return new Promise(function(resolve, reject){
        var url = "https://api-prod.corelogic.com/trestle/odata" + "/Office";
        var headers = utilities.createHeaders(body.access_token);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}


exports.getOpenHouses = function(body){
    return new Promise(function(resolve, reject){
        var url = "https://api-prod.corelogic.com/trestle/odata" + "/Openhouse";
        var headers = utilities.createHeaders(body.access_token);
        var options = {
            url: url,
            method: 'GET',
            headers: headers
        };
        axios(options).then(function(result){
            resolve(result.data);
        }).catch(function(err){
            reject(utilities.processAxiosError(err));
        });
    });
}