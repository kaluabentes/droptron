import styled, { css } from "styled-components"

import rem from "@/utilities/styles/rem"

import { IconButton } from "../Header.styles"
import mediaQuery from "@/utilities/styles/mediaQuery"

export const OuterContainer = styled(IconButton)<{ count: number }>`
  display: flex;
  align-items: center;
  font-size: ${rem(28)};

  & svg {
    color: ${(props) => props.theme.colors.secondary};
  }

  &:hover {
    color: white;

    & svg {
      color: yellowgreen;
    }
  }

  ${(props) =>
    props.count > 0 &&
    css`
      color: white;
    `}

  ${mediaQuery(css`
    font-size: ${rem(32)};
  `)}
`

export const Container = styled.div`
  position: relative;
  padding-right: ${rem(9)};
  display: flex;
  align-items: center;
`

export const Counter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: 500;
  height: 18px;
  width: 18px;
  background: ${(props) => props.theme.colors.primary};
  font-size: ${rem(11)};
  position: absolute;
  right: 0px;
  top: 0px;
`
