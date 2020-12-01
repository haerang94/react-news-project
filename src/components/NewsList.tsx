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
  makeBookMark: (value: Article) => void;
  mark: any[];
  editable?: boolean;
}

const NewsList: React.FC<NewsProps> = React.memo(
  ({ data, makeBookMark, mark, editable }) => {
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
                editable={editable}
              />
            ))}
        </Container>
      </Wrapper>
    );
  }
);

export default NewsList;
