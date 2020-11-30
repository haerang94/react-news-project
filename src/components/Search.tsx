import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

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

const Button = styled.button`
  height: 30px;
  background: black;
  color: #fff;
  border: none;
`;

interface Props {
  onSubmitInput: (text: string) => void;
}

const Search = ({ onSubmitInput }: Props) => {
  const [input, setInput] = useState("");
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
        placeholder="검색어를 입력하세요"
        value={input}
        onChange={onChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Search;
