import styled from "styled-components";

export const DivDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
`;

export const DisplayMsg = styled.h2`
    font-size: 35px;
    color: ${(props) => props.color ? "#30F015" : "#F00F00"};
`
