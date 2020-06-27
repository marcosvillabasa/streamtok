import styled from "styled-components"

export const OutlinedButtonVariant2 = styled.button`
  z-index: 1;
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid var(--color-text-10);
  font-size: var(--size-7);
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--color-text-10);
  padding: 0.5em 1em;
  transition: all 0.2s, 0.3s border;

  span {
    position: relative;
    top: 0.1em;
  }

  &:hover {
    background-color: var(--color-primary);
    border: 2px solid transparent;
  }

  &:active {
    box-shadow: 0px 0px 0.8rem 2px #0006, inset 0px 0px 4rem 2px #0004;
    border: 2px solid #0004;
  }
`

export const OutlinedButton = styled.button`
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid var(--color-primary);
  color: white;
  padding: 0.6em 2em;
  transition: 0.2s all;
  display: flex;
  align-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 1em;

  & span {
    height: 20px;
  }

  &:active {
    box-shadow: 0px 0px 0.8rem 2px #0006, inset 0px 0px 4rem 2px #0004;
    border: 2px solid #0004;
  }

  &.btn-ingresar {
    padding: 0.6em 1em;
  }
`

export const RoundedPrimaryButton = styled.button`
  background: var(--color-primary);
  cursor: pointer;
  border-radius: 200px;
  border: none;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: white;
  padding: 1em 3.8em 0.8em 1.6em;
  transition: 0.2s all;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0.8rem 3.2rem -0.8rem var(--color-primary-semi);

  &:hover {
    .button-icon {
      transform: translate(8px, -50%);
    }
  }

  .button-icon {
    font-size: 2em;
    position: absolute;
    top: 50%;
    transform: translate(0px, -50%);
    right: 8%;
    will-change: transform;
    transition: 0.2s transform;
  }

  @media screen and (min-width: 600px) {
    font-size: 16px;
  }
`
