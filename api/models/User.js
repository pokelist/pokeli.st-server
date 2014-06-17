/**
* User.js
*
* @description :: User of the website.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        username: {
            type: "STRING",
            required: true
        },
        email: {
            type: "EMAIL",
            required: true
        },
        password: {
            type: "STRING",
            required: true
        },
        pokemon: {
            collection: "Pokemon",
            via: "owner"
        }

    }
};
