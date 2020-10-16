import React from "react";
import { css } from "styled-components";

export const fullBleed = css`
  width: 100%;
  grid-column: 1 / -1;
`;
interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => (
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
    {children}
  </main>
);
