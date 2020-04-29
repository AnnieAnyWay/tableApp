// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { configTable, createTable } from '../redux/actions'

export type TableConfigState = {
    columns: number,
    rows: number,
    closest: number,
};

type Props = {
    columns: number,
    rows: number,
    closest: number,
    onConfigTable: (TableConfigState) => void,
};

class TableConfig extends Component<Props, TableConfigState>{
    constructor(props: Props) {
        super(props);
    }

    createTable = (event: SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault();
        this.props.onConfigTable(this.state);
    };

    render() {
        return (
            <form className='config' onSubmit={this.createTable}>
                <label>
                    Number of columns:
                    <input className='config__input'
                           type="number"
                           value={this.props.columns}
                           onChange={(e) => this.setState({columns: +e.target.value})}/>
                </label>
                <label>
                    Number of rows
                    <input className='config__input'
                           type="number"
                           value={this.props.rows}
                           onChange={(e) => this.setState({rows: +e.target.value})}/>
                </label>
                <label>
                    Number of the closest amount cell
                    <input className='config__input'
                           type="number"
                           value={this.props.closest}
                           onChange={(e) => this.setState({closest: +e.target.value})}/>
                </label>
                {/*todo validation*/}
                <input className='config__btn' type="submit" value="Create table" />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onConfigTable: (state: TableConfigState) => {
            dispatch(configTable(state));
            dispatch(createTable());
        }
    };
};

export default connect(null, mapDispatchToProps)(TableConfig);