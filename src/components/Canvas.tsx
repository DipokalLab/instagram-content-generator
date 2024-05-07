/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, useColorMode } from "deventds2";
import { css } from "@emotion/react";

function Canvas() {
  const [colorMode, setColorMode] = useColorMode();

  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const canvasRef = useRef(null);

  const handleWindowResize = () => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  const handleMouseDown = (e: any) => {
    console.log(e);
  };

  const putTextEditerOnCanvas = () => {};

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1000}
      height={1000}
      onMouseDown={handleMouseDown}
      css={css({
        //backgroundColor: "#1b1c1f",
        borderRadius: "0.5rem",
        border: `0.1rem solid ${colorMode == "light" ? "#c6c8cf" : "#24262b"}`,
        height: windowSize.height > windowSize.width + 100 ? "85vw" : "70vh",
      })}
    ></canvas>
  );
}

export default Canvas;
