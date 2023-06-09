import styled from "styled-components";

export const InstructionContainer = styled.div`
  padding: 0 1rem;
`;

export const InstrctionMainWrapper = styled.div`
  margin-top: 10%;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  gap: 5%;
`;

export const InstructionMainSubWrapper = styled.div`
  width: 55%;
  padding: 1rem;
`;
export const InstructionMainImageWrapper = styled.div`
  width: 40%;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0px 5px 10px #00000029;
`;

export const InstructionImage = styled.img`
  width: ${(props) => (props.width ? props.width : "60%")};
`;

export const InstructionHeading = styled.p`
  font-size: 2.5rem;
  font-family: "Oswald";
  font-weight: 600;
`;
export const InstructionDescription = styled.p`
  color: grey;
  font-size: 1.25rem;
  font-family: "Nunito";
  font-weight: 400;
  line-height: 1.5;
  margin-top: 5%;
`;
