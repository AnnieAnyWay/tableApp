// @flow
import React from 'react';
import type {CellData} from '../redux/reducers';

type Props = {
    arr: Array<CellData>,
    hovered: () => void,
    left: () => void
}

const TableColSum = ({arr, hovered, left}: Props) => (

    <td className='table__cell table__cell_sum' onMouseEnter={hovered}
        onMouseOut={left}>
        {arr.reduce((a, b) => a + (b.amount || 0), 0)}
    </td>
);

export default TableColSum;