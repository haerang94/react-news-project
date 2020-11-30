import React from "react";
import styled from "styled-components";
import no_image from "images/no_image.png";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div`
  min-width: 194px;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`;

const Img = styled.img`
  width: 30%;
  height: 100px;
  border-radius: 6px;
  margin-right: 5px;
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

const News: React.FC = ({ item }) => {
  return (
    <Wrapper>
      <Img src={item.urlToImage || no_image} alt="이미지가 없어요ㅠㅠ" />
      <Content>
        <Text font={14}>{item.title}</Text>
        {/* <Text>{item.description && item.description.substr(0, 10)}...</Text> */}
        {item.author && <Text font={12}>기자: {item.author}</Text>}
        <Text font={11}>출처: {item.source.name}</Text>
      </Content>
    </Wrapper>
  );
};

const NewsList: React.FC = ({ data }) => {
  return (
    <Container>
      {data && data.map((item, idx) => <News key={item.url} item={item} />)}
    </Container>
  );
};

export default NewsList;
