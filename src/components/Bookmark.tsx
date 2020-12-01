import React from "react";
import styled from "styled-components";
import NewsList from "components/NewsList";
import { Article } from "types/article";

interface Props {
  makeBookMark: (value: Article) => void;
  mark: Article[];
}

const Bookmark = ({ mark, makeBookMark }: Props) => {
  return (
    <div>
      <NewsList
        data={mark}
        mark={mark}
        makeBookMark={makeBookMark}
        editable={true}
      />
    </div>
  );
};

export default Bookmark;
