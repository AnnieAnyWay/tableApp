import React, { Component } from 'react';

class TableColSum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }

    render() {
        return (
            <td className='table__cell table__cell_sum' onMouseEnter={this.props.hovered}
                onMouseOut={this.props.left}>
                {this.props.arr.reduce((a, b) => a + (b.amount || 0), 0)}
            </td>
        )
    }
}

export default TableColSum;