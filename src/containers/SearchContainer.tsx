import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import Search from "components/Search";
import useNews from "customHooks/useNews";
// 검색창 컨테이너
const SearchContainer = React.memo(() => {
  const { onSubmitInput } = useNews();

  return <Search onSubmitInput={onSubmitInput}></Search>;
});

export default SearchContainer;
