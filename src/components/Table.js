import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

export default class Table extends Component {
    render() {
        return (
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={head}>Model</th>
                        <th style={head}>Standard maintainance required time</th>
                        <th style={head}>Observation</th>
                        <th style={head}>
                            <div style={buttonDiv}>
                                <button style={buttonStyle} onClick={this.props.displayForm}>Create a Boiler Model</button>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((row) => (
                        <Row key={row.model} row={row} editBoilerType={this.props.editBoilerType} deleteBoilerType={this.props.deleteBoilerType} displayEditForm={this.props.displayEditForm}/>
                    ))}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    data: PropTypes.array.isRequired,
    displayForm: PropTypes.func.isRequired,
    editBoilerType: PropTypes.func.isRequired,
    deleteBoilerType: PropTypes.func.isRequired,
}

const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '6px',
    margin: '0 3px 0 0',
    borderWidth: '0.5px',
    cursor: 'pointer',
    textStyle: 'bold'
}

const tableStyle = {
    border: '2px solid #000000',
    textAlign: 'center',
}

const head = {
    background: '#7877AB',
    color: '#B5EAA6',
}

const buttonDiv = {
    justifyContent: 'center'
}