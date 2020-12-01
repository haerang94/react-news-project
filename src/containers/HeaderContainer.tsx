import React, { useState, useEffect } from "react";
import Header from "components/Header";

// Navbar 컨테이너
const HeaderContainer = React.memo(() => {
  const [logged, setLogged] = useState<string | null>(null);

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      setLogged(id);
    }
  }, [setLogged]);

  return <Header logged={logged} setLogged={setLogged}></Header>;
});

export default HeaderContainer;
