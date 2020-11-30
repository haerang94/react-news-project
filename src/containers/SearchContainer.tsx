import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import Search from "components/Search";
import { searchNewsThunk } from "reducers/news";

const SearchContainer = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.news.news
  );
  const dispatch = useDispatch();

  const onSubmitInput = (text: string) => {
    dispatch(searchNewsThunk(text));
  };
  return <Search onSubmitInput={onSubmitInput}></Search>;
};

export default SearchContainer;
