import React from "react";
import styled from "styled-components";
import {Route, Switch} from 'react-router-dom';

import Header from "./views/components/Header";

const App = () => {

  return (
    <Container>
        <Header/>
        <Switch>
        </Switch>
    </Container>
  )
}

const Container = styled.div`

`;

export default App;