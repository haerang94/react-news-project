import React, { useState, ChangeEvent, useCallback } from "react";
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
  const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContent(value);
  }, []);
  return (
    <Bookmark
      mark={mark}
      makeBookMark={makeBookMark}
      onEdit={onEdit}
      toggleEdit={toggleEdit}
      content={content}
      onChange={onChange}
    ></Bookmark>
  );
};

export default BookmarkContainer;
