/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, useColorMode } from "deventds2";
import { css } from "@emotion/react";

function Footer() {
  const [colorMode, setColorMode] = useColorMode();

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
      sdfsd
    </div>
  );
}

export default Footer;
