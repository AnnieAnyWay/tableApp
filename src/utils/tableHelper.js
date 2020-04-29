// @flow
import type {CellData} from '../redux/reducers';

const ID_SEPARATOR = '-';

export const randomInteger = (min: number, max: number): number=> {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

export const getCoordsFromId = (id: string): Array<number> => String(id).split(ID_SEPARATOR).map(Number);

export const getIdByCoords = (x: number, y: number): string => `${x}${ID_SEPARATOR}${y}`;

export const createTable = (rows: number, cols: number, min: number, max: number): Array<Array<CellData>> => {
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

export const getAverageOfCol = (rows: number, cols: number, arr: Array<Array<CellData>>) => {
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

export const incrementByID = (id: string, arr: Array<Array<CellData>>): Array<Array<CellData>> => {
    return arr.map(subArr => {
        return subArr.map(obj => {
            if(obj.id === id) {
                return {...obj, amount: ++obj.amount}
            }
            return obj
        });
    });
};

export const getClosest = (id: string, arrMatrix: Array<Array<CellData>>, closestCount: number): Array<CellData> => {
    const [x, y] = getCoordsFromId(id);

    const {amount} = arrMatrix[x][y];

    return arrMatrix
        .flat(1)
        .filter(function (cell: CellData): Array<CellData> {
            return cell.id !== id;
        })
        .sort((aCell: CellData, bCell: CellData) => {
            return Math.abs(amount - aCell.amount) - Math.abs(amount - bCell.amount);
        })
        .slice(0, closestCount);
};

export const removingRow = (index: number, arr: Array<Array<CellData>>): Array<Array<CellData>> => {
    let filteredArr = arr.filter((rows, i) => i !== index);
    filteredArr.map((row, i) => {
        return row.map((item, j) => {
            return item.id = getIdByCoords(i, j);
        })
    });
    return filteredArr
};

export const addRow = (cols: number, arr: Array<Array<CellData>>, min: number, max: number): Array<Array<CellData>> => {
    const addedRow = [];
    for (let i = 0; i < cols; ++i) {
        const id = `${arr.length}${ID_SEPARATOR}${i}`;
        const amount = randomInteger(min, max);
        addedRow.push({id: id, amount: amount})
    }
    return [...arr, addedRow]
};