import styled from "styled-components";
import { Star } from "@styled-icons/bootstrap/Star";
import { StarFill } from "@styled-icons/bootstrap/StarFill";

const NewStar = styled(Star)`
  margin-left: auto;
  width: 20px;
  height: 20px;
  color: lightGray;
`;

const NewStarFill = styled(StarFill)`
  width: 20px;
  height: 20px;
`;

export { NewStar, NewStarFill };
