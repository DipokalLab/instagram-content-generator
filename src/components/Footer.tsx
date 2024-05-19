/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, useColorMode } from "deventds2";
import { css } from "@emotion/react";
import { useCanvasStore } from "../store";
import styled from "@emotion/styled";


const FooterDiv = styled.div({
  position: "absolute",
  bottom: "0",
  display: "flex",
  justifyContent: "start",
  paddingLeft: "1rem",
  alignItems: "center",
  width: "100%",
  height: "20%",
  zIndex: "9998",
}, (props: { colorMode?: string }) => ({
  borderTop: `0.1rem solid ${props.colorMode == "light" ? "#c6c8cf" : "#24262b"}`,

}))

function Footer() {
  const [colorMode, setColorMode] = useColorMode();
  const assetsList = useCanvasStore((state: any) => state.assets);

  const handleClickShow = () => {
    console.log(assetsList);
  };

  return (
    <FooterDiv colorMode={colorMode}>
      <SelectTemplate></SelectTemplate>
      {/* <Button onClick={handleClickShow}>Soow</Button> */}

    </FooterDiv>
  );
}

function SelectTemplate() {
  return (
    <div
      css={css({
        width: "3rem",
        height: "3rem",
        backgroundColor: "#24262b",
      })}
    ></div>
  );
}

export default Footer;
