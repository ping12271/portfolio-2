import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Nav = (props) => {

  return (
    <Container>
        {
            props.routes.map((item, i) => {
              return (
                  <NavLink key={i} to={item.to}>
                      {item.name}
                  </NavLink>
              )
            })
        }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
    height: 70px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: #333;
`;

export default Nav;