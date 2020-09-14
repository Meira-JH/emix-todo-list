import styled from "styled-components";

export const Overlay = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 95%;
  height: 100%;
  max-height: 40px;
  background-color: transparent;
  pointer-events: none;
  transition: 0.3s ease-out;
`;

export const EditInput = styled.input`
  width: 80%;
  height: 100%;
  border: none;
  resize: none;
  text-decoration: none;
  z-index: 2;
`;
