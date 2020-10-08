import React from "react";
import "../BuildControls.less";
import { Button } from "antd";

const BuildControlsComponent = (props) => {
  return (
    <div className="BuildControls">
      <div className="InnerBuildControls">
        <div>
          <label>{props.label}</label>
        </div>
        <Button type="primary" onClick={props.add}>
          More
        </Button>
        <Button
          type="secondary"
          onClick={props.delete}
          disabled={props.disabled[props.type]}
        >
          Less
        </Button>
      </div>
    </div>
  );
};

export default BuildControlsComponent;
