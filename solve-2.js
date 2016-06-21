/**
 *
 * Created by admin on 2016/6/14.
 */

var rect = require('./rectangle-2');

function solveRect(l, b) {
    console.log('Solving for rectangle with l=' + l + 'and b' + b);

    rect(l, b, function (err, rectangle) {
        if (err) {
            console.log(err);
        } else {
            console.log("The area of the rectangle :" + rectangle.area());
            console.log('The perimeter of the rectangle: ' + rectangle.perimeter());
        }
    });
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(-3, 5);