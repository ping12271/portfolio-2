import React from "react";
import styled from "styled-components";

const Popup = (props) => {

  return (
    <Container onClick={props.onClose}>
        <Content>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid atque blanditiis cupiditate debitis, doloremque dolores error facere, illo inventore maxime mollitia natus odio quidem repudiandae tempore ut veritatis. Et?</p>
        </Content>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 9px;
  width: 400px;
  p {
    font-size: 13px;
    color: #333;
  }
`;

export default Popup;