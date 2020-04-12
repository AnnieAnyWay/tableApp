export const createMatrix =  (rows, cols, initial) => {
    let arr = [];
    for (let i = 0; i < rows; ++i) {
        let columns = [];
        for (let j = 0; j < cols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
};

export const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

export const createTable = (rows, cols, initial, min, max) => {
    return createMatrix(rows, cols, initial)
        .map((item, i, arr) => {
            return item.map((item2, j) => {
                let id = +`${i + 1}${j + 1}`;
                let amount = randomInteger(min, max);
                return arr[i][j] = {id: id, amount: amount}
            })
        });
};

export const getAverageOfCol = (rows, cols, arr) => {
    let total = 0;
    let average = 0;
    let arrOfAverages = [];

    for (let col = 0; col < cols; ++col) {
        for (let row = 0; row < rows; ++row) {
            total += arr[row][col].amount;
        }
        average = total / rows;
        arrOfAverages.push(average.toFixed(2));
        total = 0;
        average = 0;
    }
    return arrOfAverages;
};

export const incrementByID = (id, arr) => {
    let splitId = [...id+''].map(n=>+n);
    ++arr[splitId[0]-1][splitId[1]-1].amount;
    return arr
};

export const getClosest = (id, arrMatrix, x) => {
    let arrLinear = [];
    let resultArr = [];

    arrMatrix.forEach(item => {
        item.forEach(item2 => arrLinear.push(item2));
    });

    arrLinear = arrLinear.filter(function( item ) {
        return item.id !== id;
    });

    let splitId = [...id+''].map(n=>+n);
    const amount = arrMatrix[splitId[0]-1][splitId[1]-1].amount;

    for (let i = 0; i < x; i++) {
        let result = arrLinear.reduce((prev, curr) => Math.abs(curr.amount - amount) < Math.abs(prev.amount - amount) ? curr : prev);
        resultArr.push(result);
        arrLinear = arrLinear.filter(function( item ) {
            return item.id !== result.id;
        });
        result = {};
    }

    return resultArr;
};

export const removingRow = (index, arr) => {
    arr = arr.filter((item, i) => item[i] !== item[index]);
    arr.forEach((item, i, arr) => {
        item.forEach((item2, j) => {
            arr[i][j].id = +`${i + 1}${j + 1}`;
        })
    });
    return arr
};

export const addRow = (cols, arr, min, max) => {
    let addedRow = [];
    for (let i = 0; i < cols; ++i) {
        let id = +`${cols + 1}${i + 1}`;
        let amount = randomInteger(min, max);
        addedRow.push({id: id, amount: amount})
    }
    arr.push(addedRow);
    return arr
};