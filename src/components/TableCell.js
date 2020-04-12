import React, { Component } from 'react';

class TableCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: null,
            id: null,
            clicked: false,
            hovered: false,
            colored: undefined,
            valPercent: null
        }
    }

    render() {
        const cellClass = this.props.colored ? 'table__cell table__cell_hovered' : 'table__cell';
        const stylePercent = {height: this.props.valPercent +'%'};


        return (
            <td className={cellClass}
                onClick={this.props.clicked}
                onMouseEnter={this.props.hovered}
                onMouseLeave={this.props.clear}>
                <b>{this.props.val}</b>

                {this.props.showPercent && (
                    <div className='percent-holder'>
                        <div className='percent-num'>{this.props.valPercent}%</div>
                        <div className='percent' style={stylePercent}></div>
                    </div>
                )}

            </td>
        )
    }
}

export default TableCell;