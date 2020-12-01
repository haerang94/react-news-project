import React, { useState } from "react";
import Bookmark from "components/Bookmark";
import useBookmark from "customHooks/useBookmark";
const BookmarkContainer = () => {
  const { makeBookMark, mark } = useBookmark();
  const [onEdit, setOnEdit] = useState(false);
  const toggleEdit = () => {
    setOnEdit((onEdit) => !onEdit);
  };
  return (
    <Bookmark
      mark={mark}
      makeBookMark={makeBookMark}
      onEdit={onEdit}
      toggleEdit={toggleEdit}
    ></Bookmark>
  );
};

export default BookmarkContainer;
