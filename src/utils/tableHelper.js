const ID_SEPARATOR = '-';

export const randomInteger = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

export const getCoordsFromId = (id) => String(id).split(ID_SEPARATOR).map(Number);

export const getIdByCoords = (x, y) => `${x}${ID_SEPARATOR}${y}`;

export const createTable = (rows, cols, initial, min, max) => {
    return new Array(rows)
        .fill([])
        .map((_, row) => {
            return new Array(cols)
                .fill([])
                .map((_, col) => ({
                    id: getIdByCoords(row, col),
                    amount: randomInteger(min, max),
                }))
        })
};

export const getAverageOfCol = (rows, cols, arr) => {
    let total = 0;
    let average = 0;
    const arrOfAverages = [];

    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
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
    const [x, y] = getCoordsFromId(id);
    const newArr = arr.map(subArr => {
        return subArr.slice().map(obj => Object.assign({}, obj));
    });
    newArr[x][y].amount++;
    return newArr
};

export const getClosest = (id, arrMatrix, closestCount) => {
    const [x, y] = getCoordsFromId(id);

    const {amount} = arrMatrix[x][y];

    return arrMatrix
        .flat(1)
        .filter(function (cell) {
            return cell.id !== id;
        })
        .sort((aCell, bCell) => {
            return Math.abs(amount - aCell.amount) - Math.abs(amount - bCell.amount);
        })
        .slice(0, closestCount);
};

export const removingRow = (index, arr) => {
    let filteredArr = arr.filter((rows, i) => i !== index);
    filteredArr.forEach((row, i, arr) => {
        row.forEach((col, j) => {
            arr[i][j].id = getIdByCoords(i, j);
        })
    });
    return filteredArr
};

export const addRow = (cols, arr, min, max) => {
    const addedRow = [];
    for (let i = 0; i < cols; ++i) {
        const id = `${arr.length}${ID_SEPARATOR}${i}`;
        const amount = randomInteger(min, max);
        addedRow.push({id: id, amount: amount})
    }
    return [...arr, addedRow]
};