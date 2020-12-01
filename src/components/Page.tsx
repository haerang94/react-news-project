import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Button } from "components/sharedComponents";
import { RightArrow } from "@styled-icons/boxicons-solid/RightArrow";
import { LeftArrow } from "@styled-icons/boxicons-solid/LeftArrow";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const NewButton = styled(Button)`
  width: 60px;
  margin: 5px;
`;
const Right = styled(RightArrow)`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const Left = styled(LeftArrow)`
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;

interface Props {
  totalResults: number | null;
  onPageMove: (text?: string | null, page?: number) => void;
  keyword: string | null;
}
const Page = React.memo(({ totalResults, onPageMove, keyword }: Props) => {
  const [page, SetPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Container>
      <Left />
      {Array.from(Array(5), (_, idx) => (
        <NewButton
          key={`page-btn-${idx}`}
          onClick={() => onPageMove(keyword, idx)}
        >
          {page + idx}
        </NewButton>
      ))}
      <Right />
    </Container>
  );
});

export default Page;
