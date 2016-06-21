/**
 *
 * Created by admin on 2016/6/21.
 */

var mongoose = require('mongoose');
var assert = require('assert');

var Dishes = require('./models/dishes-3');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function () {
    console.log('Connected correctly to server');
    //create new dish

    Dishes.create({
        name: 'New Dish',
        description: 'test',
        comments: [{
            rating: 3,
            comment: 'This is insane',
            author: 'Matt Daemon'
        }]
    }, function (err, dish) {
        if (err) {
            throw err
        }
        console.log('Dish created');

        var id = dish._id;
        setTimeout(function () {
            Dishes.findByIdAndUpdate(id, {
                $set: {
                    description: 'Update description'
                }
            }, {
                new: true
            }).exec(function (err, dish) {
                if (err) {
                    throw err
                }
                console.log('Updated Dish');
                console.log(dish);

                dish.comments.push({
                    rating: 5,
                    comment: 'I\'m getting a sinking feeling!',
                    author:'Lenardo di Carpaccio'
                });
                dish.save(function (err, dish) {
                    console.log('update comments!');
                    console.log(dish);

                    db.close();
                })
            });
        }, 3000);
    });
});