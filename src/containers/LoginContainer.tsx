import React from "react";
import Login from "components/Login";
import useInputs from "customHooks/useInputs";

const LoginContainer = () => {
  const { form, onChange, onSubmit } = useInputs();
  const { id, password, message } = form;
  console.log(id, password);
  return (
    <Login
      id={id}
      password={password}
      message={message}
      onChange={onChange}
      onSubmit={onSubmit}
    ></Login>
  );
};

export default LoginContainer;
