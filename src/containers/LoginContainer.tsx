import React from "react";
import Login from "components/Login";
import useInputs from "customHooks/useInputs";

// 로그인 컨테이너
const LoginContainer = React.memo(() => {
  const { form, onChange, onSubmit } = useInputs();
  const { id, password, message } = form;

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
