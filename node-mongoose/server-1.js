/**
 *
 * Created by admin on 2016/6/21.
 */


var mongoose = require('mongoose');

var assert = require('assert');

var Dishes = require('./models/dishes-1');

//Connection URL
var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log('Connected correctly to server');
    //creat new user
    var newDish = Dishes({
        name: 'Uthapizza-mongoose schema',
        description: 'Test'
    });

    //save user
    newDish.save(function (err) {
        if (err) {
            throw err;
        }
        //get all the users
        Dishes.find({}, function (err, dishes) {
            if (err) {
                throw err;
            }
            console.log(dishes);
            db.close();
        });
    });
});
