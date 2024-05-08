/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, useColorMode } from "deventds2";
import { css } from "@emotion/react";
import { useCanvasStore } from "../store";

function Footer() {
  const [colorMode, setColorMode] = useColorMode();
  const addPage = useCanvasStore((state: any) => state.addPage);
  const assetsList = useCanvasStore((state: any) => state.assets);
  const appendAsset = useCanvasStore((state: any) => state.appendAsset);

  const handleClickAddPage = () => {
    addPage();

    console.log(assetsList.length);

    appendAsset(assetsList.length, {
      id: Math.random(),
      type: "textarea",

      location: {
        x: 75,
        y: 200,
      },
      font: {
        size: 72,
        weight: 700,
      },
      value: "",
    });
  };

  const handleClickShow = () => {
    console.log(assetsList);
  };

  return (
    <div
      css={css({
        position: "absolute",
        bottom: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "20%",
        zIndex: "9998",
        borderTop: `0.1rem solid ${
          colorMode == "light" ? "#c6c8cf" : "#24262b"
        }`,
      })}
    >
      <Button onClick={handleClickAddPage}>Add Page</Button>
      <Button onClick={handleClickShow}>Soow</Button>
    </div>
  );
}

export default Footer;
