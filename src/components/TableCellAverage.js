// @flow
import React from 'react';

type Props = {
    cell: string
}

const TableCellAverage = ({ cell }: Props) => (

    <td className='table__cell table__cell_avr'>{cell}</td>
);

export default TableCellAverage;