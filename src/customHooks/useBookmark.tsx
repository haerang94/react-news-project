import { useEffect, useState, useCallback } from "react";

export default function useBookmark() {
  const [mark, setMark] = useState<any[]>([]);

  const makeBookMark = useCallback(
    (value) => {
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

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmark");
    if (storedBookmarks) {
      setMark(JSON.parse(storedBookmarks));
    }
  }, []);

  return { mark, setMark, makeBookMark };
}
