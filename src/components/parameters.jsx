import React, { Component } from "react";

class Parameters extends Component {
  state = {
    matrix1Rows: this.props.matrix1Rows,
    matrix1Columns: this.props.matrix1Columns,
    matrix2Rows: this.props.matrix2Rows,
    matrix2Columns: this.props.matrix2Columns,
    operation: this.props.operation,
    error: false
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { setMatrix } = this.props;

    return (
      <div className="container parameters">
        <div className="row">
          <div className="col m-4">
            <p>Please give dimensions for your first matrix:</p>
            <div>
              <label>Rows: </label>
              <input
                type="text"
                id="matrix1Rows"
                placeholder="0"
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "0")}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Columns: </label>
              <input
                type="text"
                id="matrix1Columns"
                placeholder="0"
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "0")}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col m-4">
            <p>Please give dimensions for your second matrix:</p>
            <div>
              <label>Rows: </label>
              <input
                type="text"
                id="matrix2Rows"
                placeholder="0"
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "0")}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>Columns: </label>
              <input
                type="text"
                id="matrix2Columns"
                placeholder="0"
                onFocus={e => (e.target.placeholder = "")}
                onBlur={e => (e.target.placeholder = "0")}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col m-4">
            <select id="operation" onChange={this.handleChange}>
              <option value="">Please select an operation</option>
              <option value="add">Add</option>
              <option value="subtract">Subtract</option>
              <option value="multiply">Multiply</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col m-4 text-center">
            <button onClick={this.handleClick} className="btn btn-matrix-build">
              <strong>Build Matricies</strong>
            </button>
            {this.errorMessage()}
          </div>
        </div>
      </div>
    );
  }

  handleClick() {
    const { setMatrix } = this.props;

    //validation: stop operation if these are true
    if (this.state.operation === "add" || this.state.operation === "subtract") {
      if (
        this.state.matrix1Rows != this.state.matrix2Rows ||
        this.state.matrix1Columns != this.state.matrix2Columns
      ) {
        this.setState({ error: true });
        return;
      }
    } else {
      if (this.state.matrix1Columns != this.state.matrix2Rows) {
        this.setState({ error: true });
        return;
      }
    }

    //if we get here, we've passed validation
    if (this.state.error === true) {
      this.setState({ error: false });
    }

    setMatrix(
      this.state.matrix1Rows,
      this.state.matrix1Columns,
      this.state.matrix2Rows,
      this.state.matrix2Columns,
      this.state.operation
    );
  }

  handleChange(e) {
    var stateObject = {};
    stateObject[e.target.id] = e.target.value;
    this.setState(stateObject);
  }

  errorMessage() {
    if (this.state.error === true) {
      return (
        <p>
          Your number of rows and columns are insufficient for the mathmatical
          operation you have chosen.
        </p>
      );
    }
  }
}

export default Parameters;
