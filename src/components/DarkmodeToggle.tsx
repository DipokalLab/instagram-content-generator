/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, Toggle, useColorMode } from "deventds2";
import { css } from "@emotion/react";

function DarkmodeToggle() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Toggle
      checked={colorMode == "light" ? false : true}
      onClick={() => setColorMode(colorMode == "light" ? "dark" : "light")}
    >
      DarkMode on/off
    </Toggle>
  );
}

export default DarkmodeToggle;
