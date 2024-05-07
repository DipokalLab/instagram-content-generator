/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, Toggle, useColorMode } from "deventds2";
import { css } from "@emotion/react";

function InputText({
  x = 0,
  y = 0,
  fontSize = 24,
  fontWeight = 500,
  ratio = 1,
}: {
  x?: number;
  y?: number;
  fontSize?: number;
  fontWeight?: number;
  ratio?: number;
}) {
  const [inputWidth, setInputWidth] = useState(`${700 * ratio}px`);
  const [value, setValue] = useState("");

  const handleInput = (e: any) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setInputWidth(`${(value.length + 1) * 70 * ratio}px`);
    if (value.length == 0) {
      setInputWidth(`250px`);
    }
  }, [value]);

  useEffect(() => {
    setInputWidth(`${(value.length + 1) * 70 * ratio}px`);
    if (value.length == 0) {
      setInputWidth(`${700 * ratio}px`);
    }
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
      placeholder="텍스트를 입력하세요"
      value={value}
      onInput={handleInput}
    ></input>
  );
}

export default InputText;