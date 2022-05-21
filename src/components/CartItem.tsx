import styled from "styled-components";
import { color } from "../constants";
import { MouseEventHandler } from "react";
import IconButton from "./IconButton";
import { CartX } from "@styled-icons/bootstrap/CartX";

export interface ICartItemProps {
  cartItem: any;
  onRemoveItem?: MouseEventHandler<HTMLButtonElement>;
}

const CartItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px 10px 20px;
  .itemImageContainer {
    display: flex;
    align-items: center;
    > img {
      width: 70px;
      height: 55px;
      border-radius: 5px;
    }
  }
  .itemTextContainer {
    flex: 1;
    font-size: 0.6em;
    font-weight: 600;
    padding-left: 10px;
  }
  .itemPriceContainer {
    display: flex;
    flex-direction: row;
  }
  .itemPrice {
    display: flex;
    align-items: center;
    color: ${color.primary};
  }
  .itemQuantity {
    flex: 1;
    color: grey;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const CartItem = ({ cartItem, onRemoveItem }: ICartItemProps) => {
  const { name, price, image } = cartItem.product;

  return (
    <CartItemStyled>
      <div className="itemImageContainer">
        <img src={image} alt={name} />
      </div>
      <div className="itemTextContainer">
        {name}
        <div className="itemPriceContainer">
          <div className="itemPrice">${price}</div>
          <div className="itemQuantity">x{cartItem.quantity}</div>
          <IconButton
            icon={<CartX />}
            tooltip="Remove from cart"
            onClick={onRemoveItem}
          />
        </div>
      </div>
    </CartItemStyled>
  );
};

export default CartItem;
