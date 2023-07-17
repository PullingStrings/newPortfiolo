import React from "react";
import styled from "styled-components";

const PopUp = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

const Button = styled.button`
  color: white;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 15px;
  background: black;
  margin: 10px;
  border-radius: 20px;
`

const Iframe = styled.iframe`
  width: 100%;
  height: calc(100vh - 100px);
`

function ResumePopup(props) {
  return (
    <PopUp>
      <Button onClick={props.onClose}>Close</Button>
      <embed src={props.url}  type="application/pdf" />
    </PopUp>
  );
}

export default ResumePopup;
