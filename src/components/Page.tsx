import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "components/sharedComponents";

interface Props {
  totalResults: number | null;
  onPageMove: (text: string, page?: number) => void;
  keyword: string | null;
}

const NewButton = styled(Button)``;

const Page = ({ totalResults, onPageMove, keyword }: Props) => {
  const [page, SetPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      {Array.from(Array(5), (_, idx) => (
        <NewButton>{page + idx}</NewButton>
      ))}
    </div>
  );
};

export default Page;
