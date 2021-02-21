import React from "react";
import styled from "styled-components";
import {Route, Switch} from 'react-router-dom';

import Header from "./views/components/Header";
import Home from "./views/pages/Home";

const App = () => {

  return (
    <Container>
        <Header/>
        <Switch>
            <Route path={'/'} component={Home}/>
        </Switch>
    </Container>
  )
}

const Container = styled.div`

`;

export default App;