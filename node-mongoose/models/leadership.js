/**
 *
 * Created by admin on 2016/6/21.
 */

/**
 *   {
      "name": "Peter Pan",
      "image": "images/alberto.png",
      "designation": "Chief Epicurious Officer",
      "abbr": "CEO",
      "description": "Our CEO, Peter, . . ."
      }
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leaderShipSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

});
var Leadership = mongoose.model('Leader', leaderShipSchema);

module.exports = Leadership;

