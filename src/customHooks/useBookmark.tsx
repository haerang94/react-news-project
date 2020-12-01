import { useEffect, useState, useCallback } from "react";

export default function useBookmark() {
  const [mark, setMark] = useState<any[]>([]);

  const makeBookMark = useCallback(
    (value) => {
      const id = localStorage.getItem("id");
      if (!id) {
        alert("로그인한 후 즐겨찾기를 할 수 있습니다.");
        return;
      }

      const idx = mark.findIndex((x) => x.url === value.url);
      if (idx === -1) {
        setMark([...mark, value]);
        localStorage.setItem("bookmark", JSON.stringify([...mark, value]));
      } else {
        const newMarks = mark.filter((x) => x.url !== value.url);
        setMark(newMarks);
        localStorage.setItem("bookmark", JSON.stringify(newMarks));
      }
    },
    [mark]
  );

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

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmark");
    if (storedBookmarks) {
      setMark(JSON.parse(storedBookmarks));
    }
  }, []);

  return { mark, setMark, makeBookMark, editBookmark };
}
