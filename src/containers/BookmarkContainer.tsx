import React, { useState, ChangeEvent, useCallback } from "react";
import Bookmark from "components/Bookmark";
import useBookmark from "customHooks/useBookmark";
const BookmarkContainer = () => {
  const { makeBookMark, mark, editBookmark } = useBookmark();
  const [onEdit, setOnEdit] = useState(false);
  const [content, setContent] = useState("");
  const [item, setItem] = useState({});
  const toggleEdit = (cur: any) => {
    setOnEdit((onEdit) => !onEdit);
    setContent(cur.content);
    setItem(cur);
  };
  const onChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;
      setContent(value);
      editBookmark(item, value);
      // makeBookMark([...mark,]);
    },
    [editBookmark, item]
  );
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
