import styled from "styled-components";
import { Star } from "@styled-icons/bootstrap/Star";
import { StarFill } from "@styled-icons/bootstrap/StarFill";
//  공통 컴포넌트
const NewStar = styled(Star)`
  margin-left: auto;
  margin-bottom: 7px;
  width: 20px;
  height: 20px;
`;

const NewStarFill = styled(StarFill)`
  margin-left: auto;
  margin-bottom: 7px;
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
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;

export { NewStar, NewStarFill, Button };
