import styled from "styled-components"
export const Loading = styled.div`
  font-size: 24px;
  color: white;

  &::after {
    content: "Cargando...";
  }
`
