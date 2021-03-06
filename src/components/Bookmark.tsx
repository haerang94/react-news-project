import React, { ChangeEvent } from "react";
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

const Container = styled.div<{ edit: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100px;
  z-index: 10;
  background: #ddd;
  display: ${(props) => (props.edit ? "visible" : "none")};
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
`;

interface Props {
  makeBookMark: (value: Article) => void;
  mark: Article[];
  onEdit: boolean;
  toggleEdit: (arg: any) => void;
  content: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
//  즐겨찾기 컴포넌트
const Bookmark = React.memo(
  ({ mark, makeBookMark, onEdit, toggleEdit, content, onChange }: Props) => {
    return (
      <Wrapper>
        <Container edit={onEdit}>
          <Edit value={content} onChange={onChange} />
          <NewButton onClick={toggleEdit}>Done</NewButton>
        </Container>
        <NewsList
          data={mark}
          mark={mark}
          makeBookMark={makeBookMark}
          editable={true}
          toggleEdit={toggleEdit}
        />
      </Wrapper>
    );
  }
);

export default Bookmark;
