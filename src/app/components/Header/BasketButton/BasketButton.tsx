import { useMediaQuery } from "react-responsive"
import { BiBasket } from "react-icons/bi"

import { OuterContainer, Container, Counter } from "./BasketButton.styles"
import { IconButtonLabel } from "../Header.styles"
import theme from "@/app/styles/theme"
import useIsMounted from "@/hooks/useIsMounted"

interface BasketButtonProps {
  count: number
  onClick: () => void
}

export default function BasketButton({ count, onClick }: BasketButtonProps) {
  const { isMounted } = useIsMounted()
  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${theme.breakpoints.large})`,
  })

  return (
    <OuterContainer count={count} onClick={onClick}>
      <Container>
        <Counter>{count}</Counter>
        <BiBasket />
      </Container>
      {isLargeScreen && isMounted && (
        <IconButtonLabel>Carrinho</IconButtonLabel>
      )}
    </OuterContainer>
  )
}
