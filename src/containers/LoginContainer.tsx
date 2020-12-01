import React from "react";
import Login from "components/Login";
import useInputs from "customHooks/useInputs";

const LoginContainer = React.memo(() => {
  const { form, onChange, onSubmit } = useInputs();
  const { id, password, message } = form;
  console.log(id, password, "message", message);
  return (
    <Login
      id={id}
      password={password}
      message={message}
      onChange={onChange}
      onSubmit={onSubmit}
    ></Login>
  );
});

export default LoginContainer;
