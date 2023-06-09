"use client"

import Modal from "@/app/design-system/Modal/Modal"
import { Title } from "./OrderDetailModal.styles"
import Order from "@/models/Order"
import CartProduct from "@/app/design-system/CartProduct/CartProduct"
import {
  OrderDetailItem,
  OrderDetailItemLabel,
  OrderDetailItemValue,
  YourOrderItem,
  YourOrderItemLabel,
  YourOrderItemValue,
  YourOrderTitle,
} from "@/app/design-system/ProductReceipt/ProductReceipt.styles"
import formatCurrency from "@/utilities/number/formatCurrency"
import Button from "@/app/design-system/Button"
import Badge from "@/app/design-system/Badge"
import formatDate from "@/utilities/date/formatDate"
import { useRouter } from "next/navigation"
import {
  paymentStatusVariant,
  paymentsStatusText,
  statusText,
  statusVariant,
} from "@/app/common/constants"

interface OrderDetailModalProps {
  isOpen: boolean
  onClose: () => void
  order: Order
  total: number
}

export default function OrderDetailModal({
  isOpen,
  onClose,
  order,
  total,
}: OrderDetailModalProps) {
  const router = useRouter()

  return (
    <Modal size="md" isOpen={isOpen} onClose={onClose}>
      <Title>Detalhes do pedido</Title>
      <OrderDetailItem>
        <OrderDetailItemLabel>Data de transação</OrderDetailItemLabel>
        <OrderDetailItemValue>
          {formatDate(order?.createdAt!)}
        </OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Código de rastreio</OrderDetailItemLabel>
        <OrderDetailItemValue>
          {order?.trackingCode ? (
            <Badge size="lg" variant="gray">
              {order?.trackingCode}
            </Badge>
          ) : (
            "----"
          )}
        </OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Estado do pedido</OrderDetailItemLabel>
        <OrderDetailItemValue>
          <Badge variant={statusVariant[order?.status!]}>
            {statusText[order?.status!]}
          </Badge>
        </OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Método de pagamento</OrderDetailItemLabel>
        <OrderDetailItemValue>{order?.paymentMethod}</OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Estado do pagamento</OrderDetailItemLabel>
        <OrderDetailItemValue>
          <Badge variant={paymentStatusVariant[order?.paymentStatus!]}>
            {paymentsStatusText[order?.paymentStatus!]}
          </Badge>
        </OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>CEP</OrderDetailItemLabel>
        <OrderDetailItemValue>{order?.zipcode}</OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Estado</OrderDetailItemLabel>
        <OrderDetailItemValue>{order?.state}</OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Bairro</OrderDetailItemLabel>
        <OrderDetailItemValue>{order?.neighborhood}</OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Rua</OrderDetailItemLabel>
        <OrderDetailItemValue>{order?.street}</OrderDetailItemValue>
      </OrderDetailItem>
      <OrderDetailItem>
        <OrderDetailItemLabel>Número</OrderDetailItemLabel>
        <OrderDetailItemValue>{order?.number}</OrderDetailItemValue>
      </OrderDetailItem>
      {order?.complement && (
        <OrderDetailItem>
          <OrderDetailItemLabel>Complemento</OrderDetailItemLabel>
          <OrderDetailItemValue>{order?.complement}</OrderDetailItemValue>
        </OrderDetailItem>
      )}
      <YourOrderTitle>Seu Pedido</YourOrderTitle>
      {order?.products?.map((product) => (
        <CartProduct
          onClick={() => router.push(`/products/${product.slug}`)}
          key={product.id}
          product={product}
          removeXPadding
          hideQuantityInput
        />
      ))}
      <YourOrderItem>
        <YourOrderItemLabel>Total</YourOrderItemLabel>
        <YourOrderItemValue>
          {total && formatCurrency(total)}
        </YourOrderItemValue>
      </YourOrderItem>
    </Modal>
  )
}
