/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, useColorMode } from "deventds2";
import { css } from "@emotion/react";
import InputText from "./Input";
import { useCanvasStore } from "../store";
import { AssetType } from "../@types/asset";

function Canvas() {
  const [colorMode, setColorMode] = useColorMode();

  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [canvasRatio, setCanvasRatio] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const assetsList = useCanvasStore((state: any) => state.assets);
  const appendAsset = useCanvasStore((state: any) => state.appendAsset);

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

    appendAsset({
      id: Math.random(),
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

    appendAsset({
      id: Math.random(),
      location: {
        x: 75,
        y: 350,
      },
      font: {
        size: 48,
        weight: 500,
      },
      value: "",
    });

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
      {assetsList.map((asset: AssetType) => (
        <InputText
          id={asset.id}
          x={asset.location.x}
          y={asset.location.y}
          fontSize={asset.font.size}
          fontWeight={asset.font.weight}
          ratio={canvasRatio}
        ></InputText>
      ))}
    </div>
  );
}

export default Canvas;
