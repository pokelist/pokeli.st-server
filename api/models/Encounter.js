/**
 * Encounter
 *
 * @module      :: Model
 * @description :: Represents an encounter attached to a pokemon
 * @docs	:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
    location: {
        type: 'STRING',
	    required: true
    },
    fateful: {
        type: 'BOOL',
        required: true
    },
    egg: {
        type: 'BOOL',
        required: true
    },
    eggLocation: {
        type: 'STRING'
    },
    level: {
        type: 'INT',
        required: true,
        min: '1',
        max: '100'
    },
    type: {
        type: 'STRING',
        required: true
    },
    date: {
        type: 'DATE',
        required: true
    },

    owner: {
        mode: 'pokemon'
    }
  }

};
