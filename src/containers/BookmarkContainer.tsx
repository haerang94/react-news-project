import React, { useState } from "react";
import Bookmark from "components/Bookmark";
import useBookmark from "customHooks/useBookmark";
const BookmarkContainer = () => {
  const { makeBookMark, mark } = useBookmark();
  const [onEdit, setOnEdit] = useState(false);
  const [content, setContent] = useState("");
  const toggleEdit = (text: string) => {
    setOnEdit((onEdit) => !onEdit);
    setContent(text);
  };
  return (
    <Bookmark
      mark={mark}
      makeBookMark={makeBookMark}
      onEdit={onEdit}
      toggleEdit={toggleEdit}
      content={content}
    ></Bookmark>
  );
};

export default BookmarkContainer;
