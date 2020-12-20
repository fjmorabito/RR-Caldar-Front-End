import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EditForm extends Component {
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

    handleSubmit = (e) => {
        e.preventDefault();
        const updatedBoilerType = {
            model: this.state.model,
            std_maintainance_time: this.state.std_maintainance_time,
            obs: this.state.obs,
        }
        this.props.editBoilerType(updatedBoilerType);
        this.setState({
            model: '',
            std_maintainance_time: '',
            obs: '',
        });
    }

    render() {
        return (
            <div style={formDivStyle}>
                <form style={formStyle} onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <label>Model: </label>
                            <input name="model" value={this.state.model} onChange={this.handleChange} />

                            <label>Required standard maintainance time: </label>
                            <input name="std_maintainance_time" value={this.state.std_maintainance_time} onChange={this.handleChange} />

                            <label>Observation: </label>
                            <input type="text" name="obs" value={this.state.obs} onChange={this.handleChange} />
                        </div>
                    </div>
                    <button style={buttonStyle} onClick={this.props.hideEditForm} type="submit" >Confirm</button>
                    <button style={buttonStyle} onClick={this.props.hideEditForm}>Exit</button>
                </form>
            </div>
        );
    }
}

EditForm.propTypes = {
    hideEditForm: PropTypes.func.isRequired,
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

