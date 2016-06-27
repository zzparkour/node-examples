/**
 *
 * Created by admin on 2016/6/16.
 */

var express = require('express');
var bodyParser = require('body-parser');

var Leadership = require('../models/leadership');


var leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());


leaderRouter.route('/')
    .get(function (req, res, next) {
        Leadership.find({}, function (err, leader) {
            if (err) {
                throw err
            }
            res.json(leader);
        });
    })
    .post(function (req, res, next) {
        Leadership.create(req.body, function (err, leader) {
            if (err) {
                throw err;
            }
            console.log('leader created');
            var id = leader._id;
            res.write(200, {
                'Content-type': 'text/plain'
            });
            res.end('Added the leader with id:' + id);
        });
    })
    .delete(function (req, res, next) {
        Leadership.remove({}, function (err, resp) {
            if (err) {
                throw err;
            }
            res.json(resp);
        });
    });


leaderRouter.route('/:leadershipId')
    .get(function (req, res, next) {
        Leadership.findById(req.params.leadershipId, function (err, dish) {
            if (err) {
                throw err;
            }
            res.json(dish);
        });
    })
    .put(function (req, res, next) {
        Leadership.findByIdAndUpdate(req.params.leadershipId, {
            $set: req.body
        }, {
            new: true
        }, function (err, leader) {
            if (err) {
                throw err
            }
            res.json(leader);
        });
    })
    .delete(function (req, res, next) {
        Leadership.findByIdAndRemove(req.params.leadershipId, function (err, resp) {
            if (err) {
                throw err;
            }
            res.json(resp);
        });
    });
module.exports = leaderRouter;