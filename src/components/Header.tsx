import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
  color: #fff;
  width: 100%;
  height: 70px;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: ${(props) => props.theme.size.lg};
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
  const history = useHistory();
  const goLogin = () => {
    history.push("/login");
  };
  return (
    <NavBar>
      <Logo>React News Web</Logo>
      <Button onClick={goLogin}>Login</Button>
    </NavBar>
  );
};

export default Header;
