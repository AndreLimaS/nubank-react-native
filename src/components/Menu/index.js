import React from "react";

import QRCode from "react-native-qrcode-svg";

import { Container, Code } from "./styles";

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://google.com.br"
          size={80}
          backgoundColor="#FFF"
          color="#8B10AE"
        />
      </Code>
    </Container>
  );
}
