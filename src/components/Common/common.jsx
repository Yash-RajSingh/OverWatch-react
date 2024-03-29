import styled from "styled-components";
export const Button = styled.button`
  box-shadow: none;
  border: none;
  background: ${(props) =>
    props.disabled ? "var(--grey)" : "var(--dark-pink)"};
  color: var(--white);
  width: ${(props) => (props.size ? props.size : "100%")};
  padding: 0.375rem 0.75rem;
  text-align: center;
  position: relative;
  outline: none;
  margin-top: ${(props) => props.top};
  white-space: normal;
  text-decoration: none;
  border-radius: 0.188rem;
  cursor: pointer;
  font-family: "Nunito";
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 1px;
  font-size: 1.125rem;
`;
