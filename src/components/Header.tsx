import React from "react";
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
`;

const Button = styled.button`
  border: none;
  font-size: ${(props) => props.theme.size.md};
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const id = localStorage.getItem("id");
  console.log(id);
  const history = useHistory();
  const goLogin = () => {
    history.push("/login");
  };
  const resetLogin = () => {
    localStorage.setItem("id", "");
    localStorage.setItem("password", "");
    localStorage.setItem("bookmark", "");
    history.push("/");
  };

  const goToBookmark = () => {
    history.push("/bookmark");
  };

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
        {id && <Button onClick={resetLogin}>LogOut</Button>}
        {!id && <Button onClick={goLogin}>Login</Button>}
        <Button onClick={goToBookmark}>Bookmark</Button>
      </div>
    </NavBar>
  );
};

export default Header;
