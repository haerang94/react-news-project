import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { Article } from "types/article";
import relativeTime from "dayjs/plugin/relativeTime";
import News from "components/News";
import dayjs from "dayjs";
dayjs.extend(relativeTime);

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

interface NewsProps {
  // 처음의 data가 null일 수도 있다.
  data: Article[] | null;
}

const NewsList: React.FC<NewsProps> = React.memo(({ data }) => {
  const [mark, setMark] = useState<any[]>([]);

  const makeBookMark = useCallback(
    (value) => {
      const idx = mark.findIndex((x) => x.url === value.url);
      if (idx === -1) {
        setMark([...mark, value]);
        localStorage.setItem("bookmark", JSON.stringify([...mark, value]));
      } else {
        const newMarks = mark.filter((x) => x.url !== value.url);
        setMark(newMarks);
        localStorage.setItem("bookmark", JSON.stringify(newMarks));
      }
    },
    [mark]
  );

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmark");
    if (storedBookmarks) {
      setMark(JSON.parse(storedBookmarks));
    }
  }, []);

  return (
    <Wrapper>
      <Container>
        {data &&
          data.map((item, idx) => (
            <News
              key={`news-card-${idx}`}
              item={item}
              makeBookMark={makeBookMark}
              mark={mark}
            />
          ))}
      </Container>
    </Wrapper>
  );
});

export default NewsList;
