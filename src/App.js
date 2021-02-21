import React from "react";
import styled from "styled-components";
import {Route, Switch} from 'react-router-dom';

import Header from "./views/components/Header";
import Home from "./views/pages/Home";
import Todos from "./views/pages/Todos";
import Photos from "./views/pages/Photos";

const App = () => {

  return (
    <Container>
        <Header/>
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/todos'} component={Todos}/>
            <Route path={'/photos'} component={Photos}/>
        </Switch>
    </Container>
  )
}

const Container = styled.div`

`;

export default App;