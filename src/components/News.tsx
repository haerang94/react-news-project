import React, { useCallback } from "react";
import no_image from "images/no_image.png";
import { NewStar, NewStarFill, Button } from "components/sharedComponents";
import styled from "styled-components";
import { Article } from "types/article";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
dayjs.extend(relativeTime);

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

interface CardProps {
  item: Article;
  makeBookMark: (value: Article) => void;
  mark: any[];
}

const News = React.memo(({ item, makeBookMark, mark }: CardProps) => {
  const checked =
    mark.findIndex((x) => x.url === item.url) === -1 ? true : false;

  const onClick = useCallback((link: string) => {
    window.open(link, "_blank");
  }, []);
  const shorterText = useCallback((text: string, len: number) => {
    if (text.length > len) return `${text.slice(0, len)}...`;
    else return text;
  }, []);

  return (
    <Card>
      <Img src={item.urlToImage || no_image} alt="이미지가 없어요ㅠㅠ" />
      <Content>
        {checked ? (
          <NewStar onClick={() => makeBookMark(item)} />
        ) : (
          <NewStarFill onClick={() => makeBookMark(item)} />
        )}
        {item.title && <Text font={14}>{shorterText(item.title, 100)}</Text>}
        {item.content && <Text font={12}>{shorterText(item.content, 50)}</Text>}
        {item.author && <Text font={12}>Author: {item.author}</Text>}
        <Text font={11}>Source: {item.source.name}</Text>
        <Text font={11}>Created: {dayjs().to(dayjs(item.publishedAt))}</Text>
      </Content>
      <MoreButton onClick={(e) => onClick(item.url)}>Read More</MoreButton>
    </Card>
  );
});

export default News;
