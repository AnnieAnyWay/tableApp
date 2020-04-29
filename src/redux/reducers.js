// @flow
import {
    CREATE_TABLE,
    CONFIG_TABLE,
    INCREMENT,
    FIND_CLOSEST,
    CLEAR_CLOSEST,
    REMOVE_ROW,
    ADD_ROW
} from './actions';
import { createTable,
        getAverageOfCol,
        incrementByID,
        getClosest,
        removingRow,
        addRow
} from '../utils/tableHelper';
import { minInt, maxInt} from '../configs/intConfig';
import type {Action} from './actions';

export type CellData = {
    id: string,
    amount: number
}

export type Store = {
    rows: number,
    columns: number,
    closest: number,
    tableData: Array<Array<CellData>>,
    averageColArr: Array<string>,
    closestArr: Array<CellData>
}

const initialState: Store = {
    rows: null,
    columns: null,
    closest: null,
    tableData: [],
    averageColArr: [],
    closestArr: []
};

function appReducer(state: Store = initialState, action: any): Store {
    switch (action.type) {
        case CREATE_TABLE:
            const tableData = createTable(state.rows, state.columns, minInt, maxInt);
            const averageColArr = getAverageOfCol(state.rows, state.columns, tableData);
            return {
                ...state,
                tableData: tableData,
                averageColArr: averageColArr
            };
        case CONFIG_TABLE:
            return {
                ...state,
                rows: action.payload.rows,
                columns: action.payload.columns,
                closest: action.payload.closest
            };
        case INCREMENT:
            const incrementedTableData = [...incrementByID(action.payload, state.tableData)];
            return {
                ...state,
                tableData: incrementedTableData,
                averageColArr: getAverageOfCol(state.rows, state.columns, incrementedTableData),
                closestArr: getClosest(action.payload, incrementedTableData, state.closest)
            };
        case FIND_CLOSEST:
            return {
                ...state,
                closestArr: getClosest(action.payload, state.tableData, state.closest)
            };
        case CLEAR_CLOSEST:
            return {
                ...state,
                closestArr: initialState.closestArr
            };
        case REMOVE_ROW:
            const newTableData = [...removingRow(action.payload, state.tableData)];
            const newRows = state.rows - 1;
            return {
                ...state,
                tableData: newTableData,
                rows: newRows,
                averageColArr: getAverageOfCol(newRows, state.columns, newTableData)
            };
        case ADD_ROW:
            const updTableData = [...addRow(state.columns, state.tableData, minInt, maxInt)];
            const updRows = state.rows + 1;
            return {
                ...state,
                tableData: updTableData,
                rows: updRows,
                averageColArr: getAverageOfCol(updRows, state.columns, updTableData)
            };
         default:
            return state
    }
}

export default appReducer