import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableCell from './TableCell';
import TableColSum from './TableColSum';
import TableCellAverage from './TableCellAverage';
import {increment,
        findClosest,
        clearClosest,
        removeRow,
        addRow
} from '../redux/actions';

class Table extends Component{
    constructor(props) {
        super(props);
        this.state = {showPercent: null}
    }

    setPercent = (index) => {
        this.setState({showPercent: index});
    };

    render() {

        return (
            <div className='table-container'>
            <table className='table'>
                <tbody>
                    {this.props.tableData.map((item, index) => {
                        return (
                            <tr className='table__row'
                                key={`${index}-row`}>
                                {item.map((cell) => {
                                    const colored = this.props.closestArr.find(closestItem => {
                                       return cell.id === closestItem.id;
                                    });

                                    const sum = item.reduce((a, b) => a + (b.amount || 0), 0);
                                    const percent = ((cell.amount / sum) * 100).toFixed(0);

                                    return <TableCell
                                         clicked={() => this.props.onIncrement(cell.id)}
                                         hovered={() => this.props.onFindClosest(cell.id)}
                                         clear={() => this.props.onClearClosest()}
                                         colored={colored}
                                         key={cell.id}
                                         val={cell.amount}
                                         valPercent={percent}
                                         showPercent={this.state.showPercent === index}
                                         />
                                    })
                                }
                                <TableColSum hovered={() => this.setPercent(index)}
                                             left={() => this.setPercent(null)}
                                             key={`${index}-sum`} arr={item} />
                                <td className='table-row-remove'
                                    onClick={() => this.props.onRemoveRow(index)}>
                                    &#215;
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr className='table__row table__row_avr'>
                        {this.props.averageColArr.map((item, index) => <TableCellAverage key={`${index}-avr`} cell={item} />)}
                    </tr>
                </tfoot>
            </table>
                {this.props.rows && this.props.columns && (
                    <div className='table__btn' onClick={() => this.props.onAddRow()}><div>+</div>add new row</div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        columns: state.columns,
        rows: state.rows,
        tableData: state.tableData,
        averageColArr: state.averageColArr,
        closestArr: state.closestArr
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: (id) => dispatch(increment(id)),
        onFindClosest: (id) => dispatch(findClosest(id)),
        onClearClosest: () => dispatch(clearClosest()),
        onRemoveRow: (index) => dispatch(removeRow(index)),
        onAddRow: () => dispatch(addRow())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);