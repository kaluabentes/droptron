import {
  FromPrice,
  PortionPrice,
  Price,
} from "@/app/design-system/ProductCard/ProductCard.styles"
import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div`
  padding: ${rem(16)};
  background-color: white;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.05);
  border-radius: ${rem(8)};
  min-width: 100%;

  position: sticky;
  right: 0;
  top: 0;

  & ${Price} {
    font-size: ${rem(28)};
  }

  & ${FromPrice} {
    font-size: ${rem(16)};
  }

  & ${PortionPrice} {
    margin-bottom: ${rem(12)};
  }

  ${mediaQuery(css`
    padding: ${rem(32)};
    min-width: ${rem(470)};
  `)}
`

export const EconomyPrice = styled.p`
  margin: 0;
  margin-bottom: ${rem(32)};
  font-size: ${rem(12)};
  background: ${(props) => props.theme.colors.greenvogue};
  display: inline-block;
  color: white;
  padding: ${rem(5)} ${rem(10)};
  border-radius: ${rem(5)};
  font-weight: 600;
`

export const Title = styled.h2`
  margin: 0;
  line-height: 1.3em;
  font-size: ${rem(25)};
  margin-bottom: ${rem(16)};
  font-weight: 600;

  ${mediaQuery(css`
    font-size: ${rem(39)};
  `)}
`

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: ${rem(16)} 0;
`

export const ShippingBox = styled.div`
  display: flex;
  align-items: center;
  padding: ${rem(16)};
  gap: ${rem(12)};
  border-radius: ${rem(8)};
  margin-bottom: ${rem(16)};
  border: 1px solid rgba(0, 0, 0, 0.1);

  & svg {
    font-size: ${rem(80)};
    height: ${rem(50)};
    width: ${rem(50)};
    color: ${(props) => props.theme.colors.secondary};
  }
`

export const ShippingGroup = styled.div``

export const ShippingTitle = styled.p`
  font-size: ${rem(16)};
  color: ${(props) => props.theme.colors.primary};
  margin: 0 0 ${rem(4)} 0;
  padding: 0;
  background: transparent;
  border: 0;
  outline: 0;
  font-weight: 700;
`

export const ShippingText = styled.p`
  font-size: ${rem(12)};
  color: rgba(0, 0, 0, 0.6);
  margin: 0;
  font-weight: 500;
`

export const PaymentTitle = styled.p`
  margin: 0 0 ${rem(16)} 0;
  font-size: ${rem(12)};
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
`

export const PaymentMethodBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AppMax = styled.img`
  height: ${rem(32)};
  margin: 0 0 ${rem(16)} 0;
`

export const PaymentMethods = styled.img`
  width: 100%;
  max-width: ${rem(350)};
`

export const BuyButtonContainer = styled.div`
  display: flex;
  gap: ${rem(16)};
`
