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
            <div>
                <form onSubmit={this.handleCreateSubmit}>
                    <div>
                        <div>
                            <label>Model type: </label>
                            <input name="model" value={this.state.model} onChange={this.handleChange}></input>

                            <label>Required maintainance time: </label>
                            <input name="std_maintainance_time" type="number" value={this.state.std_maintainance_time} onChange={this.handleChange}></input>

                            <label>Observation: </label>
                            <input name="obs" type="text" value={this.state.obs} onChange={this.handleChange} />
                        </div>
                    </div>
                    <button type="submit">Confirm</button>
                    <button onClick={this.props.hideForm}>Cancel</button>
                </form>
            </div>
        );
    }
}

Form.propTypes = {
    newBoilerType: PropTypes.func.isRequired,
}
