import React from "react"
import styled from "styled-components"

const Cosos = styled.div`
  width: 50px;
  svg {
    color: var(--color-primary);

    circle:last-child {
      animation: spinners-react-circular-split 1s linear infinite;
    }
  }
  @keyframes spinners-react-circular-split {
    0% {
      stroke-dashoffset: 1;
      stroke-dasharray: 5, 170;
    }
    10% {
      stroke-dashoffset: 13;
      stroke-dasharray: 30, 145;
    }
    13% {
      stroke-dashoffset: -11;
      stroke-dasharray: 5, 145;
    }
    50% {
      stroke-dasharray: 5, 0, 5, 165;
      stroke-dashoffset: -82;
    }
    51% {
      stroke-dasharray: 2, 0, 2, 139;
      stroke-dashoffset: -85;
    }
    61% {
      stroke-dasharray: 15, 0, 15, 165;
      stroke-dashoffset: -72;
    }
    64% {
      stroke-dasharray: 5, 20, 5, 145;
      stroke-dashoffset: -72;
    }
  }
`
export function Spinner() {
  return (
    <Cosos>
      <svg fill="none" viewBox="0 0 66 66">
        <circle
          cx="33"
          cy="33"
          fill="none"
          r="28"
          stroke="#0006"
          strokeWidth="8"
        />
        <circle
          cx="33"
          cy="33"
          fill="none"
          r="28"
          stroke="currentColor"
          strokeDasharray="5, 170"
          strokeDashoffset="1"
          strokeLinecap="round"
          strokeWidth="8"
          transform="rotate(-90 33 33)"
        />
      </svg>
    </Cosos>
  )
}
