import styled from "styled-components";

export const DoneWrapper = styled.div`
  min-height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
  padding: 0 20px;
  max-height: 300px;
  overflow-y: auto;

  li {
    border-bottom: grey solid 1px;
  }
`;


export const Title = styled.span`
  color: #005454;
  font-size: 20px;
  font-weight: 900;
`
