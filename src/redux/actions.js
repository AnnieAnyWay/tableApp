export const CREATE_TABLE = 'CREATE_TABLE';
export const CONFIG_TABLE = 'CONFIG_TABLE';
export const INCREMENT = 'INCREMENT';
export const FIND_CLOSEST = 'FIND_CLOSEST';
export const CLEAR_CLOSEST = 'CLEAR_CLOSEST';
export const REMOVE_ROW = 'REMOVE_ROW';
export const ADD_ROW = 'ADD_ROW';

export function createTable(payload) {
    return { type: CREATE_TABLE, payload }
}

export function configTable(payload) {
    return { type: CONFIG_TABLE, payload }
}

export function increment(payload) {
    return { type: INCREMENT, payload }
}

export function findClosest(payload) {
    return { type: FIND_CLOSEST, payload }
}

export function clearClosest() {
    return { type: CLEAR_CLOSEST }
}

export function removeRow(payload) {
    return { type: REMOVE_ROW, payload}
}

export function addRow() {
    return { type: ADD_ROW}
}