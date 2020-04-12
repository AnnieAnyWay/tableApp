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

const initialState = {
    rows: null,
    columns: null,
    closest: null,
    tableData: [],
    averageColArr: [],
    closestArr: []
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TABLE:
            let tableData = createTable(state.rows, state.columns, {}, minInt, maxInt);
            let averageColArr = getAverageOfCol(state.rows, state.columns, tableData);
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
            let incrementedTableData = [...incrementByID(action.payload, state.tableData)];
            return {
                ...state,
                tableData: incrementedTableData,
                averageColArr: getAverageOfCol(state.rows, state.columns, incrementedTableData)
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
            let newTableData = [...removingRow(action.payload, state.tableData)];
            let newRows = state.rows - 1;
            return {
                ...state,
                tableData: newTableData,
                rows: newRows,
                averageColArr: getAverageOfCol(newRows, state.columns, newTableData)
            };
        case ADD_ROW:
            let updTableData = [...addRow(state.columns, state.tableData, minInt, maxInt)];
            let updRows = state.rows + 1;
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