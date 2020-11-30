import React from "react";
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
`;
const Input = styled.input`
  width: 50%;
  height: 30px;
  margin-right: 10px;
  border-bottom: 1.5px solid black;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  height: 30px;
  background: black;
  color: #fff;
  border: none;
`;

const Search: React.FC = () => {
  return (
    <Form>
      <Input placeholder="검색어를 입력하세요" />
      <Button>Search</Button>
    </Form>
  );
};

export default Search;
