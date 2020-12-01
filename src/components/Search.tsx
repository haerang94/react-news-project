import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import { Button } from "components/sharedComponents";

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    border: none;
    outline: none;
  }
  margin: 20px;
`;
const Input = styled.input`
  width: 50%;
  height: 30px;
  margin-right: 10px;
  border-bottom: 1.5px solid black;
  padding: 10px;
`;

interface Props {
  onSubmitInput: (text: string) => void;
}

const Search = ({ onSubmitInput }: Props) => {
  const [input, setInput] = useState<string>("");
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitInput(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input
        placeholder="Search New Keyword"
        value={input}
        onChange={onChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Search;
