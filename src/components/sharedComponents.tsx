import styled from "styled-components";
import { Star } from "@styled-icons/bootstrap/Star";
import { StarFill } from "@styled-icons/bootstrap/StarFill";

const NewStar = styled(Star)`
  position: absolute;
  top: 20px;
  right: 10px;
  width: 20px;
  height: 20px;
`;

const NewStarFill = styled(StarFill)`
  width: 20px;
  height: 20px;
`;

export { NewStar, NewStarFill };
