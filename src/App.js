import React, { Component } from 'react';
import './App.css';
import boilerTypeMock from './mocks/boiler-type.json'
import Header from './components/Lay out/Header';
import Section from './components/Lay out/Section';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = 
      boilerTypeMock;
  }

  // Delete BoilerType
  deleteBoilerType = (id) => {
    this.setState({
      boilerTypeMock:
        [
          ...this.state.boilerTypeMock.filter(boilerTypeMock => boilerTypeMock.id !== id)
        ]
    });
  }

  // Add boilerTypeMock
  addBoilerType = (newBoilerType) => {
    this.setState({ boilerTypeMock: [...this.state.boilerTypeMock, newBoilerType] });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Section data={this.state.boilerTypeMock} deleteBoilerType={ this.deleteBoilerType} addBoilerType={this.addBoilerType} />
      </div>
    );
  }
}

export default App;
