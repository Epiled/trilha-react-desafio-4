import styled from "styled-components";
import { IButtonProps } from "./types";

export const ButtonContainer = styled.button<IButtonProps>`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }

  &:disabled {
    background: #d273ef;

    &:hover {
      background: #d273ef;
    }
  }
`;
