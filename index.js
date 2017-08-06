//@flow
function range(start /*: number */, stop /*: number */, step /*: number */ = 1) {
    var result = [];
    if (step === 0) { return []; }
    if (start == null) { return []; }
    if (stop == null) {
        if (step > 0) {
            stop = start; start = 0;
        }
        if (step < 0) {
            stop = 0;
        }
    }

    if (!Number.isSafeInteger(start)) { throw new Error('unsafe start integer'); }
    if (!Number.isSafeInteger(stop)) { throw new Error('unsafe stop integer'); }
    if (!Number.isSafeInteger(step)) { throw new Error('unsafe step integer'); }
    if (!Number.isFinite(start) || !Number.isFinite(stop) || !Number.isFinite(step)) { return []; }
    if (start > stop && step > 0) { console.log('start>stop && step pos'); return []; }
    if (start < stop && step < 0) { console.log('start<stop && step neg'); return []; }

    var number /*: number */ = start;
    while (step > 0 ? number < stop : number > stop) {
        result.push(number);
        number += step;
    }

    return result;
}

module.exports = range;
