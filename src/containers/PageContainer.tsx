import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { searchNewsThunk } from "reducers/news";

const PageContainer = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.news.news
  );
  const dispatch = useDispatch();
  //   const onPageMove = (page: number = 1) => {
  //     dispatch(searchNewsThunk(page));
  //   };
  return <div></div>;
};

export default PageContainer;
