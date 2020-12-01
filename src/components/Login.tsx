import React from "react";
import styled from "styled-components";
import { Button } from "components/sharedComponents";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
  padding: 20px;
  & > * {
    margin: 5px 0;
  }
`;

const Label = styled.label`
  width: 100px;
  height: 20px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 10px;
`;

const NewButton = styled(Button)`
  width: 100px;
  margin-left: auto;
`;

const Login = () => {
  return (
    <Wrapper>
      <Form>
        <Label htmlFor="id">ID</Label>
        <Input name="id" id="id" placeholder="id" />
        <Label htmlFor="password">PASSWORD</Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <NewButton>Login</NewButton>
      </Form>
    </Wrapper>
  );
};

export default Login;
