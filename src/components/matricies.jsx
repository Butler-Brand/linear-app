import React, { Component } from "react";
import Matrix from "./matrix";
import Calculator from "./calculator";

class Matricies extends Component {
  state = {
    matrix3Values: [],
    showResult: false
  };

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.setState({
        showResult: nextProps.showResult
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">{this.buildMatrix()}</div>
        </div>
      </div>
    );
  }

  buildMatrix() {
    if (
      this.props.matrix1Rows === 0 ||
      this.props.matrix2Rows === 0 ||
      this.props.matrix1Columns === 0 ||
      this.props.matrix2Columns === 0 ||
      this.props.operation === ""
    )
      return <p>No Matricies have been set</p>;

    //Must now build two matricies w/input fields + operation
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Matrix
              rows={this.props.matrix1Values.length}
              columns={this.props.matrix1Columns}
              matrixID={1}
              matrixType="input"
              columnValues={this.props.matrix1Values}
            />
          </div>
          <div className="col-md-1 text-center align-self-center">
            <p style={{ fontSize: 2 + "em", fontWeight: "bold" }}>
              {this.operationString()}
            </p>
          </div>
          <div className="col">
            <Matrix
              rows={this.props.matrix2Values.length}
              columns={this.props.matrix2Columns}
              matrixID={2}
              matrixType="input"
              columnValues={this.props.matrix2Values}
            />
          </div>
        </div>
        <div className="row">
          <div className="col text-center m-4">
            <button
              onClick={() => this.calculate()}
              className="btn btn-matrix-calculate"
            >
              <strong>CALCULATE!</strong>
            </button>
          </div>
        </div>
        {this.displayResult()}
      </div>
    );
  }

  operationString() {
    if (this.props.operation === "add") return "+";
    if (this.props.operation === "subtract") return "-";
    if (this.props.operation === "division") return "÷";

    return "X";
  }

  calculate() {
    if (this.props.operation === "add" || this.props.operation === "subtract") {
      this.addOrSubtract();
    } else if (this.props.operation === "division") {
      this.divide();
    } else {
      this.multiply();
    }
  }

  addOrSubtract() {
    var newCalculator = new Calculator();
    var calculatedMatrix = newCalculator.addOrSubtract(
      this.props.matrix1Values,
      this.props.matrix2Values,
      this.props.operation
    );

    this.setState({ showResult: true, matrix3Values: calculatedMatrix });
  }

  multiply() {
    var newCalculator = new Calculator();
    var calculatedMatrix = newCalculator.multiply(
      this.props.matrix1Values,
      this.props.matrix2Values
    );
    this.setState({ showResult: true, matrix3Values: calculatedMatrix });
  }

  divide() {
    var newCalculator = new Calculator();
    var calculatedMatrix = newCalculator.divide(
      this.props.matrix1Values,
      this.props.matrix2Values
    );

    if (calculatedMatrix === false) {
      //figure out what happens in a 0-case matrix (possible in division)
      return;
    }

    this.setState({ showResult: true, matrix3Values: calculatedMatrix });
  }

  displayResult() {
    if (this.state.showResult === true) {
      let matrix3Rows = null,
        matrix3Columns = null;
      if (
        this.props.operation === "add" ||
        this.props.operation === "subtract"
      ) {
        matrix3Rows = this.props.matrix1Values.length;
        matrix3Columns = this.props.matrix1Values[0].length;
      } else {
        matrix3Rows = this.props.matrix1Values[0].length;
        matrix3Columns = this.props.matrix2Values.length;
      }

      return (
        <div className="row">
          <div className="col m-4">
            <div className="text-center">
              <div className="slidedown" style={{ display: "inline-block" }}>
                <Matrix
                  rows={matrix3Rows}
                  columns={matrix3Columns}
                  matrixID={3}
                  matrixType="output"
                  columnValues={this.state.matrix3Values}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return "";
  }
}

export default Matricies;
