import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import Search from "components/Search";
import { searchNewsThunk } from "reducers/news";

const SearchContainer = React.memo(() => {
  const { keyword } = useSelector((state: RootState) => ({
    keyword: state.news.text,
  }));
  const dispatch = useDispatch();
  console.log(keyword);
  const onSubmitInput = (text: string) => {
    dispatch(searchNewsThunk(text));
  };
  return <Search onSubmitInput={onSubmitInput}></Search>;
});

export default SearchContainer;
