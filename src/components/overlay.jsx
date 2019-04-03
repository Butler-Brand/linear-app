import React from "react";

const Overlay = props => {
  return (
    <div className={props.overlayClasses}>
      <div className="container" style={{ height: 100 + "%" }}>
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
