/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, Toggle, useColorMode } from "deventds2";
import { css } from "@emotion/react";

function IconButton({ onClick, children }: { onClick?: any; children?: any }) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <span
      className="material-symbols-outlined"
      onClick={onClick}
      css={css({
        cursor: "pointer",
        transition: "0.2s",
        color: "#b5b7bd",
        fontSize: "1.75rem",
        ":hover": {
          filter: "opacity(60%)",
        },
      })}
    >
      {children}
    </span>
  );
}

export default IconButton;
