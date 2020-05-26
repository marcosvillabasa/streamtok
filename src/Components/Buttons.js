import styled from "styled-components"
import { getColorByProp } from "../Utils/StyleUtils"

export const OutlinedButtonVariant2 = styled.button`
  z-index: 1;
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid ${getColorByProp("color", "white")};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: ${getColorByProp("color", "white")};
  line-height: 32px;
  padding: 14px 60px;
  transition: all 0.2s, 0.3s border;

  &:hover {
    background-color: ${getColorByProp("bgcolor", "var(--color-primary)")};
    border: 2px solid transparent;
  }

  &:active {
    box-shadow: 0px 0px 8px 2px #0006, inset 0px 0px 40px 2px #0004;
    border: 2px solid #0004;
  }
`

export const OutlinedButton = styled.button`
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid var(--color-primary);
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: white;
  line-height: 32px;
  padding: 10px 40px;
  transition: 0.2s all;

  &:hover {
    background-color: ${getColorByProp("bgcolor", "var(--color-primary)")};
    border: 2px solid transparent;
  }

  &:active {
    box-shadow: 0px 0px 8px 2px #0006, inset 0px 0px 40px 2px #0004;
    border: 2px solid #0004;
  }
`

export const RoundedPrimaryButton = styled.button`
  margin-top: 64px;
  background: var(--color-primary);
  cursor: pointer;
  border-radius: 200px;
  border: none;
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: white;
  padding: 16px 48px;
  transition: 0.2s all;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 8px 32px -8px var(--color-primary-semi);

  &:hover {
    span {
      transform: translate(8px, 5px);
    }
  }
  span {
    margin-left: 8px;
    transform: translate(0px, 5px);
    will-change: transform;
    transition: 0.2s transform;
  }

  &::before {
    content: "";
    z-index: -1;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease;
    background-color: #ff0d57;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    background-color: red;
    box-shadow: 0px 8px 16px 0px var(--color-primary-semi);
  }

  &:active {
    box-shadow: 0px 0px 8px 2px #0008, inset 0px 0px 16px 6px #0008;
  }
`
