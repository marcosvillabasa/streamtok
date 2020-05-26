import React from "react"
import styled from "styled-components"

const StyledScrollHelper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: calc(100vh - 8px);
  width: calc(var(--body-margin) + 100px);
  backdrop-filter: blur(25px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  label {
    writing-mode: vertical-rl;
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    margin-bottom: 40px;
  }

  div {
    border-radius: 100px;
    border: 1px solid white;
    width: 50px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      user-select: none;
      font-size: 40px;
    }
  }
`

export function ScrollHelper() {
  return (
    <StyledScrollHelper>
      <label>Scroll para ver más</label>
      <div>
        <span>↓</span>
      </div>
    </StyledScrollHelper>
  )
}
