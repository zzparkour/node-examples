/**
 *
 * Created by admin on 2016/6/21.
 */


var mongoose = require('mongoose');
var assert = require('assert');

var Leadership = require('./models/leadership');

var url = 'mongodb://localhost:27017/conFusion';
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function () {
    console.log('Connected correctly to server');
    //create new dish

    Leadership.create({
        name: 'Zhang rubing',
        image: 'images/cansas.png',
        designation: 'aaa',
        abbr: 'CTO',
        description: 'test'
    }, function (err, leader) {
        if (err) {
          throw err
        }
        console.log('Leadership created');

        var id = leader._id;
        setTimeout(function () {
            Leadership.findByIdAndUpdate(id, {
                $set: {
                    description: 'Update leadership'
                }
            }, {
                new: true
            }).exec(function (err, leader) {
                if (err) {
                    throw err
                }
                console.log('Updated leadership');
                console.log(leader);
                db.close();
            });
        }, 3000);
    });
});
