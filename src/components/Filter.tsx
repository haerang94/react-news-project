import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 5px;
  }
`;
const Label = styled.label``;

const Select = styled.select`
  width: 100px;
  height: 20px;
`;

const Filter = () => {
  return (
    <Wrapper>
      <Label htmlFor="filter">Sort</Label>
      <Select>
        <option value="date">Date</option>
        <option value="source">Source</option>
      </Select>
    </Wrapper>
  );
};

export default Filter;
