import React, { ChangeEvent, FormEvent } from "react";
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
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid black;
`;

const NewButton = styled(Button)`
  width: 100px;
  margin-left: auto;
`;

interface Props {
  id: string;
  password: string;
  message: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Login = React.memo(
  ({ id, password, message, onChange, onSubmit }: Props) => {
    return (
      <Wrapper>
        <Form>
          <Label htmlFor="id">ID</Label>
          <Input name="id" id="id" placeholder="id" onChange={onChange} />
          <Label htmlFor="password">PASSWORD</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={onChange}
          />
          {message && <div>{message}</div>}
          <NewButton>Login</NewButton>
        </Form>
      </Wrapper>
    );
  }
);

export default Login;
