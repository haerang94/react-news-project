import React from "react";
import styled from "styled-components";
import no_image from "images/no_image.png";
import { Article, Welcome } from "types/article";

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
  min-width: 194px;
  width: 45%;
  display: flex;
  align-items: center;
  margin: 20px;
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

const Text = styled.div`
  font-size: ${(props) => props.font || 12}px;
  line-height: 1.5em;
`;

const News: React.FC<Article> = ({ item }) => {
  return (
    <Card>
      <Img src={item.urlToImage || no_image} alt="이미지가 없어요ㅠㅠ" />
      <Content>
        <Text font={14}>{item.title}</Text>
        {item.author && <Text font={12}>기자: {item.author}</Text>}
        <Text font={11}>출처: {item.source.name}</Text>
      </Content>
    </Card>
  );
};

const NewsList: React.FC<Welcome> = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        {data && data.map((item, idx) => <News key={item.url} item={item} />)}
      </Container>
    </Wrapper>
  );
};

export default NewsList;
