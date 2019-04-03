import React, { Component } from "react";
import MatrixInput from "./matrixInput";

class MatrixRow extends Component {
  state = {
    columnValues: this.props.columnValues
  };

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.setState({
        columnValues: nextProps.columnValues
      });
    }
  }

  render() {
    const { columnValues, onChange } = this.props;

    return (
      <div className="row">
        {columnValues.map((col, index) => (
          <div
            className="col text-center"
            key={index}
            style={{ paddingLeft: 0, paddingRight: 0, marginBottom: 5 + "px" }}
          >
            <MatrixInput
              rowNum={this.props.rowNum}
              columnNum={index}
              inputValue={columnValues[index]}
              matrixType={this.props.matrixType}
              onValueChange={onChange}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default MatrixRow;
