import React, { Component } from "react";
import logo from "./logo.svg";
import Parameters from "./components/parameters";
import Matricies from "./components/matricies";
import Overlay from "./components/overlay";
import "./App.css";

class App extends Component {
  state = {
    matrix1Columns: 0,
    matrix2Columns: 0,
    matrix1Values: [],
    matrix2Values: [],
    operation: "",
    overlayClasses: "overlay",
    showResult: false
  };

  constructor() {
    super();
    this.handleMatrix = this.handleMatrix.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    console.log("Main component -- rendering");

    return (
      <div className="home">
        <Overlay
          overlayClasses={this.state.overlayClasses}
          handleClick={this.handleClick}
        />
        <Parameters
          setMatrix={this.handleMatrix}
          matrix1Rows={this.state.matrix1Values.length}
          matrix1Columns={this.state.matrix1Columns}
          matrix2Rows={this.state.matrix2Values.length}
          matrix2Columns={this.state.matrix2Columns}
          operation={this.state.operation}
        />
        <Matricies
          matrix1Columns={this.state.matrix1Columns}
          matrix1Values={this.state.matrix1Values}
          matrix2Columns={this.state.matrix2Columns}
          matrix2Values={this.state.matrix2Values}
          operation={this.state.operation}
          showResult={this.state.showResult}
        />
      </div>
    );
  }

  handleClick() {
    this.setState({ overlayClasses: "overlay fadeout" });
  }

  handleMatrix(rows1, columns1, rows2, columns2, operation) {
    //Build the matricies
    var currentMatrix1 = [],
      currentMatrix2 = [];

    for (var i = 0; i < rows1; i++) {
      var currentRow1 = [];
      for (var j = 0; j < columns1; j++) {
        currentRow1.push([0]);
      }
      currentMatrix1.push(currentRow1);
    }

    for (var i = 0; i < rows2; i++) {
      var currentRow2 = [];
      for (var j = 0; j < columns2; j++) {
        currentRow2.push([0]);
      }
      currentMatrix2.push(currentRow2);
    }

    this.setState({
      matrix1Columns: columns1,
      matrix2Columns: columns2,
      matrix1Values: currentMatrix1,
      matrix2Values: currentMatrix2,
      operation: operation,
      showResult: false
    });
  }
}

export default App;
