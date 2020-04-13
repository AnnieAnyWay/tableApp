import React from 'react';

const TableColSum = ({arr, hovered, left}) => (

    <td className='table__cell table__cell_sum' onMouseEnter={hovered}
        onMouseOut={left}>
        {arr.reduce((a, b) => a + (b.amount || 0), 0)}
    </td>
);

export default TableColSum;