/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "deventds2";
import { css } from "@emotion/react";
import Canvas from "../components/Canvas";
import Footer from "../components/Footer";
import DarkmodeToggle from "../components/DarkmodeToggle";
import IconButton from "../components/IconButton";

function Edit() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickSetting = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div
        css={css({
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
        })}
      >
        <div
          css={css({
            zIndex: "9999",
            alignItems: "center",
          })}
        >
          <IconButton onClick={handleClickSetting}>settings</IconButton>
        </div>
        <div
          css={css({
            position: "fixed",
            right: 0,
            paddingRight: "1rem",
            zIndex: "9999",
          })}
        >
          <IconButton>download</IconButton>
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
          height: "80%",
          zIndex: "9998",
        })}
      >
        <Canvas></Canvas>
      </div>
      <Footer></Footer>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 css={css({ margin: 0 })}>Instagram Content Gen</h2>
        <DarkmodeToggle></DarkmodeToggle>
        <div>
          <Button
            color="black"
            width="100%"
            type="fill"
            display="flex"
            onClick={() => setIsOpen(false)}
          >
            모달 닫기
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default Edit;