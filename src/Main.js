import React, { Component } from 'react'

import { connect } from 'react-redux';
import TableConfig from "./components/TableConfig";
import Table from "./components/Table";

{
    Array.matrix = function (numrows, numcols, initial) {
        let arr = [];
        for (let i = 0; i < numrows; ++i) {
            let columns = [];
            for (let j = 0; j < numcols; ++j) {
                columns[j] = initial;
            }
            arr[i] = columns;
        }
        return arr;
    };

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    const rows = 2;
    const cols = 3;

    let Matrix = Array.matrix(rows, cols, {});

    let filledMatrix = Matrix.map((item, i, arr) => {
        return item.map((item2, j) => {
            let id = +`${i + 1}${j + 1}`;
            let amount = randomInteger(1, 10);
            return arr[i][j] = {id: id, amount: amount}
        })
    });
    console.table(filledMatrix);

    let total = 0;
    let average = 0.0;

    for (let row = 0; row < rows; ++row) {

        for (let col = 0; col < cols; ++col) {
            total += filledMatrix[row][col].amount;
        }

        console.log("Row " + parseInt(row + 1) +
            " total: " + total);
        total = 0;
    }

    // for (let col = 0; col < cols; ++col) {
    //
    //     for (let row = 0; row < rows; ++row) {
    //         total += filledMatrix[row][col].amount;
    //     }
    //
    //     average = total / rows;
    //     console.log("Column " + parseInt(col + 1) +
    //         " average: " + average.toFixed(2));
    //     total = 0;
    //     average = 0.0;
    // }
}
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {columns: '', rows: ''};
    }

    createTable = (state) => {
        this.setState({columns: state.columns, rows: state.rows});
    };

    render() {
        return (
            <div>
                <TableConfig onCreateTable={this.createTable}/>
                <Table />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cl: state.columns,
        rw: state.rows
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onCreateTable: () => dispatch(  )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);