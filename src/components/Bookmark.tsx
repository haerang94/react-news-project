import React, { useState } from "react";
import styled from "styled-components";
import NewsList from "components/NewsList";
import { Article } from "types/article";
import { Button } from "components/sharedComponents";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100px;
  z-index: 10;
  background: #ddd;
`;

const Edit = styled.textarea`
  margin: 30px;
  margin-bottom: 10px;
  width: 500px;
  height: 400px;
  resize: none;
`;

const NewButton = styled(Button)`
  width: 70px;
  margin-left: auto;
  margin-right: 30px;
  display: ${(props) => (props.onEdit ? "visible" : "none")};
`;

interface Props {
  makeBookMark: (value: Article) => void;
  mark: Article[];
}

const Bookmark = ({ mark, makeBookMark }: Props) => {
  const [onEdit, setOnEdit] = useState(false);
  const toggleEdit = () => {
    setOnEdit((onEdit) => !onEdit);
  };
  return (
    <Wrapper>
      <Container>
        <Edit />
        <NewButton onEdit={onEdit} onClick={toggleEdit}>
          Done
        </NewButton>
      </Container>
      <NewsList
        data={mark}
        mark={mark}
        makeBookMark={makeBookMark}
        editable={true}
      />
    </Wrapper>
  );
};

export default Bookmark;
