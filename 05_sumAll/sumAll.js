const sumAll = function(start, end) {
    if(typeof start !== typeof end || start < 0 || end < 0 || start % 1 !== 0 || end % 1 !== 0 ) {
        return 'ERROR';
    }
    if(start > end) {
        const temp = start;
        start = end;
        end = temp;
    }
    sum = 0;
    for(let i = start; i <= end; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
