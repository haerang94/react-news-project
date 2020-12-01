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
  margin-bottom: 100px;
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

interface Props {
  totalResults: number | null;
  onPageMove: (text: string | null, page?: number) => void;
  keyword: string | null;
}
//  페이지 버튼 컴포넌트
const Page = React.memo(({ totalResults, onPageMove, keyword }: Props) => {
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = calculate(totalResults);
  //  페이지5칸씩 앞으로 이동
  const onClickLeft = () => {
    if (page === 1) return;
    setPage((page) => page - 5);
  };
  //  페이지5칸씩 뒤로 이동
  const onClickRight = () => {
    // developer api 한계상 16페이지 이상(한 페이지당 6개) 못불러와서 제한했습니다.
    if (page + 5 > totalPage) return;
    if (page + 5 > 16) return;
    setPage((page) => page + 5);
  };
  // 누른 페이지로 이동
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
        // 데이터 끝에 도달했을 때
        if (page + idx <= 16 && page + idx <= totalPage)
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
