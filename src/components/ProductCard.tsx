import styled from "styled-components";
import { color, device } from "../constants";
import IconButton from "./IconButton";
import { CartPlus } from "@styled-icons/bootstrap/CartPlus";

import { IProduct } from "../data/productSlice";
import { MouseEventHandler } from "react";

interface IProductCardProps {
  product: IProduct;
  onAddToCart?: MouseEventHandler<HTMLButtonElement>;
}

const ProductCardStyled = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  .productImageContainer {
    display: flex;
    justify-content: center;
  }
  .productNameContainer {
    flex: 1;
    display: flex;
    align-items: flex-end;
    font-size: 0.7em;
    font-weight: 600;
  }
  .productPriceContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
  }
  .productPrice {
    font-size: 0.7em;
    font-weight: 600;
    display: flex;
    justify-content: center;
    color: ${color.primary};
  }
  .productQuantity {
    flex: 1;
    font-size: 0.5em;
    color: grey;
  }
  @media ${device.tablet} {
    width: 100%;
  }
`;

const ProductCard = ({ product, onAddToCart }: IProductCardProps) => {
  const { name, price, quantity, image } = product;

  return (
    <ProductCardStyled>
      <div className="productImageContainer">
        <img src={image} alt={name} />
      </div>
      <div className="productNameContainer">{name}</div>
      <div className="productPriceContainer">
        <span className="productPrice">${price}</span>&nbsp;
        <span className="productQuantity">/ {quantity}</span>
        <IconButton
          icon={<CartPlus />}
          tooltip="Add to cart"
          onClick={onAddToCart}
        />
      </div>
    </ProductCardStyled>
  );
};

export default ProductCard;
