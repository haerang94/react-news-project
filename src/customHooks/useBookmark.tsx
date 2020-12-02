import { useEffect, useState, useCallback } from "react";
import { Article } from "types/article";
//  즐겨찾기
export default function useBookmark() {
  const [mark, setMark] = useState<Article[]>([]);

  const makeBookMark = useCallback(
    (value) => {
      const id = localStorage.getItem("id");
      if (!id) {
        alert("로그인한 후 즐겨찾기를 할 수 있습니다.");
        return;
      }
      // 북마크 누른 기사 찾기
      const idx = mark.findIndex((x) => x.url === value.url);
      if (idx === -1) {
        // 즐겨찾기 새로 하기
        setMark([...mark, value]);
        localStorage.setItem("bookmark", JSON.stringify([...mark, value]));
      } else {
        //  기존 즐겨찾기 삭제
        const newMarks = mark.filter((x) => x.url !== value.url);
        setMark(newMarks);
        localStorage.setItem("bookmark", JSON.stringify(newMarks));
      }
    },
    [mark]
  );
  //  즐겨찾기 수정(content 수정하기)
  const editBookmark = useCallback(
    (value, text) => {
      const idx = mark.findIndex((x) => x.url === value.url);
      const newList = [...mark];
      newList[idx].content = text;
      setMark(newList);
      localStorage.setItem("bookmark", JSON.stringify(newList));
    },
    [mark]
  );
  //  localStorage에 저장된 즐겨찾기 가져오기
  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmark");
    if (storedBookmarks) {
      setMark(JSON.parse(storedBookmarks));
    }
  }, []);

  return { mark, setMark, makeBookMark, editBookmark };
}
