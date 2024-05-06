/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "deventds2";
import { css } from "@emotion/react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      <div
        css={css({
          display: "flex",
          justifyContent: "end",
          padding: "1rem",
          zIndex: "9999",
        })}
      >
        <div
          css={css({
            position: "fixed",
            zIndex: "9999",
          })}
        >
          <Button>일괄 다운로드</Button>
        </div>
      </div>

      <div
        css={css({
          position: "fixed",
          left: "0",
          top: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          zIndex: "9998",
        })}
      >
        <canvas
          ref={canvasRef}
          width={1000}
          height={1000}
          css={css({
            backgroundColor: "#1b1c1f",
            borderRadius: "0.5rem",
            height: windowSize.height > windowSize.width ? "80vw" : "80vh",
          })}
        ></canvas>
      </div>
    </>
  );
}

export default App;
