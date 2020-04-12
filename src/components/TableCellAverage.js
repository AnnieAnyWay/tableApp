import React, { Component } from 'react';

class TableCellAverage extends Component {
    constructor(props) {
        super(props);
        this.state = {cell: null}
    }

    render() {
        return (
            <td className='table__cell table__cell_avr'>{this.props.cell}</td>
        )
    }
}

export default TableCellAverage;