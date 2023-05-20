import { BiBasket } from "react-icons/bi"

import { Container, Counter } from "./BasketButton.styles"

interface BasketButtonProps {
  count: number
}

export default function BasketButton({ count }: BasketButtonProps) {
  return (
    <Container>
      <Counter>{count}</Counter>
      <BiBasket />
    </Container>
  )
}
