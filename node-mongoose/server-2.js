/**
 * Created by admin on 2016/6/21.
 */
var mongoose = require('mongoose');
assert = require('assert');
var Dishes = require('./models/dishes-1');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log('Connected correctly to server');

    Dishes.create({
        name: 'server-2Pizza',
        description: 'Test'
    },function (err, dish) {
        if (err) {
            throw err;
        }
        console.log('Dish created');
        console.log(dish);

        var id = dish._id;

        //get all the dishes
        setTimeout(function () {
            Dishes.findByIdAndUpdate(id, {
                $set: {
                    description: 'update server-2Pizza to haha'
                }
            }, {
                new: true
            }).exec(function (err, dish) {
                if (err) {
                    throw err
                }
                console.log('Update Dish');
                console.log(dish);

                db.close();
            });
        },3000);
    });
});


