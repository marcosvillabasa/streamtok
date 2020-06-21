import styled from "styled-components"

export const OutlinedButtonVariant2 = styled.button`
  z-index: 1;
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid var(--color-text-10);
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--color-text-10);
  line-height: 3.2rem;
  padding: 1.4rem 6rem;
  transition: all 0.2s, 0.3s border;

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
  font-size: var(--size-10);
  line-height: var(--size-10);

  & span {
    font-weight: 600;
    letter-spacing: 0.1em;
    height: var(--size-10);
    transform: translateY(2px);
  }

  &:active {
    box-shadow: 0px 0px 0.8rem 2px #0006, inset 0px 0px 4rem 2px #0004;
    border: 2px solid #0004;
  }

  &.btn-ingresar {
    @media screen and (min-width: 960px) {
      font-size: var(--size-7);
      line-height: var(--size-7);
      padding: 0.6em 1em;

      & span {
        font-weight: 600;
        letter-spacing: 0.1em;
        height: var(--size-7);
        transform: translateY(2px);
      }
    }
  }
`

export const RoundedPrimaryButton = styled.button`
  background: var(--color-primary);
  cursor: pointer;
  border-radius: 200px;
  border: none;
  font-size: var(--size-2);
  font-weight: 600;
  letter-spacing: 0.1em;
  color: white;
  padding: 1em 1em 0.8em 0em;
  transition: 0.2s all;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0.8rem 3.2rem -0.8rem var(--color-primary-semi);
  @media screen and (min-width: 600px) {
    padding: 1em 1em 0.9em 0em;
    font-size: var(--size-4);
    span {
      font-size: var(--size-12);
    }
  }
  &:hover {
    span {
      transform: translate(8px, -50%);
    }
  }
  span {
    position: absolute;
    top: 50%;
    transform: translate(0px, -50%);
    right: 8%;
    /* margin-left: 8px; */
    /* transform: translate(0px, 5px); */
    will-change: transform;
    transition: 0.2s transform;
  }
`
