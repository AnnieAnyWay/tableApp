// @flow
import type {TableConfigState} from '../components/TableConfig';

export const CREATE_TABLE = 'CREATE_TABLE';
export const CONFIG_TABLE = 'CONFIG_TABLE';
export const INCREMENT = 'INCREMENT';
export const FIND_CLOSEST = 'FIND_CLOSEST';
export const CLEAR_CLOSEST = 'CLEAR_CLOSEST';
export const REMOVE_ROW = 'REMOVE_ROW';
export const ADD_ROW = 'ADD_ROW';

export type Action = {
    type: string,
    payload?: any
}

export function createTable(): any {
    return { type: CREATE_TABLE }
}

export function configTable(payload: TableConfigState): any {
    return { type: CONFIG_TABLE, payload }
}

export function increment(payload: string): any {
    return { type: INCREMENT, payload }
}

export function findClosest(payload: string): any {
    return { type: FIND_CLOSEST, payload }
}

export function clearClosest(): any {
    return { type: CLEAR_CLOSEST }
}

export function removeRow(payload: number): any {
    return { type: REMOVE_ROW, payload}
}

export function addRow(): any {
    return { type: ADD_ROW}
}