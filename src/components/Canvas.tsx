/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, useColorMode } from "deventds2";
import { css } from "@emotion/react";
import InputText from "./Input";

//NOTE: 텍스트 입력 폼 추가
//NOTE: 텍스트 입력 폼을 기준으로 canvas에 그리고 이미지 다운로드

function Canvas() {
  const [colorMode, setColorMode] = useColorMode();

  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [canvasRatio, setCanvasRatio] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleWindowResize = () => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });

    setRatio();
  };

  const handleMouseDown = (e: any) => {
    console.log(e);
  };

  const setRatio = () => {
    const canvasHeight: any = canvasRef.current?.offsetHeight;
    const ratio = canvasHeight / 1000;
    setCanvasRatio(ratio);
  };

  const putTextEditerOnCanvas = () => {};

  useEffect(() => {
    setRatio();

    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div
      css={css({
        position: "relative",
      })}
    >
      <canvas
        ref={canvasRef}
        width={1000}
        height={1000}
        onMouseDown={handleMouseDown}
        css={css({
          backgroundColor: "#000000",
          borderRadius: "0.5rem",
          border: `0.1rem solid ${
            colorMode == "light" ? "#c6c8cf" : "#24262b"
          }`,
          height: windowSize.height > windowSize.width + 100 ? "85vw" : "70vh",
        })}
      ></canvas>
      <InputText
        x={75}
        y={200}
        fontSize={72}
        fontWeight={700}
        ratio={canvasRatio}
      ></InputText>

      <InputText
        x={75}
        y={350}
        fontSize={48}
        fontWeight={500}
        ratio={canvasRatio}
      ></InputText>
    </div>
  );
}

export default Canvas;
