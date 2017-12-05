function matrixArray(rows, columns) {
    const arr = [];
    for(let i = 0; i < rows; i++){
        arr[i] = [];
        for(let j = 0; j < columns; j++){
            arr[i][j] = -1;
        }
    }
    return arr;
}

const result = matrixArray(8, 8);

function fillArray([a, b], step) {
    const x = a - 1, y = b - 1;
    if (x < 0 || x > 7) {
        return;
    }
    if (y < 0 || y > 7) {
        return;
    }
    if (result[x][y] !== -1 && result[x][y] < step) {
        return;
    }
    result[x][y] = step;
    const nextStep = step + 1;

    const x1 = a - 2, y1 = b - 1;
    const x2 = a - 2, y2 = b + 1;
    const x3 = a - 1, y3 = b + 2;
    const x4 = a + 1, y4 = b + 2;
    const x5 = a + 2, y5 = b + 1;
    const x6 = a + 2, y6 = b - 1;
    const x7 = a + 1, y7 = b - 2;
    const x8 = a - 1, y8 = b - 2;

    fillArray([x1, y1], nextStep);
    fillArray([x2, y2], nextStep);
    fillArray([x3, y3], nextStep);
    fillArray([x4, y4], nextStep);
    fillArray([x5, y5], nextStep);
    fillArray([x6, y6], nextStep);
    fillArray([x7, y7], nextStep);
    fillArray([x8, y8], nextStep);
}

module.exports = function canReach(startPos, finalPos, steps) {
    fillArray(startPos, 0);
    return result[finalPos[0] - 1][finalPos[1] - 1] === steps;
};
