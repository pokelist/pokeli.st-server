/**
* Pokemon.js
*
* @description :: Represents a Pokémon stored in the Database.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


module.exports = {
    attributes: {
        dexNum: {
            type: "INTEGER",
            min: "1",
            max: "719"
        },
        move1: {
            type: "INTEGER",
            required: true
        },
        move2: {
            type: "INTEGER",
            required: true
        },
        move3: {
            type: "INTEGER",
            required: true
        },
        move4: {
            type: "INTEGER",
            required: true
        },
        eggMove1: {
            type: "INTEGER"
        },
        eggMove2: {
            type: "INTEGER"
        },
        eggMove3: {
            type: "INTEGER"
        },
        eggMove4: {
            type: "INTEGER"
        },
        minIVHP: {
            type: "INTEGER",
            min: "0",
            max: "31",
            required: true
        },
        maxIVHP: {
            type: "INTEGER",
            min: "0",
            max: "31",
            required: true
        },
        minIVAtk: {
            type: "INTEGER",
            min: "0",
            max: "31",
            required: true
        },
        maxIVAtk: {
            type: "INTEGER",
            min: "0",
            max: "31",
            required: true
        },
        minIVDef: {
            type: "INTEGER",
            min: "0",
            max: "31",
            required: true
        },
        maxIVDef: {
            type: "INTEGER",
            min: "0",
            max: "31",
            required: true
        },
        minIVSpAtk: {
            type: "INTEGER",
            min: "0",
            max: "31",
            required: true
        },
        maxIVSpAtk: {
            type: "INTEGER",
            min: "0",
            max: "31",
            required: true
        },
        minIVSpDef: {
            type: "INTEGER",
            min: "0",
            max: "31",
            required: true
        },
        maxIVSpDef: {
            type: "INTEGER",
            min: "0",
            max: "31",
            required: true
        },
        minIVSpd: {
            type: "INTEGER",
            min: "0",
            max: "31",
            required: true
        },
        maxIVSpd: {
            type: "INTEGER",
            min: "0",
            max: "31",
            required: true
        },
        evHP: {
            type: "INTEGER",
            min: "0",
            max: "255"
        },
        evAtk: {
            type: "INTEGER",
            min: "0",
            max: "255"
        },
        evDef: {
            type: "INTEGER",
            min: "0",
            max: "255"
        },
        evSpAtk: {
            type: "INTEGER",
            min: "0",
            max: "255"
        },
        evSpDef: {
            type: "INTEGER",
            min: "0",
            max: "255"
        },
        evSpd: {
            type: "INTEGER",
            min: "0",
            max: "255"
        },
        ot: {
            type: "STRING",
            required: true
        },
        id: {
            type: "INTEGER",
            max: "65536",
            required: true
        },
        sid: {
            type: "INTEGER",
            max: "65536"
        },
        owner: {
            model: "User"
        },
        ability: {
            type: "INTEGER",
            required: true
        },
        gender: {
            type: "STRING",
            required: true
        },
        level: {
            type: "INTEGER",
            min: "1",
            max: "100"
        },
        shiny: {
            type: "BOOL",
            required: true
        },
        language: {
            type: "STRING",
            required: true
        },
        nickname: {
            type: "STRING"
        },
        nicknameable: {
            type: "BOOL"
        },
        nature: {
            type: "INTEGER"
        },
        pokeball: {
            type: "INTEGER"
        },
        pokerus: {
            type: "BOOL"
        },
        private: {
            type: "BOOL",
            required: true
        },
        manual: {
            type: "BOOL",
            required: true
        },

        encounter: {
            model: "encounter"
        }
    }
};
