/**
 *
 * Created by admin on 2016/6/14.
 */

var rect = require('./rectangle-1');

function solveRect(l, b) {
    console.log('Solving for rectangle with l=' + l);

    if (l < 0 || b < 0) {
        console.log('rectangle dimensions should be greater than zero: l= ' + l);
    } else {
        console.log('the area :' + rect.perimeter(l, b));
        console.log('the perimeter:' + rect.perimeter(l, b));
    }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(-3, 5);
