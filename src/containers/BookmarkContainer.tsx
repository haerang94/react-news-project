import React, { useState, ChangeEvent, useCallback } from "react";
import Bookmark from "components/Bookmark";
import useBookmark from "customHooks/useBookmark";
import { Article } from "types/article";

// 북마크 페이지 컨테이너
const BookmarkContainer = () => {
  //  즐겨찾기 관련 custom hooks
  const { makeBookMark, mark, editBookmark } = useBookmark();
  // 현재 편집 중인가 나타내는 변수 (편집 창 보이기 토글)
  const [onEdit, setOnEdit] = useState<boolean>(false);
  // 편집내용
  const [content, setContent] = useState<string>("");
  // 편집전 원본 기사
  const [item, setItem] = useState<{}>({});
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
