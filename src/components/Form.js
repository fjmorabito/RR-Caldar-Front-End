import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            model: '',
            std_maintainance_time: '',
            obs: ''
        };
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    handleCreateSubmit = (e) => {
        e.preventDefault()
        this.props.newBoilerType(this.state)
        this.props.hideForm()
    };

    render() {
        return (
            <div style={formDivStyle}>
                <form style={formStyle} onSubmit={this.handleCreateSubmit}>
                    <div>
                        <label>Model type: </label>
                        <input name="model" value={this.state.model} onChange={this.handleChange}></input>

                        <label>Required maintainance time: </label>
                        <input name="std_maintainance_time" type="number" value={this.state.std_maintainance_time} onChange={this.handleChange}></input>

                        <label>Observation: </label>
                        <input name="obs" type="text" value={this.state.obs} onChange={this.handleChange} />
                    </div>
                    <button style={buttonStyle} type="submit">Confirm</button>
                    <button style={buttonStyle} onClick={this.props.hideForm}>Cancel</button>
                </form>
            </div>
        );
    }
}

Form.propTypes = {
    newBoilerType: PropTypes.func.isRequired,
}

const formDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCDEF3',
    border: '2px solid #000000',
    padding: '10px',
    marginBottom: '20px'
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

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '10px'
}



