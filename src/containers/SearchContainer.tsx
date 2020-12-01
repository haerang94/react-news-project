import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import Search from "components/Search";
import useNews from "customHooks/useNews";
const SearchContainer = React.memo(() => {
  const { keyword, onSubmitInput } = useNews();

  return <Search onSubmitInput={onSubmitInput}></Search>;
});

export default SearchContainer;
