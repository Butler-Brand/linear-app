import React, { Component } from "react";
import MatrixRow from "./matrixRow";

class Matrix extends Component {
  state = {
    columnValues: this.props.columnValues
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.setState({
        columnValues: nextProps.columnValues
      });
    }
  }

  render() {
    const { columnValues, columns } = this.props;

    return (
      <div className="text-center">
        {columnValues.map((row, index) => (
          <MatrixRow
            key={index}
            columns={columns}
            rowNum={index}
            columnValues={columnValues[index]}
            matrixType={this.props.matrixType}
            onChange={this.handleChange}
          />
        ))}
      </div>
    );
  }

  handleChange(rowNum, colNum, val) {
    let currentColumns = this.state.columnValues;
    currentColumns[rowNum][colNum] = val;
    this.setState({ columnValues: currentColumns });
  }
}

export default Matrix;
