import React from "react";

const Overlay = props => {
  return (
    <div className={props.overlayClasses}>
      <div
        className="container"
        style={{ height: 100 + "%", position: "relative" }}
      >
        <div className="row masthead-row">
          <div className="col text-center">
            <div className="masthead-matrix">
              <div className="row">
                <div className="col">
                  <div>
                    <strong>6</strong>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <strong>-2</strong>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <strong>5</strong>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div>
                    <strong>1</strong>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <strong>0</strong>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <strong>1</strong>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div>
                    <strong>-4</strong>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <strong>12</strong>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <strong>0</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ height: 100 + "%" }}>
          <div className="col text-center align-self-center">
            <p>
              <strong>Welcome to the Linear Algebra Calculator</strong>
            </p>
            <button className="btn btn-default m-2" onClick={props.handleClick}>
              <strong>BEGIN</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
