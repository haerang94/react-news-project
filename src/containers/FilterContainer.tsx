import React, { useState, useCallback, ChangeEvent } from "react";
import Filter from "components/Filter";
import useNews from "customHooks/useNews";
import { Article } from "types/article";

const FilterContainer = () => {
  const [sort, setSort] = useState<string>("");
  const { data, onSetNews } = useNews();
  //  날짜 최근 순 정렬
  const date_descending = (a: Article, b: Article) => {
    const x = new Date(a.publishedAt).getTime();
    const y = new Date(b.publishedAt).getTime();
    return x < y ? 1 : -1;
  };
  //  출처 초성 순 정렬
  const sortBySource = (a: Article, b: Article) => {
    return a.source.name > b.source.name ? 1 : -1;
  };

  const onChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      setSort(value);
      if (data && value === "date") {
        data.sort(date_descending);
        onSetNews(data);
      }
      if (data && value === "source") {
        data.sort(sortBySource);
        onSetNews(data);
      }
    },
    [data]
  );

  return <Filter onChange={onChange}></Filter>;
};

export default FilterContainer;
