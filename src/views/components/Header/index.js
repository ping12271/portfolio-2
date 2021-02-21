import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const routes = [
    {
        name: 'home',
        to: '/'
    },
    {
        name: 'todos',
        to: '/todos'
    },
    {
        name: 'photos',
        to: '/photos'
    }
]

const Header = () => {

  return (
    <Container>
        <Logo>lala</Logo>
        <Nav routes={routes}/>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 50px;
  border-bottom: 1px solid #e0e0e0;
`;

const Logo = styled.div`

`;

export default Header;