import React, { useState, useCallback, ChangeEvent } from "react";
import Filter from "components/Filter";
import useNews from "customHooks/useNews";
import { Article } from "types/article";
//  정렬 컨테이너
const FilterContainer = React.memo(() => {
  const [sort, setSort] = useState<string>("");
  const { data, onSetNews } = useNews();
  //  날짜 최근 순 정렬
  const date_descending = (a: Article, b: Article) => {
    const x = new Date(a.publishedAt).getTime();
    const y = new Date(b.publishedAt).getTime();
    return x < y ? 1 : -1;
  };
  //  출처 초성 순 정렬
  const sortBySource = useCallback((a: Article, b: Article) => {
    return a.source.name > b.source.name ? 1 : -1;
  }, []);

  //  정렬 select 태그 내용 변경 & 실제 데이터 정렬
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
    [data, onSetNews, sortBySource]
  );

  return <Filter onChange={onChange}></Filter>;
});

export default FilterContainer;
