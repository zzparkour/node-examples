/**
 *
 * Created by admin on 2016/6/21.
 */

/**
 * {
      "name": "Weekend Grand Buffet",
      "image": "images/buffet.png",
      "label": "New",
      "price": "19.99",
      "description": "Featuring . . ."
}
 */
var mongoose = require('mongoose');
var assert = require('assert');

var Promotions = require('./models/promotions');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function () {
    console.log('Connected correctly to server');
    //create new dish

    Promotions.create({
        name: 'Weekend Grand Buffet',
        image: 'images/buffet.png',
        label: 'New',
        price: '19.99',
        description: 'Featuring...'
    }, function (err, dish) {
        if (err) {
            throw err
        }
        console.log('Promotion created');

        var id = dish._id;
        setTimeout(function () {
            Promotions.findByIdAndUpdate(id, {
                $set: {
                    description: 'Update description'
                }
            }, {
                new: true
            }).exec(function (err, dish) {
                if (err) {
                    throw err
                }
                console.log('Updated Promotion');
                console.log(dish);
                db.close();
              
            });
        }, 3000);
    });
});