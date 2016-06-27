/**
 *
 * Created by admin on 2016/6/16.
 */

var express = require('express');
var bodyParser = require('body-parser');

var promoRouter = express.Router();
var Promotion = require('../models/promotions');

promoRouter.use(bodyParser.json());


promoRouter.route('/')
    .get(function (req, res, next) {
        Promotion.find({}, function (err, promotion) {
            if (err) {
                throw err;
            }
            res.json(promotion);
        })

    })
    .post(function (req, res, next) {
        Promotion.create(req.body, function (err, promotion) {
            if (err) {
                throw err;
            }
            console.log('Promotion created');
            var id = promotion._id;
            res.writeHead(200, {
                'Content-type': 'text/plain'
            });
            res.end('Add the promotion with id:' + id);
        })
    })
    .delete(function (req, res, next) {
        Promotion.remove({}, function (err, resp) {
            if (err) {
                throw err;
            }
            res.json(resp);
        })
    });
promoRouter.route('/:promotionId')
    .get(function (req, res, next) {
        Promotion.findById(req.params.promotionId, function (err, promotion) {
            if (err) {
                throw err;
            }
            res.json(promotion);
        })
    })
    .put(function (req, res, next) {
        Dishes.findByIdAndUpdate(req.params.promotionId, {
            $set: req.body
        }, {
            new: true
        }, function (err, promotion) {
            if (err) {
                throw err
            }
            res.json(promotion);
        });
    })
    .delete(function (req, res, next) {
        Promotion.findByIdAndRemove(req.params.promotionId, function (err, resp) {
            if (err) {
                throw err
            }
            res.json(resp);
        });
    });

module.exports = promoRouter;