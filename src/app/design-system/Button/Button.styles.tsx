import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"
import { Spinner } from "@/app/design-system/PageSpinner/PageSpinner.styles"

export const ButtonSpinner = styled(Spinner)`
  height: ${rem(24)} !important;
  width: ${rem(24)} !important;
  border: 3px solid rgba(255, 255, 255, 0.2) !important;
  border-top: 3px solid rgba(255, 255, 255, 1) !important;
`

export const Container = styled.button<{
  $variant?: "default" | "primary" | "secondary"
  $size?: "lg" | "sm"
  $full?: boolean
}>`
  height: ${rem(40)};
  padding: 0 ${rem(16)};
  border-radius: ${rem(6)};
  background: transparent;
  outline: 0;
  border: 0;
  font-weight: 700;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 1.7px;
  font-size: ${rem(14)};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.$variant &&
    props.$variant === "default" &&
    css`
      border: 1px solid rgba(0, 0, 0, 0.2);
      background: white;

      &:hover {
        border: 1px solid rgba(0, 0, 0, 0.3);
      }

      & ${ButtonSpinner} {
        border-color: rgba(0, 0, 0, 0.2) !important;
        border-top-color: rgba(0, 0, 0, 0.8) !important;
      }
    `};

  ${(props) =>
    props.$variant &&
    props.$variant === "primary" &&
    css`
      background: ${props.theme.colors.primary};
      color: white;
      border-color: ${props.theme.colors.primary};

      &:hover {
        background: ${props.theme.colors.primaryVariant};
      }
    `};

  ${(props) =>
    props.$variant &&
    props.$variant === "secondary" &&
    css`
      background: ${props.theme.colors.secondary};
      color: white;
      border-color: ${props.theme.colors.secondary};

      &:visited {
        background: ${props.theme.colors.secondary};
      }

      &:hover {
        background: ${props.theme.colors.secondaryVariant};
      }

      &:active {
        background: ${props.theme.colors.secondaryVariantActive};
      }
    `};

  ${(props) =>
    props.$size &&
    props.$size === "lg" &&
    css`
      font-size: ${rem(14)};
      height: ${rem(48)};
      padding: 0 ${rem(24)};
    `};

  ${(props) =>
    props.$size &&
    props.$size === "sm" &&
    css`
      font-size: ${rem(12)};
      height: ${rem(32)};
      padding: 0 ${rem(12)};
    `};

  ${(props) =>
    props.$full &&
    css`
      width: 100%;
    `}
`
