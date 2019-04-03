import React, { Component } from "react";

class MatrixInput extends Component {
  state = {
    inputValue: this.props.inputValue
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.setState({
        inputValue: nextProps.inputValue
      });
    }
  }

  render() {
    if (this.props.matrixType === "input") {
      return (
        <input
          size="3"
          maxLength="3"
          type="text"
          placeholder="0"
          value={this.state.inputValue}
          onFocus={e => (e.target.placeholder = "")}
          onBlur={e => (e.target.placeholder = "0")}
          onChange={this.handleChange}
        />
      );
    }
    return (
      <div className="resultEntries">
        <span>{this.state.inputValue}</span>
      </div>
    );
  }

  handleChange(e) {
    const { onValueChange } = this.props;
    this.setState({ inputValue: e.target.value });
    onValueChange(this.props.rowNum, this.props.columnNum, e.target.value);
  }
}

export default MatrixInput;
