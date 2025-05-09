import React, { useState } from "react";

const CmsInput = React.forwardRef((props, ref) => {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
        ref={ref}
      />
    </div>
  );
});
export default CmsInput;
