import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '5',
            model: '',
            std_maintainance_time: '',
            observation: ''
        };
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.newOne(this.state)
        this.props.hideForm()
    };

    render(){
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <label>Model type: </label>
                            <select name="model" value={this.state.model} onChange={this.handleChange}></select>
                            
                            <label>Required maintainance time: </label>
                            <select name="std_maintainance" value={this.state.std_maintainance_time} onChange={this.handleChange}></select>

                            <label>Observation: </label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <button type="submit">Confirm</button>
                </form>
            </div>
        );
    }
}

Form.propTypes = {
    newBoilerType: PropTypes.func.isRequired,
}
