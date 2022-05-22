import styled from "styled-components";
import { color } from "../constants";

export interface ICartTotalProps {
    subTotal: number,
    discount: number,
    salesTax: number,
    total: number
}

const CartTotalStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${color.hover};
  border-radius: 5px;
  .subtotalContainer {
    display: flex;
    flex-wrap: wrap;
    font-size: 0.6em;
    padding: 20px;
    border-bottom: 1px dashed lightgrey;
    .subTotalLabel {
      flex: 1;
      flex-basis: 50%;
      display: flex;
      color: grey;s
    }
    .subTotalValue {
      flex: 1;
      flex-basis: 50%;
      display: flex;
      justify-content: flex-end;
      font-weight: 600;
    }
  }
  .totalContainer {
    display: flex;
    font-size: 0.8em;
    font-weight: 600;
    .totalLabel {
      flex: 1;
      display: flex;
    }
    .totalValue {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const CartTotal = ({subTotal, discount, salesTax, total}: ICartTotalProps) => {
  return (
    <CartTotalStyled>
      <div className="subtotalContainer">
        <div className="subTotalLabel">
            Subtotal
        </div>
        <div className="subTotalValue">
            ${subTotal.toFixed(2)}
        </div>
        <div className="subTotalLabel">
            Discount sales
        </div>
        <div className="subTotalValue">
            -${discount.toFixed(2)}
        </div>
        <div className="subTotalLabel">
            Total sales tax
        </div>
        <div className="subTotalValue">
            ${salesTax.toFixed(2)}
        </div>
      </div>
      <div className="totalContainer">
        <div className="totalLabel">
          Total
        </div>
        <div className="totalValue">
          ${(total > 0 ? total : 0).toFixed(2)}
        </div>
      </div>
    </CartTotalStyled>
  );
};

export default CartTotal;
