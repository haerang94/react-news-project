import React from "react";
import styled from "styled-components";
import no_image from "images/no_image.png";
import { Article } from "types/article";
import { NewStar, NewStarFill } from "components/sharedComponents";
import relativeTime from "dayjs/plugin/relativeTime";
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
  justify-content: space-around;
  align-items: center;
`;

const Card = styled.div`
  position: relative;
  min-width: 194px;
  width: 45%;
  height: 170px;
  display: flex;
  padding: 20px;
  box-shadow: 2px 2px 2px #ddd;
  &:hover {
    cursor: pointer;
  }
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 130px;
  height: 120px;
  border-radius: 6px;
  margin-right: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
`;

const Text = styled.div<{ font: number }>`
  font-size: ${(props) => props.font || 12}px;
  line-height: 1.5em;
`;

interface NewsProps {
  // 처음의 data가 null일 수도 있다.
  data: Article[] | null;
}

interface CardProps {
  item: Article;
}

const News = ({ item }: CardProps) => {
  return (
    <Card>
      <Img src={item.urlToImage || no_image} alt="이미지가 없어요ㅠㅠ" />
      <Content>
        <NewStar />
        <Text font={14}>{item.title}</Text>
        {item.author && <Text font={12}>기자: {item.author}</Text>}
        <Text font={11}>출처: {item.source.name}</Text>
        <Text font={11}>{dayjs().to(dayjs(item.publishedAt))}</Text>
      </Content>
    </Card>
  );
};

const NewsList: React.FC<NewsProps> = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        {data &&
          data.map((item, idx) => (
            <News key={`news-card-${idx}`} item={item} />
          ))}
      </Container>
    </Wrapper>
  );
};

export default NewsList;
