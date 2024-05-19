/** @jsxImportSource @emotion/react */

import React, { useEffect, useRef, useState } from "react";
import { Button, Modal } from "deventds2";
import styled from '@emotion/styled'

import Canvas from "../components/Canvas";
import Footer from "../components/Footer";
import DarkmodeToggle from "../components/DarkmodeToggle";
import IconButton from "../components/IconButton";
import { useCanvasStore } from "../store";
import { Render } from "../utils/render";

const Center = styled.div({
  position: "fixed",
  left: "0",
  top: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "80%",
  zIndex: "9998",
})

const PaddingTop = styled.div({
  paddingTop: "1rem",
})

const Title2 = styled.h2({
  margin: 0
})

const FixedTopLeft = styled.div({
  position: "fixed",
  left: "1rem",
  zIndex: "9999",
  alignItems: "center",
})

const FixedTopRight = styled.div({
  position: "fixed",
  right: "1rem",
  zIndex: "9999",
})


function Edit() {
  return (
    <>
      <Nav />
      <Center>
        <Canvas />
      </Center>
      <Footer />
    </>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const assetsList = useCanvasStore((state: any) => state.assets);

  const handleClickSetting = () => {
    setIsOpen(true);
  };

  const handleClickExport = () => {
    let count = 0;
    const interval = setInterval(() => {
      if (count <= assetsList.length) {
        try {
          const page = assetsList[count];
          const render = new Render();
          render.canvasToImage(page);
          count += 1;
        } catch (error) { }
      } else {
        clearInterval(interval);
      }
    }, 1500);
  };

  return (
    <>
      <PaddingTop>

        <FixedTopLeft>
          <IconButton onClick={handleClickSetting}>settings</IconButton>
        </FixedTopLeft>

        <FixedTopRight>
          <IconButton onClick={handleClickExport}>download</IconButton>
        </FixedTopRight>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Title2>Instagram Content Gen</Title2>
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
      </PaddingTop>
    </>
  );
}

export default Edit;
