import styled from "styled-components";

export const TaskInputWrapper = styled.div`
  min-height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 45px;
`;

export const Input = styled.input`
  padding: 12px;
  width: 80%;
  border: none;
  border-radius: 3px 0 0 3px;

  &&:placeholder-shown {
    font-style: italic;
    padding-left: 20px;
  }
`;

export const AddButton = styled.button`
  text-align: center;
  font-weight: 900;
  color: #ffff;
  padding: 11px;
  width: 20%;
  background-color: #36afd1;
  border-radius: 0 3px 3px 0;
  border: none;
  cursor: pointer;
`;
