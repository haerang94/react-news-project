import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import no_image from "images/no_image.png";
import { Article } from "types/article";
import { NewStar, NewStarFill, Button } from "components/sharedComponents";
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
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  position: relative;
  min-width: 500px;
  width: 45%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow: 2px 2px 2px #ddd;
  margin: 10px;
`;

const Img = styled.img`
  width: 140px;
  height: 130px;
  border-radius: 6px;
  margin-right: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin-bottom: 7px;
`;

const MoreButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const Text = styled.div<{ font: number | null }>`
  font-size: ${(props) => props.font || 12}px;
  line-height: 1.5em;
  &:nth-of-type(1) {
    margin-bottom: 10px;
  }
`;

interface NewsProps {
  // 처음의 data가 null일 수도 있다.
  data: Article[] | null;
}

interface CardProps {
  item: Article;
}

const News = ({ item }: CardProps) => {
  const [bookmark, setBookmark] = useState<any[]>([]);

  const onClick = useCallback((link: string) => {
    window.open(link, "_blank");
  }, []);
  const shorterText = useCallback((text: string, len: number) => {
    if (text.length > len) return `${text.slice(0, len)}...`;
    else return text;
  }, []);
  const toggleBookmark = useCallback(
    (url) => {
      const idx = bookmark.findIndex((book) => book.url === url);
      console.log(idx);
    },
    [bookmark]
  );

  useEffect(() => {
    const storedBook = localStorage.getItem("bookmark");
    if (storedBook) {
      setBookmark(JSON.parse(storedBook));
    } else {
      setBookmark([]);
    }
  }, []);

  return (
    <Card>
      <Img src={item.urlToImage || no_image} alt="이미지가 없어요ㅠㅠ" />
      <Content>
        <NewStar onClick={() => toggleBookmark(item.url)} />
        {item.title && <Text font={14}>{shorterText(item.title, 100)}</Text>}
        {item.content && <Text font={12}>{shorterText(item.content, 50)}</Text>}
        {item.author && <Text font={12}>Author: {item.author}</Text>}
        <Text font={11}>Source: {item.source.name}</Text>
        <Text font={11}>Created: {dayjs().to(dayjs(item.publishedAt))}</Text>
      </Content>
      <MoreButton onClick={(e) => onClick(item.url)}>Read More</MoreButton>
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
