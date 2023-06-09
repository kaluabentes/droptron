import Product from "@/models/Product"
import {
  Container,
  ContentGroup,
  Description,
  DiscountFlagHero,
  FromPrice,
  Image,
  ImageContainer,
  Price,
  PriceContainer,
  Title,
} from "./ProductHero.styles"
import Button from "@/app/design-system/Button"
import formatCurrency from "@/utilities/number/formatCurrency"

interface ProductHeroProps {
  product: Product
  onDetailClick: () => void
}

export default function ProductHero({
  product,
  onDetailClick,
}: ProductHeroProps) {
  return (
    <Container>
      <ContentGroup>
        <Title>{product.heroTitle}</Title>
        <Description>{product.heroDescription}</Description>
        <PriceContainer>
          <DiscountFlagHero>{product.discount}</DiscountFlagHero>
          <Price>{formatCurrency(product.price!)}</Price>
          <FromPrice>{formatCurrency(product.fromPrice!)}</FromPrice>
        </PriceContainer>
        <Button variant="secondary" size="lg" onClick={onDetailClick}>
          Ver mais detalhes
        </Button>
      </ContentGroup>
      <ImageContainer>
        <Image src={product.heroImage} alt={product.name} />
      </ImageContainer>
    </Container>
  )
}
