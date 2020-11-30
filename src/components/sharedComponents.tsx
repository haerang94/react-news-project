import styled from "styled-components";
import { Star } from "@styled-icons/bootstrap/Star";
import { StarFill } from "@styled-icons/bootstrap/StarFill";

const NewStar = styled(Star)`
  margin-left: auto;
  margin-bottom: 7px;
  width: 20px;
  height: 20px;
  color: lightGray;
`;

const NewStarFill = styled(StarFill)`
  width: 20px;
  height: 20px;
`;

const Button = styled.button`
  width: 100px;
  padding: 5px;
  height: 30px;
  background: black;
  color: #fff;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export { NewStar, NewStarFill, Button };
