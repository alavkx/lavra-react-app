import React from "react";
import { css } from "styled-components/macro";

export const fullBleed = css`
  width: 100%;
  grid-column: 1 / -1;
`;

export const App = () => (
  <>
    <nav
      css={`
        width: 100%;
        height: 2rem;
        text-align: right;
        background-color: ;
      `}
    >
      lavra
    </nav>
    <main
      css={`
        display: grid;
        grid-template-columns:
          1fr
          min(65ch, 100%)
          1fr;
        & > * {
          grid-column: 2;
        }
      `}
    >
      <img css={fullBleed} src="https://random.dog/woof" alt="A doggie" />
      <h1>Howdy</h1>
    </main>
  </>
);
