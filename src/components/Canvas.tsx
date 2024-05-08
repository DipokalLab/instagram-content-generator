/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, useColorMode } from "deventds2";
import { css } from "@emotion/react";
import { InputText, InputTextArea } from "./Input";
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
  const addPage = useCanvasStore((state: any) => state.addPage);

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

    const index = 0;

    //addPage();

    appendAsset(index, {
      id: Math.random(),
      type: "text",
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

    appendAsset(index, {
      id: Math.random(),
      type: "text",
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
        padding: "1.5rem",
        display: "flex",
        flexDirection: "row",
        overflowX: "scroll",
        gap: "1rem",
      })}
    >
      {assetsList.map((page: AssetType[], pageIndex: number) => (
        <div
          css={css({
            position: "relative",
          })}
        >
          <>
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
                height:
                  windowSize.height > windowSize.width + 100 ? "85vw" : "70vh",
              })}
            ></canvas>

            {page.map((asset: AssetType) => (
              <>
                <AssetSwitch
                  index={pageIndex}
                  asset={asset}
                  canvasRatio={canvasRatio}
                ></AssetSwitch>
              </>
            ))}
          </>
        </div>
      ))}
    </div>
  );
}

function AssetSwitch({
  asset,
  canvasRatio,
  index,
}: {
  asset: AssetType;
  canvasRatio: number;
  index: number;
}) {
  if (asset.type == "text") {
    return (
      <InputText
        index={index}
        id={asset.id}
        x={asset.location.x}
        y={asset.location.y}
        fontSize={asset.font.size}
        fontWeight={asset.font.weight}
        ratio={canvasRatio}
      ></InputText>
    );
  } else if (asset.type == "textarea") {
    return (
      <InputTextArea
        index={index}
        id={asset.id}
        x={asset.location.x}
        y={asset.location.y}
        fontSize={asset.font.size}
        fontWeight={asset.font.weight}
        ratio={canvasRatio}
      ></InputTextArea>
    );
  }

  return <></>;
}

export default Canvas;
