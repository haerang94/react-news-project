import React from "react";
import Filter from "components/Filter";
import useNews from "customHooks/useNews";
import { Article } from "types/article";
const FilterContainer = () => {
  const { data } = useNews();
  const date_descending = (a: Article, b: Article) => {
    const x = new Date(a.publishedAt).getTime();
    const y = new Date(b.publishedAt).getTime();
    return x < y ? 1 : -1;
  };
  if (data) {
    console.log(data.sort(date_descending));
  }

  return <Filter></Filter>;
};

export default FilterContainer;
