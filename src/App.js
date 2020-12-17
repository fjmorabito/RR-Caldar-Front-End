import React, { Component } from 'react';
import './App.css';
import boilerTypeMock from './mocks/boiler-type.json'
import Header from './components/Lay out/Header';
import Section from './components/Lay out/Section';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boilerTypeMock,
    };
  }

  // Delete Boiler Type
  deleteBoilerType = (boilerTyp) => {
    this.setState({
      boilerTypeMock:
        [
          ...this.state.boilerTypeMock.filter(boilerTypeMock => boilerTypeMock.model !== boilerTyp)
        ]
    });
  }

  // Add boiler Type
  addBoilerType = (newBoilerType) => {
    this.setState({ boilerTypeMock: [...this.state.boilerTypeMock, newBoilerType] });
  }

  // Edit Boiler Type
  editBoilerType = (boilerTypeEdited) => {
    this.setState({
      boilerTypeMock: [...this.state.boilerTypeMock.map(boilerT => {
        if (boilerT.model === boilerTypeEdited.model) {
          boilerT = boilerTypeEdited;
        }
        return boilerT;
      })]
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Section data={this.state.boilerTypeMock} editBoilerType={this.editBoilerType} deleteBoilerType={this.deleteBoilerType} addBoilerType={this.addBoilerType} />
      </div>
    );
  }
}

export default App;
