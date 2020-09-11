import styled from "styled-components";

export const ToDoWrapper = styled.div`
  min-height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
  padding: 45px;

  li {
    border-bottom: grey solid 1px;
  }
`;
