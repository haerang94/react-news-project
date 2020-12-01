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
function calculate(totalResults: number | null) {
  let lastIdx;
  if (totalResults === null) {
    lastIdx = 0;
  } else {
    lastIdx =
      totalResults % 6 === 0
        ? totalResults / 6
        : parseInt(totalResults / 6 + "") + 1;
  }
  return lastIdx;
}

const Page = React.memo(({ totalResults, onPageMove, keyword }: Props) => {
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = calculate(totalResults);

  const onClickLeft = () => {
    if (page === 1) return;
    setPage((page) => page - 5);
  };

  const onClickRight = () => {
    if (page + 5 > totalPage) return;
    setPage((page) => page + 5);
  };

  const onCurrentPage = useCallback(
    (idx) => {
      onPageMove(keyword, idx);
      setCurrentPage((currentPage) => idx);
    },
    [onPageMove, keyword]
  );

  return (
    <Container>
      <Left onClick={onClickLeft} />
      {Array.from(Array(5), (_, idx) => {
        if (page + idx <= totalPage)
          return (
            <NewButton
              key={`page-btn-${idx}`}
              onClick={() => onCurrentPage(page + idx)}
            >
              {page + idx}
            </NewButton>
          );
      })}
      <Right onClick={onClickRight} />
    </Container>
  );
});

export default Page;
