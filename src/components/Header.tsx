import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
  color: #fff;

  height: 70px;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: ${(props) => props.theme.size.lg};
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  border: none;
  font-size: ${(props) => props.theme.size.md};
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;
interface Props {
  logged: string | null;
  setLogged: (id: string | null) => void;
}

const Header = ({ logged, setLogged }: Props) => {
  const history = useHistory();
  // 로그인 탭 이동
  const goLogin = useCallback(() => {
    history.push("/login");
  }, [history]);
  //  로그아웃하기
  const resetLogin = useCallback(() => {
    localStorage.setItem("id", "");
    localStorage.setItem("password", "");
    localStorage.setItem("bookmark", "");
    setLogged(null);
    // history.push("/");
  }, [setLogged]);
  //  즐겨찾기 탭 이동
  const goToBookmark = useCallback(() => {
    history.push("/bookmark");
  }, [history]);

  return (
    <NavBar>
      <Logo
        onClick={() => {
          history.push("/");
        }}
      >
        React News Web
      </Logo>
      <div>
        {logged && <Button onClick={resetLogin}>LogOut</Button>}
        {!logged && <Button onClick={goLogin}>Login</Button>}
        <Button onClick={goToBookmark}>Bookmark</Button>
      </div>
    </NavBar>
  );
};

export default Header;
