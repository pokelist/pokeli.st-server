/**
* User.js
*
* @description :: User of the website.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    scheme: true,

    attributes: {
        username: {
            type: "STRING",
            required: true,
            unique: true
        },
        email: {
            type: "EMAIL",
            required: true,
            unique: true
        },
        passports: {
            colllection: "Passport",
            via: "user"
        },
        pokemon: {
            collection: "Pokemon",
            via: "owner"
        }

    }
};
