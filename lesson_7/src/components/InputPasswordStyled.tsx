import React from "react";
import { Input } from "antd";

const InputPasswordStyled = (props) => {
  return (
    <Input.Password
      {...props}
      className="rounded-md h-10"
    />
  );
};

export default InputPasswordStyled;