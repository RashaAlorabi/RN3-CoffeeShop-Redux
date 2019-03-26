import React, { Component } from "react";

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Header
} from "native-base";

class Login extends Component {
  render() {
    return (
      <Content>
        <Header transparent />
        <List />
        <Body>
          <Label style={{ color: "red", opacity: 0.6 }} Username="Rasha" />
        </Body>
      </Content>
    );
  }
}

export default Login;
