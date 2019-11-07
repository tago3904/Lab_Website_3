const util = require('util');

///////////////////////////////////////////////////////
// Returns {line, column} of an index within the text.
function getIndexPos(text, index) {
    let lineIdx = 0, colIdx = index, pos = 0;
    do {
        pos = text.indexOf('\n', pos);
        if (pos === -1 || index < pos + 1) {
            break;
        }
        lineIdx++;
        pos += 1;
        colIdx = index - pos;
    } while (pos < index);
    return {
        line: lineIdx + 1,
        column: colIdx + 1
    };
}

///////////////////////////////////////////
// Returns a space gap for console output.
function messageGap(level) {
    return ' '.repeat(level * 4);
}

////////////////////////////////////////////////////
// Type inspection
function addInspection(type, cb) {
    type[util.inspect.custom] = cb;
}

module.exports = {
    getIndexPos,
    messageGap,
    addInspection
};
