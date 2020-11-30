import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { getNewsThunk } from "reducers/news";

const NewsContainer: React.FC = () => {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.news.news
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const onFetch = () => {
      dispatch(getNewsThunk());
    };
    // const response = await axios.get(
    //   `https://newsapi.org/v2/top-headlines?apiKey=09309de8c1bc4bda8cac59f36deb633c&country=kr`
    // );
    // console.log(response);
    onFetch();
  }, []);

  console.log(data);

  return <div></div>;
};

export default NewsContainer;
