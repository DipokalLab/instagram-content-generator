/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, Toggle, useColorMode } from "deventds2";
import { css } from "@emotion/react";
import { useCanvasStore } from "../store";

function InputText({
  index = 0,
  id,
  x = 0,
  y = 0,
  fontSize = 24,
  fontWeight = 500,
  ratio = 1,
}: {
  index: number;

  id: number;
  x?: number;
  y?: number;
  fontSize?: number;
  fontWeight?: number;
  ratio?: number;
}) {
  const updateAsset = useCanvasStore((state: any) => state.updateAsset);

  const [inputWidth, setInputWidth] = useState(`${700 * ratio}px`);
  const [value, setValue] = useState("");

  const handleInput = (e: any) => {
    setValue(e.target.value);
  };

  const changeDynamicInputWidth = () => {
    setInputWidth(`${(value.length + 1) * 70 * ratio}px`);
    if (value.length == 0) {
      setInputWidth(`${700 * ratio}px`);
    }
  };

  useEffect(() => {
    changeDynamicInputWidth();

    updateAsset(index, id, {
      id: id,
      type: "text",
      location: {
        x: x,
        y: y,
      },
      font: {
        size: fontSize,
        weight: fontWeight,
      },
      value: value,
    });
  }, [value]);

  useEffect(() => {
    changeDynamicInputWidth();
  }, [ratio]);

  return (
    <input
      css={css({
        position: "absolute",
        width: inputWidth,
        top: y * ratio,
        left: x * ratio,
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        color: "#ffffff",
        fontSize: `${fontSize * ratio}px`,
        fontWeight: fontWeight,
      })}
      placeholder="Input Text.."
      value={value}
      onInput={handleInput}
    ></input>
  );
}

function InputTextArea({
  index = 0,
  id,
  x = 0,
  y = 0,
  fontSize = 24,
  fontWeight = 500,
  ratio = 1,
}: {
  index: number;

  id: number;
  x?: number;
  y?: number;
  fontSize?: number;
  fontWeight?: number;
  ratio?: number;
}) {
  const updateAsset = useCanvasStore((state: any) => state.updateAsset);

  const [inputWidth, setInputWidth] = useState(`${700 * ratio}px`);
  const [inputHeight, setInputHeight] = useState(`200px`);

  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: any) => {
    setValue(e.target.value);
  };

  const updateTextareaHeight = () => {
    const textarea: any = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.width = "auto";

    const height = Number(textarea.scrollHeight);
    const width = Number(textarea.scrollWidth);

    if (height < 50) {
      setInputHeight(`50px`);
    } else {
      setInputHeight(`${height}px`);
    }

    if (width < 700 * ratio) {
      setInputWidth(`${700 * ratio}px`);
    } else {
      setInputWidth(`${(value.length + 1) * 70 * ratio}px`);
    }
  };

  useEffect(() => {
    updateTextareaHeight();
    updateAsset(index, id, {
      id: id,
      type: "textarea",
      location: {
        x: x,
        y: y,
      },
      font: {
        size: fontSize,
        weight: fontWeight,
      },
      value: value,
    });
  }, [value]);

  return (
    <>
      <textarea
        css={css({
          position: "absolute",
          width: inputWidth,
          height: inputHeight,
          minWidth: `${700 * ratio}px`,
          top: y * ratio,
          left: x * ratio,
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          color: "#ffffff",
          fontSize: `${fontSize * ratio}px`,
          fontWeight: fontWeight,
          resize: "none",
        })}
        placeholder="Input Text.."
        value={value}
        onChange={handleInput}
        onInput={handleInput}
      ></textarea>

      <textarea
        css={css({
          position: "absolute",
          visibility: "hidden",
          top: y * ratio,
          left: x * ratio,
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          color: "#ffffff",
          fontSize: `${fontSize * ratio}px`,
          fontWeight: fontWeight,
        })}
        ref={textareaRef}
        placeholder="Input Text.."
        value={value}
      ></textarea>
    </>
  );
}

export { InputText, InputTextArea };
