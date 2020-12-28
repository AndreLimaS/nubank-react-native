import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import Header from "../../components/Header/index";
import Menu from "../../components/Menu";
import Tabs from "../../components/Tabs";

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Descriptions,
  Annotation,
} from "./styles";

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponivel</Title>
            <Descriptions>R$ 200.354,55</Descriptions>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferencia de R$ 20,00 recebida de Andre Lima as 08:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
