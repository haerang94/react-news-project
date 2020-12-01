import React from "react";
import Bookmark from "components/Bookmark";
import useBookmark from "customHooks/useBookmark";
const BookmarkContainer = () => {
  const { makeBookMark, mark } = useBookmark();
  return <Bookmark mark={mark} makeBookMark={makeBookMark}></Bookmark>;
};

export default BookmarkContainer;
